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
        <div className="signin-base flex-content-center flex-items-center">
            <div className="padding-g shadow-m border-radius-soft border-red flex-column flex-items-center background-paper">
                <h2>Fazer login</h2>

                <div className="margin-top-m ">
                    <form className="login-form flex-column" onSubmit={handleSubmit}>
                        <input
                            required
                            type="email"
                            className="background padding-m font-size-m"
                            minLength={2}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                        />

                        <input
                            required
                            minLength={2}
                            type="password"
                            className="background padding-m font-size-m margin-top-s"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite sua senha"
                        />

                        <label className="font-size-m margin-top-s padding-top-s padding-bottom-s display-flex flex-items-center">
                            <input
                                type="checkbox"
                                className="margin-right-s"
                                checked={keepConnected}
                                onChange={(e) => setKeepConnected(!keepConnected)}
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
                        type="checkbox"
                        className="margin-right-s"
                        checked={isDark}
                        onChange={(e) => toggleDarkMode()}
                    />
                    Tema escuro   
                </label>
            </div>
        </div>
    );
}
