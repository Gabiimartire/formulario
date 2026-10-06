import React from 'react';
function Input({ label, type, name, value, onChange, placeholder }) {
  return (
    <div className="input-label">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Input;
