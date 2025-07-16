import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Precious" age="25" bio="Loves coding and football." />
      <Footer />
    </>
  );
}

export default App;
