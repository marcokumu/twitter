import './App.css';
import Sidebar from './components/Sidebar';
import Explore from './components/Explore';
import Notifications from './components/Notifications';
import Message from './components/Message';
import Bookmarks from './components/Bookmarks';
import List from './components/List';
import Profile from './components/Profile';
import More from './components/More';
import Home from './components/Home'; 
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/Bookmarks" element={<Bookmarks />} />
        <Route path="/List" element={<List />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/More" element={<More />} />
      </Routes>

     
    </div>
  );
}

export default App;
