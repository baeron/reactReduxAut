import React from 'react';
import SingupForm from './SingupForm';

class SingupPage extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SingupForm />  
        </div>
      </div>
    );
  }
}

export default SingupPage;