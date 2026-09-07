// components/video-demo.tsx
'use client';

import { useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap'; 
import { useGSAP } from '@gsap/react';

interface VideoDemoProps {
    /**
     * The video to embed. Either a YouTube link (watch, youtu.be, or /shorts/)
     * — converted to its /embed/ form — or any other directly embeddable URL.
     */
    video_url: string;
}

/** Pulls the 11-character video id out of any common YouTube URL shape. */
function getYouTubeId(url: string): string | null {
    const match = url.match(
        /(?:youtube\.com\/(?:shorts\/|embed\/|live\/|v\/)|youtube\.com\/watch\?(?:.*&)?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/
    );
    return match ? match[1] : null;
}

/** Shorts are portrait; everything else is treated as widescreen. */
function isShort(url: string): boolean {
    return /youtube\.com\/shorts\//.test(url);
}

export default function VideoDemo({ video_url }: VideoDemoProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const youTubeId = getYouTubeId(video_url);
    const embedSrc = youTubeId
        ? `https://www.youtube.com/embed/${youTubeId}?rel=0`
        : video_url;

    // Portrait boxes are sized from their height so they can't outgrow the
    // viewport; landscape boxes are sized from their width.
    const boxSize = isShort(video_url)
        ? {
              height: 'clamp(320px, 60vh, 640px)',
              width: 'calc(clamp(320px, 60vh, 640px) * 9 / 16)'
          }
        : {
              width: 'clamp(280px, 40vw, 600px)',
              height: 'calc(clamp(280px, 40vw, 600px) * 9 / 16)'
          };

    useGSAP(() => {
        const box = containerRef.current?.querySelector<HTMLElement>(".box");
        const panel = containerRef.current?.querySelector<HTMLElement>(".panel");
        
        if (!box || !panel) return;

        // "contain", not "cover": scaling by the larger of the two ratios would
        // send a 9:16 box far past the edges of a landscape viewport.
        const targetScale = Math.min(
            window.innerWidth / box.offsetWidth,
            window.innerHeight / box.offsetHeight
        ) * 0.9;

        ScrollTrigger.create({
            // scoped to this instance's panel so several demos can coexist
            trigger: panel,
            start: "center center",
            end: "+=50",
            pin: box,
            pinSpacing: true
        });

        // Scaling Animation
        gsap.to(box, {
            scale: targetScale,
            scrollTrigger: {
                trigger: panel,
                start: "top bottom",
                endTrigger: "top center",
                end: "+=200",
                scrub: 1,
                // markers: true
            }
        });

    }, { scope: containerRef });

    return (
        // Wrapper IDs kept for layout structure
        <div id="smooth-wrapper" ref={containerRef}>
            <div id="smooth-content">
                <div 
                    className="panel" 
                    style={{ 
                        // auto (not 0vh) so the box reserves real space in the
                        // flow; 100% (not 100vw) so it centres inside a padded
                        // parent instead of overflowing it.
                        height: 'auto', 
                        width: '100%', 
                        display: 'flex', 
                        position: 'relative'
                    }}
                >
                    <div
                        className="box"
                        style={{
                            margin: 'auto',
                            position: 'relative',
                            ...boxSize,
                            transformOrigin: 'center center'
                        }}
                    >
                        <iframe
                            className="w-full h-full"
                            src={embedSrc}
                            title="Video demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>

                <div className="end-panel" />

            </div>
        </div>
    );
}
