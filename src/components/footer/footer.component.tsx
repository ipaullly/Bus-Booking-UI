import React from 'react';

import './footer.styles.css';

const Footer: React.FC<{}> = () => {
  return(
    <div className="footer">
      <div className="contacts">Book-Bus &copy; 2020 </div>
      <div className="links">
        <span className="social-link">facebook</span>
        <span className="social-link">twitter</span>
        <span className="social-link">tiktok</span>
      </div>
    </div>
  );
}

export default Footer;