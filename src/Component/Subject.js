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
            color="success"
            tag="input"
            type="submit"
            value="Update"
        />
        {' '}
        <Button
            color="danger"
            tag="input"
            type="submit"
            value="Delete"
        />
        {' '}
        <Button
            color="primary"
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
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Edit
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
            tag="input" value="Edit" size='sm'/>
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
      <Button color="primary"
            tag="input" value="Edit" size='sm'/>
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        <Button color="primary"
            tag="input" value="Edit" size='sm'/>
      </td>
    </tr>
  </tbody>
</Table>

        </div>

      </div>
    );
  }
  
  export default Subject;