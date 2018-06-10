import React from 'react';

export default () => (
  <form role="form">
    <h2>Form title</h2>
    <div className="o-layout">
      <input type="text" placeholder="First name" aria-label="First name"
        className="o-layout__item" />
      <input type="text" placeholder="Last name" aria-label="Last name"
        className="o-layout__item" />
      <input type="text" placeholder="Email address" aria-label="Email address"
        className="o-layout__item" />
      <select name="city" aria-label="City" defaultValue=""
        className="o-layout__item">
        <option value="" disabled>City</option>
        <option value="kingston">Kingston</option>
        <option value="montego-bay">Montego Bay</option>
        <option value="ocho-rios">Ocho Rios</option>
      </select>
    </div>
    <button>Submit</button>
  </form>
);
