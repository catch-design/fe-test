import React from 'react';

export default () => (
  <form role="form">
    <h2>Form title</h2>
    <div>
      <input type="text" placeholder="First name" aria-label="First name"/>
      <input type="text" placeholder="Last name" aria-label="Last name"/>
      <input type="text" placeholder="Email address" aria-label="Email address"/>
      <select name="city" aria-label="City" defaultValue="">
        <option value="" disabled>City</option>
        <option value="kingston">Kingston</option>
        <option value="montego-bay">Montego Bay</option>
        <option value="ocho-rios">Ocho Rios</option>
      </select>
    </div>
    <button>Submit</button>
  </form>
);
