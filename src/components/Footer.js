import React from 'react';

export default () => (
  <footer>
    <div className="o-layout">
      <section className="o-layout__item">
        <a href="https://www.facebook.com/" target="_blank">
          <img src="/img/social/facebook.svg" alt="View us on Facebook"/>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="/img/social/instagram.svg" alt="View us on Instagram"/>
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src="/img/social/youtube.svg" alt="View us on YouTube"/>
        </a>
        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
      </section>
      <section>
        <div>
          <h4>Main Office</h4>
          <p>6235 Thalia Terrace Apt. 695</p>
          <p>Frederikfurt</p>
          <p>Jamaica</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>735-421-6378</p>
          <a href="mailto:myname@gmail.com">myname@gmail.com</a>
        </div>
      </section>
    </div>
  </footer>
);
