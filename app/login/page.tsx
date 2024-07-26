'use client';

import { useState } from 'react';
import { cookies } from 'next/headers';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const secret = 'adsheisenbug1337';
  const cookies = useCookies();
  const router = useRouter();

  const submitPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password == secret) {
      cookies.set('auth-heis', 'hasAuthValue', {
        expires: 300,
        secure: true,
      });
      router.push('/');
    } else {
      setError('Password incorrect');
    }
  };

  return (
    <div className='max-w-7xl m-auto mt-12 bg-white text-black'>
      <h1 className='text-3xl'>Whats the magic word?</h1>
      <form className='mt-6' onSubmit={e => submitPassword(e)}>
        <input
          type='text'
          placeholder='Enter password'
          className='border p-3'
          value={password}
          onChange={e => {
            setPassword(e.target.value);
            setError('');
          }}
        />
        <button className='border p-3 bg-green-200' type='submit'>
          Submit
        </button>
      </form>
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
}
