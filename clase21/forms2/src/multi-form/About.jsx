import React from "react";

function About({ formData, setFormData }) {
    // about: "",
  return (
    <div className="about-container">
       <input type="text" name="about"  placeholder="About..." value={formData.about} 
      onChange={(event => setFormData({...formData, about: event.target.value}))}/>
    </div>
  );
}

export default About;
