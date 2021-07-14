import { Title } from "react-head";
import { Link } from "wouter-preact";
const NotFound = () => (
  <>
    <Title>Not Found</Title>
    <Link href="/">to Home page</Link>
    <section class="app app404">
      <h1>404: Not Found</h1>
      <p>It's gone :(</p>
    </section>
  </>
);

export default NotFound;
