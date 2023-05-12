// StartAccount.js
import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Grid } from '@mui/material';

function StartAccount({ onButtonClick }) {

  const images = [
    { id: 1, name: "rl.jpg", favoriteGame: 'GAME_OPTION_1' },
    { id: 2, name: "lol.jpg", favoriteGame: 'GAME_OPTION_2' },
    { id: 3, name: "wow.jpg", favoriteGame: 'GAME_OPTION_3' },
    { id: 4, name: "mc.jpg", favoriteGame: 'GAME_OPTION_4' }
  ];

  const handleAddUser = async (gameSelection) => {
    try {
      const response = await fetch('/api/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nickname: 'user_nickname',
            favoriteGame: gameSelection
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
          spacing={10}
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
              <Image
                src={"/" + image.name}
                alt={`Image ${image.id}`}
                width={200}
                height={100}
                style={{ cursor: "pointer" }}
                onClick={() => handleAddUser(image.favoriteGame)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default StartAccount;