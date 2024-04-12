import React from "react";
import ListJobs from "./components/ListJobs/ListJobs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Main/Home";
import JobDetails from "./pages/Details/JobDetails";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <main className="dark:bg-[#121721] bg-[#f5f6f8]  min-h-screen">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <ListJobs />
                </>
              }
            />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
