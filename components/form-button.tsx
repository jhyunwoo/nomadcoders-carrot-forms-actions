'use client'

import { useFormStatus } from 'react-dom'

export default function FormButton() {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={pending}
      className={'p-2 text-lg bg-neutral-300 rounded-full mt-4 disabled:text-neutral-500'}
    >
      {pending ? 'Loading...' : 'Log in'}
    </button>
  )
}
