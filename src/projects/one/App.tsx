/* eslint-disable prettier/prettier */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

const Hello = () => {
  return <div>Hey</div>;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
