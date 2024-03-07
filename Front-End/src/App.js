import "./App.css";
import Footer from "./components/footer/Fpoter";
import Header from "./components/header/Header";

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