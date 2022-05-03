import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function Toggledogprofile() {
  return (
    <div>  
        <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                Current Dog Profile
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1" active>
                    switch to Dog2 profile
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">switch to Dog3 profile</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}
