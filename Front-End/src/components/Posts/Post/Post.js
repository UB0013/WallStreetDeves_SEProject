import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Post.css'


const Post = (props) => {
      const [Article, setArticle] = useState();
      const [error, setError] = useState();
      const { id } = useParams();

      useEffect( () => {
        const fetchPost = async ()=>{
            try{
                const response = await fetch(`http://localhost:8080/post/${id}`);
                const result = await response.json();
                console.log(result);
                setArticle(result);
            }catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            }
        }       
        fetchPost();
      }, []);

      return (
        <div className="main-body">
            { error ? <div className="main-body">
                    <h1>Error</h1>
                    <p>{error}</p>
                </div> : Article ?  
                <div className="post-container"> 
                    <h1 className="post-title">{Article.title}</h1>
                    <hr></hr>
                    <p className="post-content">{Article.content}</p>
                    {/* <p className="post-author">created By - {Article.author.fullName}</p> */}
                    <hr></hr>
                    {
                        Article.comments.map( (comment) => (
                            <h2>{comment.content}</h2>       
                        ))
                    }
                </div>: <div><p>Loading</p></div> }            
        </div>
      );  
};

export default Post;