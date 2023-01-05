import React from 'react';
import Image from 'next/image'
import { getProviders, signIn } from "next-auth/react";
import Header from '../../components/Header'

const SignIn = ({ providers }) => {
  const handleSignIn = (providerId) => () => {
    signIn(providerId, { callbackUrl: '/' })
  }
  return (
    <div>
      <Header />
      <div>
        {Object.values(providers).map(provider => (
          <div key={provider.id}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
              width={800}
              height={440}
              alt={provider.name}
            />
            <p>This website is created for learning purposes</p>
            <button onClick={handleSignIn(provider.id)}>Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return { props: { providers } }
}

export default SignIn