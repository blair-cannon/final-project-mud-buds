//  routing that worked but trying something new

<HashRouter>
<Routes>
  <Route path="/" element={<App />}>
    <Route path="/" element={<Home />} />
  </Route>
  <Route path="/" element={<LoggedInApp />}>
    <Route path="/Feed" element={<Feed />} />
    <Route path="/Notifications" element={<Notifications />} />
    <Route path="/Profile" element={<Profile />} />
  </Route>
</Routes>
</HashRouter>