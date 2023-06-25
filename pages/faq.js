// faq.js
import FAQScreen from '../src/screens/FaqScreen/index';

export default FAQScreen; 

export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });

    return {
      props: {
          faq,
      },
    };
}  

/*import Head from 'next/head';
import Link from "next/link";
import Titulo from "../src/components/Titulo";

export async function getStaticProps() {
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
  const faq = await fetch(FAQ_API_URL)
    .then((res) => {
      return res.json()
    })
    .then((resC) => {
      return resC
    }
  )
  return {
    props: {
      faq,
    }
  }
}

export default function FaqPage({ faq }) {
  return (
    <div>
      <Head>
        <title>Faq - Alura Cases Campanha</title>
      </Head>
      <Titulo as="h1">Alura Case - Faq Page</Titulo>
      <Link href="/" passHref>
        Ir para HomePage
      </Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};*/