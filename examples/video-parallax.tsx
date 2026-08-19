'use client';

import { useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

/**
 * VideoParallax — demonstrates three common parallax-scroll patterns for video:
 *
 *  1. Classic parallax   — video translates slower than scroll speed
 *  2. Zoom parallax      — video scales up as you scroll into it
 *  3. Layered parallax   — foreground text moves faster than the background video
 *
 * Each section is self-contained with its own ScrollTrigger, so they can be
 * dropped onto any page independently.
 */
export default function VideoParallax() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // ── 1. Classic parallax ──────────────────────────────────────────────
        // The video is taller than its clipping container. As the user scrolls
        // the section into view, the video translates upward at ~40% of the
        // scroll distance, producing the depth illusion.
        gsap.fromTo(
            '.parallax-classic video',
            { yPercent: 15 },
            {
                yPercent: -15,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.parallax-classic',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );

        // ── 2. Zoom parallax ─────────────────────────────────────────────────
        // Video starts slightly scaled-down and zooms to fill as it enters
        // the viewport, giving a "pull into the scene" feeling.
        gsap.fromTo(
            '.parallax-zoom video',
            { scale: 1.0, filter: 'brightness(0.4)' },
            {
                scale: 1.18,
                filter: 'brightness(1)',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.parallax-zoom',
                    start: 'top 80%',
                    end: 'center center',
                    scrub: 1.5,
                },
            }
        );

        // ── 3. Layered parallax ───────────────────────────────────────────────
        // Two layers move at different speeds. The headline is pinned in place
        // while the background video translates upward more aggressively,
        // creating a real sense of depth between layers.
        gsap.fromTo(
            '.parallax-layered video',
            { yPercent: 20 },
            {
                yPercent: -20,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.parallax-layered',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            '.parallax-layered .foreground',
            { yPercent: -6 },
            {
                yPercent: 6,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.parallax-layered',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="bg-background text-foreground">

            {/* ── Intro spacer ───────────────────────────────────────────── */}
            <div className="flex h-[60vh] items-center justify-center">
                <div className="text-center space-y-3">
                    <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                        Scroll to explore
                    </p>
                    <h1 className="text-5xl font-bold">Parallax Video Effects</h1>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        Three techniques — classic translate, zoom, and layered depth.
                    </p>
                    {/* animated arrow */}
                    <div className="mt-6 animate-bounce text-muted-foreground text-2xl">↓</div>
                </div>
            </div>

            {/* ── 1. Classic parallax ────────────────────────────────────── */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto space-y-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        Effect 01
                    </span>
                    <h2 className="text-4xl font-bold">Classic Parallax</h2>
                    <p className="text-muted-foreground max-w-xl">
                        The video translates vertically at a slower rate than the scroll,
                        creating the illusion that it sits on a deeper plane.
                    </p>
                </div>

                {/* Overflow-hidden clips the oversized video */}
                <div
                    className="parallax-classic mt-10 mx-auto max-w-4xl overflow-hidden rounded-2xl"
                    style={{ height: '65vh' }}
                >
                    <video
                        className="w-full object-cover"
                        style={{ height: '130%', marginTop: '-15%' }}
                        autoPlay
                        muted
                        loop
                        playsInline
                        src="/fobia-demo-video-beta.mp4"
                    />
                </div>
            </section>

            {/* ── spacer ─────────────────────────────────────────────────── */}
            <div className="h-32" />

            {/* ── 2. Zoom parallax ───────────────────────────────────────── */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto space-y-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        Effect 02
                    </span>
                    <h2 className="text-4xl font-bold">Zoom Parallax</h2>
                    <p className="text-muted-foreground max-w-xl">
                        The video scales up from a slightly smaller size and brightens
                        as it enters the viewport — like pulling the viewer into the scene.
                    </p>
                </div>

                <div
                    className="parallax-zoom mt-10 mx-auto max-w-4xl overflow-hidden rounded-2xl"
                    style={{ height: '65vh' }}
                >
                    <video
                        className="w-full h-full object-cover origin-center"
                        autoPlay
                        muted
                        loop
                        playsInline
                        src="/fobia-demo-video-beta.mp4"
                    />
                </div>
            </section>

            {/* ── spacer ─────────────────────────────────────────────────── */}
            <div className="h-32" />

            {/* ── 3. Layered parallax ────────────────────────────────────── */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto space-y-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        Effect 03
                    </span>
                    <h2 className="text-4xl font-bold">Layered Parallax</h2>
                    <p className="text-muted-foreground max-w-xl">
                        Foreground text and background video move at different speeds,
                        building a sense of real physical depth between layers.
                    </p>
                </div>

                <div
                    className="parallax-layered mt-10 mx-auto max-w-4xl overflow-hidden rounded-2xl relative"
                    style={{ height: '75vh' }}
                >
                    {/* Background video layer — moves faster */}
                    <video
                        className="absolute inset-0 w-full object-cover"
                        style={{ height: '140%', top: '-20%' }}
                        autoPlay
                        muted
                        loop
                        playsInline
                        src="/fobia-demo-video-beta.mp4"
                    />

                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Foreground text layer — moves slower */}
                    <div className="foreground absolute inset-0 flex flex-col items-center justify-center text-white space-y-4 px-8 text-center">
                        <p className="text-sm font-mono uppercase tracking-widest opacity-70">
                            Layered depth
                        </p>
                        <h3 className="text-5xl font-bold leading-tight">
                            Two planes.<br />One scroll.
                        </h3>
                        <p className="text-white/70 max-w-sm">
                            The text and video move independently, giving a parallax
                            depth effect between the foreground and background layers.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── outro spacer ───────────────────────────────────────────── */}
            <div className="h-[40vh] flex items-center justify-center text-muted-foreground">
                <p className="text-sm font-mono">end of demo</p>
            </div>

        </div>
    );
}
