import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items)=> [...items, item]
    );
  }

  function handleDeleteItem(id) {
    console.log(id);
    console.log(items);

    setItems((items)=> items.filter((item)=> item.id !== id)
    );
    console.log(items);

  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem}/>
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Your Horizon 🧳</h1>;
}

function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);

  

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, count, packed: false, id: Date.now() };

    onAddItems(newItem)

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
function PackingList({items, onDeleteItem}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem}/>
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
function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description} <button onClick={()=>{onDeleteItem(item.id)}}>❌</button>
      </span>
    </li>
  );
}
