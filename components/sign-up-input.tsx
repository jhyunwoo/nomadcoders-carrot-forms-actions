import { ReactNode } from 'react'

export default function SignUpInput({
  placeholder,
  type,
  children,
  name,
  error,
}: {
  placeholder: string
  type: string
  children: ReactNode
  name: string
  error?: string
}) {
  return (
    <>
      <div
        className={`p-2 border-[2px] rounded-full flex items-center px-3 gap-1 focus-within:ring-offset-1 focus-within:ring-2 ${error ? 'ring-red-500 ring-2 ring-offset-1 border-red-400' : 'ring-neutral-300 border-neutral-200 '}`}
      >
        {children}
        <input
          name={name}
          className={'focus:outline-none w-full'}
          placeholder={placeholder}
          type={type}
        />
      </div>
      {error && <div className={'text-red-500 py-2'}>{error}</div>}
    </>
  )
}
