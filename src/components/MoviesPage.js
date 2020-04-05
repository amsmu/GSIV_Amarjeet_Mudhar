import React from 'react';
import PropTypes from 'prop-types';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import autoBind from 'react-autobind'



class MoviesPage extends React.Component {

  constructor(props) {
    super(props)
    autoBind(this)
  }

  onSearchQueryChange(event) {
    this.props.actionSaveSearchQuery(event.target.value)
  }
  render() {
    return (
      <div>
        <Navbar bg='light' expand='lg'>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Form inline>
              <FormControl type='text' placeholder='Search' className='mr-sm-2' onChange={this.onSearchQueryChange}/>
              <Button variant='outline-success'>Search</Button>
            </Form>
            <Nav className='ml-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
        </Navbar>
      </div>
    );
  }
}

MoviesPage.propTypes = {
  state: PropTypes.object.isRequired,
  actionSaveSearchQuery: PropTypes.func.isRequired,
};

export default MoviesPage;
