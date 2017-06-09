import { connect } from 'react-redux';

import { receivePhoto } from '../../actions/camera_actions';
import CamRoll from './camera_roll';

const mapDispatchToProps = (dispatch) => ({
  capturePhoto: photoUrl => dispatch(receivePhoto(photoUrl))
})

export default connect(
  null,
  mapDispatchToProps
)(CamRoll)

