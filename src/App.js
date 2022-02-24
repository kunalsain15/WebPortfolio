import './App.css';
import Main from "./main/Main";
import About from "./about/About";
import ProductList from "./productList/ProductList";
import Contact from "./contact/Contact";
import Toggle from "./toggle/Toggle";
import { useContext } from 'react';
import { ThemeContext } from './context';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white", color:darkMode && "white"}}>
      <Toggle/>
      <Main/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
};

export default App;
