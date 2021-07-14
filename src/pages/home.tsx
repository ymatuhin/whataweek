import { useState } from "preact/hooks";
import { Title } from "react-head";
import { Link } from "wouter-preact";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Title>Home page</Title>
      <section class="app">
        <h1>Home</h1>
        <Link href="/404.html">to 404</Link>
        <p>This is the home page.</p>
        <>
          <button style={{ width: 30 }} onClick={() => setCount(count - 1)}>
            -
          </button>
          <output style={{ padding: 10 }}>Count: {count}</output>
          <button style={{ width: 30 }} onClick={() => setCount(count + 1)}>
            +
          </button>
        </>
      </section>
    </>
  );
}
