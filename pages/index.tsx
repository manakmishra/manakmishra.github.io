import Head from 'next/head';
import Container from '../components/Container';
import { Hero } from '../components/hero';

export default function HomePage() {
  return (
    <Container>
      <Head>
        <title>Manak Mishra</title>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
      <Hero />
    </Container>
  )
}
