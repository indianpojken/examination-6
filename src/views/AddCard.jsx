import { useState } from 'react';

import { Top } from '../components/Top';
import { Card } from '../components/Card';
import { CardForm } from '../components/CardForm';

function AddCard() {
  const [card, setCard] = useState({});

  return (
    <>
      <Top title="Add a new bank card" caption="Add new card" />

      <section>
        <Card card={card} />
      </section>

      <main>
        <CardForm setCard={setCard} />
      </main>

      <footer>
        <button form="card-form" className="button button--dark" type="submit">
          Add Card
        </button>
      </footer>
    </>
  );
}

export { AddCard };
