import Header from "../components/Header";
import MainImage from "../components/MainImage";
import ProductList from "../components/ProductList";
import CookingSteps from "../components/CookingSteps";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />
      <MainImage />
      <main className="main-content">
        <ProductList />
        <CookingSteps />
      </main>
      <Footer />
    </div>
  );
}
