import List from "./List";
import "./styles.css";
import data from "./data";
import { useState } from "react";

export default function App() {
  const [people, setpeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3> {people.length} birthday today </h3>
        <List people={people} />
        <button onClick={() => setpeople([])}> Clear all</button>
      </section>
    </main>
  );
}
