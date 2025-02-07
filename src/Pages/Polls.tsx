import { Box, Button, Divider, FormControl, Grid,  Input,  Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
// import React from 'react'
import data from '../API/SampleUser.json';
import { useState } from 'react';
// import { BsThreeDots } from "react-icons/bs";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
// import SelectInput from '@mui/material/Select/SelectInput';
import { Theme, useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
// import eye from "../assets/eye/eye.png"
import done from "../assets/AcceptRejectIcons/done.png";
import cross from "../assets/AcceptRejectIcons/cross.png";

// import PollActions from './PollsAction';
// import { Button, Input } from '@mui/material';

const Polls = () => {

    const Headers = [
        "Poll Name",
        "Description",
        "Create Date",
        "Request Poll",
    ];

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };

    const names = [
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Ralph Hubbard',
      'Omar Alexander',
      'Carlos Abbott',
      'Miriam Wagner',
      'Bradley Wilkerson',
      'Virginia Andrews',
      'Kelly Snyder',
    ];


    

    // const itemsPerPage = 10;
    // const [currentPage, setCurrentPage] = useState(1);
    const [open, setOpen] = React.useState(false);
    const [eyeopen,seteyeOpen] = React.useState(false);
    // const [usersType,setUsersType] = React.useState(0);  
    const [buttonText, setButtonText] = useState('Accept');




    // Select Element

  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);


  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // const handleTabChange = ( newValue: number) => {
  //   setUsersType(newValue)
  // }

  const handleClick = () => {
    setButtonText('Accepted');
  };

  

  
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };  

  // const handleEyeOpen = () =>{
  //   seteyeOpen(true)
  // }

  const handleEyeClose = () => {
    seteyeOpen(false)
  }

  function getStyles(name: string, personName: string[], theme: Theme) {
    return {
      fontWeight: personName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }

  

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));


  const planHistory = [
    { 
      title: "Home Cleaning", 
      date: "12/12/2024 to 05/03/2025", 
      subscription: "Carpet Cleaning", 
      status: "Current" 
    },
    { 
      title: "Electronics", 
      date: "05/05/2024 to 08/08/2024", 
      subscription: "Carpet Cleaning", 
      status: "Expired" 
    },
    { 
      title: "Home Appliance", 
      date: "03/03/2024 to 04/04/2024", 
      subscription: "Carpet Cleaning", 
      status: "Expired" 
    },
    { 
      title: "Plumbing", 
      date: "02/01/2024 to 14/03/2024", 
      subscription: "Carpet Cleaning", 
      status: "Expired" 
    },
  ];



  return (
    <>
      {/* <Box display="flex" alignItems="center" justifyContent="space-between">
             <Typography style={{ marginRight: '20px', fontSize:'18px',fontWeight:800, }}>Service Category</Typography> 
             <Button variant="contained" color="primary"> Click Me </Button>
         </Box> */}
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
            flexDirection: { xs: "row", sm: "row" },
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: 800, ml: 1 }}>
            Polls Request
          </Typography>
          <Button
                      variant="contained"
                      color="error"
                      sx={{
                        mr: "90px",
                        // marginLeft: "10px",
                        textTransform: "none",
                        fontSize: "16px",
                        marginTop: "10px",
                      }}
                      onClick={handleClickOpen}
                    >
                      + Add Polls
            </Button>
        </Box>
        
    



      </Box>
      <Box>
        {/* Add content Button with Modal */}

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          // sx={{pa}}
        >
          <DialogTitle
            sx={{ m: 0, p: 2, fontWeight: "bold" }}
            id="customized-dialog-title"
          >
            Add category
          </DialogTitle>
          <Divider sx={{ borderBottom: 2, color: "#e0e0e0" }} />
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>

          <DialogContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                overflow: "hidden",
              }}
            >
              <Box>
                <Typography sx={{ mb: "7px", fontWeight: "bold" }}>
                  Category
                </Typography>
                {/* Select Element */}
                <FormControl sx={{ width: 300 }}>
                  {/* <InputLabel>Name</InputLabel> */}
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={personName}
                    onChange={handleChange}
                    // input={<OutlinedInput />}
                    MenuProps={MenuProps}
                    sx={{ height: "40px" }}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ mr: "100px" }}>
                <Typography sx={{ fontWeight: "bold", mb: "5px" }}>
                  Upload Image
                </Typography>
                <Input
                  // accept="*"
                  id="file-input"
                  type="file"
                  style={{ display: "none" }}
                  // onChange={handleFileChange}
                />
                <Button
                  sx={{
                    color: "#1f1f1f",
                    backgroundColor: "#f2f2f2",
                    textTransform: "none",
                    p: "10px",
                    border: "1px solid #fafafa ",
                  }}
                  component="span"
                >
                  Choose File
                </Button>
              </Box>
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Description</Typography>
              <TextField
                label="Enter your description"
                multiline
                rows={4}
                variant="outlined"
                // value={value}
                // onChange={onChange}
                fullWidth
                // sx={{mt:'5px'}}
              />
            </Box>
          </DialogContent>
          <DialogActions sx={{ mr: 1, mb: 1 }}>
            <Button
              variant="outlined"
              sx={{
                minWidth: 84,
                height: "40px",
                padding: "7px",
                backgroundColor: "#d40000",
                textTransform: "none",
                color: "white",
              }}
            >
              Add
            </Button>
            <Button
              variant="outlined"
              sx={{
                minWidth: 84,
                height: "40px",
                padding: "7px",
                textTransform: "none",
                color: "black",
                border: "2px solid #ebebeb",
              }}
              onClick={handleClose}
            >
              Close
            </Button>
          </DialogActions>
        </BootstrapDialog>

        {/* Action Eye Modal */}

        <BootstrapDialog
          onClose={handleEyeClose}
          aria-labelledby="customized-dialog-title"
          open={eyeopen}
          // sx={{pa}}
        >
          <DialogTitle
            sx={{ m: 0, p: 2, fontWeight: "bold" }}
            id="customized-dialog-title"
          >
            User Plan History
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleEyeClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
          <Divider sx={{ borderBottom: 2, color: "#e0e0e0" }} />

          <DialogContent>
            <Box
              sx={{
                display: "flex",
                flexWrap:'wrap',
                justifyContent:'space-between',
                flexDirection:'row',
                alignItems: "center",
                // gap: 10,
                // overflow: "hidden",
              }}
            > 
            {planHistory.map((plan, index) => (
          <Grid container spacing={2} key={index} sx={{ width:'50%' , marginBottom: 2 }}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                {index + 1}. {plan.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                <strong>Date:</strong> {plan.date}
              </Typography>
              <Typography variant="body2">
                <strong>Subscription:</strong> {plan.subscription}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: plan.status === "Current" ? "green" : "red",
                }}
              >
                <strong>Status:</strong> {plan.status}
              </Typography>
            </Grid>
          </Grid>
        ))}

            </Box>

           
          </DialogContent>
          <DialogActions sx={{ mr: 1, mb: 1 }}>
            <Button
              variant="outlined"
              sx={{
                minWidth: 84,
                height: "40px",
                padding: "7px",
                textTransform: "none",
                color: "black",
                border: "2px solid #ebebeb",
              }}
              onClick={handleEyeClose}
            >
              Close
            </Button>
          </DialogActions>
        </BootstrapDialog>



        <TableContainer>
          <Table stickyHeader sx={{ margin: "20px"}}>
            <TableHead>
              <TableRow>
                {Headers.map((column: any) => (
                  <TableCell
                    key={column}
                    sx={{
                      fontWeight: 700,
                      //   whiteSpace: "nowrap",
                      backgroundColor: "#f5f4f2",
                      color: "black",
                      fontSize: "17px",
                      borderRight: "2px solid #ebebeb",
                      wordWrap: "break-word",
                      position: "sticky",
                      padding: "7px",
                      pl:'50px',
                    //   width: "100px",
                      zIndex: 1,
                      border:'1px solid #ebebeb', 
                      borderCollapse:'collapse'

                    //   textAlign: "center",
                    }}
                  >
                    {column}
                  </TableCell>
                ))}
                {/* <Divider sx={{backgroundColor:'red'}} /> */}
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: "#ffffff",border: "1px solid black",borderCollapse:'collapse' }}>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={Headers.length}
                    sx={{ py: 8 }}
                  >
                    <Typography color="text.secondary">
                      No bookings found
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                data.map((item) => (
                  <TableRow
                    key={item.No}
                  >
                    <TableCell sx={{pl:'50px',border:'0.5px solid #ebebeb', borderCollapse:'collapse'}}>{item.Name}</TableCell>
                    <TableCell sx={{pl:'50px',border:'0.5px solid #ebebeb', borderCollapse:'collapse'}}>{item["phone number"]}</TableCell>
                    <TableCell sx={{pl:'50px',border:'0.5px solid #ebebeb', borderCollapse:'collapse'}}>3,456</TableCell>
                    <TableCell sx={{pl:'50px',border:'0.5px solid #ebebeb', borderCollapse:'collapse'}}>
                    <Stack direction="row" spacing={3}>
                    <Button
                    startIcon={
                        <img src={done} height={30} width={30} />
                    }
                    sx={{fontSize:'15px',textTransform:'none',fontWeight:'bold',color:'green',padding:'0px'}}
                    onClick={handleClick}
                  >
                    {buttonText}
                  </Button>
                  <Button
                    startIcon={
                        <img src={cross} height={20} width={20} />
                    }
                    sx={{fontSize:'15px',textTransform:'none',fontWeight:'bold',color:'red',padding:'0px'}}
                    // onClick={() => handleAccept(row.id)}
                  >
                    Reject
                  </Button>
                </Stack>

                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
            ml: 10,
          }}
        >
          {/* <Pagination
            sx={{
              textAlign: "right",
              alignItems: "right",
              // margin:'20px 0 0 1000px',
              ".MuiPaginationItem-root": {
                color: "green", // Text color for all items
                "&:hover": {
                  backgroundColor: "#E6F4EA", // Hover background color
                },
              },
              ".Mui-selected": {
                backgroundColor: "red !important", // Background color for selected item
                color: "#FFFFFF", // Text color for selected item
              },
            }}
          /> */}
        </Box>
      </Box>
    </>
  );
}

export default Polls