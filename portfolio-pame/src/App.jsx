
import './App.css';
import { DataProvider } from './components/Context/DataContext';
import Home from './components/Home';



function App() {
  return (
    <>
      <DataProvider>
        
        <Home />  


      </DataProvider>


    </>



  );
}

export default App;
