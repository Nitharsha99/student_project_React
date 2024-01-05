import React, { useState, useEffect, Load, useRef } from 'react';
import axios from "axios";
import { Button,Form,FormGroup,Input,
    Label,Row,Col, Badge,  Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, Table } from 'reactstrap';
import './../Styles/Teacher.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Teacher() {

const [id, setId] = useState("");
const [fname, setFname] = useState("");
const [lname, setLname] = useState("");
const [email, setEmail] = useState("");
const [contact, setContact] = useState("");
const [Teachers, setTeacher] = useState([]);

useEffect(() => {
  (async () => await Load())();
}, []);

async function Load() {  
  const teachers = await axios.get("https://localhost:7186/api/Teacher");
  setTeacher(teachers.data);
  console.log(teachers.data);
}

    return (
      <div >

     <div className='Teacher-form'>

     <Navbar
                className="my-2"
                color="success"
                dark
            >
                <NavbarBrand href="/">
                Teacher Details
                </NavbarBrand>
            </Navbar>
                <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="fname">
                    First Name
                    </Label>
                    <Input
                    id="fname"
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    value={fname}
                    onChange={(event) => {
                      setFname(event.target.value);
                    }}
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="lname">
                    Last Name
                    </Label>
                    <Input
                    id="lname"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    value={lname}
                    onChange={(event) => {
                      setLname(event.target.value);
                    }}
                    />
                </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="email">
                    Email
                    </Label>
                    <Input
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="contact">
                    Contact No
                    </Label>
                    <Input
                    id="contact"
                    name="contact"
                    placeholder="Contact Number"
                    type="text"
                    value={contact}
                    onChange={(event) => {
                      setContact(event.target.value);
                    }}
                    />
                </FormGroup>
                </Col>
            </Row>

    <div class="button">
        <Button
            color="success"
            type="submit"
            value="Save"
            tag="input"
        >
        </Button>
        {' '}
        <Button
            color="primary"
            tag="input"
            type="submit"
            value="Update"
        />
        {' '}
        <Button
            color="warning"
            tag="input"
            type="reset"
            value="Reset"
        />
        {' '}
        </div>

     </div>

        <div className='Teacher-table'>

        <Navbar
                className="my-2"
                color="success"
                dark
            >
                <NavbarBrand href="/">
                Existing Teachers
                </NavbarBrand>
            </Navbar>
        <Table striped>
  <thead>
    <tr>
      <th>
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Email
      </th>
      <th>
        ContactNo
      </th>
      <th>
        Edit
      </th>
      <th>
        Remove
      </th>
    </tr>
  </thead>
  {Teachers.map(function fn(teacher) { return (
  <tbody>
    <tr key={teacher.id}>
      <td scope="row">
        {teacher.firstName}
      </td>
      <td>
        {teacher.lastName}
      </td>
      <td>
        {teacher.emailAddress}
      </td>
      <td>
        {teacher.contactNo}
      </td>
      <td>
      <Button color="primary"
            tag="input" type="submit" value="Edit" size='sm'/>
      </td>
      <td>
      <Button color="danger"
            tag="input" type="submit" value="Remove" size='sm'
            //onClick={() => DeleteStudent(student.id)}
            />
      </td>
    </tr>
  </tbody>
    );
  })}
</Table>

        </div>

      </div>
    );
  }
  
  export default Teacher;