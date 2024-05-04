import React, { Fragment, useState } from 'react'
import styles from './List.module.css'

const List = ({items, setSelectedValue}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  return (
    <>
      <ul className={styles.list__group}>
          {
              items.map((item, index) => (
                  <li onClick={() => {
                    setSelectedIndex(index);
                    setSelectedValue(item);
                  }} key={index} className={selectedIndex === index ? styles.list__item + " " + styles.active : styles.list__item}>{item}</li>
            ) )
          }
      </ul>
    </>
  
  )
}

export default List