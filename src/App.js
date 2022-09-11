import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "./firebase-config"
import GoogleLogin from 'react-google-button'
import FacebookLogin from 'react-facebook-login';

function App() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      //Handle Success.
      console.log(result)
    }).catch((error) => {
      // Handle Errors here.
      console.log(error)
    });
  }

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      //Handle Success.
      console.log(result)
    }).catch((error) => {
      // Handle Errors here.
      console.log(error)
    });
  }
  return (
    <div className="App">
      <div className="google">
        <GoogleLogin
          onClick={signInWithGoogle}
        />
    </div>
      <div className="fb">
        <FacebookLogin
          onClick={signInWithFacebook}
          cssClass="btnFacebook"
        />
      </div>
    </div>
  );
}

export default App;
