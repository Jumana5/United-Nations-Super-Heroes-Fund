


import React, { useEffect } from 'react';
import { IconButton, Toolbar} from '@mui/material';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import { useState} from 'react';
import SearchBar from './SearchBar';
import {getHeros, setSortHeros } from '../redux/heros/herosActions';
import { useDispatch, useSelector } from 'react-redux';

export default function TableHeader() {
  const dispatch = useDispatch();
  const herosDetails = useSelector((state) => state.heros);
  const { loading, error, heros } = herosDetails;

  useEffect(()=>{
    dispatch(setSortHeros(false));
  }, []);

  const  {isSorted}  = useSelector((state) => state.sortedHeros);
  const [isSortClicked, setIsSortClicked] = useState(false);
  

  const handleSort = (e) => {
   console.log("sort is clicked");
   setIsSortClicked(!isSortClicked);
  };

  
  useEffect(()=>{
    console.log(isSortClicked);
    dispatch(setSortHeros(isSortClicked));
  }, [isSortClicked]);
  
 

  return (
    <div >
      <Toolbar>
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"> Heros
      </Typography>


      <Tooltip title="Search list">
        <SearchBar data={heros}/>
      </Tooltip>

      <Tooltip title="Sort list">
        <IconButton>
            <SortByAlphaIcon onClick={handleSort}/>
        </IconButton>
      </Tooltip>
      
      </Toolbar>
    </div>
  );
}
