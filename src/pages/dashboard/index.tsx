import { Header } from '../../components/Header';
import Image from "next/image";
import {
    Container,
    ViewCardsWarnings,
    Card,
    ButtonCheckAndClose,
    ButtonWhatsApp,
    ViewSearch
} from './styles'

import Wpp from "../../../public/Whatsapp.svg";

export default function Dashboard() {
    return (
        <>
            <Header />
            <Container>
                <ViewCardsWarnings>
                    <h1>Avisos</h1>
                    <Card>
                        <div className="top">
                            <h4>Jorge Luiz</h4>
                            <h5><span>Tag</span> Visita</h5>
                        </div>

                        <p>Meu filho Jorge Neto está proibido de receber visitas pois
                            está de castigo, impedir a liberação da
                            entrada de amigos dele.</p>
                        <div className="BottomContact">
                            <span>Bloco/AP</span>
                            <h3>10 / 120</h3>

                            <ButtonCheckAndClose>Anotar</ButtonCheckAndClose>
                            <ButtonWhatsApp>
                                <Image src={Wpp} alt="Whatsapp" />
                                Entrar em contato
                            </ButtonWhatsApp>
                        </div>
                    </Card>
                    <Card>
                        <div className="top">
                            <h4>Rafael Sordi</h4>
                            <h5><span>Tag</span>Delivery</h5>
                        </div>

                        <p>Pedi um Ifood, o nome do motorista é Carlos e está em uma moto de placa AAA-9999, favor liberar e me avisar quando ele estiver entrando.
                        </p>
                        <div className="BottomContact">
                            <span>Bloco/AP</span>
                            <h3>10 / 120</h3>

                            <ButtonCheckAndClose>Anotar</ButtonCheckAndClose>
                            <ButtonWhatsApp>
                                <Image src={Wpp} alt="Whatsapp" />
                                Entrar em contato
                            </ButtonWhatsApp>
                        </div>
                    </Card>
                </ViewCardsWarnings>
                <ViewSearch>
                    <label>Bloco</label>
                    <select>
                        <option value=""></option>
                    </select>
                    <label>Ap</label>
                    <select>
                        <option value=""></option>
                    </select>

                    <h4>Condôminio</h4>

                    <input placeholder="Faça sua pesquisa..." />

                    <button className="btn btnPesquisar">Pesquisar</button>
                    <button className="btn btnAvisar">Avisar</button>
                </ViewSearch>
            </Container>
        </>
    );
}