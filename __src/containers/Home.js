import React from 'react';
import { withRouteData, SiteData, Head } from 'react-static';
import moment from 'moment';

const Home = ({ postList }) => {
  return (
    <SiteData>
      {({ lastBuilt }) => (
        <main>
          <Head>
            <title>d. xaolonist</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Pham Minh Tam - who is a scientist, an anthropologist, a psychologist, a moralist, an alchemist... i am also doing web ui on my left hand." />
            <meta name="keywords" content="Frontend Lead, Senior Frontend, Sai Gon, Viet Nam" />
            <meta name="author" content="Pham Minh Tam" />

            <meta property="og:title" content="d. xaolonist" />
            <meta property="og:description"
              content="who is a scientist, an anthropologist, a psychologist, a moralist, an alchemist... i am also doing web ui on my left hand." />
            <meta property="og:image" content="/apple-icon-180x180.png" />

            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <meta name="apple-mobile-web-app-title" content="Xaolonist" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />

            <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />

            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />

            <link rel="manifest" href="/manifest.json" />
          </Head>

          <section className="container intro">
            <h1 className="xln">
              <div>d. xaolonist</div>
            </h1>
            <h4>
              who is a scientist, an anthropologist, a psychologist,
              a moralist, an alchemist...
              i am also doing web ui on my left&nbsp;hand.
            </h4>
            <ul>
              <li className="info">
                <span role="img" aria-label="pineapple">🍍</span>
                <a href="https://www.linkedin.com/in/tam-pham-51b41192/" target="_blank" rel="noopener noreferrer">linkedin</a>
                <span>, </span>
                <a href="https://medium.com/@xaolonist" target="_blank" rel="noopener noreferrer">medium</a>
                <span>, </span>
                <a href="https://github.com/tampham47" target="_blank" rel="noopener noreferrer">github</a>
                <span>, </span>
                <a href="https://codepen.io/tampham47" target="_blank" rel="noopener noreferrer">pen</a>
                <span>.</span>
              </li>
              <li>
                <span role="img" aria-label="mail">💌</span>
                <a href="mailto:tampham47@live.com">tampham47@live.com</a>
              </li>
              <li>
                <span role="img" aria-label="phone">🤙🏿</span>
                <a href="tel:01643652922">01643-652-922</a>
              </li>
            </ul>
          </section>

          <section className="container">
            <h2>medium của tớ</h2>
            <ul className="article">
              {postList.map(post => {
                return (
                  <li key={post.id} className="article__item">
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="article__title">
                      {post.title}
                    </a>,
                    <small className="article__time">{moment(post.createdAt).format('MMM DD, YYYY')}</small>
                    <p className="article__desc">{post.desc}</p>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="container">
            <h2>my side projects <span role="img" aria-label="hand">👊🏽</span></h2>
            <ul className="article">
              <li className="article__item">
                <a href="https://goingsunny.com" target="_blank" rel="noopener noreferrer" className="article__title">Goingsunny.com</a>
                <p className="article__desc">
                  this is a fan-made application for a learning english book,
                  it’s called `hack não 1500 từ tiếng anh`.
                  <input id="p-goingsunny" type="checkbox" className="article__checkbox" />
                  <label htmlFor="p-goingsunny" className="article__label x-underline">
                    see more~
                  </label>
                  <span className="article__more">
                    the purpose of this application is creating a tool for improving english myself,
                    it also gives me a chance to challenging with new technologies.
                    goingsunny is being built with ssr. source code of this app can be found&nbsp;
                    <a href="https://github.com/tampham47/goingsunny-app"
                      target="_blank" rel="noopener noreferrer" className="x-underline">
                      here
                    </a>.
                  </span>
                </p>
              </li>
            </ul>
          </section>

          <footer className="container">
            <span role="img" aria-label="cat - github">😽</span>
            <a href="https://github.com/tampham47/tampham47.github.io" target="_blank" rel="noopener noreferrer">
              created by `react-static`
            </a>
            <span>, </span>
            <span className="built-desc">
              the latest build is on {moment(lastBuilt).format('MMM DD, h:mm:ss a').toLowerCase()}.
            </span>
          </footer>
        </main>
      )}
    </SiteData>
  );
};

export default withRouteData(Home);
