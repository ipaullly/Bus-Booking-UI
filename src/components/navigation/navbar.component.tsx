import React from 'react';

import './navbar.styles.less';
import { Link } from 'react-router-dom';

interface NavState{
  currentUser?: string;
}

class NavBar extends React.Component<{}, NavState>{
  constructor(props: {}){
    super(props);
    this.state = {
      currentUser: ''
    }
  }

  render() {
    return(
      <div className="navbar">
        <div className="logo">Book-Bus</div>
        <div className="menu">
          <span className="menu-link">About</span>
          <Link className="menu-link" to="/">Home</Link>
          <span className="menu-link">Contact Us</span>
        </div>
      </div>
    );
  }
}

export default NavBar;