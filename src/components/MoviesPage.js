import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Card, Form, FormControl, Button, Col, Row, CardColumns } from 'react-bootstrap';
import autoBind from 'react-autobind';
import './movies.css';

class MoviesPage extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      typed_query: '',
    };
  }

  componentDidMount() {
    this.searchMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.typed_query != this.state.typed_query && this.state.typed_query == '') {
      this.searchMovies();
    }
  }

  searchMovies() {
    this.props.actionSearchMoviesRequest({ is_new: true, query: this.state.typed_query });
  }

  onSearchQueryChange(event) {
    this.setState({ typed_query: event.target.value });
  }

  render() {
    return (
      <div style={{ 'text-align': 'center', 'padding-bottom': '3em' }}>
        <Navbar bg='light' expand='lg'>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Form inline>
              <FormControl type='text' placeholder='Search' className='mr-sm-2' onChange={this.onSearchQueryChange} />
              <Button variant='outline-success' onClick={() => this.searchMovies()}>
                Search
              </Button>
            </Form>
            <Nav className='ml-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
        </Navbar>
        <Row>
          {this.props.state.movies.map((movie, index) => (
            <Col xs={12} md={4} lg={3}>
              <Card style={{ margin: '2em 0em', 'text-align': 'left' }} raised>
                <Card.Img variant='top' src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text className='movie-card-overview'>{movie.overview}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {this.props.state.show_more ? (
          <Button
            onClick={() =>
              this.props.actionSearchMoviesRequest({
                is_new: false,
                query: this.state.typed_query,
                page: this.props.state.current_page + 1,
              })
            }
          >
            Show More
          </Button>
        ) : (
          <p> No more movies available</p>
        )}
      </div>
    );
  }
}

MoviesPage.propTypes = {
  state: PropTypes.object.isRequired,
  actionSaveSearchQuery: PropTypes.func.isRequired,
  actionSearchMoviesRequest: PropTypes.func.isRequired,
};

export default MoviesPage;
