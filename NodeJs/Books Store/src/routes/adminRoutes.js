const express = require('express');
const adminRoutes = express.Router();

function route(nav) {  
    adminRoutes.get('/', (req, res)=>{
        //res.send('Hello Adminsdsdsd');
        res.json(nav);
    });
    return adminRoutes;
}

module.exports=route;
