import React, { useEffect, useState } from 'react'
import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader"

const Home = () => {
    const [users, setUsers ] = useState([]);
    const [loading, setLoading ] = useState([]);

    useEffect(()=> {
        setLoading(true)
        axios.get("http://localhost:3000/users")
        .then((response)=> {
            console.log(response.data)
            setUsers(response.data)
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        })
        .catch((error) =>{ 
            console.log(error)
            setLoading(false)
        })
    },[])

  return (
    <div>
        <h1>Home</h1>
        {
            loading ? 
            (
                <ClipLoader
                color="#fff"
                loading={loading}
                />
            )
            :
            users?.map((user) => {
                <p>{user.name} - {user.email} </p>
            })
        }
    </div>
  )
}

export default Home