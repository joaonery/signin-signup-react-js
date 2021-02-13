import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../shared/components/ButtonPrimary';
import { useTheme } from '../../shared/hooks/useTheme';

import './Signin.css';

export const Signin: React.FC = () => {
    const {isDark, toggleDarkMode} = useTheme();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keepConnected, setKeepConnected] = useState(false);

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(email, password);
    }, [email, password]);

    return (
        <div className="signin-base flex-content-center flex-items-center background">
            <div className="padding-g shadow-m border-red flex-column flex-items-center background-paper">
                <h2>Fazer login</h2>

                <div className="margin-top-m ">
                    <form className="login-form flex-column" onSubmit={handleSubmit}>
                        <input
                            required
                            type="email"
                            minLength={2}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                            className="background padding-m font-size-m"
                        />

                        <input
                            required
                            minLength={2}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite sua senha"
                            className="background padding-m font-size-m margin-top-s"
                        />

                        <label className="font-size-m margin-top-s padding-top-s padding-bottom-s display-flex flex-items-center">
                            <input
                                required
                                type="checkbox"
                                checked={keepConnected}
                                onChange={(e) => setKeepConnected(!keepConnected)}
                                className="margin-right-s"
                            />
                            Manter conectado
                        </label>
                        

                        <ButtonPrimary type="submit" variant="contained">
                            Entrar
                        </ButtonPrimary>
                    </form>
                </div>
                
                <Link to="/signup" className="font-size-m margin-top-m font-weight-g">Cadastrar-se</Link>
            </div>

            <div className="dark-mode-container">
                <label className="font-size-m padding-s display-flex flex-items-center">
                    <input
                        required
                        type="checkbox"
                        checked={isDark}
                        onChange={(e) => toggleDarkMode()}
                        className="margin-right-s"
                    />
                    Tema escuro   
                </label>
            </div>
        </div>
    );
}
