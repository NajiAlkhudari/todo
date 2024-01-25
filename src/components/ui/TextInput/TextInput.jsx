// TextInput.js
"use client"
import React from 'react';
import './TextInput.css'

const TextInput = ({ className,label, value, name,onChange, placeholder , type}) => {
  return (
    <div>
      <label>{label}</label>
      <input
      className={`text-input ${className}  `}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
      />
    </div>
  );
};

export default TextInput;
