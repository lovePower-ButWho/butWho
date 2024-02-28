import logo from './logo.svg';
import './App.css';
import FirstMeetPage from './pages/FirstMeetPage';

function App() {
  const [page, setPage] = useState(0);
  return (
    <FirstMeetPage script={script[page]}/>
  );
}

export default App;
