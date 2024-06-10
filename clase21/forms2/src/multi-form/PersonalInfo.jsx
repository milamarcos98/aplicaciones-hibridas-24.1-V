import React from "react";

function PersonalInfo({ formData, setFormData }) {
    // name: "",
    // lastname: "",
    // nationality: "",
  return (
    <div className="personal-info-container">
       <input type="text" name="name"  placeholder="Name..." value={formData.name} 
      onChange={(event => setFormData({...formData, name: event.target.value}))}/>
      <input type="text" name="lastname"  placeholder="Lastnme..." value={formData.lastname} 
      onChange={(event => setFormData({...formData, name: event.target.value}))}/>
      <input type="text" name="nationality"  placeholder="Nationality..." value={formData.nationality} 
      onChange={(event => setFormData({...formData, nationality: event.target.value}))}/>
    </div>
  );
}

export default PersonalInfo;
