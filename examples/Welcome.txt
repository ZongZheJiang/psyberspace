import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedGpuFanIcon from '../components/animated-gpu-fan-icon';
import PixelBlast from '../components/pixelblast';

// ── Blade spin constants ──────────────────────────────────────────
const ACCELERATE_MS = 3000;
const TOTAL_ANIM_MS = 4000;
const ACCEL_TARGET = -1080;
const COAST_VELOCITY = -1080;

// ── Fresh-install typewriter words (each contains an "o" replaced by the GPU icon) ──
// TODO: Re-enable by un-commenting the SETUP_COMPLETE_KEY constant below and
//       setting the `setupComplete` ref to `localStorage.getItem(...)`.
const SETUP_COMPLETE_KEY = 'fobia:setup-complete';
const WORDS = ['fobia', 'community', 'token', 'collective', 'compute'];
const WORD_INTERVAL = 3000;
const TYPING_SPEED = 80;

function splitAtO(word: string) {
  const idx = word.indexOf('o');
  if (idx === -1) return { before: word, after: '' };
  return { before: word.slice(0, idx), after: word.slice(idx + 1) };
}

const Welcome: React.FC = () => {
  const navigate = useRouter();
  const [bladeRotation, setBladeRotation] = useState(0);
  const [exit, setExit] = useState(false);
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number | null>(null);

  // ── Setup check (disabled — always true so Welcome redirects to dashboard) ──
  // TODO: Restore real check: `useRef(localStorage.getItem(SETUP_COMPLETE_KEY) === 'true')`
  //       When `false` (fresh install), the typewriter words + token coins + Get Started button appear.
  const setupComplete = useRef(localStorage.getItem(SETUP_COMPLETE_KEY) === 'true');
  // const setupComplete = useRef(true);

  const iconRef = useRef<HTMLDivElement>(null);
  const [wordIdx, setWordIdx] = useState(0);
  const [typedLen, setTypedLen] = useState(0);
  const typingRef = useRef<number | null>(null);

  const currentWord = WORDS[wordIdx];
  const parts = splitAtO(currentWord);
  const displayBefore = parts.before.slice(0, Math.min(typedLen, parts.before.length));
  const afterStart = Math.max(0, typedLen - parts.before.length);
  const displayAfter = parts.after.slice(0, afterStart);

  const nextWord = useCallback(() => {
    setWordIdx(i => (i + 1) % WORDS.length);
    setTypedLen(0);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(function tick(ts) {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;

      if (elapsed < ACCELERATE_MS) {
        const p = elapsed / ACCELERATE_MS;
        setBladeRotation(ACCEL_TARGET * (0.2 * p + 0.8 * p * p * p));
      } else {
        const coastSec = (elapsed - ACCELERATE_MS) / 1000;
        setBladeRotation(ACCEL_TARGET + COAST_VELOCITY * coastSec);
      }
      requestAnimationFrame(tick);
    });

    // ── Random-step progress bar ──────────────────────────────
    const steps = [0];
    const count = 5;
    for (let i = 1; i < count; i++) {
      steps.push(Math.round(Math.random() * 80 + 10));
    }
    steps.push(100);
    steps.sort((a, b) => a - b);

    let stepIdx = 1;
    const stepInterval = TOTAL_ANIM_MS / steps.length;
    const stepTimer = setInterval(() => {
      if (stepIdx < steps.length) {
        setProgress(steps[stepIdx] / 100);
        stepIdx++;
      } else {
        clearInterval(stepTimer);
      }
    }, stepInterval);

    if (!setupComplete.current) {
      return () => { cancelAnimationFrame(frame); clearInterval(stepTimer); };
    }

    const exitTimer = setTimeout(() => setExit(true), TOTAL_ANIM_MS);
    return () => { cancelAnimationFrame(frame); clearTimeout(exitTimer); clearInterval(stepTimer); };
  }, []);

  useEffect(() => {
    if (setupComplete.current) return;

    const totalChars = currentWord.length - 1;
    let charIdx = 0;
    const typing = setInterval(() => {
      charIdx++;
      setTypedLen(charIdx);
      if (charIdx >= totalChars) {
        clearInterval(typing);
        typingRef.current = window.setTimeout(nextWord, WORD_INTERVAL);
      }
    }, TYPING_SPEED);

    return () => {
      clearInterval(typing);
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [wordIdx, nextWord, currentWord.length]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#ffffff"
          patternScale={2}
          patternDensity={0.6}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.1}
          rippleIntensityScale={1}
          speed={0.5}
          transparent
          edgeFade={0.5}
        />
      </div>
    <motion.div
        className="absolute inset-0 flex items-center justify-center"
      initial={false}
      animate={exit ? { opacity: 0, scale: 1.04, y: -8 } : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => {
        if (exit) navigate('/dashboard-classic', { replace: true });
      }}
    >
      {!setupComplete.current && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard-classic')}
            className="px-6 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:bg-primary/90 active:scale-95 transition-all duration-150 shadow-lg"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/about')}
            className="px-6 py-2.5 text-sm font-semibold bg-transparent text-foreground rounded-full border border-foreground/30 hover:bg-foreground/5 active:scale-95 transition-all duration-150"
          >
            About
          </button>
        </div>
      )}
      <div className="flex items-center justify-center select-none">
        {!setupComplete.current && (
          <div className="flex items-center justify-center gap-1">
            <span className="text-[clamp(4rem,10vw,8rem)] font-sans font-bold tracking-tighter text-foreground">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4 }}
                >
                  {displayBefore}
                </motion.span>
              </AnimatePresence>
            </span>
            <div ref={iconRef}>
              <AnimatedGpuFanIcon
                size={88}
                animate={false}
                bladeRotation={bladeRotation}
                color="currentColor"
              />
            </div>
            <span className="text-[clamp(4rem,10vw,8rem)] font-sans font-bold tracking-tighter text-foreground">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4 }}
                >
                  {displayAfter}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        )}
        {setupComplete.current && (
          <div className="flex items-center justify-center gap-1">
            <span className="text-[clamp(4rem,10vw,8rem)] font-sans font-light tracking-tighter text-foreground">
              f
            </span>
            <AnimatedGpuFanIcon
              size={88}
              animate={false}
              bladeRotation={bladeRotation}
              color="currentColor"
            />
            <span className="text-[clamp(4rem,10vw,8rem)] font-sans font-light tracking-tighter text-foreground -mt-2">
              bia
            </span>
          </div>
        )}
      </div>
      {progress < 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {Array.from({ length: 10 }).map((_, i) => {
            const threshold = (i + 1) / 10;
            const filled = progress >= threshold;
            return (
              <div
                key={i}
                className="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 1.5,
                  backgroundColor: filled ? 'currentColor' : 'transparent',
                  border: '1.5px solid currentColor',
                  opacity: filled ? 1 : 0.25,
                }}
              />
            );
          })}
        </div>
      )}
    </motion.div>
    </div>
  );
};

export default Welcome;
