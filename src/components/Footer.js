import React from 'react';

export default () => (
  <footer className="c-footer__container">
    <div className="o-layout c-footer__grid">

      <section className="o-layout__item c-footer__social">
        <a className="c-footer__social__link"
          href="https://www.facebook.com/" target="_blank">
          <img src="/img/social/facebook.svg" alt="View us on Facebook"/>
        </a>
        <a className="c-footer__social__link"
          href="https://www.instagram.com/" target="_blank">
          <img src="/img/social/instagram.svg" alt="View us on Instagram"/>
        </a>
        <a className="c-footer__social__link"
          href="https://www.youtube.com/" target="_blank">
          <img src="/img/social/youtube.svg" alt="View us on YouTube"/>
        </a>
        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
      </section>

      <section className="c-footer__contact">
        <div className="c-footer__contact__location">
          <h4 className="c-footer__contact__header">Main Office</h4>
          <p>6235 Thalia Terrace Apt. 695</p>
          <p>Frederikfurt</p>
          <p>Jamaica</p>
        </div>
        <div>
          <h4 className="c-footer__contact__header">Contact</h4>
          <p>735-421-6378</p>
          <a href="mailto:myname@gmail.com">myname@gmail.com</a>
        </div>
      </section>
      
    </div>
  </footer>
);
