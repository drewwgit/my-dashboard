import React from 'react';
import {Typography} from "@mui/material"

function Dashboard (){
    return ( 
      <>
      <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} id={"typo"}>
        DASHBOARD
      </Typography>
      <Typography variant="p" component="div" sx={{ flexGrow: 1 }} id={"typo2"}>
        Welcome to your home dashboard!
      </Typography>
      
      </>
    );
}

export default Dashboard; 