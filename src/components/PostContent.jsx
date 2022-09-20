import axios from "axios"; //importerar
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; //för att kunna använda <Link/> taggen

const Posts = () => {
    const [mydata, setMydata] = useState(null);
    //hämtar data
    useEffect( () => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        .then(res => setMydata(res.data))

    }, []);

  //map funkar ungefär som for each och i parantes lägger props (post, i), dvs mappar genom alla post och skriver ut dess titles i HomePage
  return (
    <main>
       <h2 className="postsIntro">Random posts</h2>
        {/*to=.. är samma som en herf och berättar vart den ska leda 
          Inline If with Logical && Operator*/}
        {mydata && mydata.map((post, index) => (
            <Link className="postTitles" to={`/post/${post?.id}`} key={index}>
              <p className="postTitle">{post.title}</p>
            </Link>
          )
        )};
    </main>
  )
}

export default Posts;