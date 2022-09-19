import React from 'react'
import styles from "./index.module.css"
import Navbar from "../components/Header/Navbar";
import Footer from "../components/footer/index";
import Banner from "../components/banner/index";
import PostGrid from '../components/postGrid';
import RecentPost from '../components/recentPost';
import AllPost from '../components/AllPost';
const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <AllPost/>
     <RecentPost/>
    <PostGrid/> 
    <Footer/>
    </>
  )
}

export default Home