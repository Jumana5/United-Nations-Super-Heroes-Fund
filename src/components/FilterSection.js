import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import { formElements } from '../formConfig';
import FilterListIcon from '@mui/icons-material/FilterList';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';


export default function FilterSection() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const [query, setQuery] = useState("");
    const [inputFields, setInputFields] = useState([
        { name: '', phone: '',  country: '', date: '', email: '', company: ''}
      ]);

    const byName = (name) => (hero) => hero.name.toLowerCase().includes((name || '').toLowerCase());

    const ExpandMore = styled((props) => {
   
    const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));

    //   useEffect(() => {
    //     fetch("https://restcountries.eu/rest/v2/all")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           setIsLoaded(true);
    //           setItems(result);
    //           console.log(result);
    //         },
    //         (error) => {
    //           setIsLoaded(true);
    //           setError(error);
    //         }
    //       )
    //   }, [])


    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleFormChange = (index, e) => {
        let data = [...inputFields];
        data[index][e.target.name] = e.target.value;
        setInputFields(data);
        console.log(inputFields);
    }

    useEffect(() => {
        console.log("inputFields changed");
    }, [inputFields])
    const getQueryString = () => {
        console.log(inputFields[0]);
        let n, p, e, cn, cm, d;
        if(inputFields) {
            n = inputFields[0].name ?? "";
            p = inputFields[0].phone ?? "";
            e = inputFields[0].email?? "";
            cn = inputFields[0].country?? "";
            cm = inputFields[0].company?? "";
            d = inputFields[0].date?? "";
        }
        // let n = inputFields.name ?? "";
        // let p = inputFields.phone ?? "";
        // let e = inputFields.email?? "";
        // let cn = inputFields.country?? "";
        // let cm = inputFields.company?? "";
        // let d = inputFields.date?? "";
    
        if (n.length === 0 && p.length === 0 && e.length === 0 && cn.length === 0  && cm.length === 0 && d.length === 0){
            setQuery('');
        }

        if (n.length !== 0 && p.length !== 0 && e.length !== 0 && cn.length !== 0  && cm.length !== 0 && d.length !== 0){
            setQuery(`?name=${n}&phone=${p}&email=${e}&country=${cm}&company=${cm}&date=${d}`);
        }

        if (p.length === 0 && e.length === 0 && cn.length === 0  && cm.length === 0 && d.length === 0) {
            setQuery(`?name=${n}`);
        }
        
        if (n.length === 0  && e.length === 0 && cn.length === 0  && cm.length === 0 && d.length === 0) {
            setQuery(`?phone=${p}`);
        }
        //TODO: add more conditions.
        setQuery(`?name=${n}&phone=${p}&email=${e}&country=${cn}&company=${cm}&date=${d}`);
    };

    
    const handleFilter = (e) => {
        e.preventDefault();
        console.log(inputFields);
        setInputFields(inputFields); 
        getQueryString();
    }

    useEffect(() => {
        console.log(query);
        if (query.length === 0){
            console.log("no filter..");
        }
        else {
            navigate("/search/"+query)
        }
    }, [query])
  return (
        <Card align="center" sx={{ maxWidth: 345 }}>
           <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
          
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardHeader variant="h3" title="FILTER"/>
            <CardContent>
            <Divider sx={{ height: 28, m: 0.5 , width: "100%"}} orientation="horizontal" />
                <form action="/" method="POST" onSubmit={handleFilter} >
                    
                <Grid container spacing={4}>
                    {
                        formElements.map((input, index) => 
                        <Grid xs={12} sm={12} item key={index}>
                            <Typography align='left'> {input.title} </Typography>
                            <TextField align="center" {...input} onChange={(event) => handleFormChange(0, event)} />
                        </Grid>)
                    }
                    </Grid>
                    <Grid container spacing={2}>
                    <Grid item xs={12} align="center">
                        <Button type="submit" variant="contained" color="primary"><FilterListIcon />Filter</Button>
                    </Grid>

                    </Grid>
                </form>
            </CardContent>
          </Collapse>
        </Card>
      );
    }

