import { Col, Container, Form, Row } from "react-bootstrap";

const Notice = () => {
    return (
        <>
            <Container style={{marginTop: "20px"}}>
                <Row>
                    <Col>
                        <Form.Control type="text" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control type="text" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};


export default Notice;