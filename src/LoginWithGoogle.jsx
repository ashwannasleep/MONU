import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './LoginWithGoogle.css';

const clientId = '632636220479-21mknsckuattniq6u5e8qvt1ktl0ptb4.apps.googleusercontent.com'; 

export default function LoginWithGoogle() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="login-container">
    
        <div className="login-box">
          <GoogleLogin
          locale='en'
            onSuccess={(res) => {
              console.log('✅ Google Login Success', res);
              alert('Login Success!');
            }}
            onError={() => {
              console.log('❌ Google Login Failed');
              alert('Login Failed.');
            }}
          />
          <p className="sync-link">
            🔄 Sync your Google Calendar to get started.
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
