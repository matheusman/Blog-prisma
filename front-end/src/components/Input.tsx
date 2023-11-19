import React from 'react'

type input = React.ComponentProps<"input"> &  {
    type : string;
    name : string;
    label? : string;
    className? : string;
}

function Input( { type, name, label, className, ...props} : input) {
  return (
    <div className={className}>
        <label htmlFor={name}>{label}</label>
        <input type={type} id={name} name={name} {...props}/>
    </div>
  )
}

export default Input