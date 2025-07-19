'use client'

import Login from "@/actions/login";
import { useFormStatus } from "react-dom";
import Button from "../Forms/button";
import { useActionState } from "react";

function FormButton() {
  const {pending} = useFormStatus();

  return (
    <>
      {
        pending ? <Button disabled={pending}>Carregando...</Button> : <Button>Entrar</Button>
      }
    </>

  )
}

export default function LoginForm() {
  const [state, action] = useActionState(Login, {
    ok: false,
    error: '',
    data: null
  }); 

  return (
    <>
      <form action={action}>
        <input type="text" name="username" placeholder="usuário" />
        <input type="password" name="password" placeholder="senha" />
        <FormButton />
        <p>{state?.error}</p>
      </form>
    </>
  )
}