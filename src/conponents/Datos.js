import { useState, useEffect } from "react";

export const Datos = () => {
  const [data, setData] = useState([]);
 
  const obtenerpaises = async () => {
    const dato = await fetch("https://restcountries.com/v3.1/all");
    const paises = await dato.json();
    setData(paises);
  };
  useEffect(() => {
    obtenerpaises();
  }, []);


  return data;
};
