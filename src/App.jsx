import React from 'react';

const font = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif";

// ─── DESIGN SYSTEM ─────────────────────────────────────────
const C = {
  bg: "#F2F2F7",
  card: "#FFFFFF",
  primary: "#0A84FF",
  primaryLight: "rgba(10, 132, 255, 0.12)",
  green: "#34C759",
  greenLight: "rgba(52, 199, 89, 0.12)",
  orange: "#FF9500",
  orangeLight: "rgba(255, 149, 0, 0.12)",
  red: "#FF3B30",
  redLight: "rgba(255, 59, 48, 0.12)",
  yellow: "#FFCC00",
  purple: "#AF52DE",
  purpleLight: "rgba(175, 82, 222, 0.12)",
  teal: "#5856D6",
  text: "#000000",
  text2: "#3C3C43",
  text3: "#8E8E93",
  sep: "rgba(60, 60, 67, 0.1)",
  border: "rgba(60, 60, 67, 0.08)",
  grayBg: "#E5E5EA",
  grayFill: "rgba(120, 120, 128, 0.16)",
  shadow: "0 8px 24px -4px rgba(0,0,0,0.06), 0 2px 6px -1px rgba(0,0,0,0.04)",
  shadowLarge: "0 20px 40px -8px rgba(0,0,0,0.12), 0 8px 16px -4px rgba(0,0,0,0.08)",
};

// ─── ICON SYSTEM ──────────────────────────────────────────
const Icon = ({ name, size = 24, color = "currentColor", fill = "none" }) => {
  const icons = {
    home: <React.Fragment><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></React.Fragment>,
    log: <React.Fragment><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></React.Fragment>,
    journal: <React.Fragment><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></React.Fragment>,
    vitals: <React.Fragment><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/><path d="M16.51 7.35l3.02-6.22a.45.45 0 0 0-.58-.61l-6.19 3M7.49 16.65l-3.02 6.22a.45.45 0 0 0 .58.61l6.19-3M6.65 16.51l-6.22-3.02a.45.45 0 0 0-.61.58l3 6.19M17.35 7.49l6.22 3.02a.45.45 0 0 0 .61-.58l-3-6.19"/></React.Fragment>,
    history: <React.Fragment><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></React.Fragment>,
    heart: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>,
    temp: <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>,
    battery: <React.Fragment><rect width="16" height="10" x="2" y="7" rx="2"/><path d="M22 11v2"/></React.Fragment>,
    user: <React.Fragment><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></React.Fragment>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>,
    alert: <React.Fragment><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></React.Fragment>,
    worker: <React.Fragment><path d="M2 18a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6"/><path d="M7 10h10"/><path d="M12 4v6"/><path d="M9 4h6"/></React.Fragment>,
    check: <polyline points="20 6 9 17 4 12"/>,
    stretch: <React.Fragment><path d="m7 21 3-3 3 3"/><path d="m7 3 3 3 3-3"/><path d="M10 6v12"/><path d="M22 10.37V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8.63"/><path d="M14 6H6"/></React.Fragment>,
    emergency: <React.Fragment><path d="M12 2v20"/><path d="M2 12h20"/><path d="m4.93 4.93 14.14 14.14"/><path d="m4.93 19.07 14.14-14.14"/></React.Fragment>,
    file: <React.Fragment><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></React.Fragment>,
    plus: <React.Fragment><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></React.Fragment>,
    chevronRight: <polyline points="9 18 15 12 9 6"/>,
    posture: <React.Fragment><path d="M12 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M11 5h2v6h5v2h-5v7h-2v-7H6v-2h5V5Z"/></React.Fragment>
  };

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={fill} 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ display: "block" }}
    >
      {icons[name] || null}
    </svg>
  );
};

// ─── SHARED COMPONENTS ─────────────────────────────────────
const StatusBar = ({ hasAlert }) => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  return (
    <div style={{ height: 54, padding: "14px 24px 0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 16, fontWeight: 700, fontFamily: font, flexShrink: 0, position: "relative", zIndex: 10 }}>
      <span style={{ letterSpacing: -0.5, width: 54, display: "flex", justifyContent: "center" }}>{formatTime(time)}</span>
      
      {/* Dynamic Island */}
      <div style={{ 
        position: "absolute", 
        top: 11, 
        left: "50%", 
        transform: "translateX(-50%)", 
        width: 126, 
        height: 37, 
        background: "#000", 
        borderRadius: 200, 
        boxShadow: hasAlert ? `0 0 20px ${C.orange}40` : "none",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "0 12px"
      }}>
        {hasAlert && <div style={{ width: 6, height: 6, borderRadius: 3, background: C.orange, boxShadow: `0 0 10px ${C.orange}` }} />}
      </div>

      <div style={{ display: "flex", gap: 7, alignItems: "center", width: 70, justifyContent: "flex-end" }}>
        {/* Cellular Signal Icon */}
        <svg width="18" height="12" viewBox="0 0 18 12">
          <rect x="0" y="8" width="3" height="4" rx="1" fill="#000" />
          <rect x="4" y="6" width="3" height="6" rx="1" fill="#000" />
          <rect x="8" y="3" width="3" height="9" rx="1" fill="#000" />
          <rect x="12" y="0" width="3" height="12" rx="1" fill="rgba(0,0,0,0.2)" />
        </svg>

        {/* Wi-Fi Icon */}
        <svg width="17" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>

        {/* Battery Icon */}
        <div style={{ position: "relative", width: 25, height: 12, border: "1.5px solid rgba(0,0,0,0.35)", borderRadius: 4, padding: "1px", display: "flex", alignItems: "center" }}>
          <div style={{ width: "85%", height: 7, background: "#000", borderRadius: 1.5 }} />
          <div style={{ position: "absolute", right: -3.5, top: 4, width: 1.5, height: 4, background: "rgba(0,0,0,0.35)", borderTopRightRadius: 1, borderBottomRightRadius: 1 }} />
        </div>
      </div>
    </div>
  );
};

const HomeIndicator = () => (
  <div style={{ height: 34, display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 8, flexShrink: 0 }}>
    <div style={{ width: 134, height: 5, background: "#1C1C1E", borderRadius: 3, opacity: 0.15 }} />
  </div>
);

const PhoneFrame = ({ children, footer, overlay, hasAlert }) => (
  <div className="phone-container" style={{ 
    width: "100%",
    maxWidth: 430,
    height: "100dvh", 
    maxHeight: 932,
    background: C.bg, 
    borderRadius: "min(54px, 12vw)", 
    overflow: "hidden", 
    position: "relative", 
    boxShadow: "0 60px 140px -20px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.2)", 
    fontFamily: font, 
    display: "flex", 
    flexDirection: "column", 
    WebkitFontSmoothing: "antialiased",
    margin: "auto",
    transition: "all 0.3s ease"
  }}>
    <StatusBar hasAlert={hasAlert} />
    <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden", WebkitOverflowScrolling: "touch", position: "relative" }}>
      {children}
    </div>
    {overlay}
    {footer}
    <HomeIndicator />
  </div>
);

const NavBar = ({ title, large, showBack, onBack, right }) => (
  <>
    {showBack && (
      <div style={{ padding: "0 6px", height: 44, display: "flex", alignItems: "center" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: C.primary, fontSize: 17, cursor: "pointer", padding: "8px 10px", display: "flex", alignItems: "center", gap: 4, fontFamily: font }}>
          <svg width="10" height="18" viewBox="0 0 10 18"><path d="M9 1L1 9L9 17" stroke={C.primary} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back
        </button>
        <div style={{ flex: 1 }} />
        {right}
      </div>
    )}
    {large ? (
      <div style={{ padding: showBack ? "2px 20px 10px" : "8px 20px 10px" }}>
        <h1 style={{ fontSize: 34, fontWeight: 800, color: C.text, margin: 0, letterSpacing: -0.8, lineHeight: 1.1 }}>{title}</h1>
      </div>
    ) : (
      !showBack ? (
        <div style={{ padding: "10px 20px 14px", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: -0.4 }}>{title}</span>
          {right}
        </div>
      ) : (
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 12 }}>
          <span style={{ fontSize: 17, fontWeight: 600, color: C.text }}>{title}</span>
        </div>
      )
    )}
  </>
);

const TabBar = ({ tabs, active, onSelect }) => (
  <div style={{ height: 52, background: "rgba(249,249,249,0.94)", backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)", borderTop: `0.33px solid ${C.border}`, display: "flex", justifyContent: "space-around", alignItems: "center", zIndex: 20 }}>
    {tabs.map(t => (
      <button key={t.id} onClick={() => onSelect(t.id)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: active === t.id ? C.primary : C.text3, padding: "4px 0", minWidth: 56, outline: "none" }}>
        <Icon name={t.iconName} size={22} color={active === t.id ? C.primary : C.text3} />
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: 0.1 }}>{t.label}</span>
      </button>
    ))}
  </div>
);

const Card = ({ children, style, onClick, active }) => (
  <div 
    onClick={onClick}
    style={{ 
      background: C.card, 
      borderRadius: 24, // More rounded modern iOS feel
      padding: 18, 
      boxShadow: active ? `0 12px 30px -4px ${C.primary}30` : C.shadow,
      border: `0.5px solid ${active ? C.primary : C.border}`,
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: onClick ? "pointer" : "default",
      ...style 
  }}>{children}</div>
);

const Section = ({ title, action, style }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "22px 20px 8px", ...style }}>
    <span style={{ fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: -0.4 }}>{title}</span>
    {action && <button onClick={action.fn} style={{ background: "none", border: "none", color: C.primary, fontSize: 15, cursor: "pointer", fontWeight: 500, fontFamily: font }}>{action.label}</button>}
  </div>
);

const Row = ({ icon, iconName, title, sub, right, rightColor, badge, chevron, onClick, last }) => (
  <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", background: "transparent", border: "none", borderBottom: last ? "none" : `0.33px solid ${C.sep}`, width: "100%", cursor: onClick ? "pointer" : "default", textAlign: "left", fontFamily: font }}>
    {iconName ? <Icon name={iconName} size={20} color={C.primary} /> : (icon && <span style={{ fontSize: 20, width: 30, textAlign: "center", flexShrink: 0 }}>{icon}</span>)}
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 16, fontWeight: 400, color: C.text, lineHeight: 1.3 }}>{title}</div>
      {sub && <div style={{ fontSize: 13, color: C.text3, marginTop: 1, lineHeight: 1.3 }}>{sub}</div>}
    </div>
    {badge && <span style={{ background: C.red, color: "#fff", fontSize: 12, fontWeight: 700, borderRadius: 10, padding: "2px 7px", minWidth: 18, textAlign: "center" }}>{badge}</span>}
    {right && <span style={{ fontSize: 15, fontWeight: 500, color: rightColor || C.text3, flexShrink: 0 }}>{right}</span>}
    {(chevron || onClick) && <svg width="7" height="13" viewBox="0 0 7 13" style={{ flexShrink: 0, opacity: 0.3 }}><path d="M1 1L6 6.5L1 12" stroke="#3C3C43" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
  </button>
);

const MiniChart = ({ data, color, h = 48, fill }) => {
  const max = Math.max(...data), min = Math.min(...data), range = max - min || 1;
  const step = 100 / (data.length - 1);
  
  // Create a smoother path using a simple Bezier curve approximation or just better segments
  const pts = data.map((v, i) => {
    const x = i * step;
    const y = h - ((v - min) / range) * (h - 8) - 4;
    return `${x},${y}`;
  }).join(" ");
  
  const fillPts = `0,${h} ${pts} 100,${h}`;
  
  return (
    <div style={{ position: "relative", height: h }}>
      <svg width="100%" height={h} viewBox={`0 0 100 ${h}`} preserveAspectRatio="none" style={{ display: "block", overflow: "visible" }}>
        <defs>
          <linearGradient id={`grad-${color.replace('#','')}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.2" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {fill && <polyline points={fillPts} fill={`url(#grad-${color.replace('#','')})`} />}
        <polyline 
          points={pts} 
          fill="none" 
          stroke={color} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          vectorEffect="non-scaling-stroke" 
          style={{ transition: "all 0.6s ease-in-out" }}
        />
      </svg>
    </div>
  );
};

const Pill = ({ label, active, onClick, color }) => (
  <button onClick={onClick} style={{ padding: "7px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600, border: active ? `2px solid ${color || C.primary}` : `1.5px solid ${C.grayBg}`, background: active ? (color ? `${color}15` : C.primaryLight) : "transparent", color: active ? (color || C.primary) : C.text2, cursor: "pointer", fontFamily: font, whiteSpace: "nowrap" }}>{label}</button>
);

const SegmentedControl = ({ items, active, onChange }) => (
  <div style={{ display: "flex", gap: 0, background: C.grayFill, borderRadius: 9, padding: 2, margin: "0 20px" }}>
    {items.map((t, i) => (
      <button key={t} onClick={() => onChange(i)} style={{ flex: 1, padding: "7px 0", borderRadius: 7, border: "none", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font, background: active === i ? C.card : "transparent", color: active === i ? C.text : C.text3, boxShadow: active === i ? "0 1px 4px rgba(0,0,0,0.08)" : "none", transition: "all 0.2s" }}>{t}</button>
    ))}
  </div>
);

const StatBox = ({ value, label, color, iconName }) => (
  <div style={{ flex: 1, background: C.card, borderRadius: 14, padding: "14px 12px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
    {iconName && <div style={{ marginBottom: 6 }}><Icon name={iconName} size={18} color={color || C.text3} /></div>}
    <div style={{ fontSize: 26, fontWeight: 800, color: color || C.text, letterSpacing: -0.5, lineHeight: 1 }}>{value}</div>
    <div style={{ fontSize: 11, color: C.text3, marginTop: 5, fontWeight: 600, letterSpacing: 0.2, textTransform: "uppercase" }}>{label}</div>
  </div>
);

const BarChart = ({ items }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
    {items.map(({ label, value, pct, color }) => (
      <div key={label}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 500, marginBottom: 5 }}>
          <span style={{ color: C.text }}>{label}</span>
          <span style={{ color: C.text3 }}>{value ?? `${pct}%`}</span>
        </div>
        <div style={{ height: 8, background: C.grayFill, borderRadius: 4, overflow: "hidden" }}>
          <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 4, transition: "width 0.6s ease" }} />
        </div>
      </div>
    ))}
  </div>
);

const AlertBanner = ({ iconName, color, bg, title, message }) => (
  <div style={{ margin: "0 20px 14px", padding: "13px 14px", background: bg, borderRadius: 14, display: "flex", alignItems: "flex-start", gap: 10, border: `1px solid ${color}20` }}>
    {iconName && <div style={{ flexShrink: 0, marginTop: 2 }}><Icon name={iconName} size={20} color={color} /></div>}
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 14, fontWeight: 600, color }}>{title}</div>
      <div style={{ fontSize: 13, color: C.text2, marginTop: 2, lineHeight: 1.4 }}>{message}</div>
    </div>
  </div>
);

// ─── BODY MAP ──────────────────────────────────────────────
const bodyParts = [
  { id: "head", label: "Head/Neck", cx: 50, cy: 10 },
  { id: "l_shoulder", label: "L Shoulder", cx: 30, cy: 24 },
  { id: "r_shoulder", label: "R Shoulder", cx: 70, cy: 24 },
  { id: "upper_back", label: "Upper Back", cx: 50, cy: 30 },
  { id: "l_arm", label: "L Arm", cx: 18, cy: 38 },
  { id: "r_arm", label: "R Arm", cx: 82, cy: 38 },
  { id: "lower_back", label: "Lower Back", cx: 50, cy: 44 },
  { id: "l_wrist", label: "L Wrist", cx: 13, cy: 54 },
  { id: "r_wrist", label: "R Wrist", cx: 87, cy: 54 },
  { id: "hip", label: "Hip", cx: 50, cy: 58 },
  { id: "l_knee", label: "L Knee", cx: 38, cy: 74 },
  { id: "r_knee", label: "R Knee", cx: 62, cy: 74 },
  { id: "l_ankle", label: "L Ankle", cx: 38, cy: 90 },
  { id: "r_ankle", label: "R Ankle", cx: 62, cy: 90 },
];

const BodyMap = ({ selected, onToggle }) => (
  <Card style={{ margin: "0 20px" }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: C.text3, letterSpacing: 0.8, marginBottom: 10, textTransform: "uppercase" }}>Tap Affected Areas</div>
    <svg viewBox="0 0 100 100" style={{ width: "100%", height: 260, display: "block", overflow: "visible" }}>
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {/* Simplified body silhouette with smoother curves */}
      <ellipse cx="50" cy="10" rx="9" ry="10" fill="#E8E8ED" />
      <path d="M35 22 Q35 18 42 18 L58 18 Q65 18 65 22 L67 36 Q67 40 50 40 Q33 40 33 36 Z" fill="#E8E8ED" />
      <rect x="12" y="24" width="10" height="34" rx="5" fill="#E8E8ED" />
      <rect x="78" y="24" width="10" height="34" rx="5" fill="#E8E8ED" />
      <rect x="35" y="40" width="30" height="25" rx="4" fill="#E8E8ED" />
      <rect x="34" y="66" width="12" height="26" rx="6" fill="#E8E8ED" />
      <rect x="54" y="66" width="12" height="26" rx="6" fill="#E8E8ED" />
      
      {bodyParts.map(p => {
        const on = selected.includes(p.id);
        return (
          <g key={p.id} onClick={() => onToggle(p.id)} style={{ cursor: "pointer" }}>
            <circle cx={p.cx} cy={p.cy} r="10" fill="transparent" /> 
            <circle cx={p.cx} cy={p.cy} r="5" fill={on ? C.red : "#D1D1D6"} stroke="#fff" strokeWidth="2" filter={on ? "url(#glow)" : "none"}>
              {on && <animate attributeName="r" values="4.5;6;4.5" dur="1.2s" repeatCount="indefinite"/>}
            </circle>
          </g>
        );
      })}
    </svg>
    {selected.length > 0 && (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
        {selected.map(id => (
          <span key={id} style={{ background: C.redLight, color: C.red, fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 20 }}>
            {bodyParts.find(p => p.id === id)?.label}
          </span>
        ))}
      </div>
    )}
  </Card>
);

// ─── SCREENS ───────────────────────────────────────────────

// ROLE SELECTION
const RoleSelect = ({ onPick }) => (
  <div style={{ padding: "30px 20px 20px" }}>
    <div style={{ textAlign: "center", marginBottom: 36 }}>
      <div style={{ width: 80, height: 80, borderRadius: 22, background: "linear-gradient(145deg, #0A84FF, #5E5CE6)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", boxShadow: "0 8px 24px rgba(10,132,255,0.3)" }}>
        <span style={{ fontSize: 40 }}>🛡️</span>
      </div>
      <h1 style={{ fontSize: 34, fontWeight: 800, color: C.text, margin: 0, letterSpacing: -1 }}>SafeShift</h1>
      <p style={{ fontSize: 15, color: C.text3, margin: "6px 0 0" }}>Manufacturing Worker Safety Platform</p>
    </div>
    <div style={{ fontSize: 12, fontWeight: 700, color: C.text3, letterSpacing: 0.8, marginBottom: 10, paddingLeft: 4, textTransform: "uppercase" }}>Select Your Role</div>
    {[
      { role: "worker", iconName: "worker", title: "Worker", desc: "Log symptoms, track vitals, view your health data", gradient: "linear-gradient(135deg, #0A84FF08, #0A84FF05)" },
      { role: "supervisor", iconName: "journal", title: "Line Supervisor", desc: "Monitor team health, review shift reports", gradient: "linear-gradient(135deg, #AF52DE08, #AF52DE05)" },
      { role: "safety", iconName: "shield", title: "Safety Officer", desc: "Analyze plant trends, manage incidents", gradient: "linear-gradient(135deg, #34C75908, #34C75905)" },
    ].map(r => (
      <button key={r.role} onClick={() => onPick(r.role)} style={{ display: "flex", alignItems: "center", gap: 16, width: "100%", padding: "20px 18px", marginBottom: 12, background: C.card, border: `0.5px solid ${C.border}`, borderRadius: 24, cursor: "pointer", textAlign: "left", fontFamily: font, boxShadow: C.shadow }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: r.gradient, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon name={r.iconName} size={28} color={C.primary} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: C.text, letterSpacing: -0.2 }}>{r.title}</div>
          <div style={{ fontSize: 13, color: C.text3, marginTop: 3, lineHeight: 1.4 }}>{r.desc}</div>
        </div>
        <Icon name="chevronRight" size={20} color={C.text3} />
      </button>
    ))}
    <Card style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12, border: `1px solid ${C.sep}` }}>
      <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg, #30D158, #0A84FF)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon name="vitals" size={22} color="#fff" />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: C.text }}>SafeShift Band v2.1</div>
        <div style={{ fontSize: 13, color: C.text3 }}>Connected · Last sync 2m ago</div>
      </div>
      <div style={{ width: 10, height: 10, borderRadius: 5, background: C.green, flexShrink: 0, boxShadow: "0 0 6px rgba(48,209,88,0.5)" }} />
    </Card>
  </div>
);

// WORKER HOME
const WorkerHome = ({ go }) => {
  const [time, setTime] = React.useState("4h 23m");
  return (
    <div style={{ paddingBottom: 70 }}>
      <NavBar title="Good Morning, Ajith" large />
      <div style={{ padding: "0 20px 2px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: C.text3 }}>Shift A · Assembly Line 3</span>
        <span style={{ width: 4, height: 4, borderRadius: 2, background: C.text3, opacity: 0.4 }} />
        <span style={{ fontSize: 13, fontWeight: 600, color: C.green }}>{time} remaining</span>
      </div>

      <AlertBanner iconName="posture" color={C.orange} bg={C.orangeLight} title="Posture Alert" message="Forward lean detected for 18 min at Station 7. Consider a stretch break." />

      <Section title="Live Vitals" action={{ label: "See More", fn: () => go("vitals") }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: "0 20px" }}>
        <Card>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <Icon name="heart" size={16} color={C.red} />
            <span style={{ fontSize: 12, fontWeight: 600, color: C.text3, textTransform: "uppercase", letterSpacing: 0.5 }}>Heart Rate</span>
          </div>
          <div style={{ fontSize: 34, fontWeight: 800, color: C.red, letterSpacing: -1, lineHeight: 1 }}>78</div>
          <div style={{ fontSize: 13, color: C.text3, marginTop: 2 }}>bpm · Resting</div>
          <div style={{ marginTop: 10 }}><MiniChart data={[72,74,78,82,76,74,79,85,80,77,75,78]} color={C.red} fill="rgba(255,69,58,0.06)" h={32}/></div>
        </Card>
        <Card>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <Icon name="temp" size={16} color={C.orange} />
            <span style={{ fontSize: 12, fontWeight: 600, color: C.text3, textTransform: "uppercase", letterSpacing: 0.5 }}>Skin Temp</span>
          </div>
          <div style={{ fontSize: 34, fontWeight: 800, color: C.orange, letterSpacing: -1, lineHeight: 1 }}>36.4</div>
          <div style={{ fontSize: 13, color: C.text3, marginTop: 2 }}>°C · Normal</div>
          <div style={{ marginTop: 10 }}><MiniChart data={[36.2,36.3,36.4,36.5,36.4,36.3,36.4,36.6,36.5,36.4]} color={C.orange} fill="rgba(255,159,10,0.06)" h={32}/></div>
        </Card>
        <Card>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <Icon name="battery" size={16} color={C.green} />
            <span style={{ fontSize: 12, fontWeight: 600, color: C.text3, textTransform: "uppercase", letterSpacing: 0.5 }}>Fatigue Index</span>
          </div>
          <div style={{ fontSize: 34, fontWeight: 800, color: C.green, letterSpacing: -1, lineHeight: 1 }}>Low</div>
          <div style={{ fontSize: 13, color: C.text3, marginTop: 2 }}>HRV: 62ms</div>
          <div style={{ marginTop: 10 }}><MiniChart data={[20,22,25,28,24,26,30,32,28,26]} color={C.green} fill="rgba(48,209,88,0.06)" h={32}/></div>
        </Card>
        <Card>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <Icon name="posture" size={16} color={C.orange} />
            <span style={{ fontSize: 12, fontWeight: 600, color: C.text3, textTransform: "uppercase", letterSpacing: 0.5 }}>Posture</span>
          </div>
          <div style={{ fontSize: 34, fontWeight: 800, color: C.orange, letterSpacing: -1, lineHeight: 1 }}>Fair</div>
          <div style={{ fontSize: 13, color: C.text3, marginTop: 2 }}>3 alerts today</div>
          <div style={{ marginTop: 10, display: "flex", gap: 3 }}>
            {[1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1].map((v,i) => (
              <div key={i} style={{ flex: 1, height: 20, borderRadius: 2, background: v ? C.green : C.orange, opacity: 0.6 + v * 0.4 }} />
            ))}
          </div>
        </Card>
      </div>

      <Section title="Quick Actions" />
      <div style={{ padding: "0 20px" }}>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <Row iconName="log" title="Log Symptom" sub="Record pain or discomfort" onClick={() => go("log")} />
          <Row iconName="journal" title="Shift Journal" sub="3 entries today" onClick={() => go("journal")} />
          <Row iconName="history" title="My History" sub="7-day pain trends" onClick={() => go("history")} />
          <Row iconName="stretch" title="Stretch Guide" sub="Recommended: lower back routine" onClick={() => go("stretch")} />
          <Row iconName="emergency" title="Report Injury" sub="Alert safety team immediately" onClick={() => go("report")} last />
        </Card>
      </div>

      <Section title="Today's Summary" />
      <div style={{ padding: "0 20px", display: "flex", gap: 10 }}>
        <StatBox value="2" label="Symptoms" color={C.orange} iconName="log" />
        <StatBox value="7.2k" label="Steps" color={C.primary} iconName="worker" />
        <StatBox value="94%" label="Good Posture" color={C.green} iconName="posture" />
      </div>
    </div>
  );
};

// LOG SYMPTOM
const LogSymptom = ({ onBack }) => {
  const [parts, setParts] = React.useState(["lower_back"]);
  const [pain, setPain] = React.useState(4);
  const [activity, setActivity] = React.useState("Repetitive Motion");
  const [notes, setNotes] = React.useState("");
  const [saved, setSaved] = React.useState(false);
  const toggle = id => setParts(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  const activities = ["Lifting", "Standing", "Bending", "Repetitive Motion", "Walking", "Sitting", "Overhead Reach", "Carrying"];

  if (saved) return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80%", padding: 40, textAlign: "center" }}>
      <div style={{ width: 80, height: 80, borderRadius: 40, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
        <Icon name="check" size={40} color={C.green} />
      </div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: C.text, margin: "0 0 8px" }}>Entry Saved</h2>
      <p style={{ fontSize: 15, color: C.text3, lineHeight: 1.5, margin: 0 }}>Your symptom has been logged for Shift A at 10:14 AM. Your supervisor has been notified.</p>
      <button onClick={() => { setSaved(false); onBack(); }} style={{ marginTop: 28, padding: "15px 48px", background: C.primary, color: "#fff", border: "none", borderRadius: 14, fontSize: 17, fontWeight: 600, cursor: "pointer", fontFamily: font }}>Done</button>
    </div>
  );

  return (
    <div style={{ paddingBottom: 20 }}>
      <NavBar showBack onBack={onBack} right={<button onClick={() => setSaved(true)} style={{ background: "none", border: "none", color: C.primary, fontSize: 17, fontWeight: 600, cursor: "pointer", fontFamily: font, padding: "8px 10px" }}>Save</button>} />
      <NavBar title="Log Symptom" large />
      <div style={{ padding: "4px 20px 14px" }}>
        <span style={{ fontSize: 13, fontWeight: 600, background: C.primaryLight, color: C.primary, padding: "5px 12px", borderRadius: 20 }}>Shift A · March 11, 2026 · 10:14 AM</span>
      </div>
      <BodyMap selected={parts} onToggle={toggle} />
      {/* Pain Slider */}
      <div style={{ padding: "14px 20px 0" }}>
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.text3, letterSpacing: 0.8, textTransform: "uppercase" }}>Pain Intensity</span>
            <span style={{ fontSize: 28, fontWeight: 800, color: pain <= 3 ? C.green : pain <= 6 ? C.orange : C.red }}>{pain}<span style={{ fontSize: 16, color: C.text3 }}>/10</span></span>
          </div>
          <input type="range" min="0" max="10" value={pain} onChange={e => setPain(+e.target.value)} style={{ width: "100%", accentColor: pain <= 3 ? C.green : pain <= 6 ? C.orange : C.red, height: 6 }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.text3, marginTop: 6 }}>
            <span>😊 No Pain</span><span>😐 Moderate</span><span>😣 Severe</span>
          </div>
        </Card>
      </div>
      {/* Activity */}
      <div style={{ padding: "10px 20px 0" }}>
        <Card>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.text3, letterSpacing: 0.8, marginBottom: 10, textTransform: "uppercase" }}>Activity When Pain Started</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {activities.map(a => <Pill key={a} label={a} active={activity === a} onClick={() => setActivity(a)} color={C.primary} />)}
          </div>
        </Card>
      </div>
      {/* Notes */}
      <div style={{ padding: "10px 20px 0" }}>
        <Card>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.text3, letterSpacing: 0.8, marginBottom: 8, textTransform: "uppercase" }}>Notes</div>
          <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Describe your symptoms, what made it better or worse..." style={{ width: "100%", minHeight: 80, border: "none", fontSize: 15, color: C.text, resize: "none", outline: "none", fontFamily: font, background: "transparent", lineHeight: 1.5, boxSizing: "border-box" }} />
        </Card>
      </div>
      {/* Wearable snapshot */}
      <div style={{ padding: "10px 20px 0" }}>
        <Card style={{ background: "linear-gradient(135deg, rgba(10,132,255,0.06), rgba(191,90,242,0.06))", border: `1px solid ${C.sep}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.text3, letterSpacing: 0.8, marginBottom: 10, textTransform: "uppercase" }}>⌚ Auto-captured Wearable Data</div>
          <div style={{ display: "flex", gap: 16, fontSize: 13 }}>
            <div><span style={{ color: C.text3 }}>HR:</span> <span style={{ fontWeight: 600 }}>82 bpm</span></div>
            <div><span style={{ color: C.text3 }}>Temp:</span> <span style={{ fontWeight: 600 }}>36.5°C</span></div>
            <div><span style={{ color: C.text3 }}>HRV:</span> <span style={{ fontWeight: 600 }}>58ms</span></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// SHIFT JOURNAL
const Journal = ({ onBack }) => {
  const [seg, setSeg] = React.useState(0);
  const entries = [
    { time: "10:14 AM", type: "Symptom", color: C.orange, pain: 4, area: "Lower Back", act: "Repetitive Motion", note: "Mild discomfort after 2 hours on station. Wearable showed elevated HR." },
    { time: "9:45 AM", type: "Stretch Break", color: C.green, pain: null, area: null, act: null, note: "Completed 5-min lower back stretch routine. Pain reduced from 3 to 1." },
    { time: "8:30 AM", type: "Posture Alert", color: C.red, pain: null, area: null, act: null, note: "Forward lean >15 min detected by wearable sensor at Station 7." },
    { time: "7:15 AM", type: "Symptom", color: C.orange, pain: 2, area: "R Shoulder", act: "Lifting", note: "Slight tightness after loading parts onto conveyor." },
    { time: "6:15 AM", type: "Shift Start", color: C.primary, pain: 1, area: null, act: "Check-in", note: "Feeling good. Slept 7 hrs. Pre-shift stretch completed." },
  ];
  return (
    <div style={{ paddingBottom: 20 }}>
      <NavBar showBack onBack={onBack} />
      <NavBar title="Shift Journal" large />
      <SegmentedControl items={["Today", "This Week", "Month"]} active={seg} onChange={setSeg} />
      <div style={{ padding: "14px 20px" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.text3, letterSpacing: 0.8, marginBottom: 12, textTransform: "uppercase" }}>March 11, 2026 · Shift A · Assembly Line 3</div>
        {entries.map((e, i) => (
          <div key={i} style={{ display: "flex", gap: 12, marginBottom: i < entries.length - 1 ? 0 : 0 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20, flexShrink: 0 }}>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: e.color, flexShrink: 0, boxShadow: `0 0 6px ${e.color}40` }} />
              {i < entries.length - 1 && <div style={{ width: 2, flex: 1, background: C.grayBg, margin: "4px 0" }} />}
            </div>
            <Card style={{ flex: 1, marginBottom: 10, border: `1px solid ${C.sep}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: C.text }}>{e.type}</span>
                <span style={{ fontSize: 13, color: C.text3, fontWeight: 500 }}>{e.time}</span>
              </div>
              {e.pain !== null && (
                <div style={{ fontSize: 13, color: C.text2, marginBottom: 4 }}>
                  Pain: <span style={{ fontWeight: 700, color: e.pain <= 3 ? C.green : C.orange }}>{e.pain}/10</span>
                  {e.area && <> · {e.area}</>}
                  {e.act && e.act !== "Check-in" && <> · {e.act}</>}
                </div>
              )}
              <div style={{ fontSize: 14, color: C.text2, lineHeight: 1.45 }}>{e.note}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

// PAIN HISTORY
const History = ({ onBack }) => (
  <div style={{ paddingBottom: 20 }}>
    <NavBar showBack onBack={onBack} />
    <NavBar title="Pain History" large />
    <div style={{ padding: "0 20px" }}>
      <Card style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.text3, letterSpacing: 0.8, textTransform: "uppercase" }}>7-Day Average</div>
            <div style={{ fontSize: 42, fontWeight: 800, color: C.orange, letterSpacing: -1.5, lineHeight: 1, marginTop: 4 }}>3.2<span style={{ fontSize: 20, color: C.text3 }}>/10</span></div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.green }}>↓ 18%</div>
            <div style={{ fontSize: 12, color: C.text3 }}>vs. last week</div>
          </div>
        </div>
        <MiniChart data={[4,3.5,4.2,3.8,3,3.5,2.8,3.2,4,3,2.5,3,3.5,2.8]} color={C.orange} fill="rgba(255,159,10,0.08)" h={70} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.text3, marginTop: 8, fontWeight: 500 }}>
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
      </Card>
      <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
        <StatBox value="18" label="Entries" color={C.primary} iconName="log" />
        <StatBox value="4" label="Alerts" color={C.orange} iconName="alert" />
        <StatBox value="3" label="Stretches" color={C.green} iconName="stretch" />
      </div>
      <Card style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.text3, letterSpacing: 0.8, marginBottom: 14, textTransform: "uppercase" }}>Most Affected Areas</div>
        <BarChart items={[
          { label: "Lower Back", pct: 45, color: C.red },
          { label: "Right Shoulder", pct: 28, color: C.orange },
          { label: "Right Wrist", pct: 18, color: C.yellow },
          { label: "Knees", pct: 9, color: C.green },
        ]} />
      </Card>
      <Card>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.text3, letterSpacing: 0.8, marginBottom: 14, textTransform: "uppercase" }}>Pain by Activity Type</div>
        <BarChart items={[
          { label: "Repetitive Motion", pct: 38, value: "Avg 4.2", color: C.red },
          { label: "Lifting", pct: 30, value: "Avg 3.8", color: C.orange },
          { label: "Standing", pct: 20, value: "Avg 2.5", color: C.yellow },
          { label: "Bending", pct: 12, value: "Avg 2.1", color: C.green },
        ]} />
      </Card>
    </div>
  </div>
);

// VITALS DETAIL
const Vitals = ({ onBack }) => (
  <div style={{ paddingBottom: 20 }}>
    <NavBar showBack onBack={onBack} />
    <NavBar title="Wearable Vitals" large />
    <AlertBanner iconName="vitals" color={C.primary} bg={C.primaryLight} title="SafeShift Band v2.1" message="All sensors active. Battery: 72%. Last calibration: 2 days ago." />
    <div style={{ padding: "0 20px" }}>
      {[
        { label: "Heart Rate", val: "78 bpm", data: [72,74,78,82,76,74,79,85,80,77,75,78,74,76,78], color: C.red, status: "Resting zone", detail: "Min: 68 · Max: 92 · Avg: 77" },
        { label: "HRV (Heart Rate Variability)", val: "62 ms", data: [55,58,62,60,65,63,62,58,60,64,62,66,63,61,62], color: C.purple, status: "Good recovery", detail: "Indicates low fatigue level" },
        { label: "Skin Temperature", val: "36.4°C", data: [36.2,36.3,36.4,36.5,36.4,36.3,36.4,36.6,36.5,36.4,36.3,36.4], color: C.orange, status: "Normal range", detail: "Baseline: 36.3°C · No heat stress detected" },
        { label: "Posture Score", val: "78/100", data: [85,82,78,75,80,72,68,74,80,82,78,75], color: C.teal, status: "Fair, 3 alerts", detail: "Good: 78% · Fair: 18% · Poor: 4%" },
      ].map(m => (
        <Card key={m.label} style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.text3, letterSpacing: 0.6, textTransform: "uppercase" }}>{m.label}</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: m.color, letterSpacing: -1, marginTop: 4 }}>{m.val}</div>
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: m.color, background: `${m.color}15`, padding: "4px 10px", borderRadius: 20, marginTop: 2 }}>{m.status}</span>
          </div>
          <div style={{ margin: "12px 0 6px" }}><MiniChart data={m.data} color={m.color} fill={`${m.color}10`} h={50} /></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.text3 }}>
            <span>6:00 AM</span><span>8:00 AM</span><span>10:00 AM</span>
          </div>
          <div style={{ fontSize: 13, color: C.text3, marginTop: 8, paddingTop: 8, borderTop: `0.33px solid ${C.sep}` }}>{m.detail}</div>
        </Card>
      ))}
    </div>
  </div>
);

// STRETCH GUIDE
const Stretch = ({ onBack }) => {
  const [active, setActive] = React.useState(0);
  const stretches = [
    { name: "Cat-Cow Stretch", target: "Lower Back", dur: "30 sec", reps: "5 reps", desc: "On hands and knees, alternate between arching and rounding your back. Breathe deeply with each movement.", icon: "🐱" },
    { name: "Standing Hamstring Stretch", target: "Lower Back / Legs", dur: "20 sec each", reps: "3 per side", desc: "Place one foot on a low surface. Keep your back straight and lean forward from the hips until you feel a gentle stretch.", icon: "🦵" },
    { name: "Shoulder Rolls", target: "Shoulders / Neck", dur: "15 sec", reps: "10 each direction", desc: "Roll shoulders forward in large circles, then reverse. Keep movements slow and controlled.", icon: "💪" },
    { name: "Wrist Flexor Stretch", target: "Wrists / Forearms", dur: "20 sec each", reps: "3 per hand", desc: "Extend one arm, palm up. Gently press fingers down with the other hand until you feel a stretch in your forearm.", icon: "✋" },
    { name: "Neck Tilts", target: "Neck / Upper Traps", dur: "15 sec each", reps: "3 per side", desc: "Tilt your head slowly toward one shoulder. Use your hand to apply gentle pressure for a deeper stretch.", icon: "🧘" },
  ];
  return (
    <div style={{ paddingBottom: 20 }}>
      <NavBar showBack onBack={onBack} />
      <NavBar title="Stretch Guide" large />
      <AlertBanner iconName="log" color={C.green} bg={C.greenLight} title="Recommended for You" message="Based on your lower back symptoms and posture alerts, we suggest these stretches." />
      <div style={{ padding: "0 20px" }}>
        {stretches.map((s, i) => (
          <Card key={i} style={{ marginBottom: 10, border: active === i ? `2px solid ${C.green}` : `1px solid ${C.sep}`, cursor: "pointer" }} onClick={() => setActive(i)}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{s.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: C.text }}>{s.name}</div>
                <div style={{ fontSize: 13, color: C.text3, marginTop: 2 }}>{s.target} · {s.dur} · {s.reps}</div>
                {active === i && <div style={{ fontSize: 14, color: C.text2, marginTop: 8, lineHeight: 1.5, paddingTop: 8, borderTop: `0.33px solid ${C.sep}` }}>{s.desc}</div>}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// SUPERVISOR
const Supervisor = () => {
  const workers = [
    { name: "A. Srikanth", station: "Stn 3", pain: 1, fatigue: "Low", status: "green", hr: 78 },
    { name: "R. Kumar", station: "Stn 7", pain: 7, fatigue: "High", status: "red", hr: 96 },
    { name: "S. Patel", station: "Stn 2", pain: 3, fatigue: "Med", status: "yellow", hr: 84 },
    { name: "P. Sharma", station: "Stn 5", pain: 0, fatigue: "Low", status: "green", hr: 72 },
    { name: "M. Singh", station: "Stn 1", pain: 5, fatigue: "Med", status: "yellow", hr: 88 },
    { name: "D. Verma", station: "Stn 4", pain: 1, fatigue: "Low", status: "green", hr: 74 },
    { name: "K. Reddy", station: "Stn 6", pain: 0, fatigue: "Low", status: "green", hr: 70 },
    { name: "N. Gupta", station: "Stn 8", pain: 2, fatigue: "Low", status: "green", hr: 76 },
  ];
  const sc = { green: C.green, yellow: C.orange, red: C.red };
  return (
    <div style={{ paddingBottom: 20 }}>
      <NavBar title="Team Health" large />
      <div style={{ padding: "0 20px 6px" }}>
        <span style={{ fontSize: 15, color: C.text3 }}>Assembly Line 3 · Shift A · 8 Workers</span>
      </div>
      <div style={{ display: "flex", gap: 8, padding: "0 20px", marginBottom: 4 }}>
        <StatBox value="5" label="Healthy" color={C.green} />
        <StatBox value="2" label="At Risk" color={C.orange} />
        <StatBox value="1" label="Alert" color={C.red} />
      </div>

      <Section title="Active Alerts" />
      <div style={{ padding: "0 20px" }}>
        {[
          { iconName: "alert", color: C.red, name: "R. Kumar", msg: "Pain 7/10 (lower back) + high fatigue. HR: 96 bpm.", time: "3m ago" },
          { iconName: "alert", color: C.orange, name: "M. Singh", msg: "Recurring wrist pain, 5th entry this week. Consider rotation.", time: "28m" },
          { iconName: "posture", color: C.orange, name: "S. Patel", msg: "3 posture alerts in 2 hours at Station 2.", time: "45m" },
        ].map((a, i) => (
          <Card key={i} style={{ marginBottom: 8, borderLeft: `4px solid ${a.color}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Icon name={a.iconName} size={16} color={a.color} />
                <span style={{ fontSize: 15, fontWeight: 600 }}>{a.name}</span>
              </div>
              <span style={{ fontSize: 12, color: C.text3 }}>{a.time}</span>
            </div>
            <div style={{ fontSize: 14, color: C.text2, lineHeight: 1.4 }}>{a.msg}</div>
          </Card>
        ))}
      </div>

      <Section title="Team Fatigue Trend" />
      <div style={{ padding: "0 20px" }}>
        <Card>
          <MiniChart data={[20,22,28,35,32,38,45,50,48,55,52,58]} color={C.orange} fill="rgba(255,159,10,0.08)" h={55} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.text3, marginTop: 8 }}>
            <span>6 AM</span><span>8 AM</span><span>10 AM</span><span>Now</span>
          </div>
          <div style={{ marginTop: 10, padding: "10px 12px", background: C.orangeLight, borderRadius: 10, fontSize: 13, color: C.orange, fontWeight: 500 }}>
            💡 Fatigue trending up. Recommend scheduling a team break at 10:30 AM.
          </div>
        </Card>
      </div>

      <Section title="All Workers" />
      <div style={{ padding: "0 20px" }}>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          {workers.map((w, i) => (
            <Row key={w.name}
              icon={<div style={{ width: 10, height: 10, borderRadius: 5, background: sc[w.status] }} />}
              title={w.name}
              sub={`${w.station} · Pain: ${w.pain}/10 · Fatigue: ${w.fatigue} · HR: ${w.hr}`}
              last={i === workers.length - 1}
            />
          ))}
        </Card>
      </div>
    </div>
  );
};

// SAFETY OFFICER
const Safety = () => (
  <div style={{ paddingBottom: 20 }}>
    <NavBar title="Safety Dashboard" large />
    <div style={{ padding: "0 20px 8px" }}><span style={{ fontSize: 15, color: C.text3 }}>Plant Overview · March 2026</span></div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, padding: "0 20px" }}>
      <Card>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.text3, letterSpacing: 0.6, textTransform: "uppercase" }}>Incidents MTD</div>
        <div style={{ fontSize: 36, fontWeight: 800, color: C.green, letterSpacing: -1, marginTop: 4 }}>2</div>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.green }}>↓ 60% vs Feb</div>
      </Card>
      <Card>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.text3, letterSpacing: 0.6, textTransform: "uppercase" }}>Days Injury-Free</div>
        <div style={{ fontSize: 36, fontWeight: 800, color: C.primary, letterSpacing: -1, marginTop: 4 }}>18</div>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.primary }}>Target: 30</div>
      </Card>
      <Card>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.text3, letterSpacing: 0.6, textTransform: "uppercase" }}>Avg Pain Score</div>
        <div style={{ fontSize: 36, fontWeight: 800, color: C.orange, letterSpacing: -1, marginTop: 4 }}>2.8</div>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.orange }}>All production lines</div>
      </Card>
      <Card>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.text3, letterSpacing: 0.6, textTransform: "uppercase" }}>Wearable Compliance</div>
        <div style={{ fontSize: 36, fontWeight: 800, color: C.green, letterSpacing: -1, marginTop: 4 }}>94%</div>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.green }}>↑ 8% vs Feb</div>
      </Card>
    </div>

    <Section title="Ergonomic Hotspots" />
    <div style={{ padding: "0 20px" }}>
      <Card>
        {[
          { line: "Assembly Line 3", area: "Lower Back", reports: 23, risk: "High" },
          { line: "Weld Shop B", area: "Shoulders", reports: 18, risk: "Medium" },
          { line: "Paint Station 1", area: "Wrists", reports: 14, risk: "Medium" },
          { line: "Quality Check", area: "Eyes / Neck", reports: 8, risk: "Low" },
          { line: "Packing Bay", area: "Knees", reports: 5, risk: "Low" },
        ].map((h, i, a) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: i < a.length - 1 ? `0.33px solid ${C.sep}` : "none" }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 500, color: C.text }}>{h.line}</div>
              <div style={{ fontSize: 13, color: C.text3 }}>{h.area} · {h.reports} reports</div>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 20, background: h.risk === "High" ? C.redLight : h.risk === "Medium" ? C.orangeLight : C.greenLight, color: h.risk === "High" ? C.red : h.risk === "Medium" ? C.orange : C.green }}>{h.risk}</span>
          </div>
        ))}
      </Card>
    </div>

    <Section title="10-Month Pain Trend" />
    <div style={{ padding: "0 20px" }}>
      <Card>
        <MiniChart data={[4.2,3.8,3.5,3.9,3.2,3.0,2.8,3.1,2.9,2.8]} color={C.green} fill="rgba(48,209,88,0.08)" h={65} />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: C.text3, marginTop: 8, fontWeight: 500 }}>
          {["Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"].map(m => <span key={m}>{m}</span>)}
        </div>
        <div style={{ marginTop: 10, padding: "10px 12px", background: C.greenLight, borderRadius: 10, fontSize: 13, color: C.green, fontWeight: 500 }}>
          📉 Plant-wide pain scores down 33% since SafeShift wearable rollout in June 2025.
        </div>
      </Card>
    </div>

    <Section title="Line-by-Line Comparison" />
    <div style={{ padding: "0 20px" }}>
      <Card>
        <BarChart items={[
          { label: "Assembly Line 3", pct: 72, value: "3.6 avg", color: C.red },
          { label: "Weld Shop B", pct: 56, value: "2.8 avg", color: C.orange },
          { label: "Paint Station 1", pct: 44, value: "2.2 avg", color: C.yellow },
          { label: "Quality Check", pct: 30, value: "1.5 avg", color: C.green },
          { label: "Packing Bay", pct: 22, value: "1.1 avg", color: C.green },
        ]} />
      </Card>
    </div>

    <Section title="Recent Reports" />
    <div style={{ padding: "0 20px" }}>
      <Card style={{ padding: 0, overflow: "hidden" }}>
        <Row iconName="file" title="Weekly Safety Summary" sub="Mar 3 to Mar 9, 2026" right="PDF" rightColor={C.primary} />
        <Row iconName="history" title="Ergonomic Risk Assessment" sub="Assembly Line 3, Q1 2026" right="PDF" rightColor={C.primary} />
        <Row iconName="log" title="Incident Report #47" sub="Near-miss, Weld Shop B, Mar 6" right="Open" rightColor={C.primary} />
        <Row iconName="history" title="Wearable ROI Analysis" sub="6-month program evaluation" right="PDF" rightColor={C.primary} last />
      </Card>
    </div>
  </div>
);

// REPORT INJURY
const ReportInjury = ({ onBack }) => {
  const [sent, setSent] = React.useState(false);
  if (sent) return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80%", padding: 40, textAlign: "center" }}>
      <div style={{ width: 80, height: 80, borderRadius: 40, background: C.redLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
        <Icon name="alert" size={40} color={C.red} fill={C.redLight} />
      </div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: C.text, margin: "0 0 8px" }}>Report Submitted</h2>
      <p style={{ fontSize: 15, color: C.text3, lineHeight: 1.5, margin: 0 }}>Your injury report has been sent to the Safety Officer and your Line Supervisor. A safety team member will reach out within 15 minutes.</p>
      <button onClick={() => { setSent(false); onBack(); }} style={{ marginTop: 28, padding: "15px 48px", background: C.primary, color: "#fff", border: "none", borderRadius: 14, fontSize: 17, fontWeight: 600, cursor: "pointer", fontFamily: font }}>Done</button>
    </div>
  );
  return (
    <div style={{ paddingBottom: 20 }}>
      <NavBar showBack onBack={onBack} />
      <NavBar title="Report Injury" large />
      <AlertBanner iconName="emergency" color={C.red} bg={C.redLight} title="Emergency?" message="If this is a medical emergency, call 911 immediately. This form is for non-emergency injury reporting." />
      <div style={{ padding: "0 20px" }}>
        <Card style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.text3, letterSpacing: 0.8, marginBottom: 10, textTransform: "uppercase" }}>Injury Type</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Strain/Sprain", "Cut/Laceration", "Bruise/Contusion", "Burn", "Eye Injury", "Other"].map((t,i) => (
              <Pill key={t} label={t} active={i===0} color={C.red} />
            ))}
          </div>
        </Card>
        <Card style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.text3, letterSpacing: 0.8, marginBottom: 10, textTransform: "uppercase" }}>What Happened</div>
          <textarea placeholder="Describe what happened, where, and how..." style={{ width: "100%", minHeight: 80, border: "none", fontSize: 15, color: C.text, resize: "none", outline: "none", fontFamily: font, background: "transparent", lineHeight: 1.5, boxSizing: "border-box" }} />
        </Card>
        <Card style={{ marginBottom: 16, background: "linear-gradient(135deg, rgba(10,132,255,0.06), rgba(191,90,242,0.06))", border: `1px solid ${C.sep}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.text3, letterSpacing: 0.8, marginBottom: 8, textTransform: "uppercase" }}>⌚ Auto-attached Wearable Snapshot</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, fontSize: 13 }}>
            <div><span style={{ color: C.text3 }}>Time:</span> <span style={{ fontWeight: 600 }}>10:14 AM</span></div>
            <div><span style={{ color: C.text3 }}>HR:</span> <span style={{ fontWeight: 600, color: C.red }}>96 bpm</span></div>
            <div><span style={{ color: C.text3 }}>Station:</span> <span style={{ fontWeight: 600 }}>Stn 7</span></div>
            <div><span style={{ color: C.text3 }}>Posture:</span> <span style={{ fontWeight: 600, color: C.orange }}>Poor</span></div>
          </div>
        </Card>
        <button onClick={() => setSent(true)} style={{ width: "100%", padding: 16, background: C.red, color: "#fff", border: "none", borderRadius: 14, fontSize: 17, fontWeight: 700, cursor: "pointer", fontFamily: font }}>Submit Injury Report</button>
      </div>
    </div>
  );
};

// ─── MAIN APP ──────────────────────────────────────────────
export default function SafeShiftApp() {
  const [role, setRole] = React.useState(null);
  const [screen, setScreen] = React.useState("home");
  const [tab, setTab] = React.useState("home");

  const go = (s) => { setScreen(s); setTab(s === "home" ? "home" : tab); };
  const back = () => setScreen("home");
  const reset = () => { setRole(null); setScreen("home"); setTab("home"); };

  const workerTabs = [
    { id: "home", label: "Home", iconName: "home" },
    { id: "log", label: "Log", iconName: "log" },
    { id: "journal", label: "Journal", iconName: "journal" },
    { id: "vitals", label: "Vitals", iconName: "vitals" },
    { id: "history", label: "History", iconName: "history" },
  ];

  const renderWorkerScreen = () => {
    switch (screen) {
      case "log": return <LogSymptom onBack={back} />;
      case "journal": return <Journal onBack={back} />;
      case "history": return <History onBack={back} />;
      case "vitals": return <Vitals onBack={back} />;
      case "stretch": return <Stretch onBack={back} />;
      case "report": return <ReportInjury onBack={back} />;
      default: return <WorkerHome go={go} />;
    }
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "100vh", 
      background: "linear-gradient(145deg, #D1D1D6, #E5E5EA)",
      padding: "min(20px, 2vw)"
    }}>
      <style>{`
        @media (max-width: 500px) {
          body { background: white !important; }
          .phone-container { 
            max-width: 100% !important; 
            max-height: 100% !important; 
            border-radius: 0 !important; 
            box-shadow: none !important;
          }
        }
      `}</style>
      <PhoneFrame 
        hasAlert={role === "worker" && screen === "home"}
        footer={role === "worker" && screen === "home" && <TabBar tabs={workerTabs} active={tab} onSelect={id => { setTab(id); go(id); }} />}
        overlay={role && (
          <button 
            onClick={reset}
            style={{ 
              position: "absolute", 
              top: 54, 
              right: 16, 
              background: "rgba(0,0,0,0.08)", 
              color: "#666", 
              border: "none", 
              borderRadius: 14, 
              padding: "6px 12px", 
              fontSize: 10, 
              fontWeight: 700, 
              textTransform: "uppercase",
              letterSpacing: 0.5,
              cursor: "pointer",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              gap: 4
            }}
          >
            <span>✕</span> Exit Role
          </button>
        )}
      >
        {!role ? (
          <RoleSelect onPick={r => { setRole(r); setScreen("home"); }} />
        ) : role === "worker" ? (
          renderWorkerScreen()
        ) : role === "supervisor" ? (
          <Supervisor />
        ) : (
          <Safety />
        )}
      </PhoneFrame>
    </div>
  );
}
