import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import CreateNote from "./screens/CreateNote/CreateNote";
import UpdateNote from "./screens/CreateNote/UpdateNote";
import { useState } from "react";
import ProfilePage from "./screens/ProfilePage/ProfilePage";

function App() {
  const [search, setSearch] = useState("");
  // console.log(search);
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/note/:id" element={<UpdateNote />} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

//
// {
/* alt + shift + downarrow - to copy and paste a line */
// }
