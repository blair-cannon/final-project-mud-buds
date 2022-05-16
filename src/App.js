import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/loadingScreen";
import Feed from "./routes/feed";
import Notifications from "./routes/notifications";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import Register from "./routes/register";
import Navigation from "./components/navigation";
import Connections from "./routes/myconnections";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import CreateDogPrompt from "./components/createDogPrompt";

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);

  return (
    <>
      {loading === false ? (
          <GlobalProvider>
              <Router>
                <Navigation></Navigation>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/feed" element={<Feed />}></Route>
                  <Route path="/notifications" element={<Notifications />} ></Route>
                  <Route path="/profile" element={<Profile />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/register" element={<Register />}></Route>
                  <Route path="/connections" element={<Connections />}></Route>
                  <Route path="/createDogPrompt" element={<CreateDogPrompt />}></Route>
                </Routes>
              </Router>
          </GlobalProvider>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
export default App;
