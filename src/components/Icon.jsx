import React from "react";

/* Simple 24px stroke icons, drawn for this manual. */
const PATHS = {
  rocket: "M5 15c-1.5 1.5-2 4-2 6 2 0 4.5-.5 6-2M9 15l-3-3c1-3 3.5-7.5 9-9 0 0 4 0 6 2 0 0 1 4-2 9-1.5 2.5-6 6-9 7l-1-6zM15 9.5a1.5 1.5 0 1 0 0-.01",
  cube: "M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9",
  building: "M4 21V5l8-2v18M12 8h8v13M4 21h16M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2",
  receipt: "M6 3h12v18l-3-2-3 2-3-2-3 2V3zM9 8h6M9 12h6M9 16h3",
  landmark: "M3 21h18M5 18h14M6 10v8M10 10v8M14 10v8M18 10v8M3 10l9-6 9 6H3z",
  chart: "M12 3a9 9 0 1 0 9 9h-9V3zM15 3.5A8 8 0 0 1 20.5 9H15V3.5z",
  store: "M4 10v10h16V10M3 4h18l-1 6H4L3 4zM9 20v-5h6v5",
  cart: "M3 4h2l2.5 11h11L21 7H6.5M9 20a1 1 0 1 0 0-.01M18 20a1 1 0 1 0 0-.01",
  box: "M3 8l9-5 9 5v8l-9 5-9-5V8zM3 8l9 5 9-5M12 13v8M7.5 5.5l9 5",
  factory: "M3 21V9l6 4V9l6 4V5h4v16H3zM7 17h2M12 17h2",
  cycle: "M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3M18 3v4h-4M6 21v-4h4",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM8.5 12l2.5 2.5 4.5-5",
  board: "M4 4h16v12H4zM12 16v4M8 20h8M8 8h8M8 12h5",
  lifebuoy: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6",
  globe: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z",
  user: "M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 21c1-4 4.5-6 8-6s7 2 8 6",
  flag: "M5 21V4M5 4h12l-2 4 2 4H5",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",
  caret: "M9 6l6 6-6 6",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M6 6l12 12M18 6L6 18",
  image: "M4 5h16v14H4zM4 16l5-5 4 4 2-2 5 5M15 9a1 1 0 1 0 0-.01",
  arrow: "M5 12h14M13 6l6 6-6 6",
  home: "M4 11l8-7 8 7v9h-5v-6H9v6H4v-9z",
  folder: "M3 6h6l2 2h10v11H3V6z",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z",
  info: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 11v6M12 7.5v.01",
  alert: "M12 4l9 16H3l9-16zM12 10v4M12 17v.01",
  pin: "M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12zM12 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
  doc: "M6 3h9l4 4v14H6V3zM14 3v5h5M9 13h7M9 17h7",
};

export default function Icon({ name, size = 18, stroke = 1.8, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name] || PATHS.doc} />
    </svg>
  );
}
