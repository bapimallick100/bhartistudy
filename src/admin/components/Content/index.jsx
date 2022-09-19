import React,{ useState} from 'react'
import axios from 'axios'
import styles from "./index.module.css"
import { nanoid } from "nanoid";
import EditSection from '../EditSection';
import ReadOnlySection from '../ReadOnlySection';

const Content = () => {
    const[senddata,setSenddata]= useState(null);
    const [data,setData]= useState({
        title:"Write title for post",
        // image:[],
        content:null
    });
    const [error,setError]=useState("");
    const [posts, setPosts] = useState([
        {
          "id": 1,
          "subTitle": "UPSC 2021 question",
          "textContent":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias, eius quaerat accusamus commodi quibusdam repellat, fuga animi quo adipisci facilis. Distinctio ex dolor temporibus optio velit soluta id error.",
           "tag":"Gate paper 2022"
        },
        {
          "id": 2,
          "subTitle": "UPSC 2022 question",
          "textContent":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias, eius quaerat accusamus commodi quibusdam repellat, fuga animi quo adipisci facilis. Distinctio ex dolor temporibus optio velit soluta id error.",
           "tag":"Gate paper 2022"
        }   
      ]
      );
    const [addFormData, setAddFormData] = useState({
        subTitle: "",
        textContent: "",
        tag: ""
      });
      const [editFormData, setEditFormData] = useState({
   
        subTitle: "",
        textContent: "",
        tag: ""
      });
      const [editPostId, setEditPostId] = useState(null);
      const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
      };
      const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
      };
      
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      id: nanoid(),
      subTitle: addFormData.subTitle,
      textContent: addFormData.textContent,
      tag: addFormData.tag
    };

    const newPosts = [...posts, newPost];
    setPosts(newPosts);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedPost = {
      id: editPostId,
      subTitle: editFormData.subTitle,
      textContent: editFormData.textContent,
      tag: editFormData.tag
   
    };

    const newPosts = [...posts];

    const index = posts.findIndex((post) => post.id === editPostId);

    newPosts[index] = editedPost;

    setPosts(newPosts);
    setEditPostId(null);
  };
  const handleEditClick = (event, post) => {
    event.preventDefault();
    setEditPostId(post.id);
    const formValues = {
      subTitle: post.subTitle,
      textContent: post.textContent,
      tag: post.tag
    };

    setEditFormData(formValues);
  };


      const handleCancelClick = () => {
        setEditPostId(null);
      };
    
      const handleDeleteClick = (postId) => {
        const newPosts = [...posts];
    
        const index = posts.findIndex((post) => post.id === postId);
    
        newPosts.splice(index, 1);
    
        setPosts(newPosts);
      };


// image and title submit
const topChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
};
const submit= async(e)=>{
  e.preventDefault();
  setData({...data, content : posts})
  try {
    const url = "http://127.0.0.1:3333/api/bhartistudy";
       const {data:res} = await axios.post(url, data);   
        window.location = "/";
       console.log(res.message);  
} catch (error) {
    if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
    ) {
        setError(error.response.data.message);
    }
}

}

//Send data to server
const finalSubmit = async (e)=>{
    e.preventDefault();
  setSenddata({...data,...posts})
  try {
    const url = "http://127.0.0.1:3333/api/bhartistudy";
       const {data:res} = await axios.post(url, senddata);   
        window.location = "/";
       console.log(res.message);  
} catch (error) {
    if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
    ) {
        setError(error.response.data.message);
    }
}
}    
  return (
    <div className={styles.container}>
        <div className="row">
            <form action="" onSubmit={submit} style={{display: 'flex', flexDirection: 'column'}}>
                {/* <label htmlFor="img">Image</label>
                <input type="file" id="img" name="image" accept="image/*" value={data.image} onChange={topChange} /> */}
                <label htmlFor="">Title</label>
                <input type="text" name='title' value={data.title} defaultValue={data.title}   onChange={topChange} />
                <input type="submit" value="Update" className='btn btn-primary'/>
            </form>
        </div>
    <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead> 
        </thead>
        <tbody>
          {posts.map((post) => (
            <>
               {editPostId === post.id ? (
                <EditSection
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                />
              ) : ( 
                <ReadOnlySection
                  post={post}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
               )} 
            </>
          ))}
        </tbody>
      </table>
    </form>

    <h2>Add a new section</h2>
    <form onSubmit={handleAddFormSubmit} className={styles.addNewSection}>
      <input
        type="text"
        name="subTitle"
        required="required"
        placeholder="Enter a Subtitle..."
        onChange={handleAddFormChange}
      />
      <textarea type="text"  name="textContent" id="" cols="30" rows="5" required="required" placeholder="Enter content..." onChange={handleAddFormChange}></textarea>
      <input
        type="text"
        name="tag"
        required="required"
        placeholder="Enter a tag..."
        onChange={handleAddFormChange}
      />
      <button type="submit" className='btn btn-primary'>Add</button>
    </form>
    {/* Final Submit to the server */}
    <form action="" onSubmit={finalSubmit}>
        <input type="submit" className="btn btn-success" value="Final Submit"/>
    </form>
  </div>
  )
}

export default Content