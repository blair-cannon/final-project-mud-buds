import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Convos from '../components/conversations';

    
export default function SideBar(props) {
        return (
            <Col className="messageCol" lg={ 3 }>
                <Row><h3 className="messageHeader">Messages</h3></Row>
                <Row > <Convos /> </Row>
                {/* <Row className="messageRow"> <Message /> </Row>
                <Row className="messageRow"> <Message /> </Row> */}
                {/* there needs to be the correct number of rows for each message  */}
            </Col>
        );
    };
