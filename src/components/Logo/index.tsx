import Image from 'next/image';
import { Logo } from './styles';

export default function TrincaLogo() {
  return (
    <Logo alt="trinca-logo" src="/assets/trinca.svg" width={48} height={48} />
  );
}
