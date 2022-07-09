import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Category } from "./pages/Category.jsx";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import { Recipe } from "./pages/Recipe.jsx";
export { App };

function App() {
  return (
    <>
      <HashRouter basename="/react-meal">
        <Header />
        <main className="content container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/main" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </>
  );
}
