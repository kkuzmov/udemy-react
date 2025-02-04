import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Your Horizon 🧳</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items)=> [...items, item]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, count, packed: false, id: Date.now() };

    handleAddItem(newItem)

    setDescription("");
    setCount(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want to bring with you?</h3>
      <select
        onChange={(e) => {
          setCount(Number(e.target.value));
        }}
        value={count}
      >
        <option value={1} key={1}>
          1
        </option>
        <option value={2} key={2}>
          2
        </option>
        <option value={3} key={3}>
          3
        </option>
        <option value={4} key={4}>
          4
        </option>
        <option value={5} key={5}>
          5
        </option>
        <option value={6} key={6}>
          6
        </option>
        <option value={7} key={7}>
          7
        </option>
        <option value={8} key={8}>
          8
        </option>
        <option value={9} key={9}>
          9
        </option>
        <option value={10} key={10}>
          10
        </option>
      </select>
      <input
        type="text"
        placeholder="Enter an item to take.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add item</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list and you packed X of them (X%)</em>
    </footer>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description} ❌
      </span>
    </li>
  );
}
