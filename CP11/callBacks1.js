function readFile(succes, error)
{

    var r = Math.random();
    console.log(r);
    const hasError = r > 0.45;


    if(hasError) return error({msg: 'Read failed'});


    console.log('Leyendo archivo');

    setTimeout( succes, 1000);

}


function exito(){
    console.log('función de exito.');
}

function conError(msg)
{
    console.log(msg);
}


readFile(exito, conError);