import LeftFrame from "./components/LeftFrame";
import ManagePage from "./pages/Manage";

import "./output.css";
import "./master.css"

function App() {
  return (
    <main className="h-screen flex w-full overflow-x-hidden">
      <section className="min-w-[200px] max-w-[230px] h-full border-r border-gray-200">
        <LeftFrame />
      </section>

      {/* Take rest of the remaining width */}
      <section className="flex-1">
        <ManagePage />
      </section>
    </main>
  );
}

export default App;
