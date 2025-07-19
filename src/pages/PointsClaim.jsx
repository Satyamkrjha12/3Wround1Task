import React from 'react'
import Header from '../components/header'
import UserPoint from '../components/UserPoint'

export default function PointsClaim() {
  return (
    <div>
        <Header />
        <div className='mt-10 mx-5'>
            <UserPoint />
        </div>
    </div>
  )
}
