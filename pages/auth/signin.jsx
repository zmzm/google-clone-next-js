import React from 'react';
import { getProviders, signIn } from "next-auth/react";
import Header from '../../components/Header';
import Logo from '../../components/Logo';

const SignIn = ({ providers }) => {
  const handleSignIn = (providerId) => () => {
    signIn(providerId, { callbackUrl: '/' })
  }
  return (
    <>
      <Header />
      <div className='mt-40'>
        {Object.values(providers).map(provider => (
          <div key={provider.id} className='flex flex-col items-center'>
            <Logo altText={provider.name} />
            <p className='my-10 text-sm italic'>This website is created for learning purposes</p>
            <button
              onClick={handleSignIn(provider.id)}
              className='bg-red-400 text-white p-3 font-medium rounded-md hover:bg-red-500 hover:shadow-md'
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return { props: { providers } }
}

export default SignIn