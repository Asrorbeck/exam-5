import { useContext } from "react";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import './App.scss'
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Product from "./Pages/Product/Product";
import News from "./Pages/News/News";
import Login from "./Pages/Login/Login";
import Add from "./Pages/Add/Add";
import Profile from "./Pages/Profile/Profile"
import { AuthContext } from "./context/authContext";

function App() {
  const { token } = useContext(AuthContext)

  return (
      <>
        <Container>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productID" element={<Product />} />
          <Route path="/products" element={<News />} />
          {token ? <Route path="/profile" element={<Profile />} /> : <Route path="/login" element={<Login />} />}
          <Route path="/add-product" element={<Add />} />
          <Route path="*" element={<Home />} />
        </Routes>

      </Container>
        <Footer />
      </>
  )
}

export default App;