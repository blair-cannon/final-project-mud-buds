import React, { useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import Convos from '../components/conversations';
import NewConvoModal from '../components/newConvoModal';

    
export default function SideBar(props) {
    const [modalShow, setModalShow] = useState(false);

        return (
            <Col className="messageCol" lg={ 3 }>
                <Row>
                    <h3 className="messageHeader">Messages</h3>
                    <Button className="new-convo-btn" onClick={() => setModalShow(true)}>+</Button>
                    <NewConvoModal show={modalShow} onHide={() => setModalShow(false)} />
                </Row>
                <Convos />
            </Col>
        );
    };
