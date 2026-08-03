import React from 'react';
import { C } from '../../constants/theme';

export const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  border: `1px solid ${C.border}`,
  borderRadius: 8,
  fontSize: 14,
  color: C.navy,
  background: C.white,
  outline: "none",
  boxSizing: "border-box",
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => (
  <input style={inputStyle} {...props} />
);
