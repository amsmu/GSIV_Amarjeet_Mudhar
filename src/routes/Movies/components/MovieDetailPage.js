import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Card, Form, FormControl, Button, Col, Row, CardColumns } from 'react-bootstrap';
import autoBind from 'react-autobind';
import './movies.css';

class MovieDetailPage extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.actionFetchMovieDetailsRequest({ id: parseInt(this.props.ownProps.match.params.id) });
  }

  render() {
    if (this.props.state.current_movie == null) return <div>Loading...</div>;
    return (
      <div style={{ 'text-align': 'center', 'padding-bottom': '3em' }}>
        <Navbar bg='light' expand='lg'>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>Movie Detail</Nav>
            <Nav className='ml-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
        </Navbar>
        <br />
        <div>
          <Row>
            <Col xs={12} sm={4} md={3}>
              <img
                style={{ 'max-width': '100%' }}
                src={'https://image.tmdb.org/t/p/w500' + this.props.state.current_movie.poster_path}
              ></img>
            </Col>
            <Col xs={12} sm={8} md={9} style={{ textAlign: 'left' }}>
              <h3>{this.props.state.current_movie.title}</h3>
              <p>
                {this.props.state.current_movie.release_date} | {this.props.state.current_movie.runtime} mins
              </p>
              {this.props.state.current_movie.overview}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

MovieDetailPage.propTypes = {
  state: PropTypes.object.isRequired,
  ownProps: PropTypes.object.isRequired,
  actionFetchMovieDetailsRequest: PropTypes.func.isRequired,
};

export default MovieDetailPage;
