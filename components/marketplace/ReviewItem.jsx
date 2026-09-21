import React from "react";
import { Avatar } from "../core/Avatar.jsx";
import { Rating } from "../core/Rating.jsx";
import { Badge } from "../core/Badge.jsx";

export function ReviewItem({ author, photo, rating, date, job, text, verified, style, ...rest }) {
  return (
    <div style={{
      display: "flex", gap: 12, padding: "14px 0",
      borderBottom: "var(--rule-w) solid var(--border-hairline)", ...style,
    }} {...rest}>
      <Avatar name={author} src={photo} size="sm" />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ font: "var(--type-h4)", color: "var(--text-strong)" }}>{author}</span>
          {verified ? <Badge tone="go" icon="check">Trabajo confirmado</Badge> : null}
          <span style={{ font: "var(--type-caption)", color: "var(--text-subtle)", marginLeft: "auto" }}>{date}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "5px 0 6px" }}>
          <Rating value={rating} size={13} showValue={false} />
          {job ? <span style={{ font: "var(--type-caption)", color: "var(--text-muted)" }}>{job}</span> : null}
        </div>
        <p style={{ font: "var(--type-body-sm)", color: "var(--text-body)", margin: 0 }}>{text}</p>
      </div>
    </div>
  );
}
