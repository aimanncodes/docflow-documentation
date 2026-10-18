import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { STRINGS } from "./lib/i18n";
import Sidebar from "./components/Sidebar";
import Search from "./components/Search";
import DocPage from "./components/DocPage";
import Home from "./components/Home";
import Icon from "./components/Icon";

function Shell() {
  const { lang: rawLang, module: activeModule } = useParams();
  const lang = rawLang === "ar" ? "ar" : "en";
  const t = STRINGS[lang];
  const [searchOpen, setSearchOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (rawLang !== lang) return <Navigate to="/en" replace />;

  const switchLang = () => {
    const other = lang === "en" ? "ar" : "en";
    navigate(location.pathname.replace(/^\/(en|ar)/, `/${other}`) + location.hash);
  };

  return (
    <div className="df-app">
      <Sidebar
        lang={lang}
        t={t}
        activeModule={activeModule}
        open={navOpen}
        onSearch={() => setSearchOpen(true)}
        onNavigate={() => setNavOpen(false)}
      />
      {navOpen && <div className="df-scrim" onClick={() => setNavOpen(false)} />}

      <div className="df-main">
        <header className="df-topbar">
          <button className="df-icon-btn df-only-mobile" onClick={() => setNavOpen(true)} aria-label={t.menu}>
            <Icon name="menu" size={20} />
          </button>
          <img src="/logo.svg" alt="DocFlow" className="df-top-logo df-only-mobile" />
          <div className="df-topbar-spacer" />
          <button className="df-icon-btn df-only-mobile" onClick={() => setSearchOpen(true)} aria-label={t.search}>
            <Icon name="search" size={18} />
          </button>
          <button className="df-lang" onClick={switchLang}>
            <Icon name="globe" size={16} />
            <span>{t.lang}</span>
          </button>
        </header>

        <main className="df-content">
          {activeModule ? <DocPage lang={lang} t={t} /> : <Home lang={lang} t={t} onSearch={() => setSearchOpen(true)} />}
        </main>
      </div>

      {searchOpen && <Search lang={lang} t={t} onClose={() => setSearchOpen(false)} />}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/:lang" element={<Shell />} />
      <Route path="/:lang/:module" element={<Shell />} />
      <Route path="/:lang/:module/:page" element={<Shell />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}
