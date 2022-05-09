import Feed from './routes/feed';
import Notifications from './routes/notifications';
import Home from './routes/home';
import Profile from './routes/profile';
import Login from './routes/login';
import Register from './routes/register';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

function App() {
return (
<GlobalProvider >
  <div className="App">
  <Router>
    <Navigation></Navigation>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/notifications" element={<Notifications />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
    </Routes>
  </Router>
  </div>
</GlobalProvider>
);
}
export default App;