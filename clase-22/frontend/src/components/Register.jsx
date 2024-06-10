import React, { useState } from 'react'

const Register = () => {

  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState("")


  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label>Name</label>
          <input type="text" value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})} />
        </div>
        <div>
          <label>Username</label>
          <input type="text" value={userData.username} onChange={(e) => setUserData({...userData, username: e.target.value})} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={userData.password} onChange={(e) => setUserData({...userData, password: e.target.value})} />
        </div>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register