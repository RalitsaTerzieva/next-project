import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio. Showcasing my projects and skills." />
      </Head>
      
      <header className="bg-yellow-600 text-white py-5">
        <h1 className="text-4xl font-bold text-center">Hello, I'm Rali</h1>
        <p className="text-lg text-center">Hi, I'm a software developer specializing in React and Python. I love building efficient web applications and continuously learning new technologies.</p>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center py-10">
        <section className="mb-10 text-center">
          <section className="mb-10 text-center">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="text-gray-700 mb-5">Explore my recent projects and work experiences.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg shadow">
                <h3 className="text-xl font-bold">Yelp Camp App</h3>
                <p className="text-gray-600">YelpCamp is a learning project aimed at exploring web development with Express.js, MongoDB, and Mongoose, while creating a platform for discovering and sharing camping experiences.</p>
                <p className="mt-2"><strong>Technologies Used:</strong>JavaScript, Express, MongoDb, Mongoose</p>
                <a href="https://github.com/RalitsaTerzieva/yelp-camp-app" className="text-blue-500 hover:underline">View Project</a>
                </div>

                <div className="p-4 border rounded-lg shadow">
                <h3 className="text-xl font-bold">Bite Bliss App</h3>
                <p className="text-gray-600">BiteBliss is a React Native app with recipes from different cuisines.</p>
                <p className="mt-2"><strong>Technologies Used:</strong> Javascript, React Native, React Navigation,Expo Cli, Expo Notifications</p>
                <a href="https://github.com/RalitsaTerzieva/bite-bliss-app" className="text-blue-500 hover:underline">View Project</a>
                </div>

                <div className="p-4 border rounded-lg shadow">
                <h3 className="text-xl font-bold">SSR Project</h3>
                <p className="text-gray-600">This project is developed following the steps outlined in the book React 18 Design Patterns and Best Practices by Carlos Santana Roldan.

</p>
                <p className="mt-2"><strong>Technologies Used:</strong>React, Express, Typescript, React Dom, ts-loader, isomorphic-fetch, webpack-cli</p>
                <a href="https://github.com/RalitsaTerzieva/ssr-project" className="text-blue-500 hover:underline">View Project</a>
                </div>

                <div className="p-4 border rounded-lg shadow">
                <h3 className="text-xl font-bold">Authy</h3>
                <p className="text-gray-600">React native authentication application

.</p>
                <p className="mt-2"><strong>Technologies Used:</strong> Firebase, React Native</p>
                <a href="https://github.com/RalitsaTerzieva/Authy" className="text-blue-500 hover:underline">View Project</a>
                </div>
                
                {/* Add more project cards as needed */}
            </div>
            </section>

        </section>

        <section className="mb-10 text-center">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-gray-700">I am a passionate software developer specializing in React, React Native, Python, and Django. I enjoy creating dynamic applications using Material UI, Bootstrap, Tailwind, Express, and Next.js. Every day, I dedicate time to reading programming and self-improvement books, which fuels my growth. During weekends, I love to build my own projects, allowing me to apply what I learn and explore new technologies.</p>
        </section>

        <section style={{ marginTop: '30px', marginBottom: '30px' }}>
          <Link href="/skills" className="text-blue-500 underline">View My Skills</Link>
        </section>

        <section className="mb-10 text-center">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="text-gray-700">Get in touch with me for collaboration or opportunities.</p>

            <div className="mt-5">
                <p className="text-lg">LinkedIn: <a href="https://www.linkedin.com/in/ralitsa-terzieva/" className="text-blue-500 underline">linkedin.com/in/yourprofile</a></p>
                <p className="text-lg">GitHub: <a href="https://github.com/RalitsaTerzieva" className="text-blue-500 underline">github.com/RalitsaTerzieva</a></p>
            </div>

            <div className="mt-5">
                <p className="text-gray-600">Feel free to reach out!</p>
            </div>
        </section>
      </main>
      
      <footer className="bg-gray-200 text-center py-4">
        <p>© 2024 Rali | All rights reserved</p>
      </footer>
    </div>
  );
};

export default Home;
