import { useGoogleLogin } from "@react-oauth/google";
import { userLogin } from "../apis/auth";
import { get_profile } from "../apis/user";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { ToastContext } from "../contexts/ToastContext";
import { useNavigate, Redirect } from 'react-router-dom';
import Profile from '../pages/profile';
import google from "../images/google.png";

export default function Login({ setVisible }) {
  const { tokenState, userState } = useContext(UserContext);
  const [token, setToken] = tokenState;
  const [userDetails, setUserDetails] = userState;

  const { showToast } = useContext(ToastContext);
  const history = useNavigate();
  const responseGoogle = async (response) => {
    console.log('Google Auth Response:', response);

    // Assuming response.accessToken contains the access token from Google
    const accessToken = response.access_token;
    localStorage.setItem("Accesstoken",accessToken);

    try {
      const loginResponse = await userLogin(accessToken);
      if (loginResponse.status === 200) {
        const profileResponse = await get_profile(loginResponse.response.key);
        localStorage.setItem("key",loginResponse.response.key);
        console.log(profileResponse)

        if (profileResponse.status === 200) {
          localStorage.setItem("User_token", loginResponse.response.key);
          localStorage.setItem("Username", profileResponse.response.username);
          
          
          setToken(loginResponse.response.key);
          setUserDetails({ ...profileResponse.response });
          
          showToast('success', 'Success', 'Login Successful');
          if(profileResponse.response.address===null){
          history('/profile');
          }
          else{
            history('/home');
          }
          setVisible && setVisible();
        } else {
          showToast('error', 'Error', 'Profile Fetch Error');
          setVisible && setVisible();
        }
      } else {
        showToast('error', 'Error', 'Login Error');
        setVisible && setVisible();
      }
    } catch (error) {
      console.error('Error during Google login:', error);
      showToast('error', 'Error', 'Login Error');
      setVisible && setVisible();
    }
  };

  const login = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: (error) => {
      console.log("Login Failed:", error);
      showToast('error', 'Error', 'Login Error');
      setVisible && setVisible();
    },
  });

  return (
    <div className="input-box">
           
          <button className="button-Login" onClick={() => login()}>
            
            <img src={google} className="google"/>
            Sign in with Google
            
            </button>
          </div> 
  );
}
