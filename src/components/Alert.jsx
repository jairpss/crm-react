import React from 'react'

const Alert = ({children}) => {
  return (
    <div className="text-center my-4 bg-rose-500 text-white font-inter font-medium p-1 rounded-md">
        {children}
    </div>
  )
}

export default Alert