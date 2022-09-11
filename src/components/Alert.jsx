import React from 'react'

const Alert = ({children}) => {
  return (
    <div className="text-center my-4 bg-rose-500 text-white font-inter p-2">
        {children}
    </div>
  )
}

export default Alert