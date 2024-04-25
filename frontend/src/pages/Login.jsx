import React, { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useLoginMutation } from "../slices/authApiSlice";
import { setCredentials } from "../slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector(state => state.auth);
  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    if(userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Login successfully");
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleFormSubmit}>
        <h1 className="text-center">Login</h1>
        <hr className="mb-4" />
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
        <Row>
          <Col className="text-right">
            <Button variant="primary" className="w-100 mt-3 bold" type="submit">
            { isLoading ? "Processing..." : "Login" }
            </Button>
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col>
            Not Registered? <Link to="/register">Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default Login;
