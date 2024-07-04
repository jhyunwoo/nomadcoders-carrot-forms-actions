'use client'

import { EnvelopeIcon, FireIcon, KeyIcon, UserIcon } from '@heroicons/react/24/solid'
import SignUpInput from '@/components/sign-up-input'
import { handleSubmit } from '@/app/action'
import { useFormState } from 'react-dom'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import FormButton from '@/components/form-button'

export default function HomePage() {
  const [result, action] = useFormState(handleSubmit, null)

  return (
    <div className={'w-full h-screen flex justify-center flex-col p-4 items-center'}>
      <FireIcon className={'size-14 text-red-400 m-12'} />
      <form action={action} className={'w-full max-w-lg flex flex-col gap-2'}>
        <SignUpInput name={'email'} placeholder={'Email'} type={'email'}>
          <EnvelopeIcon className={'size-6 text-neutral-500'} />
        </SignUpInput>
        <SignUpInput name={'username'} placeholder={'Username'} type={'text'}>
          <UserIcon className={'size-6 text-neutral-500'} />
        </SignUpInput>
        <SignUpInput
          name={'password'}
          placeholder={'Password'}
          type={'password'}
          error={result?.result === 'failed' ? 'Wrong Password' : ''}
        >
          <KeyIcon className={'size-6 text-neutral-500'} />
        </SignUpInput>
        <FormButton />
      </form>
      {result?.result === 'success' && (
        <div className={'bg-green-600 p-3 rounded-xl flex gap-2 items-center w-full max-w-lg mt-4'}>
          <CheckCircleIcon className={'size-6 text-black'} />
          <div>Welcome back!</div>
        </div>
      )}
    </div>
  )
}
