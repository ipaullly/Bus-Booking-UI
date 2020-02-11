import React from 'react';

import './button.styles.css';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  block?: true;
}

const CustomButton: React.FC<IButtonProps> = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
)

CustomButton.defaultProps = {
  type: 'button',
}

export default CustomButton;