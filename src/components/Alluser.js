import { useEffect, useState } from "react";

import { Table, TableBody, TableHead, TableRow, TableCell, styled, Button } from "@mui/material";


import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";
 
const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto  0  auto;
`;

 const Thead  = styled(TableRow)`
     background: #000;
     & > th {
      color: #fff;
      font-size:20px
     }
 `
 const TBody  = styled(TableRow)`

 & > th {
  color: #fff;
  font-size:20px
 }
`

const Alluser = () => { 
 
const [users, setUsers] = useState([]);
 
 useEffect(() => {

    getUsersDetails();

 }, [])


 const getUsersDetails = async () => {

    let responce = await getUsers();
   //  console.log(responce);
    setUsers(responce.data);

 }

 const deleteUserData = async (id) =>{
   await deleteUser(id);
   console.log(deleteUser(id) + "dev") 
   getUsersDetails();
 }
    return (
     <StyledTable>
        <TableHead>
         <Thead>

            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>

         </Thead>
        </TableHead>
        <TableBody>
         {
            users.map(user => (
            <TBody>

                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>

                <TableCell>
                <Button variant="contained" style={{ marginright:10}} component={Link} to={` /edit$(user.id)`}> Edit </Button>
                <Button variant="contained" colour="secondary" onClick={()=> deleteUserData (user.id)}> Delete</Button>

                </TableCell>
               

                
            </TBody>
            ))
         }
        </TableBody>
     </StyledTable>
        
    )
}
export default Alluser;