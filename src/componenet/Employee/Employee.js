import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Employee = () => {

    const [employees, setEmployees] = useState([]);
    const [displayEmployee, setDisplayEmployee] = useState([])

    // input box a change recive korar handler
    const handleSearch = (event) => {
        const inputText = event.target.value;
        const matchEmployees = employees.filter(employee => employee?.name.toLowerCase().includes(inputText));
        setDisplayEmployee(matchEmployees);
    }

    useEffect(() => {
        fetch('./employeeData.json')
            .then(res => res.json())
            .then(data => {
                setEmployees(data)
                setDisplayEmployee(data)
            })
    }, [])






    return (
        <div>
            <Container className='my-4'>
                <Form className="d-flex w-50">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={handleSearch}
                    />
                </Form>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Designation</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* Ekhane amra Map kore data anbo  */}
                        {
                            displayEmployee.map(employee => (
                                <tr>
                                    <td>{employee?.id}</td>
                                    <td>Image</td>
                                    <td>{employee?.name}</td>
                                    <td>{employee?.designation}</td>
                                    <td>
                                        <NavLink
                                            to={`/employee/${employee?.id}`}

                                        >
                                            Details
                                        </NavLink>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Employee;