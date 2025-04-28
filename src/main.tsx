import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Registration from './components/Registration.tsx'
import Login from './components/Login.tsx'
import Feed from './components/Feed.tsx'
import { Provider } from 'react-redux'
import store from './redux/Store.tsx'



const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Registration/>
    }, 
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'feed',
      element:<Feed/>
    }
  ]
)


createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
    <App />
  </>,
)
