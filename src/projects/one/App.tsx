import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Hello = () => {
  return (
    <div>
      <div>Hey Well Well 1</div>
      <Link to="/well">
        <button type="button">Hello</button>
      </Link>
    </div>
  );
};

const WellWell = () => {
  return (
    <div>
      <div>Well Well 2</div>
      <Link to="/">
        <button type="button">Hello</button>
      </Link>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/well" element={<WellWell />} />
      </Routes>
    </Router>
  );
}
