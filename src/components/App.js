import React from "react";
import DataProvider from "./DataProvider/DataProvider";


function App() {
    return (
        <>
            <DataProvider 
                loadData={() => {
                        return fetch('./phones.json')
                        .then((response) => response.json())
                }} 
            >
                {(state) => {
                    const { data, isLoading, isError } = state;

                    return (
                        <>
                            {isLoading && <div>Loading....</div>}
                            {isError && <div>Error happening: {isError.message}!</div>}

                            <ul>
                                {data.map((data, index) => <li key={index}>Brand: {data.brand} --- Model: {data.model} --- Price: {data.price}</li>)}
                            </ul>
                        </>
                    );
                }}
            </DataProvider>


            <DataProvider 
                loadData={() => {
                        return fetch('./tv.json')
                        .then((response) => response.json())
                }} 
            >
                {(state) => {
                    const { data, isLoading, isError } = state;

                    return (
                        <>
                            {isLoading && <div>Loading....</div>}
                            {isError && <div>Error happening: {isError.message}!</div>}

                            <ul>
                                {data.map((data, index) => <li key={index}>Brand: {data.brand} --- Model: {data.model} --- Price: {data.price}</li>)}
                            </ul>
                        </>
                    );
                }}
            </DataProvider>
        </>
    )
}

export default App;


/*

Відобразіть поруч з компонентою телефонів компоненту телевізорів.
При тому телевізори мають бути у нумерованому списку.


*/