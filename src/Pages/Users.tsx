import { Box, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
// import React from 'react'
import data from '../API/SampleUser.json';
import { useEffect } from 'react';
import { BsThreeDots } from "react-icons/bs";
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
// import SelectInput from '@mui/material/Select/SelectInput';
// import { Theme, useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import { SelectChangeEvent } from '@mui/material/Select';
// import axios from 'axios';
import { FetchUsers } from '../API/api';


// import { Button, Input } from '@mui/material';

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

  const [Users,setUsers] = React.useState<UsersData[]>([])


  // const handleChange = (event: SelectChangeEvent<typeof personName>) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };

    



  

  
  

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

  

  // const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  //   '& .MuiDialogContent-root': {
  //     padding: theme.spacing(2),
  //   },
  //   '& .MuiDialogActions-root': {
  //     padding: theme.spacing(1),
  //   },
  // }));

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
                    <TableCell sx={{ border:'1px solid #ebebeb', borderCollapse:'collapse'}}>eye</TableCell>

                    <TableCell>
                      <BsThreeDots size={25} color="#707070" />
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