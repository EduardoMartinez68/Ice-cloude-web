const express=require('express');
const router=express.Router();

const pool=require('../database')
/*
pool.query('SELECT * FROM productos', (err, result) => {
    if (err) {
        console.error('Error al ejecutar la consulta:', err);
    } else {
        const rows = result.rows;
        console.log('Datos seleccionados:', rows);
    }
});*/

///links of the web
router.get('/login',(req,res)=>{
    res.render('links/web/login');
})

router.get('/singup',(req,res)=>{
    res.render('links/web/singup');
})

router.get('/identify',(req,res)=>{
    res.render('links/web/identify');
})

router.get('/terms_conditions',(req,res)=>{
    res.render('links/web/terms_conditions');
})


///links of the store
router.get('/store',(req,res)=>{
    res.render('links/store/store');
})

router.get('/cart',(req,res)=>{
    res.render('links/store/cart');
})




///links of the manager
router.get('/addEmployee',(req,res)=>{
    res.render('links/manager/addEmployee');
})

router.get('/addSchedules',(req,res)=>{
    res.render('links/manager/addSchedules');
})

router.get('/home',(req,res)=>{
    res.render('links/manager/home');
})

router.get('/addCompany',(req,res)=>{
    res.render('links/manager/addCompanys');
})

router.post('/addCompany',(req,res)=>{
    res.send("recived");
})



module.exports=router;