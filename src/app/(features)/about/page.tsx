import { Link } from '@app/core/components/link';
import { Container, Title } from '@app/core/components/styles/sharedstyles';

export default function AboutPage() {
  return (
    <Container padding="2em" centered={true}>
      <Title>About page</Title>
      <Link href="/home">Back</Link>
    </Container>
  );
}
