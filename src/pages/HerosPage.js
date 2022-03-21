import React from 'react';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import heros from "../data.json";
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import HerosTable from '../components/HerosTable';
export default function HerosPage() {

  return (
    <div className="">
    
        <Container className=''>
        <Row>
            <SearchBar data={heros} />
         </Row>
        <Row className = ''>
            <div className="col-4"><FilterSection /></div>
            <div className="col-8"><HerosTable data={heros}/> </div>
        </Row>
        </Container>
    </div>
  );
}
