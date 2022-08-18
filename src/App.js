import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper'
import { TextField } from '@mui/material';
import {useState} from 'react';
//import Button from '@mui/material/Button';
import './App.css';
import { v4 as uuidv4} from 'uuid';

function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phoneNo,setPhoneno]=useState("");
  const [place,setPlace]=useState("");
  const [userDetails,setUserDetails]=useState([])
  const [status,setStatus]=useState("add");
  const [id,setId]=useState("");

  const Submit=()=>{
    // console.log(name)
    // console.log(email)
    // console.log(phoneNo)
    // console.log(details)
    if(name,email,phoneNo,place){
      if(status=== "add"){
        //console.log(place)
        let details={
          id:uuidv4(),
          name,email,phoneNo,place
      }
      //console.log(details)
      setUserDetails([...userDetails,details])
    }else if(status==="edit"){
      let editedDetailsUpdate=userDetails.filter(item=>item.id !=id)
      let editedDetails= {
      id,name,email,phoneNo,place
    }
    //userDetails.filter(item=>item.id==id)
     //userDetails[]=editDetails
       setUserDetails([...editedDetailsUpdate, editedDetails])
    }    
    setName("")
    setEmail("")
    setPhoneno("")
    setPlace("")
    setStatus("add")
  }else{
    alert("please enter  all value")
  }
}

 const deleteDetails=(id)=>{
  console.log(id)
  let userDetailsUpdate =userDetails.filter(item=>item.id !=id)
  setUserDetails(userDetailsUpdate)
 }
 const editDetails = (id)=>{
  console.log(id)
  let editDetailsUpdate =userDetails.filter(item=>item.id ==id)
  console.log(editDetailsUpdate)
  setName(editDetailsUpdate[0].name)
  setEmail(editDetailsUpdate[0].email)
  setPhoneno(editDetailsUpdate[0].phoneNo)
  setPlace(editDetailsUpdate[0].place)
  setId(editDetailsUpdate[0].id)
  setStatus("edit")
 }

  console.log(userDetails);
  return (
    <div className="App">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
            {/* <MenuIcon /> */}
         {/* // </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CRUD OPERATION
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box> 
     <br/>
    <Box style={{display:"flex",justifyContent:"center",}}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 628,
          height: 428,
        },
      }}
    >
      
      
      <Paper elevation={3} style={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}} >
      <br/>
      <div>
      <TextField id="name" label="name" value={name} onChange={(e)=>setName(e.target.value)} variant="outlined" />
      <TextField style={{marginLeft:"50px"}}id="Email"onChange={(e)=>setEmail(e.target.value)} label="Gmail" variant="outlined" />
      </div>
      <div>
      <TextField id="phoneno" label="PhoneNo" onChange={(e)=>setPhoneno(e.target.value)} variant="outlined" />
      <TextField style={{marginLeft:"50px"}}id="Place"onChange={(e)=>setPlace(e.target.value)} label="Place " variant="outlined" />
      </div>
      <div>
      <Button variant="contained" onClick={()=>Submit()} color="success">Submit</Button>
      <br/>
      </div>
      </Paper>
      </Box>
      <br/>
      <br/>
      <div  style={{display:"flex",justifyContent:"center"}}>
      <table border="1">
        <tr>
        <th>Name</th>
         <th>Email</th>  
        <th>MobileNo</th>
        <th>Place</th>
        <th>Delete</th>
        <th>Edit</th>
        </tr>
        {
          userDetails.length > 0 ? userDetails.map(eachDetail =>{
            return( 
            <tr> 
              <td>{eachDetail.name}</td>
              <td>{eachDetail.email}</td>
              <td>{eachDetail.phoneNo}</td>
              <td>{eachDetail.place}</td>
              <td><button onClick={()=>editDetails(eachDetail.id)} >Edit</button></td>
              <td><button onClick={()=>deleteDetails(eachDetail.id)} color="error">Delete</button></td>
            </tr>
            )
          }) :<span>No data are present </span>
          }
         </table>
         </div>
      </div>
  );
}

export default App
