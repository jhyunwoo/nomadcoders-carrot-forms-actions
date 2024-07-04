'use server'

export async function handleSubmit(prevState: any, data: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  if (data.get('password') === '12345') {
    return { result: 'success' }
  } else {
    return { result: 'failed' }
  }
}
