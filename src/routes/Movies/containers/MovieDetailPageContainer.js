import { connect } from 'react-redux';
import MovieDetailPage from '../components/MovieDetailPage';
import { actionFetchMovieDetailsRequest } from '../../../modules/actions';

const mapDispatchToProps = {
  actionFetchMovieDetailsRequest,
};

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);
