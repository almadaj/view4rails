import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Toolbar,
  CssBaseline,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';

interface HamburgerMenuProps {
  isExpanded: boolean;
  toggleDrawer: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isExpanded,
  toggleDrawer,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      navigate('/');
    }
    // localStorage.removeItem('token');
    // localStorage.removeItem('userId');
    // navigate('/');
  };

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={isExpanded}
        sx={{
          width: isExpanded ? 240 : 60,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isExpanded ? 240 : 60,
            transition: 'width 0.3s',
            overflowX: 'hidden',
            backgroundColor: '#062e70',
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 'bold',
          },
          '& .MuiListItem-root:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <Toolbar>
          <IconButton
            onClick={toggleDrawer}
            edge="start"
            sx={{ color: '#fff' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <List>
          <ListItem onClick={() => navigate('/home')}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <HomeIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Home" />}
          </ListItem>

          <ListItem onClick={() => navigate('/about')}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <InfoIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="About" />}
          </ListItem>

          <ListItem onClick={() => navigate('/contact')}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <ContactMailIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Contact" />}
          </ListItem>

          <ListItem onClick={handleLogout}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <LogoutIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Logout" />}
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
