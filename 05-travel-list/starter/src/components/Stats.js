
export default function Stats({ items }) {
  if (!items.length) {
    return <p className="stats">Start adding items to your list 😊</p>;
  }
  const totalNumberOfItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedItemsPercentage = Math.round(
    (packedItems / totalNumberOfItems) * 100
  );

  return (
    <footer className="stats">
      <em>
        {packedItemsPercentage === 100
          ? "Everything is ready!"
          : `You have ${totalNumberOfItems} items on your list and you packed ${packedItems} of them (${packedItemsPercentage}%)`}
      </em>
    </footer>
  );
}