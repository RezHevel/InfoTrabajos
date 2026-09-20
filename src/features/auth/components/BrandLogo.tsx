import { Link } from "react-router-dom";

export default function BrandLogo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2"
      aria-label="InfoTrabajos, inicio"
    >
      <span className="relative flex size-10 rotate-[-7deg] items-center justify-center rounded-xl bg-[#f5ab00] shadow-[5px_5px_0_#d5e0e9]" />
      <span className="text-xl font-black tracking-tight text-[#082d5c]">
        Info<span className="text-[#f5ab00]">Trabajos</span>
      </span>
    </Link>
  );
}
