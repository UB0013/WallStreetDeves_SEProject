import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div class="content">
        <Header />
      </div>

      <div className="footer mt-3" style={{marginTop:"30px",}}>
        <Footer />
      </div>
    </>
  );
}

export default App;