import { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

import { formatCardNumber, formatDate, formatCCV } from '../helpers/format';

import Vendors from '../assets/vendors.json';
import './CardForm.css';

function CardForm({ setCard }) {
  const navigate = useNavigate();
  const { cards, setCards } = useOutletContext();

  const [data, setData] = useState({
    cardNumber: "",
    fullName: "Firstname Lastname",
    validDate: "",
    ccv: "",
    vendor: "",
  });

  const handleChange = (event, format) => {
    let value = event.target.value;

    if (event.target.value && format) {
      value = format(event.target.value);
    }

    setData({ ...data, [event.target.name]: value });
  }

  useEffect(() => {
    setCard(data);
  }, [data])

  const submit = (event) => {
    event.preventDefault();

    setCards([
      ...cards, { ...data, id: ~~cards.slice(-1)[0]?.id + 1 }
    ]);

    navigate('/');
  }

  return (
    <form id="card-form" className="card-form" autoComplete="off" onSubmit={submit}>
      <label htmlFor="cardNumber">
        Card Number
        <input
          value={data.cardNumber}
          onChange={(event) => handleChange(event, formatCardNumber)}
          type="text"
          name="cardNumber"
          pattern="^\d{4} \d{4} \d{4} \d{4}$"
          title="#### #### #### ####"
          maxLength={19}
          required
        />
      </label>

      <label htmlFor="fullName">
        Cardholder name
        <input
          value={data.fullName}
          onChange={handleChange}
          type="text"
          name="fullName"
          maxLength={25}
          required
        />
      </label>

      <section>
        <label htmlFor="validDate">
          Valid Thru
          <input
            value={data.validDate}
            onChange={(event) => handleChange(event, formatDate)}
            type="text"
            name="validDate"
            pattern="^(0[1-9]|1[0-2])\/\d\d$"
            title="MM/YY"
            maxLength={5}
            required
          />
        </label>

        <label htmlFor="ccv">
          CCV
          <input
            value={data.ccv}
            onChange={(event) => handleChange(event, formatCCV)}
            type="text"
            name="ccv"
            title="###"
            pattern="^\d{3}$"
            maxLength={3}
            required
          />
        </label>
      </section>

      <label htmlFor="vendor">
        Vendor
        <select
          value={data.vendor}
          name="vendor"
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden></option>
          {Vendors.map((vendor) => (
            <option value={vendor.id} key={vendor.id}>{vendor.name}</option>
          ))}
        </select>
      </label>
    </form >
  );
}

export { CardForm };
