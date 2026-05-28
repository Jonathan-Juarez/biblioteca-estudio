import "@/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  BookOpen,
  Sparkles,
  Search,
  ScanSearch,
  Image as ImageIcon,
  ListChecks,
  GraduationCap,
  Lightbulb,
  NotebookPen,
  CalendarDays,
  BookCopy,
  Volume2,
  BookMarked,
  MessageSquareQuote,
  Music,
  WifiOff,
  Heart,
  Monitor,
  ArrowRight,
  ArrowLeft,
  Download,
  Info,
  FileText,
  Sparkle,
  MessageCircle,
  ShieldCheck,
  Scale,
} from "lucide-react";

const HERO_IMAGE =
  "https://customer-assets.emergentagent.com/job_study-connect-64/artifacts/41a7zvdw_image.png";

const features = [
  { icon: BookOpen, title: "5 versiones de la Biblia", desc: "RVR60, RVR95, NVI, DHH y PDT incluidas.", tier: "free" },
  { icon: Search, title: "Búsqueda rápida", desc: "Localiza libros y versículos en segundos.", tier: "free" },
  { icon: ScanSearch, title: "Búsqueda avanzada", desc: "Filtra por palabras, frases y combinaciones.", tier: "free" },
  { icon: Sparkles, title: "Asistente con IA", desc: "Resuelve dudas y profundiza pasajes al instante.", tier: "free" },
  { icon: GraduationCap, title: "Escuela Sabática", desc: "Lección diaria al alcance de un clic.", tier: "free" },
  { icon: FileText, title: "Texto y Audio del Himnario", desc: "Letras y audio de los himnos, también offline.", tier: "free" },
  { icon: Heart, title: "Fe de Jesús", desc: "Edición de Carlos E. Aeschlimann H. (1ra ed.).", tier: "free" },
  { icon: CalendarDays, title: "Reavivados por su Palabra", desc: "Plan de lectura diario #RPSP.", tier: "free" },
  { icon: NotebookPen, title: "Centro de Estudio", desc: "Notas, marcadores y progreso personal.", tier: "free" },
  { icon: Music, title: "Himnario con internet", desc: "Acceso directo a himnos en YouTube.", tier: "free" },
  { icon: BookMarked, title: "Diccionario Bíblico", desc: "Definiciones integradas con un toque.", tier: "free" },
  { icon: MessageSquareQuote, title: "Comentario Bíblico Adventista", desc: "CBA disponible para libros seleccionados.", tier: "free" },
  { icon: BookCopy, title: "Modo Dual", desc: "Compara dos versiones de la Biblia lado a lado.", tier: "premium" },
  { icon: ImageIcon, title: "Modo Presentación", desc: "Proyecta versículos, el versículo de memoria de la Lección y el Himnario adventista.", tier: "premium" },
  { icon: Sparkle, title: "Personalización de fondos", desc: "Personaliza los fondos para tus presentaciones.", tier: "premium" },
  { icon: Volume2, title: "Lectura de Voz (TTS)", desc: "Escucha la Biblia en tiempo real.", tier: "premium" },
  { icon: ListChecks, title: "Temas de Estudio", desc: "Agrupa versículos para tus sermones.", tier: "premium" },
  { icon: Lightbulb, title: "Apoyo Ministerial", desc: "Historias infantiles, recepción de sábado, bienvenidas, dramatizaciones, bando de oración, reflexiones y comentarios bíblicos teológicos.", tier: "premium" },
];

const INSTALLER_URL = "https://github.com/Jonathan-Juarez/biblioteca-estudio/releases/latest/download/BibliotecaEstudio_Setup.exe";
const WHATSAPP_URL = "https://wa.me/529612412158?text=Hola%2C%20quiero%20adquirir%20el%20Plan%20Premium%20de%20Biblioteca%20de%20Estudio";

const DownloadButton = ({ size = "lg", testid = "download-btn" }) => {
  const sizes =
    size === "lg"
      ? "px-8 py-4 text-base"
      : "px-5 py-2 text-sm";
  return (
    <a
      href={INSTALLER_URL}
      download
      data-testid={testid}
      className={`group inline-flex items-center gap-3 rounded-full bg-[#2F6BFF] hover:bg-[#1E54E0] text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(47,107,255,0.6)] ${sizes}`}
    >
      <Download className="h-5 w-5" strokeWidth={2.2} />
      <span className="flex items-center gap-2">
        Descargar para Windows
        <span className="text-xs font-normal opacity-70">(.exe)</span>
      </span>
      <ArrowRight className="h-4 w-4 -ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
    </a>
  );
};

const AppPreview = () => (
  <div
    data-testid="app-preview"
    className="relative w-full max-w-[640px] mx-auto"
  >
    {/* Window chrome */}
    <div className="rounded-t-xl bg-[#1a1d24] border border-white/10 border-b-0 px-4 py-2.5 flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-3 text-[11px] text-zinc-500 truncate">
        Biblioteca de Estudio
      </span>
    </div>
    {/* Image */}
    <div className="relative rounded-b-xl overflow-hidden border border-white/10 border-t-0 bg-[#0b0d11] shadow-[0_40px_80px_-30px_rgba(47,107,255,0.45)]">
      <img
        src={HERO_IMAGE}
        alt="Biblioteca de Estudio — captura de la app"
        className="block w-full h-auto"
        loading="eager"
      />
    </div>
    {/* Glow */}
    <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-40 bg-[#2F6BFF]/20 blur-[80px] -z-10" />
  </div>
);

function LandingPage() {
  return (
    <div
      data-testid="landing-page"
      className="min-h-screen bg-[#0f1115] text-white antialiased"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background subtle glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#2F6BFF]/10 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <header className="relative z-10">
        <nav
          data-testid="navbar"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 py-6"
        >
          <a href="#" data-testid="logo" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-[#2F6BFF] flex items-center justify-center transition-transform group-hover:rotate-6">
              <BookOpen className="h-5 w-5 text-white" strokeWidth={2.2} />
            </div>
            <span className="font-semibold text-base sm:text-lg tracking-tight">
              Biblioteca de Estudio
            </span>
          </a>
          <a
            href={INSTALLER_URL}
            download
            data-testid="navbar-download-btn"
            className="inline-flex items-center gap-2 rounded-full bg-[#2F6BFF] hover:bg-[#1E54E0] px-5 py-2 text-sm font-medium text-white transition-colors"
          >
            <Download className="h-4 w-4" />
            Descargar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        data-testid="hero-section"
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 pt-12 sm:pt-20 pb-24 sm:pb-28"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 mb-6">
              <Monitor className="h-3.5 w-3.5 text-[#5B8DEF]" />
              Aplicación de escritorio para Windows 11
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Tu biblioteca bíblica completa,
              <span className="text-[#5B8DEF]"> en tu PC.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
              Biblia en 5 versiones, Escuela Sabática, Himnario, Fe de Jesús y un
              asistente con IA. Empieza gratis y desbloquea funciones avanzadas
              cuando quieras.
            </p>

            <div id="download" className="mt-10" data-testid="hero-download-wrap">
              <DownloadButton size="lg" testid="hero-download-btn" />
              <p className="mt-3 text-xs text-zinc-500 flex items-center gap-2">
                <Info className="h-3.5 w-3.5 text-zinc-400" />
                Instalador .exe · Probado en Windows 11 · Sin firma digital aún
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-zinc-500">
              <div>
                <span className="text-white font-semibold text-lg">18</span>
                <span className="ml-2">funciones</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="text-white font-semibold text-lg">12</span>
                <span className="ml-2">gratis</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="text-white font-semibold text-lg">$100</span>
                <span className="ml-2">MXN premium</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <AppPreview />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        data-testid="features-section"
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28 border-t border-white/5"
      >
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#5B8DEF] mb-4">
            Características
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Todo lo que necesitas para estudiar la Palabra.
          </h2>
          <p className="mt-5 text-zinc-400 text-base sm:text-lg">
            Una suite completa pensada para creyentes, estudiantes y predicadores.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isPremium = f.tier === "premium";
            return (
              <div
                key={f.title}
                data-testid={`feature-card-${i}`}
                className="group relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <span
                  data-testid={`feature-tier-${i}`}
                  className={`absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isPremium
                      ? "bg-[#2F6BFF]/15 text-[#5B8DEF] border border-[#2F6BFF]/30"
                      : "bg-emerald-400/10 text-emerald-300 border border-emerald-400/20"
                  }`}
                >
                  {isPremium ? "Premium" : "Gratis"}
                </span>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#2F6BFF]/15 text-[#5B8DEF] mb-4 group-hover:bg-[#2F6BFF]/25 transition-colors">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5 leading-snug pr-16">
                  {f.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-xs text-zinc-500 italic max-w-2xl">
          El Comentario Bíblico Adventista está parcialmente disponible para
          Génesis, Éxodo, Levítico, Números, Deuteronomio (1–5), Isaías y Efesios.
          La Lección, el Himnario online y la IA requieren conexión a internet.
        </p>
      </section>

      {/* PRICING */}
      <section
        data-testid="pricing-section"
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-24 border-t border-white/5"
      >
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#5B8DEF] mb-4">
            Precio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Empieza gratis. Crece cuando quieras.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <div
            data-testid="plan-free"
            className="rounded-2xl bg-white/[0.03] p-8 sm:p-10 border border-white/5"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Plan Gratuito</h3>
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                Gratis
              </span>
            </div>
            <p className="text-4xl font-bold mb-2">$0 <span className="text-base font-normal text-zinc-500">MXN</span></p>
            <p className="text-sm text-zinc-400 mb-6">Para siempre, sin tarjeta.</p>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              {[
                "5 versiones de la Biblia",
                "Búsqueda rápida y avanzada",
                "Asistente con IA",
                "Lección de Escuela Sabática",
                "Texto y Audio del Himnario",
                "Fe de Jesús (Aeschlimann, 1ra ed.)",
                "Reavivados por su Palabra",
                "Centro de Estudio (notas y marcadores)",
                "Himnario con internet (YouTube)",
                "Diccionario Bíblico",
                "Comentario Bíblico Adventista",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-testid="plan-premium"
            className="relative rounded-2xl bg-gradient-to-br from-[#2F6BFF]/10 via-white/[0.03] to-white/[0.03] p-8 sm:p-10 border border-[#2F6BFF]/30"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Sparkle className="h-4 w-4 text-[#5B8DEF]" />
                Plan Premium
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#2F6BFF]/15 text-[#5B8DEF] border border-[#2F6BFF]/30">
                Pago único
              </span>
            </div>
            <p className="text-4xl font-bold mb-2">$100 <span className="text-base font-normal text-zinc-500">MXN</span></p>
            <p className="text-sm text-zinc-400 mb-6">Pago único · Activación por WhatsApp.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="whatsapp-contact-btn"
              className="group mb-6 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#1FB855] text-white font-semibold px-5 py-2.5 text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-[0_10px_25px_-10px_rgba(37,211,102,0.6)]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
              Contactar por WhatsApp
              <ArrowRight className="h-3.5 w-3.5 -ml-0.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              {[
                "Todo lo del plan Gratuito",
                "Modo Dual: compara 2 versiones",
                "Modo Presentación (versículos, memoria e himnos)",
                "Personalización de fondos para presentar",
                "Lectura de Voz (TTS)",
                "Temas de Estudio para sermones",
                "Apoyo Ministerial (7 categorías originales)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#5B8DEF] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        data-testid="cta-final-section"
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1d24] via-[#161922] to-[#0f1115] border border-white/10 px-8 sm:px-16 py-16 sm:py-20 text-center">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-[#2F6BFF]/15 blur-[100px]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
              Lleva la Palabra a tu escritorio
              <span className="text-[#5B8DEF]"> hoy mismo.</span>
            </h2>
            <p className="mt-5 text-zinc-400 max-w-xl mx-auto">
              Descarga gratis Biblioteca de Estudio para Windows y comienza a estudiar
              de una forma totalmente nueva.
            </p>
            <div className="mt-10 flex justify-center">
              <DownloadButton size="lg" testid="cta-download-btn" />
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              Windows 11 · Instalador .exe · Empieza gratis
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer data-testid="footer" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} Biblioteca de Estudio. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacidad"
              data-testid="footer-privacy"
              className="hover:text-white transition-colors"
            >
              Política de privacidad
            </Link>
            <Link
              to="/terminos"
              data-testid="footer-terms"
              className="hover:text-white transition-colors"
            >
              Términos de servicio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- LEGAL PAGES ---------- */

const LegalShell = ({ icon: Icon, title, subtitle, children, testid }) => (
  <div
    data-testid={testid}
    className="min-h-screen bg-[#0f1115] text-white antialiased"
    style={{ fontFamily: "'Poppins', sans-serif" }}
  >
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#2F6BFF]/10 blur-[120px]" />
    </div>

    <header className="relative z-10">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 sm:px-10 py-6">
        <Link to="/" data-testid="legal-logo" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-[#2F6BFF] flex items-center justify-center transition-transform group-hover:rotate-6">
            <BookOpen className="h-5 w-5 text-white" strokeWidth={2.2} />
          </div>
          <span className="font-semibold text-base sm:text-lg tracking-tight">
            Biblioteca de Estudio
          </span>
        </Link>
        <Link
          to="/"
          data-testid="legal-back"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>
      </nav>
    </header>

    <main className="relative z-10 mx-auto max-w-4xl px-6 sm:px-10 pt-8 sm:pt-12 pb-24">
      <div className="mb-12">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2F6BFF]/15 text-[#5B8DEF] mb-5">
          <Icon className="h-6 w-6" strokeWidth={1.8} />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && <p className="mt-4 text-zinc-400 text-base sm:text-lg">{subtitle}</p>}
        <p className="mt-3 text-xs text-zinc-500">
          Última actualización: {new Date().toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>

      <div className="space-y-10 text-zinc-300 leading-relaxed">{children}</div>
    </main>

    <footer className="relative z-10 border-t border-white/5">
      <div className="mx-auto max-w-4xl px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Biblioteca de Estudio.</p>
        <div className="flex items-center gap-6">
          <Link to="/privacidad" className="hover:text-white transition-colors">
            Política de privacidad
          </Link>
          <Link to="/terminos" className="hover:text-white transition-colors">
            Términos de servicio
          </Link>
        </div>
      </div>
    </footer>
  </div>
);

const Section = ({ title, children }) => (
  <section>
    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 tracking-tight">
      {title}
    </h2>
    <div className="text-sm sm:text-base text-zinc-400 space-y-3">{children}</div>
  </section>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-2.5">
    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#5B8DEF] flex-shrink-0" />
    <span>{children}</span>
  </li>
);

function TermsPage() {
  return (
    <LegalShell
      testid="terms-page"
      icon={Scale}
      title="Términos de Servicio"
      subtitle="Reglas claras sobre el uso de Biblioteca de Estudio y su Plan Premium."
    >
      <div className="rounded-2xl border border-[#2F6BFF]/30 bg-[#2F6BFF]/5 p-5 sm:p-6">
        <p className="text-sm sm:text-base text-zinc-200">
          <span className="font-semibold text-white">AVISO:</span> Esta aplicación es un
          desarrollo tecnológico independiente con fines didácticos. El costo de la
          versión Premium corresponde única y estrictamente al uso de herramientas
          técnicas y funciones lógicas propietarias del software (como el Modo Dual, el
          Modo Presentación y personalizaciones de interfaz). Los textos bíblicos,
          comentarios y guías de estudio aquí integrados pertenecen a sus respectivos
          titulares, se ofrecen de forma 100% gratuita en el Plan Básico y no son
          objeto de venta ni comercialización directa por parte del autor.
        </p>
      </div>

      <Section title="1. Naturaleza de la aplicación">
        <p>
          Biblioteca de Estudio es una herramienta informática orientada al estudio
          personal. El software procesa los contenidos externos de manera estrictamente
          volátil o local para facilitar su lectura. El usuario final es el único
          responsable del uso ético, privado y respetuoso de los materiales aquí
          desplegados.
        </p>
      </Section>

      <Section title="2. Planes y pago">
        <ul className="space-y-2.5">
          <Bullet>El <strong className="text-white">Plan Básico</strong> es totalmente gratuito y no requiere registro.</Bullet>
          <Bullet>El <strong className="text-white">Plan Premium</strong> tiene un costo único de $100 MXN y desbloquea funciones técnicas avanzadas (Modo Dual, Modo Presentación, Personalización de fondos, Lectura de Voz, Temas de Estudio y Apoyo Ministerial).</Bullet>
          <Bullet>La activación del Plan Premium se gestiona de forma directa con el autor mediante WhatsApp al número <a href={WHATSAPP_URL} className="text-[#5B8DEF] hover:underline" target="_blank" rel="noopener noreferrer">+52 961 241 2158</a>.</Bullet>
          <Bullet>No existen suscripciones, cobros recurrentes ni pagos automáticos.</Bullet>
        </ul>
      </Section>

      <Section title="3. Software entregado “tal cual”">
        <p>
          El instalador se distribuye en formato .exe para Windows 11. La aplicación se
          encuentra en desarrollo activo y, al momento, el instalador no cuenta con
          firma digital de un certificado emisor reconocido, por lo que Windows
          SmartScreen puede mostrar una advertencia al ejecutarlo por primera vez. El
          software se ofrece "tal cual", sin garantías expresas o implícitas de
          funcionamiento ininterrumpido o libre de errores.
        </p>
      </Section>

      <Section title="4. Uso permitido">
        <ul className="space-y-2.5">
          <Bullet>Uso personal, privado y con fines de estudio bíblico individual o congregacional.</Bullet>
          <Bullet>No está permitido redistribuir el instalador modificado, revender el acceso al Plan Premium, ni extraer y reempaquetar el contenido bíblico o doctrinal para su comercialización.</Bullet>
        </ul>
      </Section>

      <Section title="5. Contacto">
        <p>
          Para soporte, dudas o reportes de error, contacta al autor por WhatsApp al{" "}
          <a href={WHATSAPP_URL} className="text-[#5B8DEF] hover:underline" target="_blank" rel="noopener noreferrer">+52 961 241 2158</a>.
        </p>
      </Section>
    </LegalShell>
  );
}

function PrivacyPage() {
  return (
    <LegalShell
      testid="privacy-page"
      icon={ShieldCheck}
      title="Política de Privacidad"
      subtitle="Qué datos maneja la aplicación, qué servicios externos usa y los créditos del contenido integrado."
    >
      <Section title="1. Datos personales">
        <p>
          Biblioteca de Estudio es una aplicación de escritorio que se ejecuta
          localmente en tu equipo. No recolecta, almacena ni envía información personal
          identificable a servidores propios. Tus notas, marcadores, progreso de
          lectura y configuraciones se guardan únicamente en tu propio PC.
        </p>
      </Section>

      <Section title="2. Conexiones a internet">
        <p>Algunas funciones requieren acceso a internet para operar:</p>
        <ul className="space-y-2.5">
          <Bullet>El <strong className="text-white">Asistente con IA</strong> envía las preguntas que escribes a un proveedor de modelos de lenguaje para devolver una respuesta.</Bullet>
          <Bullet>El <strong className="text-white">Himnario con internet</strong> abre los himnos correspondientes directamente en YouTube.</Bullet>
          <Bullet>La <strong className="text-white">Lección de Escuela Sabática</strong> y el plan <strong className="text-white">Reavivados por su Palabra</strong> se consumen dinámicamente desde servidores web externos.</Bullet>
          <Bullet>La descarga de versiones bíblicas con copyright se realiza desde servidores externos públicos.</Bullet>
        </ul>
      </Section>

      <Section title="3. Créditos del contenido — Versiones bíblicas">
        <ul className="space-y-2.5">
          <Bullet>Reina-Valera 1960, 1995 y Dios Habla Hoy (DHH): © Sociedades Bíblicas Unidas.</Bullet>
          <Bullet>Nueva Versión Internacional (NVI): © Biblica, Inc.</Bullet>
          <Bullet>Palabra de Dios para Todos (PDT): © World Bible Translation Center.</Bullet>
          <Bullet>Sincronización de texto y motor de búsqueda basados en el backend de código abierto <span className="font-mono text-zinc-300">bible-api.deno.dev</span>.</Bullet>
          <Bullet>Las bases de datos y textos bíblicos con copyright son consumidos dinámicamente desde servidores web externos o almacenados localmente bajo la exclusiva administración y uso privado del usuario final.</Bullet>
        </ul>
      </Section>

      <Section title="4. Créditos del contenido — Material doctrinal y de estudio">
        <ul className="space-y-2.5">
          <Bullet><strong className="text-white">Escuela Sabática:</strong> Estructura técnica provista por la comunidad de código abierto de Adventech. El contenido de la Guía de Estudio de la Biblia es propiedad intelectual y marca registrada de la General Conference of Seventh-day Adventists®.</Bullet>
          <Bullet><strong className="text-white">Comentario Bíblico:</strong> Indexación basada en repositorios públicos de la comunidad en la web (La Biblia y su Estudio). Los derechos del Comentario Bíblico Adventista original pertenecen a Pacific Press Publishing Association y a la Asociación Publicadora Interamericana (IADPA).</Bullet>
          <Bullet><strong className="text-white">Fe de Jesús:</strong> Texto del curso bíblico del autor Carlos E. Aeschlimann, propiedad intelectual registrada y protegida de sus casas editoras oficiales (GEMA Editores / IADPA).</Bullet>
          <Bullet><strong className="text-white">Diccionario Bíblico:</strong> Motor de búsqueda local optimizado mediante un analizador sintáctico propietario. Los textos corresponden a compendios académicos tradicionales de uso comunitario.</Bullet>
          <Bullet><strong className="text-white">Fondos Dinámicos:</strong> Imágenes gratuitas obtenidas de Unsplash.</Bullet>
        </ul>
      </Section>

      <Section title="5. Responsabilidad del usuario">
        <p>
          Esta aplicación es una herramienta informática orientada al estudio personal.
          El software procesa los contenidos externos de manera estrictamente volátil o
          local para facilitar su lectura. El usuario final es el único responsable del
          uso ético, privado y respetuoso de los materiales aquí desplegados.
        </p>
      </Section>

      <Section title="6. Contacto">
        <p>
          Para cualquier consulta sobre privacidad o créditos, contacta al autor por
          WhatsApp al{" "}
          <a href={WHATSAPP_URL} className="text-[#5B8DEF] hover:underline" target="_blank" rel="noopener noreferrer">+52 961 241 2158</a>.
        </p>
      </Section>
    </LegalShell>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacidad" element={<PrivacyPage />} />
        <Route path="/terminos" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
