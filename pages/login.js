import React from 'react'
import { signIn, getSession } from 'next-auth/react'
import { Button } from '@nextui-org/react';

function LoginPage() {

    return (
        <>
            <h3>This game is in Alpha Version, please login with the same method.</h3>
            <Button color="gradient" onPress={() => signIn()} >Sign In</Button>
        </>
    )
}

export const getServerSideProps = async (context) => {

    const session = await getSession(context)

    if (session) return {
        redirect: {
            destination: '/',
            permanent: false,
        }
    }

    return {
        props: {
            session
        }
    }
}

export default LoginPage