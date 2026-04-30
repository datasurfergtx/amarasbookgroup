import { useEffect } from "react";
import { useLocation } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // `behavior: "auto"` is the standard value for an instant jump and, unlike
  // the non-standard "instant", reliably overrides the global
  // `html { scroll-behavior: smooth }` rule on every browser.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
