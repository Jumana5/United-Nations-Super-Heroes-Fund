import { useState} from 'react';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useParams } from 'react-router-dom';
import "../styles/SearchBar.css";

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
      <div className='searchIcon'>
        <SearchIcon/>
      </div>
    </div>
    {filteredData.length !== 0 && (
      <div className="dataResult">
        {filteredData.map((value, key) => {
          return (
            //TODO idea: naviagate a click to a hero page? 
            <a className="dataItem">
              <p  >{value.name} </p>
            </a>
          );
        })}
      </div>
    )}
  </div>
  );
}
