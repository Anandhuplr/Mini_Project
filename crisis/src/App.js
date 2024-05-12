import { useEffect, useState,useContext,useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './mainpage';
import Sign from './signup';
import Login from './pages/signin';
import Tail from './components/tail/tail';
import Home from './pages/Home';
import Feedback from './pages/feedback';
import Profile from './pages/profile';
import Track from './pages/track';
import Grievance from './pages/grievance';
import Request from './pages/Request';
import Userpage from './counsellor/userpage';
import Laprof from './counsellor/la-profile';
import Requestlist from './counsellor/requestlist';
import Approvedlist from './counsellor/approvedreq';
import Rejected from './counsellor/rejected';
import Reqpage from './counsellor/reqpage';
import Pagegrev from './counsellor/pagegrev'
import Contact from './pages/contact';
import Mis from './components/mission/mis'
import Sur from './counsellor/surevy'
import { ToastContext } from "./contexts/ToastContext";
import {Toast} from 'primereact/toast';
import { UserContext } from "./contexts/UserContext";
const App = () => {
  
  const [visible, setVisible] = useState(false);
  const { tokenState, userState } = useContext(UserContext);
  const [token, setToken] = tokenState;
  const [userDetails, setUserDetails] = userState;
  const toast = useRef(null);
  const showToast = (severity,summary,detail) => {
    toast.current.show({severity: severity, summary: summary, detail: detail, life: 3000});
  }
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-source" >
    <Toast ref={toast} position="bottom-center" />
    <ToastContext.Provider value={{
      showToast
    }}>
      
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tail" element={<Tail />} />
        <Route path="/mis" element={<Mis />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/track" element={<Track />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/req" element={<Request />} />
        <Route path="/user" element={<Userpage />} />
        <Route path="/survey" element={<Sur/>} />
        <Route path="/laprof" element={<Laprof />} />
        <Route path="/requestlist" element={<Requestlist />} />
        <Route path="/approvedlist" element={<Approvedlist />} />
        <Route path="/rejected" element={<Rejected />} />
        <Route path="/pagegrev" element={<Pagegrev/>} />
        <Route path="/reqpage" element={<Reqpage />} />
      </Routes>
    </Router>
    </ToastContext.Provider>
    </div>
  );
};

export default App;
