interface Props {
  items: string[];
  onClear: () => void;
}

const Items = ({ items, onClear }: Props) => {
  return (
    <>
      <div>Items</div>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={() => onClear()}>Clear</button>
    </>
  );
};

export default Items;
