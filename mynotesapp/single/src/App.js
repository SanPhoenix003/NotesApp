import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotesApp from './NotesApp';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NotesApp />
    </div>
  );
}
export default App