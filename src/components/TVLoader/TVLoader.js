import React from 'react';
import useData from '../DataProvider/DataProvider';

const TVLoader = () => {
    const { data: tv, isLoading, error } = useData(getTV);

    function getTV() {
        return fetch('./tv.json')
        .then(response => response.json());
    }

    return (
        <>
            {isLoading && <div>Loading....</div>}
            {error && <div>Error happening: {error.message}!</div>}

            <ul>
                {tv.map((currentTV, index) => <li key={index}>Brand: {currentTV.brand} --- Model: {currentTV.model} --- Price: {currentTV.price}</li>)}
            </ul>
        </>
    );
}

export default TVLoader;

/*

За аналогією з компонентою PhonesLoader, переробіть комопненту TVLoader таким чином, щоб вона використовувала хук useData, який ми написали.

*/