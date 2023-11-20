'use client';

import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import * as S from './styles';

export default function Login() {
  const router = useRouter();
  const handleLogin = (e: any) => {
    e.preventDefault();
    router.push('/churrascos');
  };

  return (
    <S.LoginWrapper>
      <form onSubmit={handleLogin}>
        <Input
          label="Login"
          name="email"
          placeholder="e-mail"
          type="email"
          required
        />
        <Input
          label="Senha"
          name="password"
          placeholder="senha"
          type="password"
          minLength={6}
        />
        <S.LoginButton type="submit">Entrar</S.LoginButton>
      </form>
    </S.LoginWrapper>
  );
}
