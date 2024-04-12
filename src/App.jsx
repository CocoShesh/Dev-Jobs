import React, { useState, useEffect } from "react";
import ListJobs from "./components/ListJobs/ListJobs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Main/Home";
import JobDetails from "./pages/JobDetails";

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
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
