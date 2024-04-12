import { useState, useEffect } from "react";

const useTimer = () => {
  const [hour, setHora] = useState(0);
  const [minutes, setMinutos] = useState(0);
  const [esMayorA2130, setEsMayorA2130] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const ahora = new Date();
      const horaBuenosAires = ahora.toLocaleString("es-AR", {
        timeZone: "America/Argentina/Buenos_Aires",
      });
      const partes = horaBuenosAires.split(" ")[1].split(":");
      const horas = parseInt(partes[0], 10);
      const mins = parseInt(partes[1], 10);

      setHora(horas);
      setMinutos(mins);
      setEsMayorA2130(horas > 21 || (horas === 21 && mins > 30));
    }, 1000); // Actualiza cada segundo

    return () => clearInterval(interval);
  }, []);

  return { hour, minutes, esMayorA2130 };
};

export default useTimer;
