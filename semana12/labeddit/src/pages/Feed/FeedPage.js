import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage"
import PostCard from "../../components/PostCard/PostCard"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'

const FeedPage = () => {
  useProtectedPage();
  const feed = useRequestData([], `${BASE_URL}/labEddit/posts`);
  const [post, setPost] = useState([]);
  console.log(feed);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/labEddit/posts`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setPost(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   const feedCards = feed.posts && feed.posts.map((post) => {
    return (
        <PostCard
          key={post.id}
          username = {post.username}
          title={post.title}
          text={post.text}

        />
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
