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
import './../Styles/Subject.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Subject() {

const [id, setId] = useState("");
const [name, setName] = useState("");
const [subject, setSubject] = useState([]);

const formRef = useRef(null);

useEffect(() => {
  (async () => await Load())();
}, []);

async function Load() {  
  const subjects = await axios.get("https://localhost:7186/api/Subject");
  setSubject(subjects.data);
  console.log(subjects.data);
}

async function saveSubject(event) {
   
  event.preventDefault();
  try {
    const result = await axios.post("https://localhost:7186/api/Subject", {
      
     Name: name
     
    });
    console.log("post result", result);
    alert("Subject Saved Successfully");
        //setId("");
        setName("");

    Load();
  } catch (err) {
    alert(err);
  }
}

async function editSubject(subjects) {
  setName(subjects.name);
 
  setId(subjects.id);
}

async function updateSubject(event) {
  event.preventDefault();
  try {
      const response = await axios.patch("https://localhost:7186/api/Subject/"+ subject.find((u) => u.id === id).id || id,
      {
      id: id,
      Name: name,
      }
    );
    console.log("update", response);
    alert("Subject details Updated Successfully");
    setId("");
    setName("");
   
    Load();
  } catch (err) {
    alert(err);
  }
}

async function DeleteSubject(id) {
  const response = await axios.delete("https://localhost:7186/api/Subject/" + id);
  console.log("delete response", response);
   alert("Subject deleted Successfully");
   //setId("");
   setName("");
   Load();
  }

const handleReset = () => {
  setName("");
  if (formRef.current) {
    formRef.current.reset(); // Use the reset method on the form if it exists
  }
}

    return (
      <div >

     <div className='Subject-form'>

     <Navbar
                className="my-2"
                color="success"
                dark
            >
                <NavbarBrand href="/">
                Subject Details
                </NavbarBrand>
            </Navbar>
                <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="name">
                    Name
                    </Label>
                    <Input
                    id="name"
                    name="name"
                    placeholder="Subject Name"
                    type="text"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    required
                    pattern=".*\S+.*" // Ensures at least one non-whitespace character
                    title="Please enter a valid name"
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                </Col>
            </Row>


    <div class="button">
        <Button
            color="success"
            type="submit"
            value="Save"
            tag="input"
            onClick={saveSubject}
        >
        </Button>
        {' '}
        <Button
            color="primary"
            tag="input"
            type="submit"
            value="Update"
            onClick={updateSubject}
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

        <div className='Subject-table'>

        <Navbar
                className="my-2"
                color="success"
                dark
            >
                <NavbarBrand href="/">
                Existing Subjects
                </NavbarBrand>
            </Navbar>
        <Table striped>
  <thead>
    <tr>
      <th>
        Id
      </th>
      <th>
        Subject Name
      </th>
      <th>
        Edit
      </th>
      <th>
        Remove
      </th>
    </tr>
  </thead>
  {subject.map(function fn(subject) { return (
  <tbody>
    <tr>
      <th scope="row">
        {subject.id}
      </th>
      <td>
        {subject.name}
      </td>
      <td>
      <Button color="primary"
            tag="input" type="submit" value="Edit" size='sm'
            onClick={() => editSubject(subject)}/>
      </td>
      <td>
      <Button color="danger"
            tag="input" type="submit" value="Remove" size='sm'
            onClick={() => DeleteSubject(subject.id)}
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
  
  export default Subject;