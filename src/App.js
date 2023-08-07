import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BeforeLoginHome from './Pages/BeforeLoginHome'
import Login from './Pages/Login'
import ChooseTitle from './Pages/ChooseTitle'
import PhoneNumber from './Pages/PhoneNumber'
import Register from './Pages/Register'
import RegisterImage from './Pages/RegisterImage'
import LoginOTP from './Pages/LoginOTP'
import Home from './Pages/Home'
import Test from './Pages/Test'
import CreatePost from './Components/CreatePost'
import ChatPage from './Pages/ChatPage'
import Meeting from './Pages/Meeting'
import Profile from './Pages/Profile'
import OldUserLogin from './Pages/OldUserLogin'
import OldUserLoginTitle from './Pages/OldUserLoginTitle'
import OldUserRegister from './Pages/OldUserLoginRegister'
import OldUserOTP from './Pages/OldUserOTP'
import OldUserSuccessfully from './Pages/OldUserSuccessfully'
import OldUserPass from './Pages/OldUserPass'
import HealthRecord from './Pages/HealthRecord'
import HealthRecord1 from './Pages/HealthRecord1'
import HealthCard from './Pages/HealthCard'
import HealthCard1 from './Pages/HealthCard1'
import Appointment from './Pages/Appointment'
import Appointment1 from './Pages/Appointment1'
import Medicine from './Pages/Medicine'
import Password from './Pages/Password'
import MultiPIN from './Pages/MultiPIN'
import LoginForm from './Pages/LoginForm'
import AddProfile from './Pages/AddProfile'
import LoginChooseTitle from './Pages/LoginchoseTitle'
import LoginDetails from './Pages/LoginDetails'
import LoginImage from './Pages/loginimage'
import LoginProfile from './Pages/Loginprofile'
import ShowProfile from './Pages/ShowProfile'
import ForgotPassword from './Pages/ForgotPassword'
import OtpVerify from './Pages/OtpVerify'
import ResetPassword from './Pages/ResetPassword'
import ResetPasswordSuccessfully from './Pages/ResetPasswordSuccessfully'
import SubscriptionModels from './Pages/Subscription_Models'
import Subscription_Payment_Method from './Pages/Subscription_Payment_Method'
import Medicine1 from './Pages/Medicine1'
import MeetingActive from './Pages/MeetingActive'
import HelpAFriend from './Pages/HelpAFriend'
import HelpFeedback from './Pages/HelpFeedback'
import Settings from './Pages/Settings'
import ProfileLock from './Pages/ProfileLock'
import SetPin from './Components/SetPin'
import SetPassword from './Components/SetPassword'
import BlockedAccounts from './Pages/BlockedAccounts'
import Notification from './Pages/Notification'
import HealthCard2 from './Pages/HealthCard2'

const App = () => {
  return (
    <> 
      <BrowserRouter>
      <Routes>
        
        <Route exact path = '/' element = {<BeforeLoginHome /> }/>
        <Route exact path = 'login' element={<Login />} />
        <Route exact path = 'choosetitle' element={<ChooseTitle />} />
        <Route exact path = 'phonenumber' element={<PhoneNumber />} />
        <Route exact path = 'register' element={<Register />} />
        <Route exact path = 'registerimage' element={<RegisterImage  />} />
        <Route exact path = 'loginotp'  element={<LoginOTP   />} />
        <Route exact path = 'password' element={<Password />} />
        <Route exact path = 'home' element={<Home />} />
        <Route exact path = 'test' element={<Test />} />
        <Route exact path = 'createpost' element={<CreatePost />} />
        <Route exact path = 'chatpage' element={<ChatPage />} />
        <Route exact path = 'meeting' element={<Meeting />} />
        <Route exact path = 'profile' element={<Profile />} />
        <Route exact path = 'LoginForm' element={<LoginForm />} />
        <Route exact path = 'OldUserLogin' element={<OldUserLogin />} />
        <Route exact path = 'OldUserLoginTitle' element={<OldUserLoginTitle />} />
        <Route exact path = 'OldUserRegister' element={<OldUserRegister />} />
        <Route exact path = 'OldUserOTP' element={<OldUserOTP />} />
        <Route exact path = 'OldUserSuccessfully' element={<OldUserSuccessfully />} />
        <Route exact path = 'OldUserPass' element={<OldUserPass />} />
        <Route exact path = 'HealthRecord' element={<HealthRecord />} />
        <Route exact path = 'HealthRecord1' element={<HealthRecord1 />} />
        <Route exact path = 'HealthCard' element={<HealthCard />} />
        <Route exact path = 'HealthCard1' element={<HealthCard1 />} />
        <Route exact path = 'Appointment' element={<Appointment />} />
        <Route exact path = 'Appointment1' element={<Appointment1 />} />
        <Route exact path = 'Medicine' element={ <Medicine />} />
        <Route exact path = 'Medicine1' element={<Medicine1 />} />
        <Route exact path = 'MultiPIN' element={<MultiPIN />} />
        <Route exact path = 'ShowProfile' element={<ShowProfile />} />
        <Route exact path = 'ForgotPassword' element={<ForgotPassword />} />
        <Route exact path = 'OtpVerify' element={<OtpVerify />} />
        <Route exact path = 'ResetPassword' element={<ResetPassword />} />
        <Route exact path = 'ResetPasswordSuccessfully' element={<ResetPasswordSuccessfully />} />
        <Route exact path="Subscription_Models" element={<SubscriptionModels/>} />
        <Route exact path="Subscription_Payment_Method" element={<Subscription_Payment_Method />}></Route>
        <Route exact path= 'MeetingActive' element={<MeetingActive/>}></Route>
        <Route exact path= 'HelpAFriend' element={<HelpAFriend/>}></Route>
        <Route exact path= 'HelpFeedback' element={<HelpFeedback/>}></Route>
        <Route exact path='Settings' element={<Settings/>}></Route>
        <Route exact path='ProfileLock' element={<ProfileLock/>}></Route>
      
        <Route exact path = 'AddProfile' element={<AddProfile />} />
        <Route exact path = 'loginchoosetitle' element={<LoginChooseTitle />} />
        <Route exact path = 'logindetails' element={<LoginDetails />} />
        <Route exact path = 'loginimage' element={<LoginImage />} />
        <Route exact path = 'loginprofile' element={<LoginProfile />} />
        <Route exact path= 'SetPin' element={<SetPin/>}/>
        <Route exact path= 'SetPassword' element={<SetPassword/>}/>
        <Route exact path= 'BlockedAccounts' element={<BlockedAccounts/>}/>
        <Route exact path= 'Notification' element={<Notification/>}/>
        <Route exact path= 'HealthCard2' element={<HealthCard2/>}/>
        <Route exact path= 'MeetingActive' element={<MeetingActive/>}/>

        
       
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App