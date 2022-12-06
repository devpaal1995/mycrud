
import './App.css';
import Alluser from './components/Alluser';
import Coderdevendra from './components/Coderdevendra';
import Navbar from './components/Navbar'
import Adduser from './components/Adduser';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Edituser from './components/Edituser';



function App() {
  return (
  
   <BrowserRouter>
     
   <Navbar/>

   <Routes>
    
    <Route path="/" element={<Coderdevendra/>} />

   <Route path="/all" element= {<Alluser/>} /> 


   <Route path="/add" element= {<Adduser/>} /> 
   
   <Route path="/edit:id" element={<Edituser/>} />
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
