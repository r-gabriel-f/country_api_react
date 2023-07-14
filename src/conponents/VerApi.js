import { useState, useEffect } from "react";
import React from "react";

const VerApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((Response) => Response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section>
      <h1>Aplicacando Api</h1>
      <div className="paises">
        <ul>
            {data?.map((user)=>(
                <li>{user.capital}</li>
                
            ))}
           
        </ul>
      </div>
    </section>
  );
};
export default VerApi;

