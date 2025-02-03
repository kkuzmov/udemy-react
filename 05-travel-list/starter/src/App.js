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
  return (
    <div className="add-form">
      <h3>What do you want to bring with you?</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list">LIST</div>;
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list and you packed X of them (X%)</em>
    </footer>
  );
}
