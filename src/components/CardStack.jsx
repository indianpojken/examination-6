import { Card } from '../components/Card';

import './CardStack.css'

function CardStack({ cards, setSelectedCard }) {
  return (
    <section className="card-stack">
      {cards.map((card, i) =>
        <article
          className="card-stack__item"
          key={card.id}
          style={{ marginTop: 40 * i }}
          onClick={() => { setSelectedCard(card.id) }}
        >
          <Card card={card} />
        </article>
      )}
    </section>
  )
}

export { CardStack };
