'use client';
import { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <main className="[&>*]:animate-pageFade">{children}</main>
      <Footer />
    </div>
  );
}