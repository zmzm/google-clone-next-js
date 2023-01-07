import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

const User = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <Image
        className="w-10 h-10 rounded-full p-1 hover:bg-gray-200 cursor-pointer"
        src={session.user.image}
        onClick={signOut}
        width={32}
        height={32}
        alt="user-image"
      />
    );
  }
  return (
    <button
      type="button"
      className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
      onClick={signIn}
    >
      Sign in
    </button>
  );
};

export default User;
