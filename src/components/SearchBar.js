import { useState} from 'react';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useParams } from 'react-router-dom';

export default function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const { q } = useParams();
    
    
    const handleSearch = (event) => {
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
        onChange={handleSearch}
      />
      <SearchIcon />
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
