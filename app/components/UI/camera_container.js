import { connect } from 'react-redux';

import { receivePhoto } from '../../actions/camera_actions';
import Cam from './camera';

const mapDispatchToProps = (dispatch) => ({
  capturePhoto: photoUrl => dispatch(receivePhoto(photoUrl))
})

export default connect(
  null,
  mapDispatchToProps
)(Cam)

