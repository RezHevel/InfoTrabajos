"use client";

import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-7 space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-bold text-[#082d5c]">
          Correo electrónico
        </label>
        <div className="relative">
          <Mail
            aria-hidden="true"
            className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#087fc0]"
          />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="tu@correo.com"
            className="h-13 w-full rounded-xl border border-[#d8e4ee] bg-white pl-12 pr-4 text-sm text-[#082d5c] outline-none transition placeholder:text-[#8293a6] focus:border-[#087fc0] focus:ring-4 focus:ring-[#087fc0]/15"
          />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="text-sm font-bold text-[#082d5c]"
          >
            Contraseña
          </label>
          <button
            type="button"
            className="text-xs font-bold text-[#087fc0] underline-offset-4 hover:underline"
          >
            ¿La olvidaste?
          </button>
        </div>
        <div className="relative">
          <LockKeyhole
            aria-hidden="true"
            className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#087fc0]"
          />
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            placeholder="••••••••"
            className="h-13 w-full rounded-xl border border-[#d8e4ee] bg-white pl-12 pr-12 text-sm text-[#082d5c] outline-none transition placeholder:text-[#8293a6] focus:border-[#087fc0] focus:ring-4 focus:ring-[#087fc0]/15"
          />
          <button
            type="button"
            aria-label={
              showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
            }
            onClick={() => setShowPassword((visible) => !visible)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8293a6] hover:text-[#082d5c]"
          >
            {showPassword ? (
              <EyeOff aria-hidden="true" className="size-5" />
            ) : (
              <Eye aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>
      <label className="flex items-center gap-2 text-xs text-[#5d7188]">
        <input
          type="checkbox"
          className="size-4 rounded border-[#cbd9e5] accent-[#f5ab00]"
        />{" "}
        Mantener mi sesión iniciada
      </label>
      <Link to="/dashboard/client">
        {" "}
        {/* link para entrar a diferentes dashboard (client,employee,admin)*/}
        <button
          type="submit"
          className="group flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-[#082d5c] px-5 text-sm font-bold text-white shadow-[0_12px_24px_-12px_#082d5c] transition hover:-translate-y-0.5 hover:bg-[#0b3a73] focus:outline-none focus:ring-4 focus:ring-[#082d5c]/20"
        >
          {submitted ? "¡Bienvenido de nuevo!" : "Iniciar sesión"}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-1"
          />
        </button>
      </Link>

      <p className="text-center text-xs text-[#5d7188]">
        ¿Aún no tienes una cuenta?{" "}
        <Link to="/auth/register">
          <button
            type="button"
            className="font-bold text-[#087fc0] underline-offset-4 hover:underline cursor-pointer"
          >
            Regístrate gratis
          </button>
        </Link>
      </p>
    </form>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex size-10 rotate-[-7deg] items-center justify-center rounded-xl bg-[#f5ab00] shadow-[5px_5px_0_#d5e0e9]">
        <span className="sr-only">InfoTrabajos</span>
      </span>
      <span className="text-xl font-black tracking-tight text-[#082d5c]">
        Info<span className="text-[#f5ab00]">Trabajos</span>
      </span>
    </div>
  );
}

export function LoginVisualPanel() {
  return (
    <section className="relative hidden min-h-[650px] overflow-hidden bg-[#eaf6fd] lg:flex lg:w-[%] lg:flex-col lg:justify-between lg:p-10">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(#d9eaf3 1px, transparent 1px), linear-gradient(90deg, #d9eaf3 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative z-10">
        <Logo />
      </div>
      <div className="relative z-10 max-w-lg pb-4">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f3c55a] bg-[#fff9e8] px-4 py-2 text-xs font-bold text-[#775000]">
          <Sparkles className="size-4" /> La forma más simple de resolverlo
        </div>
        <h2 className="text-balance text-5xl font-black leading-[.98] tracking-tight text-[#082d5c] xl:text-6xl">
          Encuentra
          <br />
          ayuda.
          <br />
          <span className="text-[#f5ab00]">Haz que pase.</span>
        </h2>
        <p className="mt-6 max-w-md text-base leading-7 text-[#526b85]">
          Conecta con profesionales verificados para cualquier tarea, grande o
          pequeña. Cotiza, compara y elige con total confianza.
        </p>
        <div className="mt-8 flex items-center gap-3 text-xs font-bold text-[#082d5c]">
          <span className="flex -space-x-2">
            <span className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-[#f5ab00]">
              M
            </span>
            <span className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-[#087fc0] text-white">
              G
            </span>
            <span className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-[#d9eaf3]">
              L
            </span>
          </span>
          Más de 10,000 personas ya confían
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-[-80px] right-[-50px] size-80 rounded-full border-[26px] border-[#f5ab00]/30"
      />
      <div
        aria-hidden="true"
        className="absolute right-16 top-32 size-32 rounded-full bg-[#f5ab00]/25"
      />
    </section>
  );
}

export function LoginCard() {
  return (
    <section className="flex w-full max-w-xl flex-col justify-center bg-white px-6 py-10 sm:px-12 lg:w-[50%] lg:px-20 xl:px-24">
      <div className="mb-12 lg:hidden">
        <Logo />
      </div>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087fc0]">
          Hola de nuevo
        </p>
        <h1 className="mt-3 text-balance text-4xl font-black leading-tight tracking-tight text-[#082d5c]">
          Inicia sesión en tu cuenta
        </h1>
        <p className="mt-4 max-w-md text-sm leading-6 text-[#5d7188]">
          Nos alegra verte. Ingresa tus datos para continuar donde lo dejaste.
        </p>
        <LoginForm />
      </div>
    </section>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f5faff] px-0 py-0 sm:px-6 sm:py-6 lg:px-10 lg:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl overflow-hidden bg-white shadow-[0_24px_80px_-32px_rgba(8,45,92,.35)] sm:rounded-[2rem]">
        <LoginVisualPanel />
        <LoginCard />
      </div>
    </main>
  );
}
