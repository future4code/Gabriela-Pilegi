import { PostAddSharp } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PostCard from '../../components/PostCard/PostCard';
import { BASE_URL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectedPage';

const PostPage = (props) => {
  const [postDetails, setPostDetails] = useState(null)
  const params = useParams()
  const history = useHistory()
  // useProtectedPage()

  useEffect(() => {
    if(localStorage.getItem("token") === null) {
      history.push("/login")
    } else if (!params.postId) {
      history.push("/")
    }
  }, [])

  useEffect (() => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    axios.get(`${BASE_URL}/labEddit/posts/${params.postId}`, axiosConfig)
    .then((response) => {
      setPostDetails(response.data.post)
    })

  }, [])

  return (
    <div>
      {postDetails !== null && 
        <PostCard post={postDetails} hideComment/>
      }
      {postDetails && postDetails.comments.map((comment) => {
        return(
          <p>{comment.text}</p>
        )
      })}
    </div>
  );
};

export default PostPage;
