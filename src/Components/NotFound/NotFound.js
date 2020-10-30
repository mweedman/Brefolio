import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {

  render(){
    return(
      <div>
        <p>
          Page Not Found.
        </p>
        <button>
            <Link to='/'>Return Home</Link>
        </button>
      </div>
    )
  }
}

export default NotFound;