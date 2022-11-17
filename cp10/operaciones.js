
const Persona = {
    nombre: "Juan",
};

function getNombre()
{
    return Persona.nombre;
}

function suma(a, b)
{   return a+b;

}

exports.getNombre = getNombre;
exports.suma = suma;