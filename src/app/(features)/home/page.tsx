import { Link } from '@app/core/components/link';
import { Container, Title } from '@app/core/components/styles/sharedstyles';
import { Todos } from './todos';

export default function HomePage() {
  return (
    <Container padding="2em" centered={true}>
      <Title>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Title>
      <Link href="/about">About</Link>
      <Todos />
    </Container>
  );
}
