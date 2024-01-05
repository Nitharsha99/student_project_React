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
import './../Styles/Classroom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Classroom() {

const [id, setId] = useState("");
const [name, setName] = useState("");
const [classroom, setClassroom] = useState([]);

const formRef = useRef(null);

useEffect(() => {
  (async () => await Load())();
}, []);

async function Load() {  
    const classes = await axios.get("https://localhost:7186/api/Classroom");
    setClassroom(classes.data);
    console.log("classroom",classes.data);
}

async function saveClassroom(event) {
   
    event.preventDefault();
    try {
      const result = await axios.post("https://localhost:7186/api/Classroom", {
        
       Name: name
       
      });
      console.log("post result", result);
      alert("Classroom Saved Successfully");
          //setId("");
          setName("");
  
      Load();
    } catch (err) {
      alert(err);
    }
  }

async function editClassroom(classroom) {
    setName(classroom.name);
   
    setId(classroom.id);
  }

const handleReset = () => {
  setName("");
  if (formRef.current) {
    formRef.current.reset(); // Use the reset method on the form if it exists
  }
}

async function saveClassroom(event) {
   
    event.preventDefault();
    try {
      const result = await axios.post("https://localhost:7186/api/Classroom", {
        
       Name: name
       
      });
      console.log("post result", result);
      alert("Classroom Saved Successfully");
          //setId("");
          setName("");
  
      Load();
    } catch (err) {
      alert(err);
    }
  }

  async function updateClassroom(event) {
    event.preventDefault();
    try {
        const response = await axios.patch("https://localhost:7186/api/Classroom/"+ classroom.find((u) => u.id === id).id || id,
        {
        id: id,
        Name: name,
        }
      );
      console.log("update", response);
      alert("Classroom details Updated Successfully");
      setId("");
      setName("");
     
      Load();
    } catch (err) {
      alert(err);
    }
  }

  async function DeleteClassroom(id) {
    const response = await axios.delete("https://localhost:7186/api/Classroom/" + id);
    console.log("delete response", response);
     alert("Classroom deleted Successfully");
     //setId("");
     setName("");
     Load();
    }

    return (
      <div >

     <div className='Classroom-form'>

     <Navbar
                className="my-2"
                color="success"
                dark
            >
                <NavbarBrand href="/">
                Classroom Details
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
                    placeholder="Classroom Name"
                    type="text"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    required
                    pattern=".*\S+.*" // Ensures at least one non-whitespace character
                    title="Please enter a valid Name"
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
            onClick={saveClassroom}
        >
        </Button>
        {' '}
        <Button
            color="primary"
            tag="input"
            type="submit"
            value="Update"
            onClick={updateClassroom}
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

        <div className='Classroom-table'>

        <Navbar
                className="my-2"
                color="success"
                dark
            >
                <NavbarBrand href="/">
                Existing Classrooms
                </NavbarBrand>
            </Navbar>
        <Table striped>
  <thead>
    <tr>
      <th>
        Id
      </th>
      <th>
        Classroom Name
      </th>
      <th>
        Edit
      </th>
      <th>
        Remove
      </th>
    </tr>
  </thead>
  {classroom.map(function fn(classroom) { return (
  <tbody>
    <tr>
      <th scope="row">
        {classroom.id}
      </th>
      <td>
        {classroom.name}
      </td>
      <td>
      <Button color="primary"
            tag="input" type="submit" value="Edit" size='sm'
            onClick={() => editClassroom(classroom)}/>
      </td>
      <td>
      <Button color="danger"
            tag="input" type="submit" value="Remove" size='sm'
            onClick={() => DeleteClassroom(classroom.id)}
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
  
  export default Classroom;