import React from 'react'
import { InputComponent } from './InputComponent'

export const TerminalUi = () => {
  return (
    <div className='bg-gray-900 h-full w-full text-green-400 rounded-3xl p-0'>
        {/* Header */}
        <div className='w-full rounded-t-3xl h-8 bg-gray-500'></div>
        <InputComponent />
        
    </div>
  )
}
