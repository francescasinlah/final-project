export function formatCurrentDate() {
    const date = new Date();
 
    // Obtiene el día de la semana, día del mes y mes
    const weekday = date.toLocaleString('en-US', { weekday: 'long' }); 
    const day = date.getDate(); 
    const month = date.toLocaleString('en-US', { month: 'long' });
  
    // construye la cadena de fecha formateada
    return (
        <>
        {weekday}, {day} <span className="month">{month}</span>
        </>
    );
};
    