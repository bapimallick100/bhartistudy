import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./index.module.css"

const Button = () => {
  return (
    <Link to='sign-up'>
      <button className={styles.btn}>Sign Up</button>
    </Link>
  )
}

export default Button