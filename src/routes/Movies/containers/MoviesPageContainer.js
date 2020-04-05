import { connect } from 'react-redux';
import MoviesPage from '../components/MoviesPage';
import { actionSaveSearchQuery, actionSearchMoviesRequest } from '../../../modules/actions';

const mapDispatchToProps = {
  actionSaveSearchQuery,
  actionSearchMoviesRequest,
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
