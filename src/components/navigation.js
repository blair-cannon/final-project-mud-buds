import React from 'react';
import NavBarLoggedIn from './navbarloggedin';
import NavBarHome from './navbarhome';
import { useGlobalState } from "../context/GlobalState";

function NavBar(props) {
  // const isLoggedIn = props.isLoggedIn;
  const [ state, dispatch ] = useGlobalState();
  if (state.currentUser) {
    return <NavBarLoggedIn />;
  } else {
  return <NavBarHome />;
  }
}

function Navigation() {
  return (
    <div >
      <NavBar />
    </div>
  );
}

export default Navigation;