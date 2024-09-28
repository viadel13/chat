"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import "../../../public/style.css"

const Chat = () => {

    const [load, setLoad] = useState(false);
    const fetcher = (url: string) => axios.get(url).then(res => res.data);


    const { data } = useSWR("http://localhost:5000/api/chat", fetcher, { refreshInterval: 1000 });

    useEffect(() => {
        if (data) {
            setLoad(true);  // Les données sont chargées
        } else {
            setLoad(false);  // Pas de données ou erreur
        }
    }, [data]);

    return (
        <div>

            <div className='main' style={{
                display: "flex"
            }}>
                <div className='left'>

                </div>
                <div className='right'>

                </div>
            </div>

        </div>
    )
}

export default Chat
