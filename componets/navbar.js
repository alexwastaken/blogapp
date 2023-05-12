import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useUser } from '@auth0/nextjs-auth0/client';

const Navbar = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ width: '1000px', margin: '0 auto' }}>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                PhotoBlog
              </Typography>
              {user && (
                <Typography variant="subtitle1" component="span" sx={{ mr: 2 }}>
                  {user.nickname}
                </Typography>
              )}
              {user ? (
                <Button color="inherit" href="/api/auth/logout">
                  Logout
                </Button>
              ) : (
                <Button color="inherit" href="/api/auth/login">
                  Login
                </Button>
              )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;