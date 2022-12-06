import{ AppBar,Toolbar, styled,} from '@mui/material/';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #111111;
`

const Tab = styled(NavLink)`
    font-size: 20px;
    margin-right: 10px;
    color: inherit;
    text-decoration:none;
    
`

 const Navbar = ()=> {

    return(

        <Header  position="static">
        <Toolbar >
          
          <Tab to="/"> Coder for Devendra</Tab>
          <Tab to="/all"> All User</Tab>
          <Tab to="/add"> Add User</Tab>

        </Toolbar>
      </Header>
        
        
    )
}

export default Navbar;