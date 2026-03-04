import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';

import Layout from './components/Layout';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/contact.jsx';
import Github, { GithubInfoLoader } from './components/Github/github.jsx';
import { Route, createRoutesFromElements } from 'react-router-dom';
import User from './components/User/User.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '', element: <Home /> },
//       { path: 'about', element: <About /> },
//       { path: 'contact', element: <Contact /> }
//     ]
//   }
// ]);

//const router = createBrowserRouter(
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path = "" element={<Home />} />
      <Route path = 'about' element = {<About />} />
      <Route path = 'contact' element = {<Contact />} />
      <Route path = 'user/:userid' element = {<User />} />
      <Route path = 'Github' element = {<Github />} />
      <Route 
      loader = {GithubInfoLoader}
      path = 'github'
      element = {<Github />} 
      />
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);