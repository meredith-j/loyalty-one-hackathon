import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Form from './pages/Form/Form';
import './App.scss';

export default function App() {
  return (
   <>
    <BrowserRouter className='browser-router'>
      <Routes>
        <Route path="/" element={<Navigate to ="/register" replace={true} />} />
        <Route path="/register" element={<Form />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}