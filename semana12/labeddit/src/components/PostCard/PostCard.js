import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowDownardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import CommentIcon from '@material-ui/icons/Comment'
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';



const PostCard = (props) => {

  const history = useHistory
  const handleGoToPostDetail = () => {
    history.push(`/post/${props.post.id}`)
  }

  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.post.title}
        subheader={props.post.username}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <ArrowDownardIcon />
        </IconButton>
        <p>{props.post.votesCount}</p>
        <IconButton >
          <ArrowUpwardIcon />
        </IconButton>
        {!props.hideComment && (
          <Button
          variant="contained"
          color="primary"
          onClick={handleGoToPostDetail}
          startIcon={<CommentIcon />}
        >
          Comentar
        </Button>
        )}

          
      </CardActions>
      
    </Card>
    
  )
}

export default PostCard