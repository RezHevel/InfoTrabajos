import React from "react";
import { iconPaths } from "./icon-paths.js";

/* Lucide glyph set, 24x24, 2px stroke, inherits currentColor. */
export function Icon({ name, size = 20, strokeWidth = 2, label, style, ...rest }) {
  const inner = iconPaths[name];
  if (!inner) { if (typeof console !== "undefined") console.warn("Icon: unknown name " + name); return null; }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}
      fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round"
      role={label ? "img" : "presentation"} aria-label={label} aria-hidden={label ? undefined : true}
      style={{ display: "block", flex: "none", ...style }}
      dangerouslySetInnerHTML={{ __html: inner }} {...rest}
    />
  );
}
