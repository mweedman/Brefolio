import React from 'react';
import ContentContext from '../../Contexts/ContentContext';
import './Header.css'

class Header extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
    
    }

  }

  static contextType = ContentContext; 

  openAboutMe = () => {
    this.context.openModal();
  }

  render(){

    return(
      <div className="headerContainer">
        <h1>Breahna Berry</h1>
        <div className="navContainer">
          <ul>
            <li>
              <div onClick={this.openAboutMe}>
                About
              </div>
            </li>
            <li>
              Linked-In
            </li>
            <li>
              Behance
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;