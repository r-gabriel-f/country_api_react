import React from 'react';
import { useParams } from 'react-router-dom';
import { InfoPaises } from './InfoPaises';

const CountryInfo = ({ data }) => { // Recibe data como una prop
    const { countryName } = useParams();

    // Busca el país en data
    const selectedCountry = data.find(
      (auxpais) => auxpais.name.common.toLowerCase() === countryName.toLowerCase()
    );
  
    return (
      <section className='seleccion'>
        {selectedCountry && <InfoPaises pais={selectedCountry} />}
      </section>
    );
};

export default CountryInfo;

