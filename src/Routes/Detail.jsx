import React,  {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
//MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';


const Detail = () => {

  const [odontologo, setOdontologo] = useState(null);
  const {id} = useParams();
 
  useEffect(() =>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => setOdontologo(res.data))
    .catch(error => console.log(error))
  },[id])

  return (
    <Box >
      <Typography 
      sx={{
        fontSize: 40,
        display: 'flex',
        justifyContent: 'center',
        letterSpacing: "5px",
        my: 5, 
        }}>
        {odontologo?.name}
      </Typography>    
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 900 }} aria-label="simple table">
      <TableHead>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 2 } }}>
          <TableCell align="center">Name</TableCell>
          <TableCell align="center">Email</TableCell>
          <TableCell align="center">Phone</TableCell>
          <TableCell align="center">Website</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 2 } }}>
            <TableCell align="center" component="th" scope="row">
              {odontologo?.name}
            </TableCell>
            <TableCell align="center">{odontologo?.email}</TableCell>
            <TableCell align="center">{odontologo?.phone}</TableCell>
            <TableCell align="center">{odontologo?.website}</TableCell>   
          </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
  </Box>
  )
}

export default Detail