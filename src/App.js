import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './pages/LoginForm/LoginForm';
import InitialUserInfo from './pages/InitialUserInfo/InitialUserInfo';
import FormConfirm from './pages/FormConfirm/FormConfirm';
import './App.scss';
import UserPreferencesForm from './pages/UserPreferencesForm/UserPreferencesForm';
import UserPreferencesBrand from './pages/UserPreferencesBrand/UserPreferencesBrand';
import ReferFriend from './pages/ReferFriend/ReferFriend';

export default function App() {
  return (
   <>
    <BrowserRouter className='browser-router'>
      <Routes>
        <Route path="/" element={<Navigate to ="/register" replace={true} />} />
        <Route path="/register" element={<LoginForm />} />
        <Route path="/register/details" element={<InitialUserInfo />} />
        <Route path="/register/personalization" element={<UserPreferencesForm/>} />
        <Route path="/register/brands" element={<UserPreferencesBrand/>} />
        <Route path="/register/refer" element={<ReferFriend/>} />
        <Route path="register/confirm" element={<FormConfirm />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}