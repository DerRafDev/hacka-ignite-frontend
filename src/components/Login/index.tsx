import {
    Input,
    RetangleBlue,
    RetangleWhite,
    Button,
    InputSpace,
    Form,
    DivRegister
  } from './styles';
import Router, {useRouter} from 'next/router';

type LoginProps = {
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    handleLogin: () => void;
    handleSignup: () => void;
    hasAccount: boolean;
    setHasAccount: (value: boolean) => void;
    emailError: string;
    passwordError: string;
}
import firebase from "firebase/app";
import "firebase/auth";

export default function Login({ 
    email, 
    setEmail, 
    password, 
    setPassword, 
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
}: LoginProps) {
    const router = useRouter()
    return(
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
            <p className="errorMsg">{emailError}</p>

              <Input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Digite sua Senha"
              />
              <p className="errorMsg">{passwordError}</p>

            </InputSpace>

            <Button
                type="button"
                onClick={ async () => {
                  const user = await firebase.auth().signInWithEmailAndPassword(email, password)

                  router.push('/dashboard')
                }}
            >
                Entrar
            </Button>

            <div>
              <DivRegister href="/">Esqueceu sua senha?</DivRegister>
              <DivRegister href="/register">Cadastre-se</DivRegister>
            </div>
          </Form>
        </RetangleWhite>
      </RetangleBlue>
    );
}