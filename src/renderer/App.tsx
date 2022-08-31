/* eslint-disable @typescript-eslint/dot-notation */
import { Box, Stack } from '@mui/system';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Preview from './component/previewEditor';

const AppBuilderHome = () => {
  return (
    <Box>
      <Stack direction="row" flexGrow="1">
        <Preview />
        <Box>Components</Box>
      </Stack>
    </Box>
  );
};
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppBuilderHome />} />
        {/* <Route path="/iframe" element={<Iframe />} /> */}
      </Routes>
    </Router>
  );
}
