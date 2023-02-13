import React from 'react'
import { signIn, useSession, getSession } from 'next-auth/react'
import { Button } from '@nextui-org/react';

function LoginPage() {

    return (
        <>
            <Button onPress={() => signIn()} >Sign In</Button>
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