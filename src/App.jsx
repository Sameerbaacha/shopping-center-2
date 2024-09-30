import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './componenets/Contact';
import { About } from './componenets/About';
import Header from './header';
import Footer from './footer';
import ProductDetail from './ProductDetail';
import Productcat from './Productcat';
import ThemecontextProvider from './context/Themecontext';
import { Applayout } from './Applayout';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <ProductDetail />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/category/:c",
          element: <Productcat />,
        }
      ]
    }

  ]);

  return (
    <ThemecontextProvider>
      <RouterProvider router={router} />
    </ThemecontextProvider>
  )

}

export default App;