import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const customerRegister = (e) => {
    e.preventDefault(); //stops page refresh when submitting

    const userData = { username, email, password };

    axios
      .post("http://localhost:3000/api/v1/user/register", userData)
      .then((result) => console.log(result))
      .catch();
  };
  return (
    <>
      <Container>
        <Row className="justify-content-md-center ">
          <Form>
            <Form.Group className="mb-3" controlId="formUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={customerRegister}>
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default Register;
