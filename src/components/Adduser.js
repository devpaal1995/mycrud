
import { useState } from "react";

import { FormControl, FormGroup, Input, InputLabel,Typography,Button, styled } from "@mui/material";

import {adduser} from '../service/api';
import {useNavigate} from 'react-router-dom'

  const Container = styled(FormGroup)`

       width: 50%;

       margin: 5% auto  0 auto;
       & > div {
        margin-top: 20px
       }
  `
     const initialValues = {
         Name: '',
         username: '',
         email:'',
         phone: ''
     
     }


  


const Adduser = () => {
     const [user, setUser] = useState(initialValues);
     const navigate = useNavigate();
     
     const onValueChange = (e) => {
      console.log( e.target.name, e.target.value)
      setUser({ ...user, [e.target.name]: e.target.value })
       console.log(user);
     }
     
     const adduserDetails = async () => {
         
       await adduser(user);
       navigate('/all');
     }
     
    return(
    
       <Container>
            <Typography variant="h4">Adduser</Typography>
            <FormControl>
            <InputLabel>Name </InputLabel>
            <Input onChange={(e) => onValueChange(e)}  name="name"/>
            </FormControl>

            <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
            <InputLabel>Email</InputLabel>
            <Input  onChange={(e) => onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input  onChange={(e) => onValueChange(e)} name="phone"/>
            </FormControl>
             <Button onClick={()=>adduserDetails()} variant="contained"> Add user </Button>
             </Container>  
    )
}




export default Adduser;