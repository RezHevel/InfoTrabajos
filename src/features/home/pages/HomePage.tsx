"use client";
import "@styles/home.css";
import { Link } from "react-router-dom";

import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CircleCheck,
  Hammer,
  MapPin,
  Menu,
  Paintbrush,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const categories = [
  { name: "Plomería", icon: Wrench },
  { name: "Electricidad", icon: Zap },
  { name: "Pintura", icon: Paintbrush },
  { name: "Limpieza", icon: Sparkles },
  { name: "Carpintería", icon: Hammer },
  { name: "Jardinería", icon: BriefcaseBusiness },
];

const stats = [
  { value: "+10,000", label: "personas registradas", icon: Users },
  { value: "+5,000", label: "profesionales activos", icon: BriefcaseBusiness },
  { value: "+15,000", label: "servicios completados", icon: CircleCheck },
  { value: "4.8/5", label: "calificación promedio", icon: Star },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-20 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#inicio"
            className="flex items-center gap-2"
            aria-label="InfoTrabajos, inicio"
          >
            <span className="brand-mark">
              <span></span> {/* colocar logo de InfoTrabajos */}
            </span>
            <span className="text-xl font-bold tracking-tight text-primary sm:text-2xl">
              Info<span className="text-accent">Trabajos</span>
            </span>
          </a>
          <nav
            className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground lg:flex"
            aria-label="Navegación principal"
          >
            <a className="nav-link active" href="#inicio">
              Inicio
            </a>
            <a className="nav-link" href="#como-funciona">
              Cómo funciona
            </a>
            <a className="nav-link" href="#categorias">
              Buscar servicios
            </a>
            <a className="nav-link" href="#profesionales">
              Para profesionales
            </a>
            <a className="nav-link" href="#confianza">
              Blog
            </a>
            <a className="nav-link" href="#contacto">
              Contacto
            </a>
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <Link to="/auth/SignIn">
              <button className="cursor-pointer text-sm font-bold text-primary transition-colors hover:text-accent">
                Iniciar sesión
              </button>
            </Link>
            <Link to="/auth/Register">
              <button className="cursor-pointer rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/15 transition hover:-translate-y-0.5 hover:bg-primary/90">
                Regístrate
              </button>
            </Link>
          </div>
          <button
            className="rounded-lg p-2 text-primary lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-border bg-background px-5 py-5 lg:hidden">
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#categorias">Buscar servicios</a>
            <a href="#profesionales">Para profesionales</a>
            <a href="#contacto">Contacto</a>
          </nav>
        )}
      </header>

      <section id="inicio" className="hero-section relative">
        <div className="hero-grid" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div className="relative z-10">
            <div className="eyebrow">
              <Sparkles size={15} /> La forma más simple de resolverlo
            </div>
            <h1 className="mt-6 max-w-2xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.055em] text-primary sm:text-6xl lg:text-7xl">
              Encuentra ayuda.
              <br />
              <span className="text-accent">Haz que pase.</span>
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">
              Conecta con profesionales verificados para cualquier tarea, grande
              o pequeña. Cotiza, compara y elige con total confianza.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#buscar" className="button-primary">
                <Search size={19} /> Buscar un servicio <ArrowRight size={17} />
              </a>
              <a href="#profesionales" className="button-secondary">
                <BriefcaseBusiness size={18} /> Ofrecer mis servicios
              </a>
            </div>
            <div className="mt-9 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="avatar-stack">
                <span>LM</span>
                <span>CR</span>
                <span>AG</span>
                <span>+</span>
              </div>
              <div>
                <strong className="block text-primary">
                  Más de 10,000 personas ya confían
                </strong>
                <span className="flex items-center gap-1">
                  <span className="stars">★★★★★</span> 4.8 de 5
                </span>
              </div>
            </div>
          </div>
          <div className="relative min-h-107.5 lg:min-h-132.5">
            <div className="hero-orb orb-one" />
            <div className="hero-orb orb-two" />
            <div className="hero-illustration">
              <div className="person-head" />
              <div className="person-body">
                <div className="shirt-line" />
                <div className="tool">W</div>
              </div>
              <div className="person-arm" />
            </div>
            <div className="floating-card card-rating">
              <div className="mini-avatar">MG</div>
              <div>
                <strong>María G.</strong>
                <div className="stars text-xs">★★★★★</div>
                <span>Excelente servicio</span>
              </div>
            </div>
            <div className="floating-card card-job">
              <div className="job-icon">
                <Wrench size={19} />
              </div>
              <div>
                <strong>Trabajo completado</strong>
                <span>Instalación de luminaria</span>
                <div className="flex items-center gap-1 text-xs font-bold text-success">
                  <Check size={13} /> Verificado
                </div>
              </div>
            </div>
            <div className="floating-pill">
              <ShieldCheck size={16} /> Profesionales verificados
            </div>
          </div>
        </div>
        <div
          id="buscar"
          className="search-panel mx-auto max-w-6xl px-5 lg:px-8"
        >
          <div className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-2xl shadow-primary/10 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  Empieza aquí
                </p>
                <h2 className="mt-1 text-xl font-extrabold text-primary">
                  ¿Qué necesitas resolver?
                </h2>
              </div>
              <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
                <ShieldCheck size={18} className="text-success" /> Sin
                compromisos
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
              <label className="search-field">
                <Search size={19} />
                <input
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="Ej. Reparar una fuga"
                  aria-label="Servicio que necesitas"
                />
              </label>
              <label className="search-field">
                <MapPin size={19} />
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Tu ubicación"
                  aria-label="Tu ubicación"
                />
              </label>
              <button
                className="button-primary justify-center"
                onClick={() => alert("Función de búsqueda no implementada")}
              >
                Buscar ahora <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="categorias"
        className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">Encuentra lo que buscas</p>
            <h2 className="section-title">Servicios para cada momento</h2>
          </div>
          <a
            href="#buscar"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent"
          >
            Ver todos los servicios <ArrowRight size={16} />
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map(({ name, icon: Icon }) => (
            <a href="#buscar" className="category-card" key={name}>
              <Icon size={27} strokeWidth={1.8} />
              <span>{name}</span>
              <ArrowRight size={15} className="category-arrow" />
            </a>
          ))}
        </div>
      </section>

      <section id="confianza" className="stats-section">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {stats.map(({ value, label, icon: Icon }) => (
            <div className="stat" key={label}>
              <Icon size={25} className="text-accent" />
              <div>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="como-funciona"
        className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:py-28"
      >
        <div>
          <p className="section-kicker">Simple y transparente</p>
          <h2 className="section-title">
            Resolverlo es más fácil de lo que imaginas.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
            Te acompañamos en cada paso para que encuentres a la persona ideal
            para tu proyecto.
          </p>
          <a href="#buscar" className="button-primary mt-8 inline-flex">
            Comenzar ahora <ArrowRight size={17} />
          </a>
        </div>
        <div className="steps-list">
          <div className="step">
            <span className="step-number">01</span>
            <div>
              <h3>Cuéntanos qué necesitas</h3>
              <p>
                Describe tu tarea y dinos dónde la necesitas. Solo toma un
                minuto.
              </p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">02</span>
            <div>
              <h3>Compara tus opciones</h3>
              <p>
                Recibe propuestas de profesionales verificados y revisa sus
                calificaciones.
              </p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">03</span>
            <div>
              <h3>Elige con confianza</h3>
              <p>
                Habla directamente, acuerda los detalles y disfruta el
                resultado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="profesionales"
        className="mx-5 mb-20 rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 lg:mx-auto lg:max-w-7xl lg:py-20"
      >
        <div className="flex flex-col justify-between gap-9 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
              Tu talento tiene espacio
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-black tracking-tight sm:text-4xl">
              Convierte lo que sabes hacer en nuevas oportunidades.
            </h2>
            <p className="mt-4 max-w-lg leading-7 text-primary-foreground/70">
              Únete a miles de profesionales que ya están consiguiendo más
              clientes y haciendo crecer su negocio.
            </p>
          </div>
          <a
            href="#contacto"
            className="button-accent shrink-0"
            onClick={() => alert("Función de contacto no implementada")}
          >
            Quiero ofrecer mis servicios <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <footer id="contacto" className="border-t border-border bg-muted/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span className="font-bold text-primary">
            Info<span className="text-accent">Trabajos</span>
          </span>
          <span>Conectamos talento con oportunidades.</span>
          <span>© 2026 InfoTrabajos</span>
        </div>
      </footer>
    </main>
  );
}
