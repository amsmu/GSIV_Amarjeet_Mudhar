import { connect } from 'react-redux';
import MoviesPage from '../components/MoviesPage';
import { actionSaveSearchQuery } from '../actions';

const mapDispatchToProps = {
  actionSaveSearchQuery,
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
