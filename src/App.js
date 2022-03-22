import './App.css';
import HerosPage from './pages/HerosPage';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import SearchResult from './pages/SearchResult';
import NotFoundPage from './pages/NotFoundPage';
import { store } from './redux/store';
import { Provider } from "react-redux";


function App() {
//heroes?user_name=Kathryn%20Murphy&user_phone=555-0126&country=USA&date=2021-09-21
//heroes?name=Kathryn%20Murphy&phone=555-0126&country=USA&date=2021-09-21

  
  return (
    <Provider store={store}>
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">search</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HerosPage />}/>
        <Route path="/search" element={<SearchResult />}/>
        <Route path="/search/:name" element={<SearchResult />}/>
        <Route path="/search/:name/:email/:phone/:company/:country/:date" element={<SearchResult />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
