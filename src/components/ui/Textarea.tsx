import React from 'react';
import { inputStyle } from './Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = ({ style, rows = 2, ...props }) => (
  <textarea rows={rows} style={{ ...inputStyle, resize: "vertical", ...style }} {...props} />
);
