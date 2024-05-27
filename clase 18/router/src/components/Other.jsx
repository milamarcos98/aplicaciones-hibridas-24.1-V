import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Other = () => {
  return (
    <div>
        <ul>
            <li><Link to="content1">Content 1</Link></li>
            <li><Link to="content2">Content 2</Link></li>
            <li><Link to="content3">Content 3</Link></li>
        </ul>
        {/* content */}
        <Outlet/>
    </div>
  )
}

export {Other}