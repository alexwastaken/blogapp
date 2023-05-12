import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThumbUp, Chat } from '@mui/icons-material';
import CardMedia from '@mui/material/CardMedia';

function Blog({ post }) {
  return (
    <Card sx={{ width: 500, height: 700, margin: '0.5rem', marginTop: '20px' }}>
      <CardMedia
        image={'./lol.jpg'}
        component="img"
        alt="wefwe"
        sx={{ width: 500, height: 500, margin: "auto"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginRight: '1rem' }}
        startIcon={<ThumbUp />}
      >
        {post.likes} Likes
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{ marginRight: '1rem' }}
        startIcon={<Chat />}
      >
         Comments
      </Button>
      <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.comments}
          </Typography>
      </CardContent>
    </Card>
  );
}

export default Blog;