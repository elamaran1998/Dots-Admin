import React, { useCallback, memo } from 'react';
import { Box, Button, Divider, Menu, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Theme, useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import { AddCategory, FetchCategory } from '../API/api';

// Move styled component outside
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

// Create a memoized dialog content component
const AddCategoryDialog = memo(({ 
    open, 
    onClose, 
    formData, 
    onInputChange, 
    onFileChange, 
    fileInputRef ,
    handleAddcategory
}: {
    open: boolean;
    onClose: () => void;
    formData: {
        categoryName: string;
        description: string;
        file: File | null;
    };
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    fileInputRef: React.RefObject<HTMLInputElement>;
    handleAddcategory:(any)
}) => {


    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    


    const IsformDisabled = formData.categoryName && formData.description && formData.file

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
                Add category
            </DialogTitle>
            <Divider sx={{ borderBottom: 2, color: "#e0e0e0" }} />
            <IconButton
                aria-label="close"
                onClick={onClose}
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
                        <Typography sx={{ mb: '7px', fontWeight: 'bold' }}>Category</Typography>
                        <TextField
                            variant="outlined"
                            name="categoryName"
                            value={formData.categoryName}
                            onChange={onInputChange}
                            fullWidth
                            placeholder="Enter category name"
                            sx={{ width: 300 }}
                        />
                    </Box>
                    
                    <Box sx={{ mr: '100px',display: 'flex', flexDirection: 'column', }}>
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
                </Box>
                      
                <Box sx={{ mt: '15px' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Description</Typography>
                    <TextField
                        multiline
                        name="description"
                        placeholder='Enter your description'
                        rows={4}
                        variant="outlined"
                        value={formData.description}
                        onChange={onInputChange}
                        fullWidth
                    />
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
                    onClick={handleAddcategory}

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
                    onClick={onClose}
                >
                    Close
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
});

const ServiceCategory = () => {
    const Headers = [
        "Category Name",
        "Image",
        "Category_ID",
        "Description",
        "Action"
    ];

    interface Category {
        id: String;
        cat_id: String;
        category_name: String;
        upload_image: string;
        description: String;
        isActive: String;
        CreateAt: String;
        UpdateAt: String;
        isLogin: Number;
        fcm_token: String;
    }

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const Actionopen = Boolean(anchorEl);
    const [category, setCategory] = useState<Category[]>([]);
    const [formData, setFormData] = useState({
        categoryName: '',
        description: '',
        file: null as File | null
    });
    const fileInputRef = useRef<HTMLInputElement>(null);

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

    const handleClick = useCallback((event:any) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleActionClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const handleClickOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
        setFormData({
            categoryName: '',
            description: '',
            file: null
        });
    }, []);

    const handleAddcategory = async() => {

      const data = {
        formData,category
      }

      console.log(data,"payloadData")

      await AddCategory(data)
      

    }

    useEffect(() => {
        const fetchData = async() => {
            const response = await FetchCategory();

            setCategory(response.data);
        }
        fetchData();
    }, []);

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: '#fafafa',
                        mb: 3,
                        flexDirection: { xs: "row", sm: "row" },
                        gap: 2,
                    }}
                >
                    <Typography sx={{ fontSize: "18px", fontWeight: 800, ml: 1 }}>
                        Service Category
                    </Typography>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{
                            mr: "40px",
                            textTransform: "none",
                            fontSize: "16px",
                            marginTop: "10px",
                        }}
                        onClick={handleClickOpen}
                    >
                        + Add Category
                    </Button>
                </Box>
            </Box>
            <Box>
                <AddCategoryDialog
                    open={open}
                    onClose={handleClose}
                    formData={formData}
                    onInputChange={handleInputChange}
                    onFileChange={handleFileChange}
                    fileInputRef={fileInputRef}
                    handleAddcategory={handleAddcategory}
                />

                <TableContainer sx={{ width: '100%' }}>
                    <Table
                        stickyHeader
                        sx={{ margin: "20px", width: '95%' }}
                    >
                        <TableHead>
                            <TableRow sx={{ borderRight: "3px solid red" }}>
                                {Headers.map((column: any) => (
                                    <TableCell
                                        key={column}
                                        sx={{
                                            fontWeight: 700,
                                            whiteSpace: "nowrap",
                                            backgroundColor: "#f5f4f2",
                                            color: "black",
                                            fontSize: "17px",
                                            marginLeft: "10px",
                                            border: '1px solid #ebebeb',
                                            borderCollapse: 'collapse'
                                        }}
                                    >
                                        {column}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ backgroundColor: "#ffffff" }}>
                            {category.length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={Headers.length}
                                        align="center"
                                        sx={{ py: 8 }}
                                    >
                                        <Typography color="text.secondary">
                                            No Categories found
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                category.map((item) => (
                                    <TableRow key={item.id.toString()}>
                                        <TableCell sx={{ border: '1px solid #ebebeb', borderCollapse: 'collapse' }}>{item.category_name}</TableCell>
                                        <TableCell sx={{ border: '1px solid #ebebeb', borderCollapse: 'collapse' }}>
                                            <img
                                                src={item.upload_image}
                                                alt={`${item.category_name} image`}
                                                style={{ height: "20px", width: "20px" }}
                                            />
                                        </TableCell>
                                        <TableCell sx={{ border: '1px solid #ebebeb', borderCollapse: 'collapse', textAlign: 'center' }}>{item.cat_id}</TableCell>
                                        <TableCell sx={{ border: '1px solid #ebebeb', borderCollapse: 'collapse', minWidth: 2 }}>{item.description}</TableCell>
                                        <TableCell sx={{ border: '1px solid #ebebeb', borderCollapse: 'collapse' }}>
                                            <BsThreeDots size={25} color="#707070" style={{ cursor: "pointer" }} onClick={handleClick} />
                                            <Menu anchorEl={anchorEl} open={Actionopen} onClose={handleActionClose} sx={{ backgroundColor: 'white' }}>
                                                <MenuItem onClick={handleActionClose}>
                                                    View
                                                </MenuItem>
                                                <MenuItem onClick={handleActionClose}>
                                                    Delete
                                                </MenuItem>
                                            </Menu>
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
                        count={10}
                        sx={{
                            textAlign: "right",
                            alignItems: "right",
                            ".MuiPaginationItem-root": {
                                color: "green",
                                "&:hover": {
                                    backgroundColor: "#E6F4EA",
                                },
                            },
                            ".Mui-selected": {
                                backgroundColor: "red !important",
                                color: "#FFFFFF",
                            },
                        }}
                    />
                </Box>
            </Box>
        </>
    );
}

export default ServiceCategory;