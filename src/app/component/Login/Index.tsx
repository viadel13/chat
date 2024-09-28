import React from 'react'

const Login = () => {

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <h1>Connexion</h1>
            <div style={{ marginBottom: 12 }}>
                <input
                    type='text'
                    value=""
                    placeholder='email'
                    style={{
                        height: "30px"
                    }}
                />

            </div>
            <div style={{ marginBottom: 12 }}>
                <input
                    type='text'
                    value=""
                    placeholder='email'
                    style={{
                        height: "30px"
                    }}
                />

            </div>

            <button>Connexion</button>
        </div>
    )
}

export default Login;
