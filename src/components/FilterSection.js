import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { formElements } from '../formConfig';
import FilterListIcon from '@mui/icons-material/FilterList';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function FilterSection() {
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


      
      const [expanded, setExpanded] = React.useState(false);
    
      const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
      
  return (

    
        <Card align="center" sx={{ maxWidth: 345 }}>
           <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
            <ExpandMoreIcon />
          </ExpandMore>
          
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardHeader variant="h3" title="FILTER"/>
            <CardContent>
                <hr/>
                <form>
                <Grid container spacing={4}>
                    {
                        formElements.slice(0, 4).map((input) => 
                        <Grid xs={12} sm={12} item >
                            <Typography align='left'> {input.title} </Typography>
                            <TextField align="center" {...input} />
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
    
    // <div>
    // <Paper align="center">
    // <Typography variant="h3" color="primary" >FILTERS</Typography>
    // <hr/>
    // <form>
    //     <Grid container spacing={4}>
    //     {
    //         formElements.slice(0, 4).map((input) => 
    //         <Grid xs={12} sm={12} item >
    //             <Typography align='left'> {input.title} </Typography>
    //             <TextField align="center" {...input} />
    //         </Grid>)
    //     }
    //     </Grid>
    //     <Grid container spacing={2}>
    //     <Grid item xs={12} align="center">
            
    //         <Button type="submit" variant="contained" color="primary"><FilterListIcon />Filter</Button>
    //     </Grid>

    //     </Grid>
    // </form>
    // </Paper>
    // </div>

