import { Box, Button, Divider, FormControl, Grid, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, TextField, Typography } from '@mui/material'
// import React from 'react'
import data from '../API/SampleUser.json';
// import { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React, { memo, useCallback } from 'react';
// import SelectInput from '@mui/material/Select/SelectInput';
// import { Theme, useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import { SelectChangeEvent } from '@mui/material/Select';

import Tab from '@mui/material/Tab';
import ActionMenu from '../Components/Common/ActionMenu';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
        
// import { Button, Input } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));



const AddSubscriptionDialog = memo(({ 
  open, 
  onClose, 
  formData, 
  onInputChange,
  handleChange,
  Type
}: {

      open: boolean;
      onClose: () => void;
      Type:string;
      formData: {
          ModelName: string;
          Plan: string;
          subscriptionAmount:string;
      };
      onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
      handleChange:(any)
  
}) => {


  
  const IsFormValidate = formData.ModelName && formData.Plan && formData.subscriptionAmount && Type
  

  return (
    <BootstrapDialog
    onClose={onClose}
    aria-labelledby="customized-dialog-title"
    open={open}
  >
    <DialogTitle
      sx={{ m: 0, p: 2, fontWeight: "bold" }}
      id="customized-dialog-title"
    >
      Add Subscription
    </DialogTitle>
    <Divider sx={{ borderBottom: 2, color: "#e0e0e0" }} />
    <IconButton
      aria-label="close"
      onClick={onClose}
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
          mt:3
        }}
      >
        <Box>
                        <Typography sx={{fontWeight:'bold'}}>Model</Typography>
                        <FormControl sx={{mt:1}}>
                        <TextField 
                            id="outlined-basic" 
                            name='ModelName' 
                            value={formData.ModelName}
                            variant="outlined" 
                            placeholder='Add subscription' 
                            style={{width:'100%'}} 
                            size="small" 
                            onChange={onInputChange}
                          />
                        </FormControl>
        </Box>

        <Box>
                        <Typography sx={{fontWeight:'bold'}}>Plan</Typography>
                        <FormControl sx={{mt:1}}>
                        <TextField 
                          id="outlined-basic" 
                          name='Plan' 
                          value={formData.Plan}
                          variant="outlined" 
                          placeholder='Duration' 
                          style={{width:'100%'}} 
                          size="small" 
                          onChange={onInputChange}
                          />
                        
                        </FormControl>
        </Box>
        
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          overflow: "hidden",
          mt:4
        }}
      >
        <Box>
                        <Typography sx={{fontWeight:'bold'}}>Subscription Amount</Typography>
                        <FormControl sx={{mt:1}}>
                        <TextField 
                        id="outlined-basic" 
                        name='subscriptionAmount'
                        value={formData.subscriptionAmount}
                        variant="outlined" 
                        placeholder='Subscription Amount' 
                        style={{width:'100%'}} 
                        size="small"
                        onChange={onInputChange} 
                        />
                        
                        </FormControl>
        </Box>

        <Box>
                        <Typography sx={{fontWeight:'bold'}}>Type</Typography>
                        <FormControl sx={{mt:1}}>
                        {/* <InputLabel>Select</InputLabel> */}
                        <Select variant="outlined" size='small' sx={{width:'219px'}} onChange={handleChange} value={Type} >
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value='provider'>Provider</MenuItem>
                        </Select>
                        </FormControl>
        </Box>
        
      </Box>
    </DialogContent>
    <DialogActions sx={{ mr: 1, mb: 2,mt:2 }}>
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
        disabled={!IsFormValidate}
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
        onClick={onClose}
      >
        Close
      </Button>
    </DialogActions>
  </BootstrapDialog>
  );
});


const Subscription = () => {

    const Headers = [
        "Name",
        "Plan",
        "Subscription Amt",
        "Action"
    ];

    // const ITEM_HEIGHT = 48;
    // const ITEM_PADDING_TOP = 8;
    // const MenuProps = {
    //   PaperProps: {
    //     style: {
    //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    //       width: 250,
    //     },
    //   },
    // };

    // const names = [
    //   'Oliver Hansen',
    //   'Van Henry',
    //   'April Tucker',
    //   'Ralph Hubbard',
    //   'Omar Alexander',
    //   'Carlos Abbott',
    //   'Miriam Wagner',
    //   'Bradley Wilkerson',
    //   'Virginia Andrews',
    //   'Kelly Snyder',
    // ];

    // const itemsPerPage = 10;
    // const [currentPage, setCurrentPage] = useState(1);
    const [open, setOpen] = React.useState(false);
    const [eyeopen,seteyeOpen] = React.useState(false);
    const [usersType,setUsersType] = React.useState(0);
    const [formData, setFormData] = React.useState({
            ModelName: '',
            Plan: '',
            subscriptionAmount:'',
        });
    const [Type,setType] = React.useState('')
    



  

   // @ts-ignore
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setUsersType(newValue);
  };

  
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { name, value } = e.target;
          console.log(name,value,"Sasas")
  
          const filteredValue = ( (name === 'subscriptionAmount' )  ? value.replace(/[^0-9]/g, '')  : value.replace(/[^a-zA-Z0-9\s]/g, '')  );
  
          setFormData(prev => ({
              ...prev,
              [name]: filteredValue
          }));
  }, []);

 const handleChange = (event: SelectChangeEvent<any>) => {
     // event.preventDefault()
     let value = event.target.value;
     setType(value);
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

  // function getStyles(name: string, personName: string[], theme: Theme) {
  //   return {
  //     fontWeight: personName.includes(name)
  //       ? theme.typography.fontWeightMedium
  //       : theme.typography.fontWeightRegular,
  //   };
  // }

  




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

  console.log("userType",usersType)

  const handleView = (row: any) => {
    console.log('View:', row);
  };

  const handleDelete = (row: any) => {
    console.log('Delete:', row);
  };


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
            Subscription
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{
              mr: "40px",
              // marginLeft: "10px",
              textTransform: "none",
              fontSize: "16px",
              marginTop: "10px",
            }}
            onClick={handleClickOpen}
          >
            + Add Subscription
          </Button>
        </Box>
        {/* <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent:"normal",
            mb: 1,
            ml:1,
            flexDirection: { xs: "row", sm: "row" },
            gap: 4,
            // mb:1,
          }}>
            <Typography 
                sx={{
                fontSize:'17px',
                cursor:'pointer',
                
            }}
            // onclick={handleTabChange}
            // onCli={handleTabChange}
            >
            User
            </Typography>
            <Typography sx={{fontSize:'17px',cursor:'pointer'}}>Provider</Typography>
        </Box> */}
       
        <Tabs
          value={usersType}
          onChange={handleTabChange}
          // centered
          sx={{
            pb: 2,
            mr:2,
            textTransform:'none',
            "& .MuiTabs-indicator": {
              backgroundColor: "red", // Custom underline color
            },
          }}
        >
          <Tab
            label="User"
            sx={{
              color: "black",
              textTransform:'none',
              fontSize:'17px',
              "&.Mui-selected": {
                color: "red", // Ensure selected tab color stays the same
              },
            }}
          />
          <Tab
            label="Provider"
            sx={{
              color: "black",
              fontSize:'17px',
              textTransform:'none',
              "&.Mui-selected": {
                color: "red", // Ensure selected tab color stays the same
              },
            }}
          />
        </Tabs>
      



      </Box>
      <Box>
        {/* Add content Button with Modal */}

        <AddSubscriptionDialog
          open={open}
          onClose={handleClose}
          formData={formData}
          Type={Type}
          onInputChange={handleInputChange}
          handleChange={handleChange} 
        />


        

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
                      // borderRight: "2px solid #ebebeb",
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
                    <TableCell sx={{pl:'50px',border:'1px solid #ebebeb', borderCollapse:'collapse'}}>{item.Name}</TableCell>
                    <TableCell sx={{pl:'50px',border:'1px solid #ebebeb', borderCollapse:'collapse'}}>{item["phone number"]}</TableCell>
                    <TableCell sx={{pl:'50px',border:'1px solid #ebebeb', borderCollapse:'collapse'}}>3,456</TableCell>
                    <TableCell sx={{ pl:'50px',border: '1px solid #ebebeb', borderCollapse: 'collapse' }}>
                                              <ActionMenu
                                                onView={() => handleView(item.No)}
                                                onDelete={() => handleDelete(item.No)}         
                                              />
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

export default Subscription