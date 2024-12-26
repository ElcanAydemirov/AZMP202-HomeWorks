import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { controller } from '../../../../services/constants';
import { getAllData } from '../../../../services/helpers';
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({title,price,description,category,image,id}) => {

  // allData()

  const navigate = () => {
    useNavigate(`productdetails/${id}`)
  }

  const goToDetails = () => {
    useNavigate()
  }

  return (<> 
                      <Card sx={{ maxWidth: 345 }}>
                      <CardMedia style={{width:"300px",height:"300px"}}
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={image}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {description}
                        </Typography>
                        <FaInfoCircle onClick={navigate} />
                      </CardContent>
                      <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
  </>

  );
}

export default ProductCard