import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home, About, Blogs, Contact, BlogPost} from './components/index'
import Layout from './Layout'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "blogs",
        element: <Blogs />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "/blog/:id",
        element: <BlogPost />,
      }
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
