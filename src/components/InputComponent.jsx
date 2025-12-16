import React, { useState } from 'react'

export const InputComponent = () => {
  const [command, setCommand] = useState('');
  const [terminalLine, setTerminaLine] = useState([
    {
      type: "input",
      text: ""
    }]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTerminaLine(prev =>
        [
          ...prev.slice(0,-1),
          { type: "input", text: `${command}` },
          {type: "input", text:""}
        ]);
      setCommand("");
    }
  }




  return (
    <div  >
      {terminalLine.map((line, index) => (
        index === terminalLine.length - 1 ?(
          <div className='p-3 text-2xl flex gap-2'>
            <p>Web-Emu:{'>'}</p>
            <input
              autoFocus
              className='flex-1 text-white border-0 focus:outline-0 focus:ring-0'
              type="text"
              onChange={ (e)=>{
                setCommand(e.target.value); console.log(command);
                }
              }
              onKeyDown={
                handleKeyDown
              }
            />
          </div>
        ):(
          <div key={index} className='p-3 text-2xl flex gap-2'>
              <p>Web-Emu:{'>'}</p>
              <p className='text-white'>{line.text}</p>
          </div>
        ) 
      ))}





    </div>
  )
}






const TestComponent = () => {
  return (<>
    <div className='p-3 text-2xl flex gap-2'>
      <p>Web-Emu: {'>'}</p>
      <input
        className='flex-1 text-white border-0 focus:outline-0 focus:ring-0'
        type="text"
        onChange={
          console.log()
        }
        onKeyDown={
          handleKeyDown
        }
      />
    </div>


  </>)
}