import React from 'react';
import NavBarLoggedIn from './navbarloggedin';
import NavBarHome from './navbarhome';

function NavBar(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <NavBarLoggedIn />;
  } else {
  return <NavBarHome />;
  }
}

function Navigation() {
  return (
    <div className="App">
      <NavBar isLoggedIn={false} />
    </div>
  );
}

export default Navigation;