import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  // Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  // MenuList,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  // Mail as MailIcon,
  // MoveToInbox as InboxIcon,
  // Star as StarIcon,
  // Send as SendIcon,
  // Archive as ArchiveIcon,
  // Delete as DeleteIcon,
  // Report as ReportIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


import Dashboard from "../../assets/sideBar_Icons/Dashboard.svg";
import Logout from "../../assets/sideBar_Icons/Logout.svg";
import Polls from "../../assets/sideBar_Icons/Polls.svg";
import Provider from "../../assets/sideBar_Icons/Provider.svg";
import Service from "../../assets/sideBar_Icons/Service.svg";
import SubCategory from "../../assets/sideBar_Icons/Sub Category.svg";
import sub from "../../assets/sideBar_Icons/Subscription.svg";
import User from "../../assets/sideBar_Icons/User.svg";
import settings from "../../assets/sideBar_Icons/Settings.svg";
import Dots from "../../assets/logo/Dots.png"; 
import add from "../../assets/sideBar_Icons/add.png";
import theme from '../../globals/theme';
import { IoIosArrowDown } from "react-icons/io";
import { LogoutModal } from './LogoutModel';


interface MenuItem {
  text: string;
  icon: React.ReactNode;
  path: string;
  index:number;
}

const drawerWidth = 270;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex,setActiveIndex] = useState(0);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navigate = useNavigate();
  

  const handleDrawerToggle = () => {
    console.log("dsa")
    // alert('Hello')
    setMobileOpen(!mobileOpen);
  };
  
  const handleLogout = () => {
    // Add your logout logic here
    localStorage.clear();
    // You might want to clear any auth state, tokens, etc.
    navigate('/');
  };

  const mainMenuItems: MenuItem[] = [
    { text: 'Dashboard',index:1, icon: <img src={Dashboard} alt="Dashboard" />, path: 'dashboard' },
    { text: 'Service Category',index:2, icon: <img src={Service} alt="Service Category" />, path: 'service' },
    { text: 'Sub Category',index:3, icon: <img src={SubCategory} alt="Sub Category" />, path: 'subcategory' },
    { text: 'Users',index:4, icon: <img src={User} alt="Users" />, path: 'users' },
    { text: 'Provider',index:5, icon: <img src={Provider} alt="Provider" />, path: 'provider' },
    { text: 'Subscription',index:6, icon: <img src={sub} alt="Subscription" />, path: 'subscription' },
    { text: 'Appointment',index:6, icon: <img src={add} height={30} width={30} alt="Subscription" />, path: 'appointment' },
    { text: 'Polls',index:7, icon: <img src={Polls} alt="Polls" />, path: 'poll' },
    { text: 'Settings',index:8, icon: <img src={settings} alt="settings" />, path: 'settings' },
    { text: 'Logout',index:9, icon: <img src={Logout} alt="Logout" />, path: '/' },
  ];

  const handleClick = (index: number, path: string) => {
    if (path === '/') {
      setIsLogoutModalOpen(true);
    } else {
      setActiveIndex(index);
      navigate(path);
    }
  };

  const drawer = (
    <>
    <Box sx={{pl:3}}>
      <Toolbar />
      <Box
      component='img'
      src={Dots}
      height={70}
      width={170} 
      sx={{margin:'-40px 0px 10px 0px'}}
      />
      
      <List>
        {mainMenuItems.map((item,index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton 
              sx={{
              color: activeIndex === index ? "white" : "black",
              backgroundColor: activeIndex === index ? "#ff8f8f" : "#ffeded",
              borderRight: activeIndex === index ? "8px solid #d40000" : "",
              borderRadius: '5px 0 0 5px',
              
              '&:hover': {
              backgroundColor: activeIndex === index ? '#ff8f8f' : '#ff8f8f',
            },
            }}
            onClick={()=>handleClick(index, item.path)}

            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Box>
    </>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          color:'black',
          backgroundColor:'#fafafa',
          boxShadow:'none',
          fontWeight:200,
          borderBottom:'1px solid #e8e8e8'
        }}
      >
        <Toolbar sx={{display: 'flex', alignItems: 'center', gap: 2}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          { !isMobile && 
          <Typography variant="h6" noWrap component="div" sx={{fontWeight:550}}>
          Welcome Back
          </Typography>
          }

          
          
          {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 , width:'100%', alignContent:'space-between',justifyContent:{xs:'space-between',sm:'space-between'},flexGrow: 1,mr:6}}>
            <Typography></Typography>
            <IconButton
                 size="large"
                 edge="end"
                 sx={{
                  order:{xs:2,sm:1},
                  // backgroundColor:'red',
                  p:0
                 }}
            >
             <Avatar
               alt="John Doe"
               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
               sx={{ width: 40, height: 40 }}
             />
             <Typography sx={{color:'black',fontWeight:'bold',ml:'10px'}}>Elamaran</Typography>
             <IoIosArrowDown size={15} />
             </IconButton>
          </Box>
          ) 
          :
          (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2,ml:'855px' }}>
             <IconButton
                  size="large"
                  edge="end"
             >
              <Avatar
                alt="John Doe"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                sx={{ width: 40, height: 40 }}
              />
              <Typography sx={{color:'black',fontWeight:'bold',ml:'10px'}}>Elamaran</Typography>
              <IoIosArrowDown size={15} />
              </IconButton>
          </Box>

          )
          
          }
          
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClick={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor:'#ffeded'
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor:'#ffeded'
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
       
      </Box>

      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={() => {
          handleLogout();
          setIsLogoutModalOpen(false);
        }}
      />
    </Box>
  );
}

export default App;