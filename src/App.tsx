import "./App.css";
import Header from "./components/Header";
import InfiniteScroll from "./components/InfiniteScroll";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <InfiniteScroll />;
    </>
  );
}

export default App;
