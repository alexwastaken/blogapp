// import { createUser } from '../../prisma/user';

import { createUserOrUpdateIfExists } from "@/prisma/user";

const handle = async (req, res) => {
  if (req.method === 'POST') {
    const { nickname, favoriteGame, skillLevel, whoToPlayWith } = req.body;

    console.log(whoToPlayWith, 'asdfnkl2')
    if (!nickname) {
      res.status(400).json({ message: 'Nickname is required' });
      return;
    }

    try {
      const user = await createUserOrUpdateIfExists(nickname, favoriteGame, skillLevel, whoToPlayWith);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'error.message' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handle;