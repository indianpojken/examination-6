import './Top.css';

function Top({ title, caption }) {
  return (
    <header className="top">
      <h1>{title}</h1>
      <p>{caption}</p>
    </header>
  )
}

export { Top };
