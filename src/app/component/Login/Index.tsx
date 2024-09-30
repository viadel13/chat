"use client"

import React, { useState } from 'react'
import Register from '../register/Index';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [view, setView] = useState(false);


    function handleSubmit() {
        console.log(email, password)
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 4
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 40
            }}>
                <h1>{!view ? "Connexion" : "Inscription"}</h1>
                <button onClick={() => setView(prev => !prev)}>{!view ? "Inscription" : "Connexion"}</button>
            </div>

            {
                !view ? (
                    <>
                        <div style={{ marginBottom: 12 }}>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='email'
                                style={{
                                    height: "30px"
                                }}
                            />

                        </div>
                        <div style={{ marginBottom: 12 }}>
                            <input
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder='password'
                                style={{
                                    height: "30px"
                                }}
                            />

                        </div>

                        <button type='submit' onClick={handleSubmit} style={{ marginBottom: 12 }}> Connexion</button>
                    </>
                ) : (
                    <Register />
                )
            }


        </div>
    )
}

export default Login;
