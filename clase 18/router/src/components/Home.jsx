import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
    const nombres = ["pepe", "carlos", "sofia", "juan"];
  return (
    <div>
        <h1>Home</h1>
        <ul>
            {
                nombres.map((item) => (
                    <li key={item}>
                        <Link to={`/detail/${item}`}>{item}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
