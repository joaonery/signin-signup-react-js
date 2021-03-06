import React, { useCallback, useRef, useState } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import ButtonPrimary from '../../shared/components/ButtonPrimary';
import { useTheme } from '../../shared/hooks/useTheme';
import { SignupService } from '../../shared/services/signup-service/SignupService';

import './Signup.css';

export const Signup: React.FC = () => {
    const repeatedPasswordRef = useRef<HTMLInputElement>(null);
    const history = useHistory();

    const {isDark, toggleDarkMode} = useTheme();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [keepConnected, setKeepConnected] = useState(false);

    const handleOnChangePassword = useCallback((value: string) => {
        setPassword(value);

        if (value !== repeatedPassword) {
            if (repeatedPasswordRef.current) {
                repeatedPasswordRef.current.setCustomValidity('As senhas precisam estar iguais.');
            }
        } else {
            if (repeatedPasswordRef.current) {
                repeatedPasswordRef.current.setCustomValidity('');
            }
        }
    }, [repeatedPassword]);

    const handleOnChangeRepeatedPassword = useCallback((value: string) => {
        setRepeatedPassword(value);

        if (password !== value) {
            if (repeatedPasswordRef.current) {
                repeatedPasswordRef.current.setCustomValidity('As senhas precisam estar iguais.');
            }
        } else {
            if (repeatedPasswordRef.current) {
                repeatedPasswordRef.current.setCustomValidity('');
            }
        }
    }, [password]);

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const res = await SignupService.signup({
            firstName,
            lastName,
            email,
            password
        });

        if(res.success) {
            history.push('/signin');
        } else {
            if(!res.messages || res.messages.length == 0){
                alert('Erro no cadastro!');
            } else {
                alert(res.messages.join(',\n'));
            }
        }

    }, [firstName, lastName, email, password]);

    return (
        <div className="signin-base flex-content-center flex-items-center">
            <div className="padding-g shake shadow-m border-radius-soft border-red flex-column flex-items-center background-paper">
                <h2>Cadastre-se</h2>

                <div className="margin-top-m ">
                    <form className="login-form flex-column" onSubmit={handleSubmit}>
                        <input
                            required
                            type="text"
                            className="background padding-m font-size-m"
                            minLength={2}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Nome"
                        />

                        <input
                            required
                            type="text"
                            className="background padding-m font-size-m"
                            minLength={2}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Sobrenome"
                        />
                        
                        <input
                            required
                            type="email"
                            className="background padding-m font-size-m"
                            minLength={2}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />

                        <input
                            required
                            minLength={2}
                            type="password"
                            className="background padding-m font-size-m margin-top-s"
                            value={password}
                            ref={repeatedPasswordRef}
                            onChange={(e) => handleOnChangePassword(e.target.value)}
                            placeholder="Nova senha"
                        />

                        <input
                            required
                            minLength={2}
                            type="password"
                            className="background padding-m font-size-m margin-top-s"
                            value={repeatedPassword}
                            ref={repeatedPasswordRef}
                            onChange={(e) => handleOnChangeRepeatedPassword(e.target.value)}
                            placeholder="Repetir senha"
                        />
                        
                        <ButtonPrimary type="submit" variant="contained">
                            Cadastre-se
                        </ButtonPrimary>
                    </form>
                </div>
                
                <Link to="/signin" className="font-size-m margin-top-m font-weight-g">Logar-se</Link>
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
