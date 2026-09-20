// export default function DashCliente() {
//   return (
//     <div className="min-h-screen bg-gray-100 px-0 py-0 sm:px-6 sm:py-6 lg:px-10 lg:py-10">
//       <h1>Bienvenido al Dashboard del Cliente</h1>
//       {/* Aquí puedes agregar más contenido y componentes específicos para el dashboard del cliente */}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import {
  Bell,
  CheckCircle2,
  ChevronDown,
  FileText,
  Heart,
  Menu,
  MoreHorizontal,
  Search,
  Sparkles,
} from "lucide-react";

import Sidebar from "@/components/Dashboards/SideBarClient";

const serviceRequests = [
  {
    provider: "Carlos Fernández",
    service: "Reparación de cañería",
    date: "Solicitado hace 2 días",
    status: "En camino",
    color: "bg-amber-100 text-amber-700",
    initials: "CF",
  },
  {
    provider: "ElectroHogar",
    service: "Instalación eléctrica",
    date: "Visita confirmada para mañana",
    status: "Confirmado",
    color: "bg-emerald-100 text-emerald-700",
    initials: "EH",
  },
  {
    provider: "Pinturas del Sur",
    service: "Pintura de interiores",
    date: "Presupuesto recibido",
    status: "Por revisar",
    color: "bg-slate-100 text-slate-600",
    initials: "PS",
  },
];

const recommended = [
  {
    company: "Soluciones Gas",
    role: "Revisión de calefón",
    meta: "Desde $18.000 · 4.9 estrellas",
    logo: "SG",
    tone: "bg-violet-100 text-violet-700",
  },
  {
    company: "Hogar en Orden",
    role: "Limpieza profunda",
    meta: "Desde $12.500 · Disponible hoy",
    logo: "HO",
    tone: "bg-orange-100 text-orange-700",
  },
];

export default function DashCliente() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-900">
      {menuOpen && (
        <button
          className="fixed inset-0 z-20 bg-slate-900/20 lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        />
      )}
      <div className="flex min-h-screen">
        <Sidebar open={menuOpen} close={() => setMenuOpen(false)} />
        <main className="min-w-0 flex-1">
          <header className="flex h-[76px] items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8 lg:px-10">
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
              aria-label="Abrir menú"
            >
              <Menu size={21} />
            </button>
            <div className="relative hidden max-w-sm flex-1 sm:block">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={17}
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar servicios..."
                className="h-10 w-full rounded-xl bg-slate-50 pl-10 pr-4 text-sm outline-none ring-indigo-200 placeholder:text-slate-400 focus:ring-2"
              />
            </div>
            <div className="ml-auto flex items-center gap-4">
              <button
                className="relative rounded-xl p-2 text-slate-500 hover:bg-slate-50"
                aria-label="Notificaciones"
              >
                <Bell size={19} />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-indigo-600 ring-2 ring-white" />
              </button>
              <div className="h-8 w-px bg-slate-200" />
              <button className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                  LM
                </div>
                <span className="hidden text-sm font-semibold text-slate-700 sm:block">
                  Lucía Méndez
                </span>
                <ChevronDown size={15} className="text-slate-400" />
              </button>
            </div>
          </header>
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
            <section
              id="inicio"
              className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
            >
              <div>
                <p className="mb-2 text-sm font-medium text-slate-500">
                  Tu espacio de servicios
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                  Hola, Lucía
                </h1>
                <p className="mt-2 text-sm text-slate-500">
                  Encontrá profesionales confiables para resolver lo que
                  necesitás.
                </p>
              </div>
              <button className="flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700">
                <Search size={17} /> Contratar un servicio
              </button>
            </section>
            <section className="grid gap-4 sm:grid-cols-3">
              <Stat
                icon={<FileText size={18} />}
                label="Servicios contratados"
                value="3"
                note="1 en curso"
              />
              <Stat
                icon={<Heart size={18} />}
                label="Profesionales guardados"
                value="12"
                note="Ver guardados"
              />
              <Stat
                icon={<CheckCircle2 size={18} />}
                label="Solicitudes abiertas"
                value="2"
                note="Ver solicitudes"
              />
            </section>
            <div className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
              <section
                id="servicios"
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2 className="font-bold text-slate-900">Mis servicios</h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Seguí tus contrataciones y solicitudes
                    </p>
                  </div>
                  <a
                    href="#servicios"
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-700"
                  >
                    Ver todos
                  </a>
                </div>
                <div className="divide-y divide-slate-100">
                  {serviceRequests.map((item) => (
                    <div
                      className="flex items-center justify-between gap-3 py-4 first:pt-0 last:pb-0"
                      key={item.provider}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-bold text-slate-600">
                          {item.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-slate-800">
                            {item.service}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {item.provider} · {item.date}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold ${item.color}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="mb-5 flex items-start justify-between">
                  <div>
                    <h2 className="font-bold text-slate-900">
                      Profesionales recomendados
                    </h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Opciones cerca tuyo para lo que necesitás
                    </p>
                  </div>
                  <Sparkles size={19} className="text-indigo-500" />
                </div>
                <div className="space-y-4">
                  {recommended.map((item) => (
                    <div className="flex items-center gap-3" key={item.company}>
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${item.tone}`}
                      >
                        {item.logo}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-slate-800">
                          {item.role}
                        </p>
                        <p className="mt-1 truncate text-xs text-slate-500">
                          {item.company} · {item.meta}
                        </p>
                      </div>
                      <button
                        className="rounded-lg p-2 text-slate-400 hover:bg-slate-50"
                        aria-label={`Más opciones para ${item.role}`}
                      >
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  ))}
                </div>
                <button className="mt-5 w-full rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50">
                  Explorar profesionales
                </button>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
  note,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          {icon}
        </span>
        <span className="text-xs font-semibold text-emerald-600">{note}</span>
      </div>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}
