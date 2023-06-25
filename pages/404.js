import Link from "next/link";

export default function FaqPage() {
  return (
    <div>
      <h1>Você se perdeu</h1>
      <Link href="/" passHref>
        Voltar para HomePage
      </Link>
    </div>
  );
}
