import React, { useState, useEffect } from "react";
import "./YearlyOverview.css";
import LoginWithGoogle from "./LoginWithGoogle";
import { gapi } from "gapi-script";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CLIENT_ID = "632636220479-21mknsckuattniq6u5e8qvt1ktl0ptb4.apps.googleusercontent.com";

export default function YearlyOverview() {
  const [goals, setGoals] = useState(["", "", "", "", ""]);
  const [events, setEvents] = useState([]);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("monu_yearly_goals"));
    if (saved) setGoals(saved);
  }, []);

  const handleGoalChange = (i, value) => {
    const updated = [...goals];
    updated[i] = value;
    setGoals(updated);
    localStorage.setItem("monu_yearly_goals", JSON.stringify(updated));
  };

  const handleGoogleLogin = (token) => {
    console.log("🔑 Token received:", token);
    setAccessToken(token);
  };

  useEffect(() => {
    if (!accessToken) return;

    gapi.load("client", () => {
      gapi.client
        .init({
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
          clientId: CLIENT_ID,
          scope: "https://www.googleapis.com/auth/calendar.readonly",
        })
        .then(() => {
          gapi.auth.setToken({ access_token: accessToken });
          fetchEvents();
        });
    });
  }, [accessToken]);

  const fetchEvents = async () => {
    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: "primary",
        timeMin: new Date(new Date().getFullYear(), 0, 1).toISOString(),
        timeMax: new Date(new Date().getFullYear(), 11, 31).toISOString(),
        showDeleted: false,
        singleEvents: true,
        orderBy: "startTime",
      });

      const items = response.result.items.map((event) => ({
        title: event.summary || "(No Title)",
        start: new Date(event.start?.dateTime || event.start?.date),
        end: new Date(event.end?.dateTime || event.end?.date || event.start?.date),
        allDay: !event.start?.dateTime,
      }));

      console.log("📅 Synced Events:", items);
      setEvents(items);
    } catch (err) {
      console.error("❌ Error fetching calendar events:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#3A3A3A] px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-serif font-bold mb-2">MONU</h1>
      <p className="yearly-subtitle italic mb-12">Your calendar, your plan.</p>

      <div className="yearly-content-box bg-white shadow-md p-6 rounded-xl w-[350px] space-y-6">
        <div>
          {goals.map((goal, i) => (
            <div key={i} className="flex items-center mb-4">
              <input type="checkbox" className="w-4 h-4 mr-4" />
              <input
                type="text"
                value={goal}
                onChange={(e) => handleGoalChange(i, e.target.value)}
                placeholder={`Goal ${i + 1}`}
                className="goal-input border-b border-gray-400 bg-transparent w-full focus:outline-none text-sm font-serif placeholder-gray-400"
              />
            </div>
          ))}
        </div>

        <LoginWithGoogle onLoginSuccess={handleGoogleLogin} />

        {accessToken && (
          <p className="text-sm text-green-600 text-center mt-4">✅ Logged in and calendar access ready.</p>
        )}
      </div>

      {events.length > 0 && (
        <div className="w-full max-w-5xl mt-12 bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-serif mb-4">Your Google Calendar</h2>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
          />
        </div>
      )}
    </div>
  );
}
