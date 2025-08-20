import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'

// Import หน้าต่างๆ เข้ามา
import Home from './pages/Home.jsx';
import Education from './pages/Education.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

// สร้าง Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // หน้าแรก
        element: <Home />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)