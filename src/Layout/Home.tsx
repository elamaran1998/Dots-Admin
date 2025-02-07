import { FC } from "react";
import Sidebar from "../Components/Common/Sidebar";
import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
// import theme from "../globals/theme";

const drawerWidth = 220;

const Home: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      {/* Sidebar */}
      {isMobile ? 
      (
        <Box
        sx={{
          flexShrink: 0,
          position: "fixed", // Fix the sidebar in place
          height: "100vh",
        }}
      >
        <Sidebar />
      </Box>
      ) 
      : 
      (
        <Box
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          position: "fixed", // Fix the sidebar in place
          height: "100vh",
        }}
      >
        <Sidebar />
      </Box>
      )}
      

      {/* Main Content */}
      {isMobile ? (
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          // marginLeft: `${drawerWidth}px`, // Main content starts after the fixed sidebar
        }}
      >
        <Toolbar /> {/* Keeps consistent spacing with the AppBar */}
        <Outlet />
      </Box>
      )
       : 
       (
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          marginLeft: `270px`, // Main content starts after the fixed sidebar
        }}
      >
        <Toolbar /> {/* Keeps consistent spacing with the AppBar */}
        <Outlet />
      </Box>
       )

       }
      
    </Box>
  );
};

export default Home;
