import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/App.scss";
import TodoState from "./context/TodoState";
function App() {
  return (
    <>
      <TodoState>
        <div className="App">
          <Header />
          <Home />
          <Footer />
        </div>
      </TodoState>
    </>
  );
}

export default App;
