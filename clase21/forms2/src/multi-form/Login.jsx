import React from "react";

function Login({ formData, setFormData }) {
  // email: "",
  //     user: "",
  //     password: "",
  //     confirmPassword: "",
  return (
    <div className="login-container">
      <input type="email" name="email"  placeholder="Email..." value={formData.email} 
      onChange={(event => setFormData({...formData, email: event.target.value}))}/>
       <input type="text" name="user"  placeholder="Username..." value={formData.user} 
      onChange={(event => setFormData({...formData, email: event.target.value}))}/>
       <input type="password" name="password" value={formData.password} 
      onChange={(event => setFormData({...formData, password: event.target.value}))}/>
       <input type="password" name="confirmPassword" value={formData.confirmPassword} 
      onChange={(event => setFormData({...formData, confirmPassword: event.target.value}))}/>
    </div>
  );
}

export default Login;
