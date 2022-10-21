import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";

export function App() {
  // build a style for margin and/or padding:
  // mb-4 is a size 4 margin on the bottom
  // px-2 is a size 2 padding on right and left

  return (
    <Container>
      <h1>Hello, world!</h1>

      <Stack className="mb-4 gap-3">
        <div className="border bg-warning">First item</div>
        <div className="border bg-success">Second item</div>
        <div className="border bg-light">Third item</div>
      </Stack>

      <Stack className="mb-4 gap-3" direction="horizontal">
        <div className="border bg-warning">First item</div>
        <div className="border bg-success">Second item</div>
        <div className="border bg-light">Third item</div>
      </Stack>

      <Alert>This is an alert.</Alert>

      <Container>
        <Row>
          <Col className="border bg-danger p-5">1 of 2</Col>
          <Col className="border bg-danger p-5">2 of 2</Col>
        </Row>
        <Row>
          <Col className="border bg-danger p-5">1 of 3</Col>
          <Col className="border bg-danger p-5">2 of 3</Col>
          <Col className="border bg-danger p-5">3 of 3</Col>
        </Row>
      </Container>

      <Container>
          <Row className="mb-4">
            <Col className="bg-primary px-2">column</Col>
            <Col className="bg-primary px-2">column</Col>
            <Col className="bg-primary px-2">column</Col>
            <Col className="bg-primary px-2">column</Col>
            <Col className="bg-primary px-2">column</Col>
          </Row>

      </Container>

      <Container>
          <Dropdown className="mb-4">
            <Dropdown.Toggle>Dropdown Button</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>item 1</Dropdown.Item>
              <Dropdown.Item>item 2</Dropdown.Item>
              <Dropdown.Item>item 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Container>

    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>First thing</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Second thing</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  );
}
