const express=require('express');
const morgan=require('morgan');
const {engine}=require('express-handlebars');
const path=require('path');


//initializations 
const app=express();

//settings
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'))
app.engine('.hbs',engine({ //we will create the engine for the web
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers:require('./lib/handlebars')
}))
app.set('view engine','.hbs');


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//global variables
app.use((req,res,next)=>{
    next();
});
//routes
const companyName='/links'
app.use(require('./router'))
app.use(require('./router/authentication'))
app.use(companyName,require('./router/links'))

//public
app.use(express.static(path.join(__dirname,'public')));

//starting the server
app.listen(app.get('port'),()=>{
    console.log('server on port ',app.get('port'));
});

//python
const {spawn}=require('child_process');
const pythonPath='src/dataScine/script.py';
const arg=['a','a'];
const pythonProcess=spawn('python',[pythonPath,...arg]);
pythonProcess.stdout.on('data',(data)=>{
    const output=data.toString();
    console.log('salida del script python: ', output);
});
pythonProcess.stderr.on('data',(data)=>{
    const output=data.toString();
    console.log('salida del script python: ${output}', output);
});
pythonProcess.on('close',(code)=>{
    const output=code.toString();
    console.log('python a cerrado ',output);
});
