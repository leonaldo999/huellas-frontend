import Navbar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';
import './App.css'; // Import your CSS file for global styles
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;