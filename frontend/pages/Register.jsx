import React from 'react'
import FormContainer from '../components/FormContainer'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <FormContainer>
      <Form>
        <h1 className='text-center'>Register</h1>
        <hr className='mb-4' />
        <Form.Group className='mb-3' controlId='formNameControl'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter Name'  />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formEmailControl'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter Email'  />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formPasswordControl'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter Password'  />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formConfirmPasswordControl'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Enter Password Again'  />
        </Form.Group>
        <Row>
          <Col className='text-right' >
            <Button variant='primary' className='w-100 mt-3 bold'>Register</Button>
          </Col>
        </Row>
        <Row className='mt-4 text-center'>
        <Col>
            Already registered? <Link to='/login'>Login</Link>
          </Col> 
        </Row>
      </Form>
    </FormContainer>
  )
}

export default Register