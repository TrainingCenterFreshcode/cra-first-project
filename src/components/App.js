import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <button onClick={() => { window.location.reload() }}>Reload</button>

            <button onClick={() => { window.location.assign('https://www.w3schools.com/sql/') }}>Assign</button>
            <button onClick={() => { window.location.replace('https://developer.mozilla.org/ru/') }}>Replace</button>


            <p>Lorem ipsum dolor amet.</p>
            <button onClick={() => { 
                window.navigator.clipboard.writeText('Lorem ipsum dolor amet.');
                toast.success('🦄 Copied to clipboard');
            }}
            >Click to copy text</button>


            <button onClick={() => {
                window.navigator.clipboard.readText()
                .then((text) => {
                    console.log(text);
                });
            }}>Read text from buffer</button>


            <button onClick={() => {
                window.navigator.geolocation.getCurrentPosition((positionObject) => {
                    console.log(positionObject);
                });
            }}>Get my current position</button>
        </>
    )
}

export default App;