import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Calendar from './pages/Calendar';
import {Contact, CommentBox} from './pages/Contact';
import Error from './pages/Error';
import Homepage from './pages/Homepage';
import RSVP from './pages/RSVP'
import Headerphoto from './components/Headerphoto';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route index element={<Homepage />} />
    <Route path='/rsvp' element={<RSVP />} />
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
