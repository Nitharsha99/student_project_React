import React, { useState } from 'react';
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
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mark
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
</Table>

        </div>

      </div>
    );
  }
  
  export default Subject;