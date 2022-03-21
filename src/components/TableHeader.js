


import React from 'react';
import { IconButton, Toolbar} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import { useState} from 'react';

export default function TableHeader() {

  const [wordSearched, setWordSearched] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleSearch = (event) => {
    const searchWord = event.target.value;

  };

  const expandFilter = (event) => {
   
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
          <IconButton>
            <SearchIcon onClick={handleSearch}/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon onClick={expandFilter}/>
          </IconButton>
        </Tooltip>
      </Toolbar>
    </div>
  );
}
