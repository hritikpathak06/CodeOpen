import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Compile from "./pages/Compile";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Compile />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
