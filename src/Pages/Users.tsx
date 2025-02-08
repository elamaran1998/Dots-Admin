import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, Menu, MenuItem, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
// import React from 'react'
// import data from '../API/SampleUser.json';
import {  useEffect, useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import React from 'react';
import { FetchUsers } from '../API/api';
import eye from "../assets/eye/eye.png";
import { styled } from '@mui/material/styles';
// import { Theme, useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ActionMenu from '../Components/Common/ActionMenu';



interface UsersData {
  ID: String;
  Full_name:String;
  Email_Address:String;
  Password:String;
  Phone_number:String;
  Role_ID:String;
  User_ID:String;
  profile_img:string;
  isLogin:Number;
  fcm_token:String;
}

const UsersList = () => {

    const Headers = [
        "S.No",
        "Name",
        "Reg.Date",
        "Phone Number",
        "Email_ID",
        "User Address",
        "Subscription Status",
        "Subscription History",
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

  
    // const itemsPerPage = 10;
    // const [currentPage, setCurrentPage] = useState(1);
    // const [open, setOpen] = React.useState(false);



    // Select Element

  // const theme = useTheme();
  // const [personName, setPersonName] = React.useState<string[]>([]);

  const [Users,setUsers] = React.useState<UsersData[]>([]);
  const [eyeopen,seteyeOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const Actionopen = Boolean(anchorEl);
  const [selectedRow, setSelectedRow] = useState<any>(null);




const handleEyeOpen = () => {
  seteyeOpen(true)
}
    
const handleEyeClose = () => {
  seteyeOpen(false)
}

const handleClick = (event:any,row:any) => {
  console.log(event.target.value,"dadad")
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
    };

const handleActionClose = () => {
        setAnchorEl(null);
    };


  

  
  

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };  

  // function getStyles(name: string, personName: string[], theme: Theme) {
  //   return {
  //     fontWeight: personName.includes(name)
  //       ? theme.typography.fontWeightMedium
  //       : theme.typography.fontWeightRegular,
  //   };
  // }

  const handleView = (row: any) => {
    console.log('View:', row);
  };

  const handleDelete = (row: any) => {
    console.log('Delete:', row);
  };

  

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

  useEffect(()=>{
    const fetchData = async() => {
      const response = await FetchUsers();
      setUsers(response.data)
      console.log(response.data,"DDDD1",)  
    }
    fetchData()
  },[])




  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
            flexDirection: { xs: "row", sm: "row" },
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: 800,ml:1 }}>
            Users
          </Typography>
          
        </Box>
      </Box>
      <Box>
        {/* Add content Button with Modal */}


        {/* Eye Open Modal */}

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
          <Table
            stickyHeader
            sx={{ margin: "20px" }}
          >
            <TableHead>
              <TableRow>
                {Headers.map((column: any) => (
                  <TableCell
                    key={column}
                    sx={{
                      fontWeight: 700,
                      // whiteSpace: "nowrap",
                      backgroundColor: "#f5f4f2",
                      color: "black",
                      fontSize: "17px",
                      // borderRight: "3px solid #f0f0f0",
                      wordWrap: "break-word",
                      position:'sticky',
                      // padding:'7px',
                      padding: "8px 12px",
                      width:'100px',
                      zIndex:1,
                      textAlign:'center',
                      border:'1px solid #ebebeb', 
                      borderCollapse:'collapse',
                    }}
                  >
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: "#ffffff",textAlign:'center' }}>
              {Users.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={Headers.length}
                    align="center"
                    sx={{ py: 8 }}
                  >
                    <Typography color="text.secondary">
                      No Users found
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                Users.map((item) => (
                  <TableRow  sx={{textAlign:'center',justifyContent:'center',border:'1px solid red',overflow:'auto'}}>

                    <TableCell sx={{ border:'1px solid #ebebeb', borderCollapse:'collapse'}}>
                    {item.ID}
                    </TableCell>
                    <TableCell sx={{ border:'1px solid #ebebeb', borderCollapse:'collapse'}}>{item.Full_name}</TableCell>
                    <TableCell sx={{ border:'1px solid #ebebeb', borderCollapse:'collapse'}}>
                      <img
                        src={item.profile_img}
                        style={{ height: "20px", width: "20px" }}
                      ></img>
                    </TableCell>
                    <TableCell sx={{ border:'1px solid #ebebeb', borderCollapse:'collapse'}}>{item.Phone_number}</TableCell>
                    <TableCell sx={{ border:'1px solid #ebebeb', borderCollapse:'collapse'}}>{item.Email_Address}</TableCell>
                    <TableCell sx={{ border:'1px solid #ebebeb', borderCollapse:'collapse'}}>{item.User_ID}</TableCell>
                    <TableCell sx={{fontSize:'17px',border:'1px solid #ebebeb', borderCollapse:'collapse'}}>Active</TableCell>
                    <TableCell sx={{ border:'1px solid #ebebeb', borderCollapse:'collapse',cursor:'pointer'}}><img src={eye} height={20} width={20} onClick={handleEyeOpen} /></TableCell>

                    <TableCell sx={{pl:'40px', border: '1px solid #ebebeb', borderCollapse: 'collapse' }}>
                    <ActionMenu
                     onView={() => handleView(item.ID)}
                      onDelete={() => handleDelete(item.ID)}
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
          <Pagination
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
          />
        </Box>
      </Box>
    </>
  );
}

export default UsersList