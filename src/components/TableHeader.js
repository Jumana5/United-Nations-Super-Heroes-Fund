


import React from 'react';
import { IconButton, Toolbar} from '@mui/material';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import { useState} from 'react';
import SearchBar from './SearchBar';
import heros from "../data.json";

export default function TableHeader() {

  const [wordSearched, setWordSearched] = useState("");
  const [isSort, setIsSort] = useState(false);

  const handleSearch = (event) => {
    console.log("search button is clicked");

  };

  const handleSort = (event) => {
   console.log("sort is clicked");
  };
    
  return (
    <div >
      <Toolbar>
      <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div">
            Heros
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
