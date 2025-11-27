import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// ⬇️ Lazy-load pages (Vite will create separate chunks)
const Home = lazy(() => import("./pages/Home"));
const Commodities = lazy(() => import("./pages/Commodities"));

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-sm">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Commodities />} />
        </Routes>
      </Suspense>
    </div>
  );
}
