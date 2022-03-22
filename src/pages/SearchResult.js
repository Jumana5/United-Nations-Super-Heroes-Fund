import React from 'react';
import heros from "../data.json";
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import HerosTable from '../components/HerosTable';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate, useParams } from 'react-router-dom';

//heroes?user_name=Kathryn%20Murphy&user_phone=555-0126&country=USA&date=2021-09-21

const useStyles = makeStyles((theme) => ({
    container: {
      padding: "1rem",
      backgroundColor: "#F5F5F5",
    },
  }));

export default function SearchResult(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const params = useParams();
  console.log(props);
  return (
    <div  className={classes.container} >
    <Grid container margin spacing={4}>
        <Grid item xs={4}>
            <h1>Search Result</h1>
            <h2>Search Query is {JSON.stringify(params)}</h2>
            <button onClick={(() => navigate("/"))}>Go To Home..</button>
        </Grid>
    </Grid>

    </div>
  );
}
