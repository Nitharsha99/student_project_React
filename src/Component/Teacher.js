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

const formRef = useRef(null);

useEffect(() => {
  (async () => await Load())();
}, []);

async function Load() {  
  const teachers = await axios.get("https://localhost:7186/api/Teacher");
  setTeacher(teachers.data);
  console.log(teachers.data);
}

async function saveTeacher(event) {
   
  event.preventDefault();
  try {
    const result = await axios.post("https://localhost:7186/api/Teacher", {
      
     firstName: fname,
     lastName: lname,
     contactNo: contact,
     emailAddress: email
     
    });
    console.log("post result", result);
    alert("Teacher Saved Successfully");
        //setId("");
        setFname("");
        setLname("");
        setContact("");
        setEmail("");

    Load();
  } catch (err) {
    alert(err);
  }
}

async function editTeacher(teachers) {
  setFname(teachers.firstName);
  setLname(teachers.lastName);
  setContact(teachers.contactNo);
  setEmail(teachers.emailAddress);
 
  setId(teachers.id);
}

async function updateTeacher(event) {
  event.preventDefault();
  try {
      const response = await axios.patch("https://localhost:7186/api/Teacher/"+ Teachers.find((u) => u.id === id).id || id,
      {
      id: id,
      firstName: fname,
      lastName: lname,
      contactNo: contact,
      emailAddress: email,
      }
    );
    console.log("update", response);
    alert("Student details Updated Successfully");
    setId("");
    setFname("");
    setLname("");
    setContact("");
    setEmail("");
   
    Load();
  } catch (err) {
    alert(err);
  }
}

async function DeleteTeacher(id) {
  const response = await axios.delete("https://localhost:7186/api/Teacher/" + id);
  console.log("delete response", response);
   alert("Teacher deleted Successfully");
   //setId("");
   setFname("");
   setLname("");
   setContact("");
   setEmail("");
   Load();
  }

const handleReset = () => {
  setFname("");
  setLname("");
  setContact("");
  setEmail("");
  if (formRef.current) {
    formRef.current.reset(); // Use the reset method on the form if it exists
  }
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
                    required
                    pattern=".*\S+.*" // Ensures at least one non-whitespace character
                    title="Please enter a valid first name"
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
                    required
                    pattern=".*\S+.*" // Ensures at least one non-whitespace character
                    title="Please enter a valid last name"
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
                    required
                    pattern=".*\S+.*" // Ensures at least one non-whitespace character
                    title="Please enter a valid email"
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
                    required
                    pattern=".*\S+.*" // Ensures at least one non-whitespace character
                    title="Please enter a valid contact"
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
            onClick={saveTeacher}
        >
        </Button>
        {' '}
        <Button
            color="primary"
            tag="input"
            type="submit"
            value="Update"
            onClick={updateTeacher}
        />
        {' '}
        <Button
            color="warning"
            tag="input"
            type="reset"
            value="Reset"
            onClick={handleReset}
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
            tag="input" type="submit" value="Edit" size='sm'
            onClick={() => editTeacher(teacher)}/>
      </td>
      <td>
      <Button color="danger"
            tag="input" type="submit" value="Remove" size='sm'
            onClick={() => DeleteTeacher(teacher.id)}
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