import Student from "./Component/Student";
import Teacher from "./Component/Teacher";
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import Subject from "./Component/Subject";
import Classroom from "./Component/Classroom";

function App(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    
    <div class="App">
      
               <div>
      <Navbar color="success"
                dark>
        <NavbarBrand href="/" className="me-auto">
          Student
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/student">Students</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/teacher">
                Teachers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/subject">
                Subjects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/classroom">
                Classrooms
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="*" element={<Student />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
