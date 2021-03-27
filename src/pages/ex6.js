import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { FormControl, FormHelperText, Grid, Input, InputLabel, InputAdornment, TextField, RadioGroup, Radio, FormLabel, FormControlLabel } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import LanguageIcon from '@material-ui/icons/Language';
import MuiPhoneInput from 'material-ui-phone-number';

function Ex6() {
    return(
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ backgroundColor: '#cfe8fc', height: '100vh', border: '1px solid black', marginBottom: '50px'}}>
        <Typography component="h1" style={{ textAlign: 'center', fontSize: 60}}> Inscription </Typography>
        <form>
            <Grid container spacing={8}>
                <Grid item>
                    <FormControl>
                        <InputLabel htmlFor='nom'>Nom</InputLabel>
                        <Input id='nom'
                            startAdornment={
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          } />
                        <FormHelperText>Ecrivez votre nom de famille</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel htmlFor='prenom'>Prénom</InputLabel>
                        <Input id='prenom'
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
            <Grid container>
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
            <Grid container>
                <Typography variant='subtitle'>Adresse</Typography>
                <Grid container spacing={8}>
                    <Grid item>
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
                    <Grid item>
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
                    <Grid item>
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
                    <Grid item>
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
                <Grid container>
                <MuiPhoneInput regions={['america', 'europe', 'asia', 'oceania', 'africa']} defaultCountry='ca'/>
                </Grid>
            </Grid>
        </form>
        
      </Container>
    </React.Fragment>
    )
}

export default Ex6;