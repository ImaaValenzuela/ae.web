import React from 'react';
import { inputStyle } from './Input';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ children, style, ...props }) => (
  <select style={{ ...inputStyle, ...style }} {...props}>
    {children}
  </select>
);
