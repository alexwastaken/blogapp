// StartAccount.js
import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Button, Grid } from '@mui/material';

function StartAccount({ onButtonClick }) {

  const images = [
    { id: 1, name: "Beginner", skillLevel: 'BEGINNER' },
    { id: 2, name: "Intermediate", skillLevel: 'INTERMEDIATE' },
    { id: 3, name: "Advanced", skillLevel: 'ADVANCED' },
    { id: 4, name: "Expert", skillLevel: 'EXPERT' }
  ];

  const handleAddUser = async (chooseLevel) => {
    try {
      const response = await fetch('/api/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nickname: 'user_nickname',
            skillLevel: chooseLevel
          })
      })

      if (response.ok) {
        const data = await response.json()
        console.log('User added:', data)
        onButtonClick();
      } else {
        console.error('Failed to add user:', response.statusText)
      }
    } catch (error) {
      console.error('Failed to add user:', error)
    }
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#000"
    >
      <Box maxWidth={1000} width="100%">
        <Grid
          container
          spacing={4}
        >
          {images.map((image) => (
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
              key={image.id}
            >
              <Button onClick={() => handleAddUser(image.skillLevel)}>
              {image.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default StartAccount;