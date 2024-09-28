"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';


type User = {
    email: string,
    name: string
}

type DataChats = {
    chatName: string,
    isGroupChat: false,
    user: User[],
    _id: string
}

const Chat = () => {

    const [load, setLoad] = useState(false);
    const fetcher = (url: string) => axios.get<DataChats[]>(url).then(res => res.data);


    const { data } = useSWR("http://localhost:5000/api/chat", fetcher, { refreshInterval: 1000 });
    console.log(data)

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
                display: "flex",
                gap: 15
            }}>
                <div className='left' style={{
                    width: "800px",
                    minHeight: "100vh",
                    backgroundColor: "#edf2f4",
                    borderRadius: "10px",
                    padding: 5
                }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                        <h2>My chats</h2>
                        <button>Nouveau group</button>

                    </div>

                    {
                        load ? (
                            data?.map((i) => {
                                return (
                                    <div key={i._id} style={{
                                        backgroundColor: "#8d99ae",
                                        padding: 8,
                                        margin: 4,
                                        height: "50px",
                                        borderRadius: 12,
                                        color: "black"
                                    }}>
                                        {i.chatName}
                                    </div>
                                )
                            })
                        ) : (

                            <p>Chargement...</p>
                        )

                    }

                </div>
                <div className='right' style={{
                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: "#edf2f4",
                    borderRadius: "10px"
                }}>
                    dsd
                </div>
            </div>

        </div>
    )
}

export default Chat
