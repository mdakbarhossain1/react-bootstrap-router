import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleEmployee = () => {
    const { id } = useParams();

    const [employeeDetails, setEmployeeDetails] = useState([]);
    const [singleEmployee, setSingleEmployee] = useState({});

    useEffect(() => {
        fetch('/employeeDetails.json')
            .then(res => res.json())
            .then(data => setEmployeeDetails(data.employee))
    }, []);
    useEffect(() => {
        const foundEmployee = employeeDetails.find(employee => employee?.login.id === id)
        setSingleEmployee(foundEmployee);
    }, [employeeDetails, id])



    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={singleEmployee?.picture?.thumbnail} />
                        </Card>
                    </Col>
                    <Col md={5}>
                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>{singleEmployee?.name}</Card.Title>
                                <Card.Text>
                                    <b>Email : {singleEmployee?.email}</b>
                                </Card.Text>

                                <Link to="/employee">
                                    <Button variant="primary">Go somewhere</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleEmployee;