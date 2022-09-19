import {useState} from "react"
import './allpost.css';
import Image1 from "./image/Image1.jpg"
import Image2 from "./image/Image2.jpg"
import Image3 from "./image/Image3.jpg"


const AllPost=()=> {
  const [toggleState,setToggleState]=useState(1);
  const toggleTab=(i)=>{
    setToggleState(i)
  }

  const product1=[
    {
      name:"Cosmetic 1",
      desc: "This is a cosmetic product",
      rating:4.0,
      price:1200,
      image:Image1
    },
    {
      name:"Cosmetic 2",
      desc: "This is a cosmetic product",
      rating:4.3,
      price:1300,
      image:Image1
    },
    {
      name:"Cosmetic 3",
      desc: "This is a cosmetic product",
      rating:4.23,
      price:1580,
      image:Image1

    },
    {
      name:"Cosmetic4",
      desc: "This is a cosmetic product",
      rating:3.5,
      price:1300,
      image:Image1

    },
    {
      name:"Cosmetic5",
      desc: "This is a cosmetic product",
      rating:4.4,
      price:1342,
      image:Image1

    },
    {
      name:"Cosmetic 6",
      desc: "This is a cosmetic product",
      rating:4.2,
      price:1200,
      image:Image1

    }
  ]
  const product2=[
    {
      name:"Oil  1",
      desc: "This is a Oil  product",
      rating:4.0,
      price:1200,
      image:Image2
    },
    {
      name:"Oil  2",
      desc: "This is a Oil  product",
      rating:4.3,
      price:1300,
      image:Image2
    },
    {
      name:"Oil  3",
      desc: "This is a Oil  product",
      rating:4.23,
      price:1580,
      image:Image2

    },
    {
      name:"Oil 4",
      desc: "This is a Oil  product",
      rating:3.5,
      price:1300,
      image:Image2

    },
    {
      name:"Oil 5",
      desc: "This is a Oil  product",
      rating:4.4,
      price:1342,
      image:Image2

    },
    {
      name:"Oil  6",
      desc: "This is a Oil  product",
      rating:4.2,
      price:1200,
      image:Image2

    }
  ]
  const product3=[
    {
      name:"Cream 1",
      desc: "This is a Cream product",
      rating:4.0,
      price:1200,
      image:Image3
    },
    {
      name:"Cream 2",
      desc: "This is a Cream product",
      rating:4.3,
      price:1300,
      image:Image3
    },
    {
      name:"Cream 3",
      desc: "This is a Cream product",
      rating:4.23,
      price:1580,
      image:Image3

    },
    {
      name:"Cream4",
      desc: "This is a Cream product",
      rating:3.5,
      price:1300,
      image:Image3

    },
    {
      name:"Cream5",
      desc: "This is a Cream product",
      rating:4.4,
      price:1342,
      image:Image3

    },
    {
      name:"Cream 6",
      desc: "This is a Cream product",
      rating:4.2,
      price:1200,
      image:Image3

    }
  ]
  return (
    <div className="App">
           <div className='section' >
               <button className={toggleState === 1 ?'btn  btn-btn-success': "btn btn-primary"}onClick={()=>toggleTab(1)} >
                Type1
               </button>
               <button className={toggleState === 2 ?'button active': "button"}onClick={()=>toggleTab(2)} >
               Type2
               </button>
               <button className={toggleState === 3 ?'button active': "button"}onClick={()=>toggleTab(3)} >
               Type3
               </button>
               <button className={toggleState === 4 ?'button active': "button"}onClick={()=>toggleTab(4)} >
               Type4
               </button>
               <button className={toggleState === 5 ?'button active': "button"}onClick={()=>toggleTab(5)} >
               Type5
               </button>
             </div>
             <div className="productContainer">
                 <div className={toggleState === 1 ? " buttonTab  active-content" : " buttonTab "}> 
                  <div className="productCard">
                  {product1.map((item)=>(
                 <div className="container">
                    <img className="productImg" src={item.image} alt="" />
                    <div className="name">{item.name}</div>
                    <div className="name">{item.desc}</div>
                    <div className="name">{item.rating}</div>
                 </div>
                   ))}
                  </div>
                 </div>
                 <div className={toggleState === 2 ? "  buttonTab   active-content" : " buttonTab "}> 
                    <div className="productCard">
                       {product2.map((item)=>(
                       <div className="container">
                          <img className="productImg" src={item.image} alt="" />
                          <div className="name">{item.name}</div>
                          <div className="name">{item.desc}</div>
                          <div className="name">{item.rating}</div>
                       </div>
                      ))}
                   </div>
                 </div>
                 <div className={toggleState === 3 ? " buttonTab  active-content" : " buttonTab "}> 
                 <div className="productCard">
                       {product3.map((item)=>(
                       <div className="container">
                          <img className="productImg" src={item.image} alt="" />
                          <div className="name">{item.name}</div>
                          <div className="name">{item.desc}</div>
                          <div className="name">{item.rating}</div>
                       </div>
                      ))}
                   </div>
                 </div>
                 <div className={toggleState === 4 ? "  buttonTab  active-content" : " buttonTab "}> 
                 <div className="productCard">
                       {product1.map((item)=>(
                       <div className="container">
                          <img className="productImg" src={item.image} alt="" />
                          <div className="name">{item.name}</div>
                          <div className="name">{item.desc}</div>
                          <div className="name">{item.rating}</div>
                       </div>
                      ))}
                   </div>
                 </div>
                 <div className={toggleState === 5 ? "  buttonTab  active-content" : " buttonTab "}> 
                 <div className="productCard">
                       {product2.map((item)=>(
                       <div className="container">
                          <img className="productImg" src={item.image} alt="" />
                          <div className="name">{item.name}</div>
                          <div className="name">{item.desc}</div>
                          <div className="name">{item.rating}</div>
                       </div>
                      ))}
                   </div>
                 </div>
             </div>
    </div>
  );
}

export default AllPost;