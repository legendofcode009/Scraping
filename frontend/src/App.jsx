import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ExplorePage from "./pages/ExplorePage";
import LikesPage from "./pages/LikesPage";
import HomePage from "./pages/HomePage";

import Sidebar from "./components/Sidebar";
import Scrapping from "./pages/Scrapping";

function App() {
  return (
    <div className="flex text-white">
      <Sidebar />
      <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/likes" element={<LikesPage />} />
          <Route path="/scrapping" element={<Scrapping />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
