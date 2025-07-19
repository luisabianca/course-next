'use server';

import { cookies } from "next/headers";
import errorApi from "./api-errors";
import { TOKEN_POST } from "./api";

export default async function Login(state: {ok: boolean, data: null, error: string}, formData: FormData) {
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  
  try {
    if(!username || !password) throw new Error('Preencha os dados.')

    const {url} = TOKEN_POST();  

    const response = await fetch(url, {
      method: 'POST',
      body: formData
    })
    if(!response.ok) throw new Error('Senha ou Usuário inválidos')

    const data = await response.json();

    (await cookies()).set('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24
    })

    return {data: null, ok: true, error: ''}

  } catch(error: unknown) {
    return errorApi(error)
  }
}