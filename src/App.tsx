import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WriteName from "./pages/WriteName";
import ConntextFamily from "./pages/ConnectFamily";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConntextFamily />} />
        <Route path="/write-name" element={<WriteName />} />
      </Routes>
    </Router>
  );
};

export default App;
