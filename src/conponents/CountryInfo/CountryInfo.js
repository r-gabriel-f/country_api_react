import React from 'react';
import { useParams } from 'react-router-dom';
import { InfoPaises } from '../InfoPaises/InfoPaises';

const CountryInfo = ({ data }) => {
    const { countryName } = useParams();

    const selectedCountry = data.find(
      (auxpais) => auxpais.name.common === countryName
    );
  
    return (
      <section className='seleccion'>
        {<InfoPaises pais={selectedCountry} />}
      </section>
    );
};

export default CountryInfo;

