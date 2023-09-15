import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import Home from './routes/Home/index.jsx'
import Error from './routes/Error/index.jsx'
import EditarProdutos from './routes/EditarProdutos/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import AdicionarProtudo from './routes/AdicionarProduto/index.jsx'

const route = createBrowserRouter([
    {
      path:'/',
      element: <App/>,
      errorElement: <Error/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/produtos',
          element: <Produtos/>
        },
        {
          path:'/editar/produtos/:id',
          element: <EditarProdutos/>
        },
        {
          path:'/adicionar/produtos',
          element: <AdicionarProtudo/>
        }
      ]

    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {route}/>
  </React.StrictMode>,
)
