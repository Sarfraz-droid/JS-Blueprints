import React, { InputHTMLAttributes } from "react";

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`text-xs bg-slate-100 p-1 rounded-md border border-gray-300 outline-none ${props.className}`}
      style={{
        ...props.style,
      }}
    />
  );
}

export default Input;
