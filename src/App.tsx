import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import LoginForm from "./pages/LoginForm/LoginForm";
import UserData from "./pages/UserData/UserData";
// import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Home from "./pages/Home/Home";
import UserHistory from "./pages/UserHistory/UserHistory";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/loginForm' element={<LoginForm />}/>
          <Route path='/userData' element={<UserData />}/>
          <Route path='/userHistory' element={<UserHistory />}/>
          {/* <Route path='*' element={<PageNotFound />}/> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;