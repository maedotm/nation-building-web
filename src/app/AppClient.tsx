"use client";
import { useEffect, useState } from 'react';
import Layout from '@/app/components/Layout';
import Home from '@/app/pages/Home';
import Book from '@/app/pages/Book';
import Research from '@/app/pages/Research';
import Author from '@/app/pages/Author';
import Contact from '@/app/pages/Contact';

export default function App() {
  const [routerLib, setRouterLib] = useState<any | null>(null);
const [showAuthorCard, setShowAuthorCard] = useState(false);
  useEffect(() => {
    let mounted = true;
    import('react-router-dom').then((mod) => {
      if (mounted) setRouterLib({ BrowserRouter: mod.BrowserRouter, Routes: mod.Routes, Route: mod.Route });
    }).catch(() => {
      // dynamic import failed — leave routerLib null
    });
    return () => { mounted = false; };
  }, []);

  if (!routerLib) return null;

  const { BrowserRouter, Routes, Route } = routerLib;

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/research" element={<Research />} />
          <Route path="/author" element={<Author />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
