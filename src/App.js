import Feed from './routes/feed';
import Notifications from './routes/notifications';
import Profile from './routes/profile';
import Login from './routes/login';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
return (
<div className="App">
<Router>
  <Navigation></Navigation>
  <Routes>
      <Route path="/feed" element={<Feed />}></Route>
      <Route path="/notifications" element={<Notifications />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/login" element={<Login />}></Route>
  </Routes>
</Router>
</div>
);
}
export default App;