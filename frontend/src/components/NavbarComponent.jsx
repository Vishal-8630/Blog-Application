import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useLogoutMutation } from "../slices/authApiSlice";
import { logout } from "../slices/authSlice";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector(state => state.auth);  
  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      toast.success("Logout successfully");
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>V Blog</Navbar.Brand>
        </LinkContainer>
        <Nav className="ms-auto">
          {userInfo ? (
            <>
              <LinkContainer to='/blogs'>
                <Nav.Link>Blogs</Nav.Link>
              </LinkContainer>
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </>

          ) : (
            <>
              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
