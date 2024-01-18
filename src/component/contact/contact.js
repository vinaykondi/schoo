import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Header from '../common/header/Header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MessageIcon from '@mui/icons-material/Message';
import AddIcon from '@mui/icons-material/Add';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
export default function Contact(){
    return(
        <>
<Header />

<Box component="main" sx={{ p: 3,width:'100%',height:200,backgroundColor:'balck' }} >

        <Toolbar />
        
        <Typography className='contact'>
         <h1 style={{zIndex:100, position:'relative',top:60,left:-410,fontSize:48,color:'#143339'}}>Get in touch</h1>
         <h4 style={{position:'relative',top:30,zIndex:100,left:-400,fontSize:20,fontWeight:100,color:'#143339'}}>Want to get in touch?We’d love to hear from you.<br/> Here’s how  you can reach us...</h4>
         <img src='Rectangle 10201back.png' style={{width:1490,position:'relative',left:-20,top:-239,height:400}}/>

            <img src='Vector.png'style={{position:'relative',left:400,top:-620,}}/>
        
         
        </Typography>

      </Box>
      <Card sx={{ maxWidth: 375,maxHeight:600,   position:'relative',top:200,left:100}}>
      <CardActionArea>
        <LocalPhoneIcon  style={{width:100,height:50,top:40}}/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{position:"relative",top:10,fontWeight:600,color:'#143339'}}>
          Talk to Sales
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{position:"relative",top:10}}>
          Interested in HubSpot’s software? Just pick  up<br/> the phone to chat with a member of<br/> our sales team.
          </Typography>
          <Typography style={{position:"relative",top:20}}>
          <AddIcon style={{top:5,position:'relative'}}/>91  8975425468
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 375,maxHeight:390,   position:'relative',top:-25,left:590}}>
      <CardActionArea>
        <MessageIcon  style={{width:100,height:50,top:40}}/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{position:"relative",top:10,fontWeight:600,color:'#143339'}}>
          Contact Customer Support
                    </Typography>
          <Typography variant="body2" color="text.secondary" style={{position:"relative",top:10}}>
          Interested in HubSpot’s software? Just pick  up<br/> the phone to chat with a member of<br/> our sales team.
          </Typography>
          <Typography style={{position:"relative",top:20}}>
            <WhatsAppIcon style={{top:5,position:'relative'}}/>8975425468
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
      </>
    )
}