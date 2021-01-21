import React, { useState } from 'react';
import { TextField, Button, LinearProgress } from '@material-ui/core';
import shrtcode from '../api/shrtcode';

const Search = () => {
  const [link, setLink] = useState('');
  const [short, setShort] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    getLink();
  };
  const getlink = async () => {
    await shrtcode
    .get(`shorten?url=${link}`)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <>
     <form onSubmit={(e) => handleSubmit(e)} style={{ display: 'flex', flexDirection: 'column'}}>
      <TextField
      style={{marginBottom: '20px'}}
      label="Input Your Link"
      variant="outlined"
      value={link}
      onChange={(e) => setLink(e.target.value)}
      />
      <Button onClick={(e) => handleSubmit(e)} variant="contained" color='primary' >
      Submit
      </Button>
    </form>
  </>
 );
};

export default Search;
