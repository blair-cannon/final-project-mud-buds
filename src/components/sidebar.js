import 'react-bootstrap-drawer/lib/style.css';
import React, { useState } from 'react';
import {
        Col,
        Collapse,
        Container,
        Row,
    } from 'react-bootstrap';
import { Drawer, } from 'react-bootstrap-drawer';
import DogDisplay from '../components/dogdisplay';

// function SidebarSetUp() {
//     const [open, setOpen] = useState(false);
//     const handleToggle = () => setOpen(!open);
//   return (
//     <div>
//             <Drawer>
//                 <Drawer.Toggle onClick={ handleToggle } />
//                 <Collapse in={ open }>
//                     <Drawer.Overflow>
//                         <Drawer.ToC>
//                             <Drawer.Header to="/">Application</Drawer.Header>
//                             <Drawer.Nav>
//                                 <Drawer.Item to="/settings">Settings</Drawer.Item>
//                             </Drawer.Nav>
//                         </Drawer.ToC>
//                     </Drawer.Overflow>
//                 </Collapse>
//             </Drawer>
//     </div>
//         )
// };

    
export default function SideBar(props) {
        return (
            <Container fluid>
                <Row className="flex-xl-nowrap">
                    <Col className="messageCol" lg={ 4 }>
                        <p>Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng pagpriprint at pagtytypeset. 
                            Ang Lorem Ipsum ang naging regular na modelo simula pa noong 1500s, noong may isang 
                            di kilalang manlilimbag and kumuha ng galley ng type at ginulo ang pagkaka-ayos nito
                            upang makagawa ng libro ng mga type specimen. Nalagpasan nito hindi lang limang siglo, 
                            kundi nalagpasan din nito ang paglaganap ng electronic typesetting at nanatiling parehas. 
                            Sumikat ito noong 1960s kasabay ng pag labas ng Letraset sheets na mayroong mga talata ng Lorem Ipsum, 
                            at kamakailan lang sa mga desktop publishing software tulad ng Aldus Pagemaker ginamit ang mga bersyon 
                            ng Lorem Ipsum. </p>

                             </Col>
                    <Col className="contentCol" lg={ 8 } ><DogDisplay />
                    <p>Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng pagpriprint at pagtytypeset. 
                            Ang Lorem Ipsum ang naging regular na modelo simula pa noong 1500s, noong may isang 
                            di kilalang manlilimbag and kumuha ng galley ng type at ginulo ang pagkaka-ayos nito
                            upang makagawa ng libro ng mga type specimen. Nalagpasan nito hindi lang limang siglo, 
                            kundi nalagpasan din nito ang paglaganap ng electronic typesetting at nanatiling parehas. 
                            Sumikat ito noong 1960s kasabay ng pag labas ng Letraset sheets na mayroong mga talata ng Lorem Ipsum, 
                            at kamakailan lang sa mga desktop publishing software tulad ng Aldus Pagemaker ginamit ang mga bersyon 
                            ng Lorem Ipsum. </p>

                    </Col>
                </Row>
            </Container>
        );
    };
