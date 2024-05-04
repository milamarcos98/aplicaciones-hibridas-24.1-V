import React from 'react'
import classNames from 'classnames/bind'
import styles from './Toast.module.css'

const Toast = ({message, type, position="top-left"}) => {
    // "toast-container toast-" + type + " position-" + position
    const clss = classNames.bind(styles);
    let classes = clss("toast-container","toast-" + type ," position-" + position)
  return (
    <div className={classes}>
        <p>{message}</p>
    </div>
  )
}

export default Toast