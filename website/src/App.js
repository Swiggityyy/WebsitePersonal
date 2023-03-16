import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Calendar from './pages/calendar';
import Contact from './pages/contact';
import Error from './pages/error';
import Homepage from './pages/homepage';
import Info from './pages/info'
import Headerphoto from './components/headerphoto';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route index element={<Homepage />} />
    <Route path='/info' element={<Info />} />
    <Route path='/calendar' element={<Calendar />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/photos' element={<Headerphoto />} />
    <Route path='*' element={<Error />} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
