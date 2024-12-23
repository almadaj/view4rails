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
import HomeIcon from '@mui/icons-material/HomeRounded';
import ContactMailIcon from '@mui/icons-material/ContactMailRounded';
import CompanyIcon from '@mui/icons-material/AddBusinessRounded';
import LogoutIcon from '@mui/icons-material/LogoutRounded';
import MenuIcon from '@mui/icons-material/MenuRounded';
import StudentIcon from '@mui/icons-material/SchoolRounded';
import InternshipIcon from '@mui/icons-material/AssuredWorkloadRounded';
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
    if (window.confirm('Tem certeza que deseja sair de CampusLink?')) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      navigate('/');
    }
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

          <ListItem onClick={() => navigate('/students')}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <StudentIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Alunos" />}
          </ListItem>

          <ListItem onClick={() => navigate('/companies')}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <CompanyIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Empresas" />}
          </ListItem>

          <ListItem onClick={() => navigate('/internships')}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <InternshipIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Central de Estágios" />}
          </ListItem>

          <ListItem onClick={() => navigate('/profile')}>
            <ListItemIcon sx={{ color: '#fff' }}>
              <ContactMailIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Perfil" />}
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
