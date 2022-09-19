import React from 'react'
import styles from "./index.module.css"

const EditSection = ({ editFormData, handleEditFormChange, handleCancelClick,}) => {
  return (
    <>
  <div className="row">
        <div className="col-11 col-sm-11 col-md-11 col-lg-11">
               <div className="row">
                    <input
                      type="text"
                      required="required"
                      placeholder="Enter a name..."
                      name="subTitle"
                      value={editFormData.subTitle}
                      onChange={handleEditFormChange}
                    ></input>
              </div>
              <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                           <textarea
                            type="text"
                            required="required"
                            placeholder="Write content here"
                            name="textContent"
                            value={editFormData.textContent}
                            onChange={handleEditFormChange}
                            cols="90"
                            rows="4"
                          ></textarea>
                  </div>
             </div>
             <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12"><input
                                type="text"
                                required="required"
                                placeholder="Enter a tag..."
                                name="tag"
                                value={editFormData.tag}
                                onChange={handleEditFormChange}
                              ></input></div>
                  {/* <div className="col-3 col-sm-3 col-md-3 col-lg-3">{post.tag}</div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3">{post.tag}</div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3">{post.tag}</div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3">{post.tag}</div> */}
             </div>
        </div>
        <div className="col-1 col-sm-1 col-md-1 col-lg-1">
              <button type="submit" className="btn btn-primary">Save</button>
              <button type="button" onClick={handleCancelClick}  className="btn btn-danger">Cancel</button>
        </div>
    </div>
    <br/><br/>
  </>
  )
}

export default EditSection