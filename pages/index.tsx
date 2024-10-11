import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio. Showcasing my projects and skills." />
      </Head>
      
      <header className="bg-yellow-600 text-white py-5">
        <h1 className="text-4xl font-bold text-center">Hello, I'm Rali</h1>
        <p className="text-lg text-center">I'm a Software Developer.</p>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center py-10">
        <section className="mb-10 text-center">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="text-gray-700">Explore my recent projects and work experiences.</p>
        </section>

        <section className="mb-10 text-center">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-gray-700">Learn more about my journey and skills.</p>
        </section>

        <section className="mb-10 text-center">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-gray-700">Get in touch with me for collaboration or opportunities.</p>
        </section>
      </main>
      
      <footer className="bg-gray-200 text-center py-4">
        <p>© 2024 Rali | All rights reserved</p>
      </footer>
    </div>
  );
};

export default Home;
