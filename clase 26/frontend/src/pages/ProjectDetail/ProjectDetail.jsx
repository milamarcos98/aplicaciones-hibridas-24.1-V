import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [currentTask, setCurrentTask] = useState(null);

  const fetchProjectDetails = async () => {
    setLoading(true)
    try{
        const res = await axios.get(`http://localhost:3000/projects/${id}/details`, {
          params: {
            name: search,
            status: filterStatus,
            sortBy: sort, 
            page, 
            limit
          }
        });

        setProject(res.data.project)
        setTasks(res.data.tasks)
        setLoading(false)
        console.log(res.data)
    }catch(error){
        console.error(error)
    }
}

useEffect(() => {
  fetchProjectDetails()
}, [id, search, filterStatus, sort, page, limit]);

const handleTaskAdded = () => {
  fetchProjectDetails()
}

const handlePageChange = (newPage) => {
  setPage(newPage)
}


const handleDeleteTask = async (taskId) => {
  if(window.confirm('You sure?')){
      try{
        await axios.delete(`http://localhost:3000/tasks/${taskId}`);
        fetchProjectDetails()
    }catch(error){
        console.error(error)
    }
  }
}

const handleEditTask = (task) => {
  setCurrentTask(task)
  setShowModal(true)
}

  return (
    <div>
      <h1>{project?.name}</h1>
      <p>{project?.description}</p>
      <button onClick={() => setShowModal(true)}>Add Task</button>
      {
        showModal && <Modal projectId={id} onClose={() => {
          setShowModal(false)
          setCurrentTask(null)
        }} 
        onTaskAdded={handleTaskAdded} show={showModal} task={currentTask} setCurrentTask={setCurrentTask}/>
      }
      <div>
        <input
          type="text"
          placeholder="Search tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All Statuses</option>
          <option value="to do">To Do</option>
          <option value="doing">Doing</option>
          <option value="blocked">Blocked</option>
          <option value="done">Done</option>
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="status">Status</option>
        </select>
      </div>
      <h2>Tasks</h2>
      <ul>
       {
        tasks.map(task => (
          <li key={task._id}>
            <span> {task.name}: {task.description}</span>
            <span>Start date: {task.startDate ? task.startDate.substring(0,10) : 'N/A'}</span>
            <span>End date: {task.endDate ? task.endDate.substring(0,10) : 'N/A'}</span>
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
            </li>
        ))
       }
      </ul>
      <div>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => handlePageChange(page + 1)} disabled={tasks.length < limit}>
          Next
        </button>
      </div>
    </div>
  )
}

export  {ProjectDetail}