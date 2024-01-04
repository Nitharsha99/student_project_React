import React, { useState } from 'react';
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

function Teacher() {

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
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="classroom">
                    Classroom
                    </Label>
                    <Input
                    id="classroom"
                    name="classroom"
                    placeholder="Classroom"
                    type="select"
                    >
                              <option>
                                    1
                                </option>
                                <option>
                                    2
                                </option>
                                <option>
                                    3
                                </option>
                                <option>
                                    4
                                </option>
                                <option>
                                    5
                                </option>
                    </Input>
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
        first Name
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
        Otto
      </td>
      <td>
        @mdo
      </td>
      <td>
        @mdo
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
        Thornton
      </td>
      <td>
        @fat
      </td>
      <td>
        @mdo
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
        the Bird
      </td>
      <td>
        @twitter
      </td>
      <td>
        @mdo
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
  
  export default Teacher;