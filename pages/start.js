// MainPage.js
import React, { useState } from 'react';
import StartAccount from '../componets/startaccount';
import SecondPage from '../componets/secondpage';
import ThirdPage from '../componets/third';
import Dashboard from '../componets/dashboard';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

function MainPage() {

  const { user } = useUser()
  const router = useRouter();

  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const [showComponent4, setShowComponent4] = useState(false);


  const handleComponent1ButtonClick = () => {
    setShowComponent1(false);
    setShowComponent2(true);
  };

  const handleComponent2ButtonClick = () => {
    setShowComponent2(false);
    setShowComponent3(true);
  };

  const handleComponent3ButtonClick = () => {
    setShowComponent3(false);
    setShowComponent4(true);
  };

  if (!user) {
    router.push('/api/auth/login'); // Redirect to the login page if there's an error or the user is not logged in
    return null; // Render nothing while redirecting
  }


  return (
    user && (
    <>
      {showComponent1 && <StartAccount onButtonClick={handleComponent1ButtonClick}  />}
      {showComponent2 && <SecondPage onButtonClick={handleComponent2ButtonClick} />}
      {showComponent3 && <ThirdPage onButtonClick={handleComponent3ButtonClick} />}
      {showComponent4 && <Dashboard  loggedInUser={user} />}
    </>
    )
  );
}

export default MainPage;