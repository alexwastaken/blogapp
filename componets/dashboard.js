import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Blog from './blog.js';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000', // Replace with your desired color
    },
  },
});

const posts = [
  {
    title: 'This is an image of a blue Square',
    content: 'This is the first blog post',
    image: './src/images/blueimage.png'
  },
  {
    title: 'Post 2',
    content: 'This is the second blog post',
    comments: 'asdjasdklklj2'
  },
  {
    title: 'Post 3',
    content: 'This is the third blog post',
    comments: 'asdjasdklklj2'
  },
];

function dashboard() {

  return (
    <ThemeProvider theme={theme}>
  

    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px'}}>
          {posts.map(post => (
            <Blog key={post.title} post={post} />
          ))}
      <Box>
      <h1>Dashboard</h1>
    </Box>
    </Box>

    </ThemeProvider>
  );
}

export default dashboard;