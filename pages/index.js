import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [question, setquestionInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: question }),
    });
    const data = await response.json();

    setResult(data.result);
    setquestionInput("");
  }

  return (
    <div>
      <Head>
        <title>Destiny Content Creation</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Name my pet</h3>
        <form onSubmit={onSubmit}>
          <input
              type="text"
              name="question"
              placeholder="Enter an question"
              value={question}
              onChange={(e) => setquestionInput(e.target.value)}
          />

          <input type="submit" value="Generate names" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
