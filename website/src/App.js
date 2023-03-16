import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Homepage from './pages/Homepage';
import Info from './pages/Info'
import Headerphoto from './components/Headerphoto';

function App() {
  return (
    <div>
    <HashRouter>
    <Routes>
    <Route index element={<Homepage />} />
    <Route path='/info' element={<Info />} />
    <Route path='/calendar' element={<Calendar />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/photos' element={<Headerphoto />} />
    <Route path='*' element={<Error />} />

    </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
