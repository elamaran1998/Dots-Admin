import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
  InputAdornment,
  Dialog,
  DialogContent,
  DialogActions,
 
} from '@mui/material';
import { Mail, Lock } from 'lucide-react';
import Dots from '../../assets/logo/Dots.png';
import LoginBanner from "../../assets/logo/LoginBanner.png";
// import eye from '../../assets/eye/eye.png';
import Visibility from '@mui/icons-material/Visibility';
 import VisibilityOff from '@mui/icons-material/VisibilityOff';
 import IconButton from '@mui/material/IconButton';
import { LoginUser } from '../../API/api';
import { useNavigate } from 'react-router-dom';
// import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import check from "../../assets/check/check.png";
import useToast from './ToastMsgs';
import { useDispatch } from 'react-redux';
import { setToken } from '../../Redux/reducers/TokenReducers';





interface UserDetails {
    id:number;
    name:string;
    email:string;
    admin_id:string;
    token:string;
}



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();
  const [showPassword,setShowPassword] = useState(false);
  const [responsemsg,SetResponseMsg] = useState('')
  const[userDetails,setUserDetails] = React.useState<UserDetails[]>([])
  const [open,setOpen] = React.useState(false);

  const Toast = useToast();



  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const navigate = useNavigate();
  const dispatch = useDispatch();

 

 


  

  const handleSubmit = async(Event: React.FormEvent) => {
    Event.preventDefault();
    // console.log(password,email,"Targtet")
    const details = {email,password}
    let response =  await LoginUser(details);

    setUserDetails(response.data)

    if(response.data){
    localStorage.setItem('Token',JSON.stringify(response.data))
    }

    const userToken = response.data.token;
    dispatch(setToken(userToken))
    localStorage.setItem("authToken", userToken);

    // set the response to the state

    setEmail('')
    setPassword('')

    // console.log(userDetails,"mkn")
    if(response.message === 'Login successful' && response.data && response.data.token){
      Toast.success(response.message)
      setOpen(true)
      SetResponseMsg(response.data.message);
      // setTimeout(()=>{
      //   console.log("LOGIN",userDetails)
      // navigate('/home/dashboard', { state: userDetails, replace: true });

      // },5000)

    }
    else{
      Toast.error("Invalid Credential")
    }
  };  

  const handleClose = () => {
    setOpen(false);
    console.log(userDetails,"kkkk")
    navigate('home/dashboard', { state: userDetails, replace: true });
  };

  const isLoginDisabled = !email || !password;

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
    
    <Box sx={{ 
      // minHeight: '200vh',
      display: 'flex',
      overflow:'hidden',
      flexDirection: { xs: 'column', lg: 'row' }
      }}>
      {/* Left Banner */}

      {isMobile ?
       (
       <p></p>
       )
        :
       (
        <Box sx={{
          flex: { lg: 1 },
          p: 6,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          width:'1000px',
        }}>
          <Box sx={{
            '& img': {
              width: '100%',
              height: '100%',
            }
          }}>
            <img
              src={LoginBanner}
              alt="Background"
            />
          </Box>
          
        </Box>
       )
        
        }
      

      {/* Right Login Form */}
      <Box sx={{
        flex: { lg: 1 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 6,
        bgcolor: 'background.paper'
      }}>
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box
            component='img'
            src={Dots}
            height={70}
            width={170}
            // sizes='10px'
            />

            
            <Typography variant="body1" color="black" sx={{fontWeight:'bold',fontSize:'25px'}}>
              Login an account
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              placeholder='Email'
              id="email"
              name="email"
              autoFocus
              value={email}
              onPaste={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
              onCut={(e) => e.preventDefault()}
              onDrag={(e) => e.preventDefault()}
              onDrop={(e) => e.preventDefault()}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: <Mail size={20} style={{ marginRight: 20, color: 'red' }}>
                  <Divider color={"green"} orientation="vertical"  flexItem style={{ marginRight: 10 }} />
                </Mail>
                ,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: <Lock size={20} style={{ marginRight: 20, color: 'red' }} />,
                endAdornment:(
                  <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 2
            }}>
              <FormControlLabel
                control={<Checkbox value="remember" sx={{color:'#d40000'}} />}
                label="Remember me"
              />
              <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
                Forgot password?
              </Link>
            </Box>
            <Button
              type="submit"
              fullWidth
              disabled={isLoginDisabled}
              // variant="contained"
              sx={{ 
                mt: 3,
                mb: 2,
                py: 1.5,
                color:'white',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textTransform: 'none',
                backgroundColor:'#d40000',
                fontWeight:'bold'
              }}
            >
              Login
              {/* <ArrowRight size={20} /> */}
            </Button>
            {/* <ToastContainer /> */}
            <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  
                >
                  <DialogContent sx={{width:'300px'}}>
                    
                    <Typography sx={{textAlign:'center'}}>Login Successful</Typography>  
                      <Box sx={{textAlign:'center',alignContent:'center',mt:3}}>
                      <img src={check} height={70} width={70} />
                      </Box>
                
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                      Okay
                    </Button>
                  </DialogActions>
            </Dialog>
              



            {/* <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Don't have an account?{' '}
                  <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
                    Sign up
                  </Link>
                </Typography>
              </Grid>
            </Grid> */}
          </Box>
        </Container>
      </Box>
    </Box>
    </>
  );
}

export default Login;