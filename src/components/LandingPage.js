import React from 'react';

import Form from './Form';
import Thumbnails from './Thumbnails';
import Carousel from './Carousel';
import Footer from './Footer';

export default () => (
  <div>
    <main className="o-wrapper" role="main">
      <h1 className="c-page__title">A front-end test of sorts</h1>
      <Form />
      <hr className="c-page__divider" />
      <Thumbnails />
    </main>
    <Carousel />
    <Footer />
  </div>
);
