import React from 'react';

export default () => (
  <section className="o-layout c-thumbnail__container">
    <div className="o-layout__item c-thumbnail__item">
      <img className="c-thumbnail__image"
        src="http://via.placeholder.com/370x198" alt="Pink and purple sunset"/>
      <h3 className="c-thumbnail__heading">Pink & Purple Sunset</h3>
      <p className="c-thumbnail__excerpt">Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper.</p>
      <a href="#">Go to the sunset</a>
    </div>

    <div className="o-layout__item c-thumbnail__item">
      <img className="c-thumbnail__image"
        src="http://via.placeholder.com/370x198" alt="Pink and purple sunset"/>
      <h3 className="c-thumbnail__heading">Sublime Trees</h3>
      <p className="c-thumbnail__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet…</p>
      <a href="#">View some more</a>
    </div>
  </section>
);
