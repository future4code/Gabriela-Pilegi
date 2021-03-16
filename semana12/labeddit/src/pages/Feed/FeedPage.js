import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage"
import PostCard from "../../components/PostCard/PostCard"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import styled from 'styled-components'

const FeedWrapper = styled.div`
  display: grid;
  gap: 20px;
  /* max-width: 300px; */
  justify-items: center;
`

const FeedPage = () => {
  useProtectedPage();
  // const feed = useRequestData([], `${BASE_URL}/labEddit/posts`)
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  // console.log(feed);

  useEffect(() => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      }

    }

    setIsLoading(true)
    axios
      .get(`${BASE_URL}/labEddit/posts`, axiosConfig)
      .then((response) => {
        setPosts(response.data.posts)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   const feedCards = feed.posts && feed.posts.map((post) => {
    return (
      <FeedWrapper>
        {isLoading && <progress/>}
        {posts.map(post => {
          return (
            <PostCard key = {post.id} post={post} />
          )

        })}

      </FeedWrapper>  
        // <PostCard
        //   key={post.id}
        //   username = {post.username}
        //   title={post.title}
        //   text={post.text}

        // />
       )
  //   })

  //   return (
  //     <div>
  //       {feedCards}
  //     </div>
  //   )
  // }
};

export default FeedPage;
