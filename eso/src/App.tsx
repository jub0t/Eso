import { HashRouter, Route, Routes } from "react-router-dom";
import LeftFrame from "./components/LeftFrame";
import ManagePage from "./pages/Manage";

import "./output.css";
import "./master.css";
import EncryptPage from "./pages/Encrypt";

function App() {
  return (
    <main className="h-full flex w-full overflow-x-hidden">
      <section className="lg:min-w-[200px] lg:max-w-[230px] max-w-[80px] min-w-[80px] h-full">
        <LeftFrame />
      </section>

      {/* Take rest of the remaining width */}
      <section className="flex-1 h-full min-h-screen border-l border-gray-200">
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={<ManagePage />}
            />
            <Route
              path="/encrypt"
              element={<EncryptPage />}
            />
          </Routes>
        </HashRouter>
      </section>
    </main>
  );
}

export default App;
