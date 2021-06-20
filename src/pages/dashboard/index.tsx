import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { useRouter } from 'next/router';
import React from 'react';
import { Header } from '../../components/Header';
import { Button } from '../../components/Login/styles';
import { Container } from './styles'



export default function Dashboard() {
    const router = useRouter()
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
                    <p>Content</p>
                </Container>
              </>
            )
          }}
      </FirebaseAuthConsumer>
    );
}