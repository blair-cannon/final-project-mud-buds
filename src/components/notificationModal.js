import React from 'react';
import {Dropdown} from 'react-bootstrap';
import NotificationData from './notificationData';

export default function NotificationModal() {
  return (
    <div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                <NotificationData />
            </Dropdown.Menu>
    </Dropdown>
  </div>
  )
}
