import React from 'react';

import Form from './Form';
import Thumbnails from './Thumbnails';
import Carousel from './Carousel';
import Footer from './Footer';

export default () => (
  <div>
    <main role="main">
      <h1>A front-end test of sorts</h1>
      <Form />
      <hr />
      <Thumbnails />
    </main>
    <Carousel />
    <Footer />
  </div>
);
