import React,  {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import axios from 'axios'
//MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [odontologo, setOdontologo] = useState(null);
  const {id} = useParams();
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() =>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => setOdontologo(res.data))
    .catch(error => console.log(error))
  },[id])

  return (
    <div>  
      <Navbar/>
      <h1>Detail Dentist id </h1>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 2 } }}>
          <TableCell>Name</TableCell>
          <TableCell align="center">Email</TableCell>
          <TableCell align="center">Phone</TableCell>
          <TableCell align="center">Website</TableCell>         
        </TableRow>
      </TableHead>
      <TableBody>        
          <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 2 } }} >                 
            <TableCell component="th" scope="row">
              {odontologo?.name}
            </TableCell>
            <TableCell align="center">{odontologo?.email}</TableCell>
            <TableCell align="center">{odontologo?.phone}</TableCell>
            <TableCell align="center">{odontologo?.website}</TableCell>            
          </TableRow>       
      </TableBody>
    </Table>
  </TableContainer>
  </div>  
  )
}

export default Detail