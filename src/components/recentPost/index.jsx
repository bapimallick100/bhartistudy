import React,{ useState,useEffect } from 'react'
import styles from "./index.module.css"
import axios from 'axios'

const RecentPost = () => {
    const [data,setData]=useState(null);
    useEffect(()=>{
        getContent();
    },[])
    const getContent=async()=>{
        const result =await axios.get("");
        setData(result.data);

    }
  return (
   <>
     <div className={`desktop ${styles.desktop}`}>
     <div className="row">
            <div className="col-md-3 col-lg-3"> Post</div>
            <div className="col-md-3 col-lg-3"> Post</div>
            <div className="col-md-3 col-lg-3"> Post</div>
            <div className="col-md-3 col-lg-3"> Post</div>       
        </div>
     </div>
     <div className={`mobile ${styles.mobile}`}>
     <div className="row">
            <div className="col-12 col-sm-6">Post</div>
            <div className="col-12 col-sm-6">Post</div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-12">Post</div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-12">Post</div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-12">Post</div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-12">Post</div>
        </div>
     </div>
   </>
  )
}

export default RecentPost