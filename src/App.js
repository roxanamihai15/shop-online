import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./layout/NavbarComponent";
import FooterComponent from "./layout/FooterComponent";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import { Container } from "react-bootstrap"
import { CartProvider } from "./context/CartContext";

function App() {

  return (
      <CartProvider>
          <BrowserRouter>
            <NavbarComponent />

            <Container className="mb-4 mt-4">
              <Routes>
                <Route path="/" element={<Home />}  />
                <Route path="/preferiti" element={<Favorites />} />
                <Route path="/carrello" element={<Cart />} />
              </Routes>
            </Container>
            
            <FooterComponent />
          </BrowserRouter>
      </CartProvider>
  );
}

export default App;
