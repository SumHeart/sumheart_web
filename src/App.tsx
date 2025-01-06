import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import WriteName from "./pages/WriteName";
import Main from "./pages/Main";
import ConntextFamily from "./pages/ConnectFamily";
import QuestionDetail from "./pages/QuestionDetail";
import AnswerModal from "./pages/AnswerModal";
import AnswerPage from "./pages/AnswerPage";
import ChatPage from "./pages/ChatPage";
import List from "./pages/List";

const App = () => {
  const [, setName] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConntextFamily />} />
        <Route path="/write-name" element={<WriteName setName={setName} />} />
        <Route path="/main" element={<Main />} />
        <Route path="/question-detail" element={<QuestionDetail />} />
        <Route path="/answer" element={<AnswerModal />} />
        <Route path="/result" element={<AnswerPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
};

export default App;
