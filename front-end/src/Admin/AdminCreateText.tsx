import React from 'react'

function AdminCreateText() {
  
  function verifyPosition () {
    
  } 
  const [text, setText] = React.useState<string>("");
  return (
    <form className="form-admin" onSubmit={event => {
      event.preventDefault()
    }}>
      <textarea value={text} className="text-area" onChange={ event => setText(event.target.value)}></textarea>
      <button type="submit" id="button-admin">Enviar</button>
    </form>
  )
}

export default AdminCreateText