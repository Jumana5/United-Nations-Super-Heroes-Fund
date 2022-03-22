import React from 'react';
import heros from "../data.json";
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import HerosTable from '../components/HerosTable';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    container: {
      padding: "1rem",
      backgroundColor: "grey"
    },
  }));

export default function HerosPage() {
  const classes = useStyles();

  return (
    <div  className={classes.container} >
    <SearchBar data={heros} />
    <Grid container margin spacing={4}>
        <Grid item xs={4}>
            <FilterSection />
        </Grid>

        <Grid item xs={8}>
            <HerosTable data={heros}/>
        </Grid>
    </Grid>

    </div>
  );
}
