import { Box, Button, Divider, FormControl, Grid,   Select,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
// import React from 'react'
import data from '../API/SampleUser.json';
import { memo, useCallback, useRef, useState } from 'react';
// import { BsThreeDots } from "react-icons/bs";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


// For Modal Restriction Event

const AddPollDialog = memo(({ 
  open, 
  handleChange,
  options,
  questions,
  pollname,
  handlequestionChange,
  handleClose,
  handleSelectChange
}: {
  open: boolean;
  options: {
      option1: string;
      option2: string;
      option3: string;
      option4: string;
  };
  questions:string;
  pollname:string;
        handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
        handlequestionChange : (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
        handleSelectChange:(any);
        handleClose: (any)
  }) => {

    const IsformDisabled =  (options.option1 || options.option2 || options.option3 || options.option4)  && questions && pollname
 

  

  return (
      <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
      >
          <DialogTitle
              sx={{ m: 0, p: 2, fontWeight: "bold" }}
              id="customized-dialog-title"
          >
              Add Polls
          </DialogTitle>
          <Divider sx={{ borderBottom: 2, color: "#e0e0e0" }} />
          <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: 'grey.500',
              }}
          >
              <CloseIcon />
          </IconButton>
          <DialogContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 4, overflow: 'hidden' }}>
                  <Box>
                      <Typography sx={{ mb: '7px', fontWeight: 'bold' }}>Questions</Typography>
                      <TextField
                          variant='standard'
                          name="Questions"
                          // value={formData.categoryName}
                          onChange={handlequestionChange}
                          fullWidth
                          placeholder="Enter Your Questions"
                          sx={{ width: 300 }}
                      />
                  </Box>
                  
                  <Box sx={{ mr: '100px',display: 'flex', flexDirection: 'column', }}>
                      <Typography sx={{ fontWeight: 'bold', mb: '5px' }}>Poll Name</Typography>
                      <FormControl sx={{mt:1}}>
                              {/* <InputLabel>Select</InputLabel> */}
                              <Select variant="outlined" size='small' sx={{width:'219px'}} onChange={handleSelectChange}  >
                              <MenuItem value="user">Education</MenuItem>
                              <MenuItem value='provider'>Social</MenuItem>
                              </Select>
                              </FormControl>
                  </Box>
              </Box>
                    
              <Box sx={{ mt: '15px',display:'flex',flexDirection:'column',gap:2 }}>
                  <Typography sx={{ fontWeight: 'bold' }}>Options</Typography>
                  <TextField
                          variant='standard'
                          name="option1"
                          value={options.option1}
                          onChange={handleChange}
                          fullWidth
                          placeholder="Add Option 01"
                          sx={{ width: 300 }}
                      />
                    <TextField
                          variant='standard'
                          name="option2"
                          value={options.option2}
                          onChange={handleChange}
                          fullWidth
                          placeholder="Add Option 02"
                          sx={{ width: 300 }}
                      />
                      <TextField
                          variant='standard'
                          name="option3"
                          value={options.option3}
                          onChange={handleChange}
                          fullWidth
                          placeholder="Add Option 03"
                          sx={{ width: 300 }}
                      />
                      <TextField
                          variant='standard'
                          name="option4"
                          value={options.option4}
                          onChange={handleChange}
                          fullWidth
                          placeholder="Add Option 04"
                          sx={{ width: 300 }}
                      />
                      <Box sx={{display:'flex',alignItems:'center',gap:12}}>
                        <Typography>Allow Multiple Answers</Typography>
                        <FormControlLabel
                          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          label=""
                        />
                      </Box>
              </Box>
          </DialogContent>
          <DialogActions sx={{ mr: 1, mb: 1 }}>
              <Button 
                  variant='outlined' 
                  sx={{
                      minWidth: 84,
                      height: '40px',
                      padding: '7px',
                      backgroundColor: "#d40000",
                      textTransform: 'none',
                      color: 'white',
                      '&:hover': {
                          backgroundColor: "#b30000"
                      }
                  }}
                  disabled={!IsformDisabled}
                 

              >
                  Add
              </Button>
              <Button 
                  variant='outlined' 
                  sx={{
                      minWidth: 84,
                      height: '40px',
                      padding: '7px',
                      textTransform: 'none',
                      color: 'black',
                      border: '2px solid #ebebeb'
                  }} 
                  onClick={handleClose}
              >
                  Close
              </Button>
          </DialogActions>
      </BootstrapDialog>
  );
});


// Toggle Switch

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: 'red',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: '#2ECA45',
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[600],
      }),
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: '#39393D',
    }),
  },
}));




const Polls = () => {

    const Headers = [
        "Poll Name",
        "Description",
        "Create Date",
        "Request Poll",
    ];

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    

       

    // const itemsPerPage = 10;
    // const [currentPage, setCurrentPage] = useState(1);
    const [open, setOpen] = React.useState(false);
    const [eyeopen,seteyeOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
    // const [usersType,setUsersType] = React.useState(0);  
    const [buttonText, setButtonText] = useState('Accept');
    const [questions,setQuestions] = useState('');
    const[pollname,setPollName] = useState("");
    const [options,setOptions] = useState({
      option1:'',
      option2:'',
      option3:'',
      option4:'',
    })

    
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);


    
  const handleQuestionChange = (e:any) =>{
    let filteredValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setQuestions(filteredValue)
  }
    
    
  const handleClick = useCallback((event:any) => {
  setAnchorEl(event.currentTarget);
  }, []);
        
  const handleActionClose = useCallback(() => {
  setAnchorEl(null);
  }, []);
        
  const handleClickOpen = useCallback(() => {
  setOpen(true);
  }, []);
        
  const handleChange = useCallback((e:any) => {
      const { name, value } = e.target;
      console.log("nameValue",name,value)
      setOptions((prevData) => ({
        ...prevData,
            [name]: value
          }));
    },[]);
        

  
  const handleEyeClose = () => {
    seteyeOpen(false)
  }

   const handleClose = useCallback(() => {
          setOpen(false);
          setQuestions('')
          // setOptions({''})
          setPollName('')
        
      }, []);


    const handleSelectChange = (event: SelectChangeEvent<any>) => {
      console.log("Datghg",event.target.value)
      setPollName(event.target.value)
    }




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

        <AddPollDialog
          open={open}
          handleChange={handleChange}
          options={options}
          questions={questions}
          pollname={pollname}
          handlequestionChange={handleQuestionChange}
          handleClose={handleClose}
          handleSelectChange={handleSelectChange}
        
        
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