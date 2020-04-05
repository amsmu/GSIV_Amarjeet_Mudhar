import React, { Component } from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className='row'>
          <Col xs={12}>
            <Header content="GSIV_AMARJEET_MUDHAR"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
