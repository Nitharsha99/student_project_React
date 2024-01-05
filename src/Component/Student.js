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
import './../Styles/Student.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns';

function Student() {

const [id, setId] = useState("");
const [fname, setFname] = useState("");
const [lname, setLname] = useState("");
const [cperson, setCPerson] = useState("");
const [email, setEmail] = useState("");
const [cnumber, setCNumber] = useState("");
const [dob, setDOB] = useState("");
const [age, setAge] = useState("");
const [classroomName, setClassroomName] = useState("");
const [classroomId, setClassroomId] = useState("");
const [Students, setStudent] = useState([]);
const [Classrooms, setClassrooms] = useState([]);

const formRef = useRef(null);

useEffect(() => {
  (async () => await Load())();
}, []);

const calculateAge = () => {
  if (dob) {
    const dobDate = new Date(dob);
    const currentDate = new Date();

    // Calculate the difference in years
    const ageDifference = currentDate.getFullYear() - dobDate.getFullYear();

    // Check if the birthday has occurred this year
    if (
      currentDate.getMonth() < dobDate.getMonth() ||
      (currentDate.getMonth() === dobDate.getMonth() &&
        currentDate.getDate() < dobDate.getDate())
    ) {
      setAge(ageDifference - 1);
    } else {
      setAge(ageDifference);
    }
  } else {
    setAge('');
  }
};

async function Load() {  
  const students = await axios.get("https://localhost:7186/api/Student");
  setStudent(students.data);
  console.log(students.data);

  const classes = await axios.get("https://localhost:7186/api/Classroom");
  setClassrooms(classes.data);
  console.log("class",classes.data);
}

async function saveStudent(event) {
   
  event.preventDefault();
  try {
    console.log("select-test-map", classroomId);
    console.log("select-test", classroomName);
    const selectedClassroom = Classrooms.find((classroomOption) => classroomOption.name === classroomName);
    console.log("select", selectedClassroom);
    const result = await axios.post("https://localhost:7186/api/Student", {

     firstName: fname,
     lastName: lname,
     contactPerson: cperson,
     contactNo: cnumber,
     emailAddress: email,
     age: age,
     dob: dob,
     classroomId: classroomId
     
    });
    console.log("post result", result);
    alert("Student Saved Successfully");
        //setId("");
        setFname("");
        setLname("");
        setCPerson("");
        setCNumber("");
        setAge("");
        setEmail("");
        setDOB("");
        setClassroomName("");
        setClassroomId("");
     
   
    Load();
  } catch (err) {
    alert(err);
  }
}

async function editStudent(students) {
  const formattedDate = format(new Date(students.dob), 'yyyy-MM-dd');

  setFname(students.firstName);
  setLname(students.lastName);
  setCPerson(students.contactPerson);
  setCNumber(students.contactNo);
  setAge(students.age);
  setEmail(students.emailAddress);
  setDOB(formattedDate);
  setClassroomName(students.classroom.name);
  setClassroomId(students.classroom.id);
 

  setId(students.id);
}

async function DeleteStudent(id) {
  const response = await axios.delete("https://localhost:7186/api/Student/" + id);
  console.log("delete response", response);
   alert("Student deleted Successfully");
   //setId("");
   setFname("");
   setLname("");
   setCPerson("");
   setCNumber("");
   setAge("");
   setEmail("");
   setDOB("");
   setClassroomName("");
   setClassroomId("");
   Load();
  }

async function updateStudent(event) {
  event.preventDefault();
  try {
      const response = await axios.patch("https://localhost:7186/api/Student/"+ Students.find((u) => u.id === id).id || id,
      {
      id: id,
      firstName: fname,
      lastName: lname,
      contactPerson: cperson,
      contactNo: cnumber,
      emailAddress: email,
      age: age,
      dob: dob,
      classroomId: classroomId
      }
    );
    console.log("update", response);
    alert("Student details Updated Successfully");
    setId("");
    setFname("");
    setLname("");
    setCPerson("");
    setCNumber("");
    setAge("");
    setEmail("");
    setDOB("");
    setClassroomName("");
    setClassroomId("");
   
    Load();
  } catch (err) {
    alert(err);
  }
}

const handleReset = () => {
  setFname("");
  setLname("");
  setCPerson("");
  setCNumber("");
  setAge("");
  setEmail("");
  setDOB("");
  setClassroomName(""); // Reset the selected classroom state
  setClassroomId("");
  if (formRef.current) {
    formRef.current.reset(); // Use the reset method on the form if it exists
  }

};

    return (
      <div >

     <div className='Student-form'>

            <Navbar
                className="my-2"
                color="success"
                dark
            >
                <NavbarBrand href="/">
                Student Details
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
                    required
                    value={fname}
                    onChange={(event) => {
                      setFname(event.target.value);
                    }}
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
                    title="Please enter a valid email address"
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="contact">
                    Contact Person
                    </Label>
                    <Input
                    id="contact"
                    name="contact"
                    placeholder="Contact Person"
                    type="text"
                    value={cperson}
                    onChange={(event) => {
                      setCPerson(event.target.value);
                    }}
                    required
                    pattern=".*\S+.*" // Ensures at least one non-whitespace character
                    title="Please enter a valid contact person"
                    />
                </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="contactNo">
                    Contact No
                    </Label>
                    <Input
                    id="contactNo"
                    name="contactNo"
                    placeholder="Contact Number"
                    type="text"
                    value={cnumber}
                    onChange={(event) => {
                      setCNumber(event.target.value);
                    }}
                    required
                    pattern=".*\S+.*" // Ensures at least one non-whitespace character
                    title="Please enter a valid contact number"
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="dob">
                    DOB
                    </Label>
                    <Input
                    id="dob"
                    name="dob"
                    placeholder="Date of Birth"
                    type="Date"
                    value={dob}
                    onChange={(event) => {
                      setDOB(event.target.value);
                    }}
                    onBlur={calculateAge}
                    required
                    pattern=".*\S+.*" // Ensures at least one non-whitespace character
                    title="Please enter a valid date of birth"
                    />
                </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="age">
                    Age
                    </Label>
                    <Input
                    id="age"
                    name="age"
                    placeholder="Age"
                    type="number"
                    required
                    value={age}
                    onChange={(event) => {
                      setAge(event.target.value);
                    }}
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="classroom">
                    Classroom
                    </Label>
                    
                      { 
                      Classrooms.map((classroomOption) => (
                        //classroomId = (classroomOption.id);
                        <Input
                    id="classroom"
                    name="classroom"
                    placeholder="Classroom"
                    type="select"
                    
                    >
                          <option key={classroomOption.id} value={classroomOption.id}
                          onChange={(event) => {
                            console.log("Selected value:", event.target.value);
                            setClassroomId(event.target.value);
                          }}>
                            {classroomOption.name}
                          </option>
                          </Input>
                        ))}
                
                    
                </FormGroup>
                </Col>
            </Row>

    <div class="button">
        <Button
            color="success"
            type="submit"
            value="Save"
            tag="input"
            onClick={saveStudent}
        >
        </Button>
        {' '}
        <Button
            color="primary"
            tag="input"
            type="submit"
            value="Update"
            onClick={updateStudent}
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

        <div className='Student-table'>

        <Navbar
                className="my-2"
                color="success"
                dark
            >
                <NavbarBrand href="/">
                Existing Students
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
        contactNo
      </th>
      <th>
        Classroom
      </th>
      <th>
        Edit
      </th>
      <th>
        Remove
      </th>
    </tr>
  </thead>
  {Students.map(function fn(student) { return (
    <tbody>
    <tr key={student.id}>
      <td scope="row">
        {student.firstName}
      </td>
      <td>
        {student.lastName}
      </td>
      <td>
        {student.emailAddress}
      </td>
      <td>
        {student.contactNo}
      </td>
      <td>
        {student.classroom.name}
      </td>
      <td>
      <Button color="primary"
            tag="input" type="submit" value="Edit" size='sm'
            onClick={() => editStudent(student)}/>
      </td>
      <td>
      <Button color="danger"
            tag="input" type="submit" value="Remove" size='sm'
            onClick={() => DeleteStudent(student.id)}/>
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
  
  export default Student;