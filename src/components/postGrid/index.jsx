import React,{ useState,useEffect } from 'react'
import styles from "./index.module.css"
import axios from 'axios'
import image1 from "../../assets/graphics-design.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const PostGrid = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        getContent();
    },[])
    const getContent=async()=>{
        const result =await axios.get("http://127.0.0.1:3333/api/bhartistudyGetAllData");
        setData(result.data);
    }
  return (
    <>
    <div className='row'>
    <div className="card" style={{width: "18rem"}}>
  <img src={image1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
   
    {/* <div className={`mobile ${styles.mobile}`}>
        <div className="row">
            <div className="col-12 col-sm-12">
                {data.map((item)=>(
                    <>
                       <div className="row">{item.title}</div>
                       <div className="row">{item.content.map((i)=>(
                          <> 
                            <div>{i.subTitle}</div>
                            <div>{i.textContent}</div>
                            <div>{i.tag}</div>
                          </>
                       ))}</div>
                    </>
                    
                ))}
            </div>
        </div>
       
    </div> */}
    </>
  )
}

export default PostGrid