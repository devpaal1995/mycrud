
import { useState, useEffect } from "react";

import { FormControl, FormGroup, Input, InputLabel, Typography,Button, styled } from "@mui/material";

import {useNavigate,useParams} from 'react-router-dom'
import {getUser , editUser} from '../service/api';

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

const Edituser = () => {
     const [user, setUser] = useState(initialValues);
     const navigate = useNavigate();
     const {id}   = useParams();

     useEffect(()=>{
         getUserData();
     },[])

     const getUserData = async() =>{
          let response = await getUser(id)
          setUser(response.data);
}
     
     const onValueChange = (e) => {
      console.log( e.target.name, e.target.value)
      setUser({ ...user, [e.target.name]: e.target.value })
       console.log(user);
     }
     
     const adduserDetails = async () => {
         
        await editUser(user,id);
       navigate('/all');
     }
     
    return(
    
       <Container>
            <Typography variant="h4">Edituser</Typography>
            <FormControl>
            <InputLabel>Name </InputLabel>
            <Input onChange={(e) => onValueChange(e)}  name="name" value={user.name}/>
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
             <Button onClick={()=>adduserDetails()} variant="contained"> Edituser</Button>
             </Container>  
    )
}




export default Edituser;


