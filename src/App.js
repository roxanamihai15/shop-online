import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavbarComponent from "./layout/NavbarComponent";
import FooterComponent from "./layout/Footer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";

import { Container } from "react-bootstrap"

// importo il context che mi serve
import { CartProvider } from "./context/CartContext";





function App() {

  return (
    <>
    {/* voglio sia accessibile a tutti, quindi lo metto qui esterno */}
      <CartProvider>
          <BrowserRouter>
            <NavbarComponent />

            <Container className="mb-4 mt-4">
              <Routes>
                <Route path="/" element={<Home />}  />
                <Route path="/preferiti" element={<Favorites />} />
                <Route path="/carrello" element={<Cart />} />
                {/* <Route path="/carrello" element={<Cart cart={cart} setCart={setCart} />} /> */}
              </Routes>
            </Container>

            <FooterComponent />
          </BrowserRouter>
      </CartProvider>
    </>

  );
}

export default App;
