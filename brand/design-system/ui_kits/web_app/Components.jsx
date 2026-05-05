// Hattim's World — Core UI Components
// ui_kits/web_app/Components.jsx

const HW_COLORS = {
  blueCenter: '#45C3F5',
  blueEdge: '#0A7DB5',
  bluePrimary: '#29ABE2',
  orange: '#F7941D',
  orangeDark: '#E07010',
  yellow: '#F9C923',
  green: '#7BC044',
  greenCorrect: '#8CB84A',
  red: '#E8392A',
  purple: '#7B4FAF',
  cream: '#FFFDE0',
  tan: '#E8C9A0',
  contentBg: '#C8EEF5',
  white: '#FFFFFF',
};

// ── Layout Backgrounds ────────────────────────────────────────

function BlueBg({ children, style }) {
  return (
    <div style={{
      width:'100%', height:'100%', minHeight:'100%',
      background:`radial-gradient(ellipse at center, ${HW_COLORS.blueCenter} 0%, ${HW_COLORS.blueEdge} 100%)`,
      display:'flex', flexDirection:'column', alignItems:'center',
      justifyContent:'center', position:'relative', overflow:'hidden',
      ...style
    }}>
      {children}
    </div>
  );
}

function GameBg({ children, style }) {
  return (
    <div style={{
      width:'100%', height:'100%', background:HW_COLORS.cream,
      display:'flex', flexDirection:'column', alignItems:'center',
      justifyContent:'center', position:'relative', overflow:'hidden',
      ...style
    }}>
      {children}
    </div>
  );
}

function ContentBg({ children, style }) {
  return (
    <div style={{
      width:'100%', height:'100%', background:HW_COLORS.contentBg,
      position:'relative', overflow:'hidden', ...style
    }}>
      {/* Cloud silhouettes */}
      <div style={{position:'absolute',top:'-20px',left:'5%',width:'280px',height:'140px',
        background:'rgba(255,255,255,0.25)',borderRadius:'50%',filter:'blur(2px)'}}/>
      <div style={{position:'absolute',top:'10px',right:'10%',width:'200px',height:'100px',
        background:'rgba(255,255,255,0.2)',borderRadius:'50%',filter:'blur(2px)'}}/>
      {/* Rainbow wave */}
      <RainbowWave />
      {children}
    </div>
  );
}

function RainbowWave() {
  const bands = ['#3AB5E5','#8B5CF6','#EC4899','#FBBF24','#F97316','#EF4444'];
  return (
    <div style={{position:'absolute',bottom:0,left:0,right:0,height:'80px',overflow:'hidden'}}>
      {bands.map((c,i) => (
        <div key={i} style={{
          position:'absolute', bottom:0, left:'-10%', right:'-10%',
          height:`${80 - i*12}px`,
          background:c,
          borderRadius:`${60-i*5}% ${60-i*5}% 0 0`,
          opacity:0.9,
        }}/>
      ))}
    </div>
  );
}

// ── Typography ───────────────────────────────────────────────

function DisplayTitle({ children, size=72, color=HW_COLORS.yellow, style }) {
  return (
    <div style={{
      fontFamily:"'Quicksand',sans-serif", fontSize:size, fontWeight:700,
      letterSpacing:'0.04em', textTransform:'uppercase', color,
      textShadow:'2px 3px 0 rgba(0,60,120,0.35)',
      lineHeight:1.05, ...style
    }}>
      {children}
    </div>
  );
}

function ScreenHeading({ children, style }) {
  return (
    <div style={{
      fontFamily:"'Quicksand',sans-serif", fontSize:26, fontWeight:700,
      letterSpacing:'0.1em', textTransform:'uppercase', color:HW_COLORS.white,
      lineHeight:1.2, textAlign:'center', ...style
    }}>
      {children}
    </div>
  );
}

function BodyText({ children, style }) {
  return (
    <p style={{
      fontFamily:"'Quicksand',sans-serif", fontSize:17, fontWeight:500,
      color:HW_COLORS.white, lineHeight:1.6, textAlign:'center', ...style
    }}>
      {children}
    </p>
  );
}

function Caption({ children, style }) {
  return (
    <p style={{
      fontFamily:"'Quicksand',sans-serif", fontSize:12, fontWeight:400,
      color:'rgba(255,255,255,0.6)', textAlign:'center', lineHeight:1.5, ...style
    }}>
      {children}
    </p>
  );
}

// ── Logo Treatment ───────────────────────────────────────────

function LogoText({ scale=1 }) {
  return (
    <img
      src="../../assets/wordmark.png"
      style={{height: 80*scale, objectFit:'contain', display:'block'}}
      alt="Hattim's World"
    />
  );
}

// ── Buttons ──────────────────────────────────────────────────

function PrimaryBtn({ children, onClick, style, wide=false }) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseDown={()=>setPressed(true)}
      onMouseUp={()=>setPressed(false)}
      onMouseLeave={()=>setPressed(false)}
      style={{
        fontFamily:"'Quicksand',sans-serif", fontSize:17, fontWeight:700,
        letterSpacing:'0.12em', textTransform:'uppercase', color:'#fff',
        background: pressed ? HW_COLORS.orangeDark : HW_COLORS.orange,
        border:'none', borderRadius:50, cursor:'pointer',
        padding: wide ? '14px 0' : '14px 56px',
        width: wide ? '320px' : 'auto',
        boxShadow: pressed ? '0 2px 0 rgba(0,0,0,0.25)' : '0 4px 0 rgba(0,0,0,0.25)',
        transform: pressed ? 'translateY(2px)' : 'none',
        transition:'background 0.1s',
      }}
    >
      {children}
    </button>
  );
}

function IconBtn({ icon, onClick }) {
  return (
    <button onClick={onClick} style={{
      width:52, height:52, borderRadius:'50%', background:HW_COLORS.orange,
      border:'none', cursor:'pointer', display:'flex', alignItems:'center',
      justifyContent:'center', boxShadow:'0 4px 0 rgba(0,0,0,0.25)',
      color:'#fff', fontSize:20,
    }}>
      {icon}
    </button>
  );
}

// ── Input Field ──────────────────────────────────────────────

function InputField({ placeholder, value, onChange, type='text' }) {
  return (
    <input
      type={type} placeholder={placeholder} value={value} onChange={onChange}
      style={{
        fontFamily:"'Quicksand',sans-serif", fontSize:16, fontWeight:500,
        color:HW_COLORS.blueEdge, background:'#fff', border:'none',
        borderRadius:50, padding:'14px 24px', width:'100%', textAlign:'center',
        outline:'none', boxShadow:'0 2px 8px rgba(0,0,0,0.1)',
      }}
    />
  );
}

// ── Progress Bar ─────────────────────────────────────────────

function ProgressBar({ value=0, max=100 }) {
  const pct = Math.round((value/max)*100);
  return (
    <div style={{width:'80%', position:'relative', height:14}}>
      <div style={{height:14, background:'rgba(255,255,255,0.3)', borderRadius:50}}>
        <div style={{height:14, background:HW_COLORS.orange, borderRadius:50, width:`${pct}%`, position:'relative', transition:'width 0.4s ease'}}>
        <div style={{
            position:'absolute', right:-24, top:'50%', transform:'translateY(-50%)',
            width:48, height:48, borderRadius:'50%',
            background:`#F9C923 url('../../assets/hattim-thumbsup.png') center/165% no-repeat`,
            border:'3px solid #fff', boxShadow:'0 2px 8px rgba(0,0,0,0.2)',
            flexShrink:0,
          }}/>
        </div>
      </div>
    </div>
  );
}

// ── Answer Card ──────────────────────────────────────────────

function AnswerCard({ children, state='default', onClick, size=110 }) {
  const borderColor = state==='correct' ? HW_COLORS.green : state==='wrong' ? HW_COLORS.red : HW_COLORS.orange;
  const bg = state==='correct' ? HW_COLORS.greenCorrect : '#fff';
  return (
    <div onClick={onClick} style={{
      width:size, height:size, background:bg,
      border:`4px solid ${state==='unselected'?'transparent':borderColor}`,
      borderRadius:16, boxShadow:'0 4px 12px rgba(0,0,0,0.15)',
      display:'flex', alignItems:'center', justifyContent:'center',
      cursor:'pointer', overflow:'hidden', transition:'border-color 0.15s, background 0.15s',
      flexShrink:0,
    }}>
      {children}
    </div>
  );
}

// ── Stars ────────────────────────────────────────────────────

function Stars({ count=1, total=3 }) {
  return (
    <div style={{display:'flex', gap:8, alignItems:'center'}}>
      {Array.from({length:total}).map((_,i) => (
        <span key={i} style={{
          fontSize:i===1?44:36,
          filter: i < count ? 'drop-shadow(0 2px 4px rgba(249,201,35,0.7))' : 'grayscale(1) opacity(0.35)',
        }}>⭐</span>
      ))}
    </div>
  );
}

// ── Hattim Character (placeholder) ───────────────────────────

function HattimChar({ pose='idle', size=160, style }) {
  const poses = {
    idle:        '../../assets/hattim-idle.png',
    hi:          '../../assets/hattim-hi.png',
    thumbsup:    '../../assets/hattim-thumbsup.png',
    celebration: '../../assets/hattim-celebration.png',
    eat:         '../../assets/hattim-eat.png',
    confused:    '../../assets/hattim-confused.png',
    point:       '../../assets/hattim-point.png',
    my:          '../../assets/hattim-my.png',
    your:        '../../assets/hattim-your.png',
  };
  return (
    <img
      src={poses[pose] || poses.idle}
      alt={`Hattim ${pose}`}
      style={{ width:size, height:size, objectFit:'contain', ...style }}
    />
  );
}

// Export all
Object.assign(window, {
  HW_COLORS, BlueBg, GameBg, ContentBg, RainbowWave,
  DisplayTitle, ScreenHeading, BodyText, Caption,
  LogoText, PrimaryBtn, IconBtn, InputField,
  ProgressBar, AnswerCard, Stars, HattimChar,
});
