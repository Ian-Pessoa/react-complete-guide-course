export default function TabButton({label}) {
  function handleClick() {
    console.log('yes')
  }

  return (
    <li>
      <button onClick={handleClick}>{label}</button>
    </li>
  );
}