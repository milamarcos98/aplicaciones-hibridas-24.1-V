import React from 'react'

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")
  return (
    <div>
      <h1>Login</h1>
      <form>
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

export default Login