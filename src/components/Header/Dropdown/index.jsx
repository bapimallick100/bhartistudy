import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./index.module.css";

const Dropdown = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const MenuItems = [
        {
          title: 'Marketing',
          path: '/marketing',
          cName: 'dropdown-link'
        },
        {
          title: 'Consulting',
          path: '/consulting',
          cName: 'dropdown-link'
        },
        {
          title: 'Design',
          path: '/design',
          cName: 'dropdown-link'
        },
        {
          title: 'Development',
          path: '/development',
          cName: 'dropdown-link'
        }
      ];
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? `${styles.dropdown_menu} ${styles.clicked}` : `${styles.dropdown_menu}`}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={styles.dropdown_link}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default Dropdown