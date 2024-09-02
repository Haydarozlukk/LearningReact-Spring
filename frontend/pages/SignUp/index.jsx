import React, { useState } from 'react';
import './SignUp.css'; // CSS dosyasını dahil edelim

export function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted");
        // Diğer işlemler burada yapılabilir
    };

    // Butonun aktif mi yoksa devre dışı mı olacağını belirleyen değişken
    const isDisabled = password !== passwordRepeat || password === '' || passwordRepeat === '';

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordRepeat">Password Repeat</label>
                    <input
                        id="passwordRepeat"
                        type="password"
                        placeholder="Repeat your password"
                        value={passwordRepeat}
                        onChange={(event) => setPasswordRepeat(event.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className={isDisabled ? 'disabled' : ''}
                    disabled={isDisabled}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}
