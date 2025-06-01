import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='bg-red-700 text-5xl p-4 text-center my-2 text-white font-bold'>
      USER : {id}
    </div>
  )
}

export default User
