
import firebase from 'firebase';
import { useRouter } from 'next/router';
import {
    DivHeader,
    NavButtons,
    ButtonGerenciamento,
    ButtonCadastrar,
    ButtonSair,
} from './styles'

export function Header() {
    const router = useRouter()

    return (
        <DivHeader>
            <img src="/images/logo.svg" alt="" />
            <NavButtons>
                <ButtonGerenciamento>Gerenciamento</ButtonGerenciamento>
                <ButtonCadastrar>Cadastrar condômino</ButtonCadastrar>
                <ButtonSair 
                  onClick = { async() => {
                    await firebase.auth().signOut()

                    router.push("/")
                  } }
                ><img src="/images/power.svg" alt="Sair Dashboard" /></ButtonSair>
            </NavButtons>
        </DivHeader>
    );
}
