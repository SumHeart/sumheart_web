import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WriteName from "./pages/Write";
import Main from "./pages/Main";
import ConntextFamily from "./pages/ConnectFamily";
import QuestionDetail from "./pages/QuestionDetail";
import AnswerModal from "./pages/AnswerModal";
import AnswerPage from "./pages/AnswerPage";
import ChatPage from "./pages/ChatPage";
import List from "./pages/List";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConntextFamily />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write-name" element={<WriteName type="name" />} />
        <Route path="/write-petname" element={<WriteName type="petName" />} />
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
