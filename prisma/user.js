// /prisma/user.js
import prisma from './prisma'

export const createUserOrUpdateIfExists = async (nickname, favoriteGame, skillLevel, whoToPlayWith) => {

  console.log('createUserOrUpdateIfExists', nickname, favoriteGame, skillLevel, whoToPlayWith);
  let existingUser = await prisma.user.findUnique({
    where: { nickname: nickname },
  });

  if (!existingUser) {
    const newUser = await prisma.user.create({
      data: {
        nickname: nickname,
        favoriteGame: favoriteGame,
        skillLevel: skillLevel,
        whoToPlayWith: whoToPlayWith
      },
    });
    return newUser;
  }

  const updatedFields = {};

  if (favoriteGame && existingUser.favoriteGame !== favoriteGame) {
    updatedFields.favoriteGame = favoriteGame;
  }
  if (skillLevel && existingUser.skillLevel !== skillLevel) {
    updatedFields.skillLevel = skillLevel;
  }
  if (whoToPlayWith && existingUser.whoToPlayWith !== whoToPlayWith) {
    updatedFields.whoToPlayWith = whoToPlayWith;
  }

  if (Object.keys(updatedFields).length > 0) {
    existingUser = await prisma.user.update({
      where: { nickname: nickname },
      data: updatedFields,
    });
  }

  return existingUser;
};