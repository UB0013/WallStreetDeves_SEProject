import { useEffect, useState } from "react";
import './Posts.css';
import { Link } from "react-router-dom";

const renderData = (post_list) => {
    return (
      <ul>
        {post_list.map((todo, index) => {
          return <li key={index}>{todo.title}</li>;
        })}
      </ul>
    );
  };
const Posts = () => {
    const [post_list, set_post_list] = useState("");
    const [error, setError] = useState(null);
    const url = "http://localhost:4000";
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);
  
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/posts');
                const result = await response.json();
                const normalizedPostList = Array.isArray(result) ? result : [result];
                //console.log(normalizedPostList);
                if (!response.ok) {
                    // Check for HTTP error status
                    throw new Error('Network response was not ok');
                }
                set_post_list(normalizedPostList);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            }
        };

        fetchData();
        return () => {
            // Perform cleanup tasks if needed
            // For example, cancelling network requests or clearing subscriptions
        };
    }, []);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
      };
    
      const pages = [];
      for (let i = 1; i <= Math.ceil(post_list.length / itemsPerPage); i++) {
        pages.push(i);
      }
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = post_list.slice(indexOfFirstItem, indexOfLastItem);
    
      const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li
              key={number}
              id={number}
              onClick={handleClick}
              className={currentPage == number ? "active" : null}
            >
              {number}
            </li>
          );
        } else {
          return null;
        }
      });

      const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);
    
        if (currentPage + 1 > maxPageNumberLimit) {
          setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
      };
    
      const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);
    
        if ((currentPage - 1) % pageNumberLimit == 0) {
          setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
      };
    
      let pageIncrementBtn = null;
      if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
      }
    
      let pageDecrementBtn = null;
      if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
      }
    
      const handleLoadMore = () => {
        setitemsPerPage(itemsPerPage + 5);
      };


    return (
        <>
            {error ? (
                // Display custom error page
                <div className="main-body">
                    <h1>Error</h1>
                    <p>{error}</p>
                </div>
            ) : post_list ? (
                <div className="posts_body">
                    <ul className="card-list">
                        {currentItems.map((item) => (
                                <div className="card" key={item.id}>
                                    <div className="card__header">
                                        <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" className="card__image" width="600" />
                                    </div>
                                    <div className="card__body">
                                        <span className="tag tag-blue" key={`${item.id}-category`}>{item.category.name}</span>
                                        <Link className="Linkpost" key={`${item.post_id}-title`} to={`${url}/post/${item.post_id}`}><h3 className="postUrl">{item.title}</h3></Link>
                                        <p key={`${item.id}-content`} className="PostContent">{item.content}</p>
                                    </div>
                                    <div className="card__footer">
                                        <div className="user">
                                            <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image" />
                                            <div className="user__info" key={`${item.id}-author`}>
                                                <h5 className="user_name">Test</h5>
                                                <small>2h ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </ul>
                </div>) : (
                    <div>
                <p>Loading...</p>
                </div>
            )}
            <ul className="pageNumbers">
            <li>
            <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
            >
            Prev
          </button>
            </li>
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}

            <li>
            <button
                onClick={handleNextbtn}
                disabled={currentPage == pages[pages.length - 1] ? true : false}
            >
            Next
          </button>
            </li>
             </ul>
            <button onClick={handleLoadMore} className="loadmore">
                 Load More
            </button>
        </>
    );
}

export default Posts;