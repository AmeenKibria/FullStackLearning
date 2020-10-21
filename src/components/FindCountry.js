import React from 'react';

// To find countries

const FindCountry = ({country, setCountry}) => {
    return (
        <div>
            <label htmlFor='find-country'>Find countries: </label>
            <input id='find-country' value={country} autoFocus autoComplete='off'
                onChange={event => setCountry(event.target.value)}
            />
        </div>
    );
};

export default FindCountry;