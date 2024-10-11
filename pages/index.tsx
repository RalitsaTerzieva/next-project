import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio. Showcasing my projects and skills." />
      </Head>
      
      <main style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Hello, I'm Rali</h1>
        <p>I'm a Software Developer.</p>
        
        <section style={{ marginTop: '50px' }}>
          <h2>Projects</h2>
          <p>Explore my recent projects and work experiences.</p>
        </section>

        <section style={{ marginTop: '50px' }}>
          <h2>About Me</h2>
          <p>Learn more about my journey and skills.</p>
        </section>

        <section style={{ marginTop: '50px' }}>
          <h2>Contact</h2>
          <p>Get in touch with me for collaboration or opportunities.</p>
        </section>
      </main>
      
      <footer style={{ textAlign: 'center', marginTop: '50px' }}>
        <p>© 2024 Rali | All rights reserved</p>
      </footer>
    </div>
  );
};

export default Home;
