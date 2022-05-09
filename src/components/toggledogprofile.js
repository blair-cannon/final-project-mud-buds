import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function Toggledogprofile() {
  return ( 
        <Dropdown id="dropdownButton" >
            <Dropdown.Toggle>
                Current Dog Profile
            </Dropdown.Toggle>
            <Dropdown.Menu >
                <Dropdown.Item href="#/action-1" active>
                    switch to Dog2 profile
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">switch to Dog3 profile</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
  )
}
