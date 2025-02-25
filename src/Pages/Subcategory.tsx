import { Box, Button, Divider, FormControl, Menu, Pagination, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
// import React from 'react'
// import data from '../API/Sample_data.json';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
// import SelectInput from '@mui/material/Select/SelectInput';
// import { Theme, useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import { FetchSubCategory } from '../API/api';
import ActionMenu from '../Components/Common/ActionMenu';
// import { Button, Input } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const AddSubCategoryDialog = memo(({ 
  open, 
  onClose, 
  formData,
  category,
  handleChange, 
  onInputChange, 
  onFileChange, 
  fileInputRef ,
 
}: {
  open: boolean;
  onClose: () => void;
  formData: {
      subcategory: string;
      description: string;
      file: File | null;
  };
  category:string;
  handleChange:(any)
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  // handleAddcategory:(any)
}) => {


  const handleFileClick = () => {
      fileInputRef.current?.click();
  };

  
  const IsformDisabled = formData.subcategory && formData.description && formData.file 

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
      Edit Sub Category
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


      <Box sx={{ display: "flex", alignItems: "center", gap: 4, overflow:'hidden' }}>

        <Box>
        <Typography sx={{mb:'7px',fontWeight:'bold'}}>Category</Typography>
        {/* Select Element */}
        <FormControl sx={{  width: 250 }}>
          {/* <InputLabel>Name</InputLabel> */}
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={category}
            size='small'
            onChange={handleChange}
            // input={<OutlinedInput />}
            // MenuProps={MenuProps}
            sx={{height:'40px'}}
          >
            
          </Select>
        </FormControl>
        </Box>

        <Box>
          <Typography sx={{fontWeight:'bold'}}>SubCategory</Typography>
          <FormControl sx={{mt:1}}>
          <TextField 
              id="outlined-basic" 
              name="subcategory" 
              variant="outlined" 
              style={{width:'100%'}} 
              size="small" 
              onChange={onInputChange}
              value={formData.subcategory}
              placeholder='Enter Subcategory'
           />
          
          </FormControl>
        </Box>
        
      </Box>
        <Box sx={{ mr: '100px',mt:4, mb:5, flexDirection: 'column' }}>
                                <Typography sx={{ fontWeight: 'bold', mb: '5px' }}>Upload Image</Typography>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={onFileChange}
                                />
                                <Button 
                                    onClick={handleFileClick}
                                    sx={{
                                        color: '#1f1f1f',
                                        backgroundColor: '#f2f2f2',
                                        textTransform: 'none',
                                        p: '10px',
                                        border: '1px solid #fafafa',
                                        '&:hover': {
                                            backgroundColor: '#e5e5e5'
                                        }
                                    }}
                                >
                                    Choose File
                                </Button>
                                {formData.file && (
                            <Typography sx={{ fontSize: '13px', mt: '5px',ml:'20px' }}>
                                {formData.file.name}
                            </Typography>
                        )}
                            </Box>
        
        <Box sx={{mt:'15px'}}>
        <Typography sx={{fontWeight:'bold'}}>Description</Typography>
        <TextField
          // label="Enter your description"
          placeholder='Enter Your description'
          multiline
          rows={4}
          variant="outlined"
          name="description"
          value={formData.description}
          onChange={onInputChange}
          fullWidth
          // sx={{mt:'5px'}}
          />
        </Box>

        
    </DialogContent>
    <DialogActions sx={{mr:1,mb:1}}>
      <Button 
        variant='outlined'
        disabled={!IsformDisabled}
         sx={{minWidth:84,height:'40px',padding:'7px',backgroundColor:"#d40000",textTransform:'none',color:'white'}}>
          Add
        </Button>
      <Button 
        variant='outlined' 
        sx={{minWidth:84,height:'40px',padding:'7px',textTransform:'none',color:'black',border:'2px solid #ebebeb'}} 
        onClick={onClose}>
        Close
      </Button>
    </DialogActions>
  </BootstrapDialog>
  );
});








const SubCategory = () => {

    const Headers = [
        "Category Name",
        "Sub Category",
        "Image",
        "Category_ID",
        "Description",
        "Action"
    ];

    interface SubCategory {
      id: String;
      sub_id:String;
      sub_category_name:String;
      upload_image:string;
      description:String;
      isActive:String;
      CreateAt:String;
      UpdateAt:String;
      isLogin:Number;
      fcm_token:String;
    }


    // const ITEM_HEIGHT = 48;
    // const ITEM_PADDING_TOP = 8;
    

    

    // const itemsPerPage = 10;
    // const [currentPage, setCurrentPage] = useState(1);
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const Actionopen = Boolean(anchorEl);
    // const theme = useTheme();
   
    const [SubCategory,setSubcategory] = useState<SubCategory[]>([])
    const [formData, setFormData] = useState({
            subcategory:'',
            description: '',
            file: null as File | null
    });
    const [category,setCategory] = useState('');
    


  const handleClick = useCallback((event:any) => {

    requestAnimationFrame(() => {
      setAnchorEl(event.currentTarget);
    })
      
  },[]);


  const fileInputRef = useRef<HTMLInputElement>(null);
    
  const handleActionClose = () => {
            setAnchorEl(null);
  };

   const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { name, value } = e.target;
  
          const filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
  
          setFormData(prev => ({
              ...prev,
              [name]: filteredValue
          }));
      }, []);


  
      const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
          const file = event.target.files?.[0] || null;
          setFormData(prev => ({
              ...prev,
              file
          }));
      }, []);
  

 

  const handleChange = (event: SelectChangeEvent<any>) => {
    // event.preventDefault()
    let value = event.target.value;
    setCategory(value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

 const handleClose = useCallback(() => {
         setOpen(false);
         setFormData({
             subcategory: '',
             description: '',
             file: null
         });
     }, []); 

     const handleView = (row: any) => {
      console.log('View:', row);
    };
  
    const handleDelete = (row: any) => {
      console.log('Delete:', row);
    };




  

  

   useEffect(()=>{
        const fetchData = async() => {
          const response = await FetchSubCategory();
          setSubcategory(response.data)
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
            Sub Category
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
            + Add Sub Category
          </Button>
        </Box>
      </Box>
      <Box>


        {/* Add content Button with Modal */}
       <AddSubCategoryDialog
          open={open}
          onClose={handleClose}
          formData={formData}
          category={category}
          handleChange={handleChange}
          onInputChange={handleInputChange}
          onFileChange={handleFileChange}
          fileInputRef={fileInputRef}

       />

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
                      marginLeft: "10px",
                      // width: "50px",
                      // padding: "8px 12px",
                      border:'1px solid #ebebeb', 
                      borderCollapse:'collapse',
                      // pl:'50px'
                    }}
                  >
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: "#ffffff" }}>
              {SubCategory.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={Headers.length}
                    align="center"
                    sx={{ py: 8 }}
                  >
                    <Typography color="text.secondary">
                      No Subcategory found
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                SubCategory.map((item) => (
                  <TableRow>

                    <TableCell sx={{border:'1px solid #ebebeb',borderCollapse:'collapse'}}>
                    {item.sub_category_name}
                    </TableCell>
                    <TableCell sx={{border:'1px solid #ebebeb',borderCollapse:'collapse'}}>{item.sub_category_name}</TableCell>
                    <TableCell sx={{border:'1px solid #ebebeb',borderCollapse:'collapse'}}>
                      <img
                        src={item.upload_image}
                        style={{ height: "20px", width: "20px" }}
                      ></img>
                    </TableCell>
                    <TableCell sx={{ border:'1px solid #ebebeb',borderCollapse:'collapse',width:'50px'}}>{item.sub_id}</TableCell>
                    <TableCell sx={{border:'1px solid #ebebeb',borderCollapse:'collapse'}}>{item.description}</TableCell>
                    <TableCell sx={{pl:'50px', border: '1px solid #ebebeb', borderCollapse: 'collapse' }}>
                                              <ActionMenu
                                                onView={() => handleView(item.id)}
                                                onDelete={() => handleDelete(item.id)}
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

export default SubCategory

