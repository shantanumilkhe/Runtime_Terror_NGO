import React, { useState, useEffect } from 'react'
import axios from 'axios';

const FetchCertificates = () => {
    const [certificate, setCertificate] = useState(null);
    useEffect(() => {
        let token = localStorage.getItem('token')
        async function getDetails() {
            const response = await fetch('http://localhost:5000/vol/getcertificates', {
                method: 'GET',
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/octet-stream'
                },
            }).then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    setCertificate(url);
                });
            });
            setCertificate(response.url);
        }
        getDetails();
    }, [])
    return (
        <div>
            {certificate != null ? <div><iframe src={certificate} width='100%' height={window.innerHeight}></iframe></div> : null}
        </div>
    )
}

export default FetchCertificates