// Hattim's World — Screen Compositions
// ui_kits/web_app/Screens.jsx

// ── Splash / Intro Screen ────────────────────────────────────
function SplashScreen({ onNext }) {
  return (
    <BlueBg>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:24}}>
        <HattimChar pose="hi" size={180} style={{marginBottom:-20}}/>
        <LogoText scale={1}/>
      </div>
      <div style={{position:'absolute',bottom:16,color:'rgba(255,255,255,0.4)',fontFamily:"'Quicksand',sans-serif",fontSize:12}}>
        © Copyright Hattim's World 2020
      </div>
      {/* Tap anywhere */}
      <div onClick={onNext} style={{position:'absolute',inset:0,cursor:'pointer'}}/>
    </BlueBg>
  );
}

// ── Login Screen ─────────────────────────────────────────────
function LoginScreen({ onNext }) {
  const [email, setEmail] = React.useState('');
  return (
    <BlueBg>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:28,width:'100%',padding:'0 40px'}}>
        <LogoText scale={0.72}/>
        <div style={{height:24}}/>
        <ScreenHeading>Enter your email to get started</ScreenHeading>
        <div style={{width:320,display:'flex',flexDirection:'column',gap:12}}>
          <InputField
            type="email" placeholder="Email Address"
            value={email} onChange={e=>setEmail(e.target.value)}
          />
          <PrimaryBtn onClick={onNext} wide>Next</PrimaryBtn>
        </div>
        <Caption>Your email will only be used for log in and communicating updates about the app</Caption>
      </div>
    </BlueBg>
  );
}

// ── Profile / Friend Screen ───────────────────────────────────
function ProfileScreen({ onNext }) {
  return (
    <BlueBg>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:20,padding:'0 40px'}}>
        <DisplayTitle size={28} style={{textAlign:'center',maxWidth:520}}>
          Now who would like to be Hattim's friend?
        </DisplayTitle>
        <BodyText>Create your child's learner profile for a more personalized experience.</BodyText>
        <HattimChar pose="hi" size={200}/>
        <PrimaryBtn onClick={onNext} wide>Next</PrimaryBtn>
      </div>
    </BlueBg>
  );
}

// ── Movie Time Screen ─────────────────────────────────────────
function MovieTimeScreen({ onNext }) {
  return (
    <ContentBg>
      <div style={{
        position:'absolute',top:0,left:0,right:0,
        display:'flex',flexDirection:'column',alignItems:'center',
        padding:'20px 40px 0',
      }}>
        {/* Title banner */}
        <div style={{
          background:'linear-gradient(180deg,#9D50BB,#6E48AA)',
          borderRadius:14,padding:'6px 32px',
          boxShadow:'0 4px 0 rgba(0,0,0,0.25)',
        }}>
          <div style={{
            fontFamily:"'Quicksand',sans-serif",fontSize:44,fontWeight:700,
            color:'#fff',letterSpacing:'0.08em',
            textShadow:'2px 2px 0 rgba(0,0,0,0.3)',
          }}>MOVIE TIME</div>
        </div>
        {/* Video frame */}
        <div style={{
          marginTop:16, background:'#fff',
          borderRadius:16, width:'80%',
          boxShadow:'0 6px 20px rgba(0,0,0,0.2)',
          aspectRatio:'16/9',
          display:'flex',alignItems:'center',justifyContent:'center',
          overflow:'hidden',
        }}>
          <div style={{textAlign:'center'}}>
            <div style={{
              fontFamily:"'Quicksand',sans-serif",fontSize:36,fontWeight:700,
              background:'linear-gradient(180deg,#45C3F5,#0A7DB5)',
              WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
            }}>Hattim's</div>
            <div style={{
              fontFamily:"'Quicksand',sans-serif",fontSize:56,fontWeight:700,
              background:'linear-gradient(180deg,#FFD93D,#F7941D)',
              WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
              textShadow:'none',filter:'drop-shadow(2px 2px 0 rgba(0,0,0,0.2))',
            }}>STORY</div>
          </div>
        </div>
        {/* Controls */}
        <div style={{display:'flex',gap:12,marginTop:12}}>
          <IconBtn icon="↩️" onClick={()=>{}}/>
          <IconBtn icon="⏭" onClick={onNext}/>
        </div>
      </div>
    </ContentBg>
  );
}

// ── Lesson Intro Screen ───────────────────────────────────────
function LessonIntroScreen({ lessonNum='One', lessonTitle='Hattim Is Hungry', onNext }) {
  return (
    <BlueBg>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:20}}>
        <div style={{textAlign:'center',lineHeight:1}}>
          <DisplayTitle size={80}>LESSON</DisplayTitle>
          <DisplayTitle size={56} color='#fff'>{lessonNum}</DisplayTitle>
        </div>
        <HattimChar pose="eat" size={180}/>
        <PrimaryBtn onClick={onNext} wide>{lessonTitle}</PrimaryBtn>
      </div>
    </BlueBg>
  );
}

// ── Quiz / Activity Screen ────────────────────────────────────
function QuizScreen({ onNext, progress=0.6 }) {
  const [selected, setSelected] = React.useState(null);
  const [revealed, setRevealed] = React.useState(false);
  const correct = 1; // index 1 is correct answer

  const handleSelect = (i) => {
    if (revealed) return;
    setSelected(i);
    setTimeout(() => {
      setRevealed(true);
      setTimeout(onNext, 1200);
    }, 400);
  };

  const getState = (i) => {
    if (!revealed) return i===selected ? 'hover' : 'default';
    if (i===correct) return 'correct';
    if (i===selected && i!==correct) return 'wrong';
    return 'unselected';
  };

  const choices = [
    { emoji:'🥛', label:'Milk' },
    { emoji:'🍞', label:'Toast' },
    { emoji:'🍳', label:'Egg' },
    { emoji:'🍌', label:'Banana' },
  ];

  return (
    <BlueBg>
      <div style={{width:'100%',padding:'16px 24px 0',display:'flex',justifyContent:'center'}}>
        <ProgressBar value={Math.round(progress*100)} max={100}/>
      </div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:16,padding:'12px 24px'}}>
        <HattimChar pose="confused" size={200}/>
        <div style={{display:'flex',gap:16}}>
          {choices.map((c,i) => (
            <AnswerCard key={i} state={getState(i)} onClick={()=>handleSelect(i)} size={120}>
              <div style={{textAlign:'center'}}>
                <div style={{fontSize:44}}>{c.emoji}</div>
              </div>
            </AnswerCard>
          ))}
        </div>
      </div>
    </BlueBg>
  );
}

// ── Game Time Screen ──────────────────────────────────────────
function GameTimeScreen({ onNext }) {
  return (
    <GameBg>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:12,padding:'20px'}}>
        <div style={{textAlign:'center',lineHeight:1}}>
          <DisplayTitle size={80} color={HW_COLORS.bluePrimary} style={{
            textShadow:'3px 3px 0 rgba(0,0,0,0.15), -1px -1px 0 #fff',
          }}>GAME</DisplayTitle>
          <DisplayTitle size={52} color={HW_COLORS.yellow} style={{
            textShadow:'2px 2px 0 rgba(0,0,0,0.2)',
          }}>TIME</DisplayTitle>
        </div>
        <HattimChar pose="celebration" size={160}/>
        <Stars count={1} total={3}/>
        <PrimaryBtn onClick={onNext} wide>
          <span style={{marginRight:10}}>▶</span> Let's Play
        </PrimaryBtn>
      </div>
    </GameBg>
  );
}

// ── Activity / Drag Screen ────────────────────────────────────
function ActivityScreen({ onNext }) {
  const [selected, setSelected] = React.useState(null);

  const items = [
    {emoji:'🥛',label:'Milk'},
    {emoji:'🍌',label:'Banana'},
    {emoji:'🍳',label:'Egg'},
    {emoji:'🍞',label:'Toast'},
  ];

  return (
    <div style={{
      width:'100%', height:'100%',
      background:`linear-gradient(160deg,#E8C9A0 0%,#D4AA78 100%)`,
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center', gap:20,
      padding:'20px',
    }}>
      {/* Plate */}
      <div style={{display:'flex',gap:40,alignItems:'center'}}>
        <div style={{
          width:200, height:200, borderRadius:'50%',
          background:'linear-gradient(145deg,#D8F0F8,#B8DDEF)',
          border:'6px solid rgba(255,255,255,0.6)',
          boxShadow:'0 4px 20px rgba(0,0,0,0.12), inset 0 2px 8px rgba(255,255,255,0.5)',
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          {selected!==null && <div style={{fontSize:80}}>{items[selected].emoji}</div>}
        </div>
        <div style={{
          width:80, height:80, borderRadius:'50%',
          background:HW_COLORS.orange,
          border:`5px solid #FFD93D`,
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 4px 8px rgba(0,0,0,0.2)',
          fontFamily:"'Quicksand',sans-serif", fontSize:52, fontWeight:700,
          color:'#fff',
        }}>?</div>
      </div>
      {/* Choice cards */}
      <div style={{display:'flex',gap:12}}>
        {items.map((it,i) => (
          <AnswerCard
            key={i}
            state={i===selected ? 'correct' : 'default'}
            onClick={()=>{ setSelected(i); setTimeout(onNext, 1000); }}
            size={100}
          >
            <div style={{fontSize:52}}>{it.emoji}</div>
          </AnswerCard>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  SplashScreen, LoginScreen, ProfileScreen,
  MovieTimeScreen, LessonIntroScreen, QuizScreen,
  GameTimeScreen, ActivityScreen,
});
