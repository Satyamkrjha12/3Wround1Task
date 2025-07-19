import React from 'react'
import UserCard from '../components/userCard'
import Header from '../components/header'

export default function Front() {
    return (
        <div>
            <Header />
            <div className=' mt-10 ml-5'>
                <UserCard />
            </div>
        </div>
    )
}
