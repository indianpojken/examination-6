import Vendors from '../assets/vendors.json';
import * as Logos from '../assets/logos';
import * as Chip from '../assets/chip';

import './Card.css';

function Card({ card }) {
  const [vendor] = Vendors.filter((v) => v.id === card?.vendor);
  const logo = Logos[vendor?.name?.replaceAll(' ', '')] ?? Logos["BitcoinInc"];
  const chip = Chip[vendor?.style] ?? Chip["Dark"];

  const filler = (string, fillerText) => {
    return (string ?? "") + fillerText.slice(string?.length);
  }

  return (
    <article
      className={`card${vendor?.style === "Light" ? " card--light" : ""}`}
      style={{ background: vendor?.background }}>
      <header>
        <img src={chip} />
        <img className="card__logo" src={logo} />
      </header>

      <p className="card__number">
        {filler(card?.cardNumber, "XXXX XXXX XXXX XXXX")}
      </p>

      <footer>
        <aside>
          <h3 className="card__label">
            Cardholder Name
          </h3>
          <p className="card__information">
            {card?.fullName ?? "Firstname Lastname"}
          </p>
        </aside>
        <aside className="align-right">
          <h3 className="card__label">
            Valid Thru
          </h3>
          <p className="card__information">
            {filler(card?.validDate, "MM/YY")}
          </p>
        </aside>
      </footer>
    </ article>
  );
}

export { Card };
