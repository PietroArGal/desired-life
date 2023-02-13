import Head from 'next/head'
import { Button } from '@nextui-org/react';
import { getSession, signOut } from 'next-auth/react'

export default function Home({ session }) {

  return (
    <>

      <Head>
        <title>Desired Life</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        session ? (
          <main>
            <h2>{session.user.name}</h2>
            <img src={session.user.image} />
            <h3>Balance: $915</h3>
            <Button color="success" >Deposit</Button>
            <Button color="error" >Withdraw</Button>
            <Button color="gradient" onPress={() => signOut()} >LogOut</Button>
          </main>
        ) : (
          <p>Skeleton</p>
        )
      }

    </>
  )
}

export const getServerSideProps = async (context) => {

  const session = await getSession(context)

  if (!session) return {
    redirect: {
      destination: '/login',
      permanent: false,
    }
  }

  return {
    props: {
      session
    }
  }
}
