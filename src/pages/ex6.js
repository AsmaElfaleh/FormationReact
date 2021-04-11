import React, { useState } from 'react';
import Confirmation from '../components/confirmation';
import Inscription from '../components/inscription';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#cfe8fc', 
    height: '100vh', 
    border: '1px solid black', 
    flexGrow: 1
  }
}));

function Ex6() {
  const [ editMode, setEditMode ] = useState(true);
  const [ data, setData ] = useState({ name: '', surname: ''})
  const classes = useStyles();
    return(
    <React.Fragment>
      <CssBaseline />
      <Container fixed className={classes.root}>
       {editMode && <Inscription setEditModeProps={setEditMode} setDataProps={setData} data={data}/> } 
       {!editMode && <Confirmation title="Confirmation" data={data} />} 
      </Container>
    </React.Fragment>
    )
}

export default Ex6;