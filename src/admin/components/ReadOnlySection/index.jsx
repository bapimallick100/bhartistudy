import React from 'react'
import styles from "./index.module.css"

const ReadOnlySection = ({post,handleEditClick, handleDeleteClick}) => {
  return (
    <>  
    <div className={`row ${styles.section}`}>
        <div className="col-11 col-sm-11 col-md-11 col-lg-11">
               <div className={`row`}>
               <div className={`col-4 col-sm-4 col-md-4 col-lg-4 ${styles.subTitle}`}>{post.subTitle}</div>
               <div className="col-8 col-sm-8 col-md-8 col-lg-8"></div>
              </div>
              <div className={`row `}>
                        <p className={`${styles.textContent}`}>{post.textContent}</p>              
             </div>
             <div className="row">
                  <div className={`col-12 col-sm-12 col-md-12 col-lg-12 ${styles.tag}`}>{post.tag}</div>
                  {/* <div className="col-3 col-sm-3 col-md-3 col-lg-3">{post.tag}</div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3">{post.tag}</div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3">{post.tag}</div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3">{post.tag}</div> */}
             </div>
        </div>
        <div className="col-1 col-sm-1 col-md-1 col-lg-1">
              <button
                type="button"
                onClick={(event) => handleEditClick(event, post)}
                className="btn btn-primary"
              >
                Edit
              </button>
              <button type="button" onClick={() => handleDeleteClick(post.id)}
              className="btn btn-danger"
              >
                Delete
              </button>
        </div>
    </div>
    <br /><br /> 
    </>
  )
}

export default ReadOnlySection