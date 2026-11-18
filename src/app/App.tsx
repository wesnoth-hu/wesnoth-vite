import Layout from "../shared/components/layout/Layout";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router";
import { useHtmlLang } from "../shared/hooks/useHtmlLang";

function App() {
  useHtmlLang();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
