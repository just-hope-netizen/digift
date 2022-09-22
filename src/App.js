import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layout";
import ScrollToTop from "./layout/ScrollToTop";
import PersonalPage from "./routes/Personal";
import BusinessPage from "./routes/Business";

import "./styles/app.scss";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<PersonalPage />} />
            <Route path="business" element={<BusinessPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
