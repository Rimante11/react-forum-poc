import './App.css';
import {Routes, Route} from "react-router-dom"; //importerar
//samt lägga en Routes i return diven, OBS plural!
import Home from "./pages/HomePage";
import Post from "./pages/PostPage"
import Header from "./components/Header";
import Footer from "./components/Footer";


//Initu Routes skappar Route path="/" so mycket jag behöver
//path - vart filen ligger, element - vilken komponent ska randeras
function App() {
  return (
    <div className="App">
      
      < Header />
          <Routes>
              <Route path="/home" element={<Home />}/>
              <Route path="/" element={<Home />}/>
              <Route path="/post/:id" element={<Post />} />
         </Routes>
      <Footer />
    </div>
  );
}

export default App;

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
       
//       </header>
//     </div>
//   );
// }

// export default App;
