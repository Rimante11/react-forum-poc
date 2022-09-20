import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Poststoset = () => {
    //att få userId param från url
    const {id} = useParams();
    console.log("User id: ", id);

    const [comment, setComment] = useState(null);
    const [post, setPost] = useState(null);

    useEffect( () => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => setComment(res.data))
    }, [id]);
   
    useEffect( () => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setPost(res.data))
    }, [id]);

  return (
    <main>
      <div className="buttonWrapper"> 
        <Link to="/home" className="homeBtn">
          <button className="homePageBtn">Home</button>
        </Link> 
      </div>

      {post && 
        <>
          <div className="huvudComment"> 
            <h3 className="onePostTitle">{post.title}</h3>
            <p className="postBody"> {post.body}</p>
          </div>
        </>  
      }
        
       <h3 className="commentsTitleText">Comments</h3>
        <div className="commentsContainer">
            {comment && comment.map((comment, index) => (
                <section key={index} className="commentSection">
                    <p>Comment: {comment?.body}</p>
                    <p>Name: {comment?.name}</p>
                    <p>Email: {comment?.email}</p>
                </section>
              )
            )};
        </div>
    </main>
  )
}

export default Poststoset;