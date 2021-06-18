
import {
    DivHeader,
    NavButtons,
    ButtonGerenciamento,
    ButtonCadastrar,
    ButtonSair,
} from './styles'

export function Header() {
    return (
        <DivHeader>
            <img src="/images/logo.svg" alt="" />
            <NavButtons>
                <ButtonGerenciamento>Gerenciamento</ButtonGerenciamento>
                <ButtonCadastrar>Cadastrar condômino</ButtonCadastrar>
                <ButtonSair><img src="/images/power.svg" alt="Sair Dashboard" /></ButtonSair>
            </NavButtons>
        </DivHeader>
    );
}
