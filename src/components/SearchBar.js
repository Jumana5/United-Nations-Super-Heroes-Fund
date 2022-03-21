import { useState} from 'react';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ placeholder, data, filter }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };


    
  return (
    <div className="search">
    <div className="searchInputs">
      <input
        type="text"
        placeholder={placeholder}
        value={wordEntered}
        onChange={handleFilter}
      />
      <div className="searchIcon">
          <SearchIcon />
      </div>
    </div>
    {filteredData.length !== 0 && (
      <div className="dataResult">
        {filteredData.map((value, key) => {
          return (
            <p>{value.name} </p>
          );
        })}
      </div>
    )}
  </div>
  );
}
