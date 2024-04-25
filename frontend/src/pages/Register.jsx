import React, { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { useRegisterMutation } from '../slices/authApiSlice';
import { setCredentials } from "../slices/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector(state => state.auth);
  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if(userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      toast.error("Password mismatch");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Register successfully");
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={handleFormSubmit}>
        <h1 className="text-center">Register</h1>
        <hr className="mb-4" />
        <Form.Group className="mb-3" controlId="formNameControl">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmailControl">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPasswordControl">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPasswordControl">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password Again"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Row>
          <Col className="text-right">
            <Button variant="primary" className="w-100 mt-3 bold" type="submit">
              { isLoading ? "Processing..." : "Register" }
            </Button>
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col>
            Already registered? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default Register;
