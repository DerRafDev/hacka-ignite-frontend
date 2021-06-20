import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
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
import { Button } from '../../components/Login/styles';
import firebase from 'firebase';
import "firebase/firestore"

export default function Dashboard() {
    const router = useRouter()
    const [notices, setNotices] = useState([])
    const [firstLoad, setFirstLoad] = useState(true)
    const [condominiumId, setCondominiumId] = useState('')

    const mapperNotices = doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    }

    useEffect(() => {
      // implementar request para pegar o condomínio ai
      (async() => {
        setInterval(() => { setCondominiumId('Yw6HIxBX2xf93Idxzc4F') }, 3000)
      })()
    }, [])

    if(condominiumId){
      firebase.firestore().collection(`condominiuns`).doc(condominiumId).collection('notices').orderBy('date', 'desc').limit(10).onSnapshot((docs) => {
        const datas = docs.docs.map(mapperNotices)
        if(firstLoad){
          setNotices(datas)
          setFirstLoad(false)
        } else if( datas[0].id !== notices[0]?.id ){
          const newNotions = [datas[0], ...notices]
          setNotices(newNotions)
        }
      })
    }


    return (
      <FirebaseAuthConsumer>
          {({isSignedIn, user, providerId}) => {
            if(!isSignedIn){
             return (
              <>
                <h1>Para continuar é preciso fazer login!</h1>
                <Button
                    type="button"
                    onClick={ async () => {
                      router.push('/')
                    }}
                >
                    Voltar
                </Button>
              </>
             )
            }

            return (
              <>
               <Header />
            <Container>
              <ViewCardsWarnings>
                <h1>Avisos</h1>
                {notices.map(notice => {
                  
                  return(
                    <Card key={notice.id}>
                        <div className="top">
                            <h4>{notice.name}</h4>
                            <h5><span>Tag</span>{notice.tag}</h5>
                        </div>

                        <p>{notice.body}</p>
                        <div className="BottomContact">
                            <span>{notice.apartment}</span>
                            <ButtonCheckAndClose>Anotar</ButtonCheckAndClose>
                            <ButtonWhatsApp>
                                <Image src={Wpp} alt="Whatsapp" />
                                Entrar em contato
                            </ButtonWhatsApp>
                        </div>
                    </Card>
                  )
                })}
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
            )
          }}
      </FirebaseAuthConsumer>
    );
}