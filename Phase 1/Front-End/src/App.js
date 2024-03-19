import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/header/Header";

function App() {
  return (
    <>
      <div class="content">
        <Header />
      </div>

      <div className="footer mt-3">
        <Footer />
      </div>
    </>
  );
}

export default App;