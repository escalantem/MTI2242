export function TodoItem({id, description, realizado=false, onToggle})
{
    const clase = realizado ? "done": "";
    const estado = realizado ? "Terminada": "Pendiente";

    return (
                <li key={id} id={id} className = {"item " + clase } onClick={() => onToggle(id)} >
                     {description} - Estado: {estado}
                </li>
            );
}