import {
  Container,
  Input,
  RetangleBlue,
  RetangleWhite,
  Button,
  InputSpace,
  Form,
  DivRegister
} from './styles'

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  return (
    <Container>
      <RetangleBlue>
        <RetangleWhite>
          <Form>
            <img src="/images/logo.svg" alt="" />

            <h1>Login</h1>

            <InputSpace>
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Digite seu E-mail"
              />

              <Input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Digite sua Senha"
              />
            </InputSpace>

            <Button type="submit">Entrar</Button>

            <div>
              <DivRegister href="/">Esqueceu sua senha?</DivRegister>
              <DivRegister href="/">Cadastre-se</DivRegister>
            </div>
          </Form>
        </RetangleWhite>
      </RetangleBlue>
    </Container>
  )
}
