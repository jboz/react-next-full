import { Link } from '@app/core/components/link';
import { Container, Tabs, Title } from '@app/core/components/styles/sharedstyles';
import { Containers } from './containers';
import { Repos } from './repos';
import { Todos } from './todos';

export default function HomePage() {
  return (
    <Container padding="2em" centered={true}>
      <Title>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Title>
      <Link href="/about">About</Link>
      <Tabs>
        <Todos />
        <Repos />
        <Containers />
      </Tabs>
    </Container>
  );
}
