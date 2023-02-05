import React, { useState, useEffect } from 'react'
import axios from 'axios';
const FetchLor = () => {
    const [lor, setLor] = useState(null);
    useEffect(() => {
        let token = localStorage.getItem('token')
        async function getDetails() {
            const response1 = await fetch('http://localhost:5000/vol/getLOR', {
                method: 'GET',
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/octet-stream'
                },
            }).then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    setLor(url);
                });
            });
            setLor(response1.url)

        }
        getDetails();
    }, [])
    return (
        <div>
            {lor != null ? <div><iframe src={lor} width='100%' height={window.innerHeight}></iframe></div> : null}
        </div>
    )
}

export default FetchLor