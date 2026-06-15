import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/trishant-patel')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='bg-gray-800 text-white text-3xl p-4 m-4 flex flex-col justify-center items-center'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="github dp" width={250} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/trishant-patel')
    return response.json()
}