import { BrowserRouter as Router } from 'react-router-dom';
import App from '@/shared/App';

function Root() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <App />
    </Router>
  );
}

export default Root;
