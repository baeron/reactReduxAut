import React from 'react';
import SingupForm from './SingupForm';
import { connect } from 'react-redux';
import { userSingupRequest } from '../../actions/singupActions';

class SingupPage extends React.Component {
  render() {
    const { userSingupRequest } = this.props;
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SingupForm userSingupRequest={userSingupRequest}/>  
        </div>
      </div>
    );
  }
}

SingupPage.propTypes = {
  userSingupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSingupRequest })(SingupPage);