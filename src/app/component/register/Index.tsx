"use client"
import { useState } from 'react'

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfrimPassword] = useState("");
    const [pic, setPic] = useState<File | null>(null)


    function handleSubmit() {
        console.log(email, password, confirmPassword, pic)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            // Si les fichiers ne sont pas null, on peut les utiliser
            setPic(files[0]); // Exemple : stocker le premier fichier
        }
    };




    return (
        <>
            <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='name'
                style={{
                    height: "30px"
                }}
            />
            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email'
                style={{
                    height: "30px"
                }}
            />
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
                style={{
                    height: "30px"
                }}
            />
            <input
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfrimPassword(e.target.value)}
                placeholder='confirm password'
                style={{
                    height: "30px"
                }}
            />
            <input
                type='file'
                accept='image/*'
                onChange={handleFileChange}
                placeholder='email'
                style={{
                    height: "30px"
                }}
            />
            <button type='submit' onClick={handleSubmit} style={{ marginBottom: 12 }}>Register</button>
        </>
    )
}

export default Register;
