import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import MoviesPage from './routes/Movies/containers/MoviesPageContainer';
import MovieDetailPage from './routes/Movies/containers/MovieDetailPageContainer';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className='row'>
          <Col xs={12}>
            <Route exact path='/' component={MoviesPage} />
            <Route exact path='/:id' component={MovieDetailPage} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
