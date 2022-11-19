const leerarchivo = async () =>
{
    var r = Math.random();
    console.log(r);
    const hasError = r > 0.45;


    if(hasError) return  5/0;


    
    await delay(1000);

    return "este es el contenido del archivo";
    

};

const manejadorError = (msgError) =>
{
    console.log("Ha ocurrido un error: " + msgError.toString());
};

const delay = (ms) =>
{
            new Promise( r => setTimeout(r, ms));
};

const proceso = async () =>
{
    try {
    const data = await leerarchivo();
    console.log("Este es el contenido del archivo: " + data);
    }
    catch(error)
    {
        manejadorError(error);
    };

};

proceso();

console.log("Fin del programa.");
