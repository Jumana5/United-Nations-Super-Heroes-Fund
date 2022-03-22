import React, { useEffect } from 'react';
import heros from "../data.json";
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import HerosTable from '../components/HerosTable';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { getHeros } from '../redux/heros/herosActions';

const useStyles = makeStyles((theme) => ({
    container: {
      padding: "1rem",
      backgroundColor: "#F5F5F5",
    },
  }));

export default function HerosPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getHeros());
  }, [])
  return (
    <div  className={classes.container} >
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
