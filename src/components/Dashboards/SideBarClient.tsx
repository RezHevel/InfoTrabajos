"use client";
import {
  BriefcaseBusiness,
  FileText,
  Heart,
  Home,
  Settings,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";

export default function SidebarClient({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) {
  return (
    <aside
      className={`${open ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-slate-200 bg-white px-5 py-6 transition-transform lg:static lg:translate-x-0`}
    >
      <div className="mb-10 flex items-center justify-between px-2">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <BriefcaseBusiness size={19} />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Info<span className="text-indigo-600">Trabajos</span>
          </span>
        </div>
        <button
          onClick={close}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 lg:hidden"
          aria-label="Cerrar menú"
        >
          <X size={18} />
        </button>
      </div>
      <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
        Menú principal
      </p>
      <nav className="space-y-1" aria-label="Navegación principal">
        <a
          className="flex items-center gap-3 rounded-xl bg-indigo-50 px-3 py-3 text-sm font-semibold text-indigo-700"
          href="#inicio"
        >
          <Home size={18} /> Inicio
        </a>
        <a
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50"
          href="#servicios"
        >
          <FileText size={18} /> Mis servicios{" "}
          <span className="ml-auto rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-bold text-indigo-700">
            3
          </span>
        </a>
        <a
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50"
          href="#guardados"
        >
          <Heart size={18} /> Guardados
        </a>
        <a
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50"
          href="#perfil"
        >
          <UserRound size={18} /> Mi perfil
        </a>
      </nav>
      <p className="mb-3 mt-9 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
        Cuenta
      </p>
      <nav className="space-y-1">
        <a
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50"
          href="#configuracion"
        >
          <Settings size={18} /> Configuración
        </a>
      </nav>
      <div className="mt-auto rounded-2xl bg-indigo-50 p-4">
        <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
          <Sparkles size={16} />
        </div>
        <p className="text-sm font-bold text-slate-800">
          ¿Qué necesitás resolver?
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          Publicá tu pedido y recibí presupuestos de profesionales.
        </p>
        <button className="mt-3 w-full rounded-lg bg-indigo-600 py-2 text-xs font-bold text-white hover:bg-indigo-700">
          Publicar solicitud
        </button>
      </div>
    </aside>
  );
}
