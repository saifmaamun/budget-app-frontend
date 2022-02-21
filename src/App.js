import './App.css';
import Heading from './Componants/Heading/Heading';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Heading></Heading>

    </AuthProvider>
  );
}

export default App;
