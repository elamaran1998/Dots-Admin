// import React from 'react'

import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";


const Dashboard = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const {userDetails} = location.state || {};

  console.log(userDetails,"Naviagte")


  return (
    <>
    <Typography sx={{fontWeight:900,fontSize:'17px',marginBottom:'7px',marginLeft:'10px'}}>Overview Of User</Typography>
    {isMobile ?
     (
      <Box
      sx={{
        bgcolor: "background.paper",
        width: { md: "75vw", sm: "80vw", xs: "83vw" },
        minHeight: "120px", // Ensures a consistent height for the tabs
        display: "flex",
        flexDirection: "column",
        justifyContent:'space-between',
        backgroundColor: "#ffffff", // Card color
        // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow
        borderRadius: "16px",
        borderColor: "divider",
        // pt: 3,
        // pb: 3,
        mt: 3,
        ml:1,
        p:5
        // p:{md:'5px',sm:'0px',xs:'10px'}
        
        // mx: {xs: 1, md: 5}
      }}
    >
    {/* <Card> */}
    {/* <CardContent>  */}
    <Box>
          <Typography component="div" sx={{fontSize:'17px',color:'#616161'}}> Total Number of User </Typography> 
          <Typography variant="body2" sx={{fontWeight:'bold',fontSize:'20px'}}>2,345</Typography> 
    </Box>
    <Divider orientation="vertical" flexItem />
    <Box sx={{mt:3,mb:3}}>
          <Typography component="div" sx={{fontSize:'17px',color:'#616161'}}> Total Subscription </Typography> 
          <Typography variant="body2" sx={{fontWeight:'bold',fontSize:'20px'}}>2,345</Typography> 
    </Box>
    <Divider orientation="vertical" flexItem />
    <Box sx={{pr:5}}>
          <Typography component="div" sx={{fontSize:'17px',color:'#616161'}}> Active Subscription </Typography> 
          <Typography variant="body2" sx={{fontWeight:'bold',fontSize:'20px'}}>2,345</Typography> 
    </Box>
      {/* </CardContent> */}
    {/* </Card> */}
    </Box>
     ) 
    :
     (
      <Box
      sx={{
        bgcolor: "background.paper",
        width: { md: "75vw", sm: "80vw", xs: "83vw" },
        minHeight: "120px", // Ensures a consistent height for the tabs
        display: "flex",
        flexDirection: "row",
        justifyContent:'space-between',
        backgroundColor: "#ffffff", // Card color
        // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow
        borderRadius: "16px",
        borderColor: "divider",
        pt: 3,
        pb: 3,
        mt: 3,
        ml:1,
      }}
    >
    {/* <Card> */}
    {/* <CardContent>  */}
    <Box sx={{pl:5}}>
          <Typography component="div" sx={{fontSize:'17px',color:'#616161'}}> Total Number of User </Typography> 
          <Typography variant="body2" sx={{fontWeight:'bold',fontSize:'20px'}}>2,345</Typography> 
    </Box>
    <Divider orientation="vertical" flexItem />
    <Box>
          <Typography component="div" sx={{fontSize:'17px',color:'#616161'}}> Total Subscription </Typography> 
          <Typography variant="body2" sx={{fontWeight:'bold',fontSize:'20px'}}>2,345</Typography> 
    </Box>
    <Divider orientation="vertical" flexItem />
    <Box sx={{pr:7}}>
          <Typography component="div" sx={{fontSize:'17px',color:'#616161'}}> Active Subscription </Typography> 
          <Typography variant="body2" sx={{fontWeight:'bold',fontSize:'20px'}}>2,345</Typography> 
    </Box>
      {/* </CardContent> */}
    {/* </Card> */}
    </Box>

     )
    }
    
    <Typography sx={{fontWeight:900,fontSize:'17px',marginLeft:'10px',mt:10}}>Overview Of Provider</Typography>
    {isMobile ?
     (
      <Box
      sx={{
        bgcolor: "background.paper",
        width: { md: "75vw", sm: "80vw", xs: "83vw" },
        minHeight: "120px", // Ensures a consistent height for the tabs
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#ffffff", // Card color
        // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow
        borderRadius: "16px",
        borderColor: "divider",
        // pt: 3,
        // pb: 3,
        mt: 3,
        ml:1,
        p:5
        // mx: {xs: 1, md: 5}
      }}
    >
      <Box>
          <Typography component="div" sx={{fontSize:'17px',color:'#616161'}}>Total Number of Provider</Typography> 
          <Typography variant="body2" sx={{fontWeight:'bold',fontSize:'20px'}}>2,345</Typography> 
    </Box>
    <Divider orientation="vertical" flexItem />
    <Box sx={{mt:3,mb:3}}>
          <Typography component="div" sx={{fontSize:'17px',color:'#616161'}}>Total Subscription</Typography> 
          <Typography variant="body2" sx={{fontWeight:'bold',fontSize:'20px'}}>2,345</Typography> 
    </Box>
    <Divider orientation="vertical" flexItem />
    <Box sx={{pr:5}}>
          <Typography component="div" sx={{fontSize:'17px',color:'#616161'}}> Active Subscription</Typography> 
          <Typography variant="body2" sx={{fontWeight:'bold',fontSize:'20px'}}>2,345</Typography> 
    </Box>

    </Box>
     )
      :
     (
      <Box
      sx={{
        bgcolor: "background.paper",
        width: { md: "75vw", sm: "80vw", xs: "83vw" },
        minHeight: "120px", // Ensures a consistent height for the tabs
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#ffffff", // Card color
        // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow
        borderRadius: "16px",
        borderColor: "divider",
        // pt: 3,
        // pb: 3,
        mt: 2,
        ml:1,
        p:3
        // mx: {xs: 1, md: 5}
      }}
    >
      <Box sx={{pl:2}}>
          <Typography component="div" sx={{fontSize:'17px',color:'#616161'}}>Total Number of Provider</Typography> 
          <Typography variant="body2" sx={{fontWeight:'bold',fontSize:'20px'}}>2,345</Typography> 
    </Box>
    <Divider orientation="vertical" flexItem />
    <Box sx={{pr:4}}>
          <Typography component="div" sx={{fontSize:'17px',color:'#616161'}}>Total Subscription</Typography> 
          <Typography variant="body2" sx={{fontWeight:'bold',fontSize:'20px'}}>2,345</Typography> 
    </Box>
    <Divider orientation="vertical" flexItem />
    <Box sx={{pr:5}}>
          <Typography component="div" sx={{fontSize:'17px',color:'#616161'}}> Active Subscription</Typography> 
          <Typography variant="body2" sx={{fontWeight:'bold',fontSize:'20px'}}>2,345</Typography> 
    </Box>

    </Box>
     )
    }
   
    </>
  )
}

export default Dashboard