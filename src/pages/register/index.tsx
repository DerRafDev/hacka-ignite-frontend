import {
    Container,
    Input,
    RetangleBlue,
    RetangleWhite,
    Button,
    InputSpace,
    Form,
    DivUper,
    
} from '../../../styles/register'

import { useState } from 'react';

export default function Home() {
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    return (
        <Container>
            <RetangleBlue>
                <RetangleWhite>

                        <DivUper>
                            <img src="/images/logo-curto.svg" alt="Logo Alfred" />

                            <h1>Cadastrar</h1>
                        </DivUper>

                    <Form>
                        <InputSpace>
                            <Input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Digite seu E-mail"
                            />

                            <Input
                                type="email"
                                value={confirmEmail}
                                onChange={e => setConfirmEmail(e.target.value)}
                                placeholder="Confirme seu E-mail"
                            />

                            <Input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Digite sua Senha"
                            />

                            <Input
                                type="password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                placeholder="Confirme sua Senha"
                            />
                        </InputSpace>

                        <Button type="submit">Cadastrar</Button>
                    </Form>
                </RetangleWhite>
            </RetangleBlue>
        </Container>
    )
}
