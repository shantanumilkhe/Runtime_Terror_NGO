import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Timepass = () => {
    const [number, setNumber] = useState(1);
    const [certificate, setCertificate] = useState(null);
    const [lor, setLor] = useState(null);
    //   let navigate = useNavigate();
    //   const routeChange = () => {
    //     let path = `volunteer/dashboard/dragndrop`;
    //     navigate(path);
    //   };
    const handleLORSubmit = async () => {
        let token = localStorage.getItem('token')
        await fetch(`http://localhost:5000/request/requestlor`,
            {
                method: 'POST',
                headers: { 'Authorization': token }
            }).then(res => console.log(res)).catch(err => console.log(err));
    }
    const handleCertificateSubmit = async () => {
        let token = localStorage.getItem('token')
        await fetch(`http://localhost:5000/request/requestCertificate`,
            {
                method: 'POST',
                headers: { 'Authorization': token }
            }).then(res => console.log(res)).catch(err => console.log(err));
    }

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
            // const response1= await fetch('http://localhost:5000/vol/getLOR', {
            //     method: 'GET',
            //     headers: {
            //         Authorization: token,
            //         'Content-Type': 'application/octet-stream'
            //     },
            //     responseType: 'blob'
            // })
            console.log(response.url);
            setCertificate(response.url);
            setLor(response1.url)
            //   await axios.get('http://localhost:5000/vol/getcertificates',{headers:{Authorization:token,'Content-Type': 'application/octet-stream'}}).then(res=>console.log(res.data)).catch(err=>console.log(err));
            // await axios.get('http://localhost:5000/vol/getLOR', { headers: { Authorization: token, 'Content-Type': 'application/octet-stream' } }).then(res => console.log(res.data)).catch(err => console.log(err));
        }
        getDetails();
    }, [])

    return (
        <div>
            {lor != null ? <div><iframe src={lor} width='100%' height={window.innerHeight}></iframe></div> : null}
        </div>
    )
}

export default Timepass