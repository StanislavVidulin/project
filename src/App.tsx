import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import LoginForm from "./components/LoginForm/LoginForm";
import UserData from "./pages/UserData/UserData";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/loginForm' element={<LoginForm/>}/>
          <Route path='/userData' element={<UserData />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;