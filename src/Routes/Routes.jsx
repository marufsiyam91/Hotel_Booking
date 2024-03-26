import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import NotFound from '../Pages/NotFound/NotFound'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import TourList from '../Pages/TourList/TourList'
import SingleTourPackage from '../Pages/SingleTourPackage/SingleTourPackage'

const Routes = createBrowserRouter ([
     {
          path: '/',
          element: <App/>,
          children: [
               {
                    path: '/',
                    element: <Home/>
               },
               {
                    path: '/tourlist',
                    element: <TourList/>
               },
               {
                    path: '/tourlist/:id',
                    element: <SingleTourPackage/>,
                    // loader: (params) => fetch(`http://localhost:3000/tours/${params.id}`)

               },
               {
                    path: '/about',
                    element: <About/>
               },
               {
                    path: '/contact',
                    element: <Contact/>
               },
               {
                    path: '/signin',
                    element: <Login/>
               },
               {
                    path: '/signup',
                    element: <Register/>
               }

          ]

     },
     {
          path: '*',
          element: <NotFound/>
     }
])

export default Routes

