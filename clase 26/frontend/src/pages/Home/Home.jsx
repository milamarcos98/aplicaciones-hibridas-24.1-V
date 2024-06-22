import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader"
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
    // const [users, setUsers ] = useState([]);
    const [loading, setLoading ] = useState([]);

    const {auth, logoutUser, user} = useContext(AuthContext)

    // useEffect(()=> {
    //     setLoading(true)
    //     axios.get("http://localhost:3000/users", {headers: {'token': auth}})
    //     .then((response)=> {
    //         console.log(response.data)
    //         setTimeout(() => {
    //             setLoading(false)
    //             setUsers(response.data)
    //         }, 2000)
    //     })
    //     .catch((error) =>{ 
    //         console.log(error)
    //         setLoading(false)
    //         if(error?.response.data.error.message === "jwt expired"){
    //             alert("token expired")
    //             // logoutUser()
    //         }
    //     })
    // },[])

    const [projects, setProjects] = useState([])
    // create project
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    // searchbar
    const [search, setSearch] = useState('')

     useEffect(()=> {
        fetchProjects();
    },[])

    const fetchProjects = async () => {
        try{
            const res = await axios.get("http://localhost:3000/projects");
            setProjects(res.data)
            console.log(res.data)
        }catch(error){
            console.error(error)
        }
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.get("http://localhost:3000/projects/search", {params: {name: search}});
            setProjects(res.data)
            console.log(res.data)
        }catch(error){
            console.error(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProject = {name, description, owner: {
            userId: user.id,
            username: user.username
        }}
        try{
            await axios.post("http://localhost:3000/projects", newProject);
            fetchProjects();
            setName('');
            setDescription('');
            // redirect
        }catch(error){
            console.error(error)
        }
    }

  return (
    <div>
        <h1>Projects</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Project name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Project description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <button type='submit'>Add project</button>
        </form>
        <form onSubmit={handleSearch}>
            <input type="text" placeholder='Search by name' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type='submit'>Search</button>
        </form>
        {/* {
            loading ? 
            (
                <ClipLoader
                color="#fff"
                loading={loading}
                />
            )
            :
            users?.map((user) => (
                <p>{user.name} - {user.email} </p>
            ))
        } */}

        <ul>
            {
                projects.map(project => (
                    <li key={project._id}>
                        <Link to={`/projects/${project._id}`}>{project.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export {Home}