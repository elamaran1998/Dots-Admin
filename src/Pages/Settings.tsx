// import React from 'react'

import { Edit } from "@mui/icons-material"
import { Avatar, Box, Button, Chip, FormControl, IconButton, InputAdornment, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"



function Settings() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const polls = ["Education", "Social", "Studies", "Travel", "News", "Games", "History", "Business", "Quiz", "General"];



  return (
    <>
    <Box>
        <Typography sx={{ fontSize: "18px", fontWeight: 800,ml:1 }}>
                    Settings
        </Typography>

    {isMobile ?
     (
      <Box
      sx={{
        bgcolor: "background.paper",
        width: { md: "75vw", sm: "80vw", xs: "83vw" },
        minHeight: "400px", // Ensures a consistent height for the tabs
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
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
    <Box sx={{display:'grid',justifyContent:'normal'}}>
        <Box sx={{display:'grid',justifyContent:'space-between',mt:3}}>
            <Avatar sx={{ width: 50, height: 50 }}   />
            <Typography sx={{fontSize:'15px',textAlign:'center',mb:'20px'}}>Upload Image</Typography>
        </Box>
       <Box>
       <Box sx={{display:'grid'}}>
            <Typography>First Name</Typography>
            <TextField 
            // sx={{width:'520px'}}
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 <Edit />
                </InputAdornment>
              ),
            }} 
          />
          </Box>

          <Box sx={{display:'grid'}}>
            <Typography>Second Name</Typography>
            <TextField 
            // sx={{width:'520px'}}
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 <Edit />
                </InputAdornment>
              ),
            }} 
          />
          </Box>

       <Box sx={{display:'grid'}}>
            <Typography>Email</Typography>
            <TextField 
            // sx={{width:'520px'}}
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 <Edit />
                </InputAdornment>
              ),
            }} 
          />
          </Box>
       
          <Box sx={{display:'grid'}}>
            <Typography>Password</Typography>
            <TextField 
            // sx={{width:'520px'}}
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 <Edit />
                </InputAdornment>
              ),
            }} 
          />
          </Box>
       </Box>

    </Box>

    </Box>
     )
      :
     (
      <Box
      sx={{
        bgcolor: "background.paper",
        width: { md: "75vw", sm: "80vw", xs: "83vw" },
        minHeight: "400px", // Ensures a consistent height for the tabs
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
    <Box sx={{display:'flex',gap:5}}>
        <Box sx={{display:'grid',justifyContent:'space-between',mt:3}}>
            <Avatar sx={{ width: 120, height: 120 }}   />
            <Typography sx={{fontSize:'15px',textAlign:'center',mb:'40px'}}>Upload Image</Typography>
        </Box>
        {/* <Box>
        <Typography>First Name</Typography>
        <TextField variant="standard" sx={{backgroundColor:'#f0f0f0'}} 
        InputProps={{
            disableUnderline: true, // Removes the underline
          }}
        />
        </Box> */}
       <Box sx={{ml:8,display:'grid',mt:4}}>
       <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)', // Creates two equal columns
            // gap: 1, // Adjust spacing between grid items
            mb: 2,
            ml:1
          }}>
            <Typography>First Name</Typography>
            <TextField 
            variant="outlined" 
            size="small" 
            fullWidth
            sx={{width:'250%',ml:'-45px'}} 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 <Edit />
                </InputAdornment>
              ),
            }}
          />
       </Box>
       <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)', // Creates two equal columns
            // gap: 1, // Adjust spacing between grid items
            mb: 2,
            ml:1
          }}>
            <Typography>Second Name</Typography>
            <TextField 
            sx={{width:'250%',ml:'-45px'}}
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 <Edit />
                </InputAdornment>
              ),
            }}
          />
       </Box>
       <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)', // Creates two equal columns
            // gap: 1, // Adjust spacing between grid items
            mb: 2,
            ml:1

          }}>
            <Typography>Email Name</Typography>
            <TextField 
            sx={{width:'250%',ml:'-45px'}}
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 <Edit />
                </InputAdornment>
              ),
            }}
          />
       </Box>
       
       <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)', // Creates two equal columns
            // gap: 3, // Adjust spacing between grid items
            mb: 2,
            ml:1
          }}>
            <Typography>Phone Number</Typography>
            <TextField 
            sx={{width:'250%',ml:'-45px'}}
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 <Edit />
                </InputAdornment>
              ),
            }}
          />
       </Box>
       </Box>

    </Box>

    </Box>
     )
      
      }
   


{/* Login Info */}
    <Box
      sx={{
        bgcolor: "background.paper",
        width: { md: "75vw", sm: "80vw", xs: "83vw" },
        minHeight: "300px", // Ensures a consistent height for the tabs
        display: "flex",
        flexDirection: "column",
        justifyContent:'center',
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
      {isMobile ?
       (
        <Box sx={{ mt: 3,gap:1, display:'grid',justifyContent:'space-between'}}>
            <Box sx={{display:'grid'}}>
            <Typography>Email</Typography>
            <TextField 
            // sx={{width:'520px'}}
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
            disableUnderline: true, // Removes the underline
          }} 
          />
          </Box>
          <Box sx={{display:'grid'}}>
            <Typography>Password</Typography>
            <TextField 
            // sx={{width:'520px'}}
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
            disableUnderline: true, // Removes the underline
          }} 
          />
          </Box>
          <Box sx={{textAlign:'center',pl:0,mt:2}}>
            <Button variant="contained" color="error">Change Password</Button>
          </Box>

      </Box>
       )
      :
        (
          <Box sx={{p: 3, mt: 3,gap:3,display:'grid',alignContent:'center',alignItems:'center',justifyContent:'space-between'}}>
            <Box sx={{display:'flex',gap:15,ml:27}}>
            <Typography>Email</Typography>
            <TextField 
            sx={{width:'520px'}}
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
            disableUnderline: true, // Removes the underline
          }} 
          />
          </Box>
          <Box sx={{display:'flex',gap:11,ml:27}}>
            <Typography>Password</Typography>
            <TextField 
            sx={{width:'520px'}}
            variant="outlined" 
            size="small" 
            fullWidth 
            InputProps={{
            disableUnderline: true, // Removes the underline
          }} 
          />
          </Box>
          <Box sx={{textAlign:'center',pl:5}}>
            <Button variant="contained" color="error">Change Password</Button>
          </Box>

      </Box>
        )
        
        }
      









     
     
    </Box>


    {/* POlls Name */}
    <Box
      sx={{
        bgcolor: "background.paper",
        width: { md: "75vw", sm: "80vw", xs: "83vw" },
        minHeight: "200px", // Ensures a consistent height for the tabs
        display: "flex",
        flexDirection: "column",
        // justifyContent:'center',
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
        <Box sx={{display:'flex',justifyContent:'space-between',gap:4}}>
          <Typography sx={{fontWeight:'bold'}}>Polls Name</Typography>
          <Button color="error">+ Add New</Button>
        </Box>
        <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
        {polls.map((poll, index) => (
          <Chip
            key={index}
            label={
              <Box display="flex" alignItems="center">
                {poll}
                <IconButton size="medium" sx={{ ml: 1 }}>
                  <Edit fontSize="small" />
                </IconButton>
              </Box>
            }
            sx={{ padding: "10px 12px", fontSize: "14px", borderRadius: "8px", cursor: "pointer" }}
          />
        ))}
      </Box>
    </Box>



    </Box>

    
    </> 
  )
  
}

export default Settings