import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InitPage from './pages/InitPage';
import Login from './pages/Login';
import Join from './pages/Join';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <p className='fixed bottom-1.5 left-1/2 -translate-x-1/2 text-[8px] text-[#ababab]'>아이콘 제작자 Freepik from www.flaticon.com</p>
    </BrowserRouter>
  );
};

export default App;
