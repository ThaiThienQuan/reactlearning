// @ts-ignore
import React from 'react'
// @ts-ignore
export default function UserProfile({email, name, gender}) {
    return (
        <>
            <div>
                <p>Name :{name}</p>
                <p> Email: {email}</p>
                <p> Gender: {gender?"Male":"Female"}</p>
            </div>
        </>)
}