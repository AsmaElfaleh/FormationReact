import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { FormControl, FormHelperText, Grid, Input, InputLabel, InputAdornment, TextField, RadioGroup, Radio, FormLabel, FormControlLabel, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import LanguageIcon from '@material-ui/icons/Language';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import MuiPhoneInput from 'material-ui-phone-number';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    field: {
    },
    section: {
      border: '1px solid black',
      marginTop: '20px',
      padding:  theme.spacing(2)
    },
    segmentActions: {
      margin: 'auto',
      width: '30%',
      float: 'right'
    }
}));

export default function Inscription({ setEditModeProps, setDataProps }) {
   const [data, setData] = useState({

   })
    const classes = useStyles();
        return(
              <Grid container>
               <Typography component="h1"> Inscription </Typography> 
               <form>
                <Grid container className={classes.section}>
                <Typography variant='subtitle1'>Données personnelles</Typography>
                <Grid container spacing={8}>
                      <Grid item className={classes.field}>
                          <FormControl>
                              <InputLabel htmlFor='nom'>Nom</InputLabel>
                              <Input id='nom'
                                  onChange={(event) => setDataProps({ name: event.target.value, surname:data.surname})}
                                  startAdornment={
                                  <InputAdornment position="start">
                                    <AccountCircle />
                                  </InputAdornment>
                                } />
                              <FormHelperText>Ecrivez votre nom de famille</FormHelperText>
                          </FormControl>
                      </Grid>
                      <Grid item className={classes.field}>
                          <FormControl>
                              <InputLabel htmlFor='prenom'>Prénom</InputLabel>
                              <Input id='prenom'
                                  onChange={(event) => setDataProps({ surname: event.target.value, name: data.name})}
                                  startAdornment={
                                  <InputAdornment position="start">
                                    <AccountCircle />
                                  </InputAdornment>
                                } />
                              <FormHelperText>Ecrivez votre prénom</FormHelperText>
                          </FormControl>
                      </Grid>
                  </Grid>
                  <Grid container>
                      <FormControl>
                              <TextField id='date-de-naissance' type='date' label='Date de naissance' defaultValue='2000-01-01'/>
                              <FormHelperText>Choisissez votre date de naissance</FormHelperText>
                      </FormControl>
                  </Grid>
                  <Grid container className={classes.field}>
                      <FormControl component="fieldset">
                      <FormLabel component="legend">Etat civil</FormLabel>
                      <RadioGroup row aria-label="Etat civil" name="gender1">
                          <FormControlLabel value="1" control={<Radio />} label="Célibataire" />
                          <FormControlLabel value="2" control={<Radio />} label="Marié(e)" />
                          <FormControlLabel value="3" control={<Radio />} label="Veuf(ve)" />
                          <FormControlLabel value="4" control={<Radio />} label="Divorcé(e)" />
                      </RadioGroup>
                      </FormControl>
                  </Grid>
                </Grid>
                  
                  <Grid container className={classes.section}>
                      <Typography variant='subtitle1'>Adresse</Typography>
                      <Grid container spacing={8}>
                          <Grid item className={classes.field}>
                          <FormControl>
                              <InputLabel htmlFor='rue'>Rue</InputLabel>
                              <Input id='rue'
                                  startAdornment={
                                  <InputAdornment position="start">
                                    <HomeIcon />
                                  </InputAdornment>
                                } />
                          </FormControl>
                          </Grid>
                          <Grid item className={classes.field}>
                          <FormControl>
                              <InputLabel htmlFor='ville'>Ville</InputLabel>
                              <Input id='ville'
                                  startAdornment={
                                  <InputAdornment position="start">
                                    <LocationCityIcon />
                                  </InputAdornment>
                                } />
                          </FormControl>
                          </Grid>
                      </Grid>
                      <Grid container spacing={8}>
                          <Grid item className={classes.field}>
                          <FormControl>
                              <InputLabel htmlFor='code-postal'>Code postal</InputLabel>
                              <Input id='code-postal'
                                  startAdornment={
                                  <InputAdornment position="start">
                                    <LocalPostOfficeIcon />
                                  </InputAdornment>
                                } />
                          </FormControl>
                          </Grid>
                          <Grid item className={classes.field}>
                          <FormControl>
                              <InputLabel htmlFor='pays'>Pays</InputLabel>
                              <Input id='pays'
                                  startAdornment={
                                  <InputAdornment position="start">
                                    <LanguageIcon />
                                  </InputAdornment>
                                } />
                          </FormControl>
                          </Grid>
                      </Grid>
                      <Grid container className={classes.field}>
                      <MuiPhoneInput regions={['america', 'europe', 'asia', 'oceania', 'africa']} defaultCountry='ca'/>
                      </Grid>
                      </Grid>
                      <Grid container className={classes.section}>
                      <Typography variant='subtitle1'>Identification</Typography>
                      <Grid container spacing={8}>
                        <Grid item className={classes.field}>
                          <FormControl>
                              <InputLabel htmlFor='mail'>Addresse courriel</InputLabel>
                              <Input id='mail'
                                  autoComplete="mail"
                                  startAdornment={
                                  <InputAdornment position="start">
                                    <AlternateEmail />
                                  </InputAdornment>
                                } />
                          </FormControl>
                        </Grid>
                        <Grid item className={classes.field}>
                          <FormControl>
                              <InputLabel htmlFor='pwd1'>Mot de passe</InputLabel>
                              <Input id='pwd1'
                                 type='password' autoComplete="new-password"/>
                          </FormControl>
                          </Grid>
                          <Grid item className={classes.field}>
                          <FormControl>
                              <InputLabel htmlFor='pwd2'>Confirmer mot de passe</InputLabel>
                              <Input id='pwd2'
                                 type='password' autoComplete="new-password"/>
                          </FormControl>
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid container className={classes.segmentActions}>
                      <Button type="submit" variant='contained' color='primary' onClick={ () => setEditModeProps(false)} >Confirmer</Button>
                      <Button type="reset" variant='contained' color='secondary' >Annuler</Button>
                  </Grid>
              </form>
              </Grid>
        );
}
