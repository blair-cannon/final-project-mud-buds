import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Convos from '../components/conversations';

    
export default function SideBar(props) {
        return (
            <Col className="messageCol" lg={ 3 }>
                <Row><h3 className="messageHeader">Messages</h3></Row>
                <Convos />
            </Col>
        );
    };
