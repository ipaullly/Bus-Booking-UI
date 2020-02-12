import React from 'react';

import './input-field.styles.less';

interface FormProps {
  label: string;
  name: string;
  value: string | number;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => any;
  type: string;
}

const FormInput: React.FC<FormProps> = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`
        ${otherProps.value ? 'shrink' : ''}
        form-input-label`}
      >
      {label}
      </label>
    ) : null
    }
  </div>
)

export default FormInput;