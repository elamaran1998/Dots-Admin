// import React from 'react'

import { Avatar, Box, Button, FormControl, TextField, Typography } from "@mui/material"



function Settings() {
  return (
    <>
    <Box>
        <Typography sx={{ fontSize: "18px", fontWeight: 800,ml:1 }}>
                    Settings
        </Typography>

  
    <Box
      sx={{
        bgcolor: "background.paper",
        width: { md: "75vw", sm: "80vw", xs: "83vw" },
        minHeight: "400px", // Ensures a consistent height for the tabs
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-between",
        backgroundColor: "#ffffff", // Card color
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow
        borderRadius: "16px",
        borderColor: "divider",
        pt: 3,
        pb: 3,
        mt: 3,
        ml:1,
        p:3
        // mx: {xs: 1, md: 5}
      }}
    >
    <Typography sx={{fontWeight:'bold',fontSize:'19px'}}>General</Typography>
    <Typography sx={{fontSize:'15px',mt:1,color:'#7d7d7d'}}>Information about your account</Typography>
    <Box sx={{display:'flex',justifyContent:'space-between',gap:1}}>
        <Box sx={{display:'grid',justifyContent:'space-between',gap:2,mt:3}}>
            <Avatar sx={{ width: 120, height: 120 }}   />
            <Typography sx={{fontSize:'15px',textAlign:'center'}}>Upload Image</Typography>
        </Box>
        {/* <Box>
        <Typography>First Name</Typography>
        <TextField variant="standard" sx={{backgroundColor:'#f0f0f0'}} 
        InputProps={{
            disableUnderline: true, // Removes the underline
          }}
        />
        </Box> */}
       <Box sx={{marginRight:50}}>
       <Box sx={{display:'flex',justifyContent:'space-between',gap:3,minWidth:100}}>
            <Typography>First Name</Typography>
            <TextField 
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
            disableUnderline: true, // Removes the underline
          }} 
          />
       </Box>
       <Box sx={{display:'flex',justifyContent:'center',gap:2}}>
            <Typography>Second Name</Typography>
            <TextField 
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
            disableUnderline: true, // Removes the underline
          }} 
          />
       </Box>
       <Box sx={{display:'flex',justifyContent:'center',gap:2}}>
            <Typography>Email Name</Typography>
            <TextField 
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
            disableUnderline: true, // Removes the underline
          }} 
          />
       </Box>
       
       <Box sx={{display:'flex',justifyContent:'center',gap:2}}>
            <Typography>Phone Number</Typography>
            <TextField 
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
            disableUnderline: true, // Removes the underline
          }} 
          />
       </Box>
       </Box>

    </Box>

    </Box>


{/* Login Info */}
    <Box
      sx={{
        bgcolor: "background.paper",
        width: { md: "75vw", sm: "80vw", xs: "83vw" },
        minHeight: "300px", // Ensures a consistent height for the tabs
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-between",
        backgroundColor: "#ffffff", // Card color
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow
        borderRadius: "16px",
        borderColor: "divider",
        pt: 3,
        pb: 3,
        mt: 3,
        ml:1,
        p:3
        // mx: {xs: 1, md: 5}
      }}
    >
     <Typography sx={{fontWeight:'bold',fontSize:'19px'}}>Login Info</Typography>
     <Typography sx={{fontSize:'15px',mt:1,color:'#7d7d7d'}}>The Credentials for Authorization</Typography>
     
     <Box sx={{display:'grid',justifyContent:'center',gap:2}}>
      <FormControl  sx={{ display: 'flex', flexDirection: 'row', gap: 2, marginBottom: 2 }}>
        <Typography>Email</Typography>
        <TextField sx={{width:400,backgroundColor:'#f0f0f0'}} id="email" type="email" />
      </FormControl>
      <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
      <Typography>Password</Typography>
        <TextField sx={{width:400,backgroundColor:'#f0f0f0'}} id="password" type="password" />
      </FormControl>
      <Button variant='contained' sx={{width:'50px'}}>Change Password</Button>
    </Box>

    </Box>



    </Box>
    </> 
  )
}

export default Settings