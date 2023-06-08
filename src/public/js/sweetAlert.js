function regularMessage(title,text){
    Swal.fire({
        title:title,
        text: text,
        customClass:{
            confirmButton:"btn-confirm-message",
            cancelButton:"btn-cancel-message"
        }
    });


}

function confirmationMessage(title,text){
    Swal.fire({
        title:title,
        text: text,
        icon:'success'
    });
}

function errorMessage(title,text){
    Swal.fire({
        title:title,
        text: text,
        icon:'error'
    });
}

function questionMessage(title,text){
    Swal.fire({
        title:title,
        text: text,
        icon:'question',
        showCancelButton: true,
        confirmButtonText: 'confirm',
        confirmButtonColor: 'rgb(25, 135, 84)',
        cancelButtonText: 'cancel!',
        cancelButtonColor: 'rgb(220, 53, 69)',
        reverseButtons: true,
        /*
        customClass:{
            popup:'popup-message',
            confirmButton:"btn btn-confirm-message", //btn-confirm-message
            cancelButton:"btn btn-cancel-message" //btn-cancel-message
        },
        buttonsStyling: false,
        padding:'1rem',*/
    });
}



function errorMessage(title,text){
    Swal.fire({
        title:title,
        text: text,
        icon:'error'
    });
}

function warningMessage(title,text){
    Swal.fire({
        title:title,
        text: text,
        icon:'warning'
    });
}

function infoMessage(title,text){
    Swal.fire({
        title:title,
        text: text,
        icon:'info'
    });
}

function notificationMessage(title,text){
    Swal.fire({
        title:title,
        text: text,
        position: 'top-end',
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        timerProgressBar: true,
        icon:'success'
    });


}

/* mensaje pedir informacion
Swal.fire({
    title:"Welcome!",
    text: "I would like that you be a kawaii girl",

    input:'text',
    inputPlaceholder:'Product Name',
    inputValue:''
})*/