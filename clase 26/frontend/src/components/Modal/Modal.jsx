import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Modal.scss'

const Modal = ({task, projectId, onClose, onTaskAdded, setCurrentTask}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [assignedUser, setAssignedUser] = useState('');
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
        const res = await axios.get("http://localhost:3000/users")
        setUsers(res.data)
   
  } catch (err) {
    console.error(err.message);
  }
  }

  useEffect(() => {
    fetchUsers()
  },[])

  useEffect(() => {
    if(task){
      setName(task.name)
      setDescription(task.description)
      setAssignedUser(task.assignedUser)
      setStatus(task.status)
      setStartDate(task.startDate)
      setEndDate(task.endDate)
    }
  },[task])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const selectedUser = users.find(user => user._id == assignedUser)
        const newTask = {
            name, 
            description,
            assignedUser: {
              userId: selectedUser._id,
              username: selectedUser.username
            }, 
            status,
            projectId,
            startDate,
            endDate
        }

        if(task){
          await axios.put("http://localhost:3000/tasks/" + task._id, newTask)
          setCurrentTask(null)
        }else{
          await axios.post("http://localhost:3000/tasks", newTask)
        }
        onTaskAdded()
        onClose()
     
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Description</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div>
            <label>Assigned User</label>
            {/* <input type="text" value={assignedUser} onChange={(e) => setAssignedUser(e.target.value)} required /> */}
            <select value={assignedUser} onChange={(e) => setAssignedUser(e.target.value)} required>
              <option value="" disabled>Select a user</option>
              {
                users && users.map((user => (
                  <option key={user._id} value={user._id}>{user.name}</option>
                )))
              }
            </select>
          </div>
          <div>
            <label>Status</label>
            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
          </div>
          <div>
            <label>Start date</label>
            <input type="date"  value={startDate} onChange={(e) => setStartDate(e.target.value)} required/>          
          </div>
          <div>
            <label>End date</label>
            <input type="date"  value={endDate} onChange={(e) => setEndDate(e.target.value)} required/>          
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
