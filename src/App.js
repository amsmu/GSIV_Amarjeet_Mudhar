import React, { Component } from 'react';
import { Container, Col, Row, } from 'react-bootstrap';
import MoviesPage from './containers/MoviesPageContainer';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className='row'>
          <Col xs={12}>
            <MoviesPage />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
