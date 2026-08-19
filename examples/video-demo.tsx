// components/video-demo.tsx
'use client';

import { useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap'; 
import { useGSAP } from '@gsap/react';
import Image from "next/image";
import VideoAutoplay from "../components/ui/video-autoplay";

export default function VideoDemo() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const box = containerRef.current?.querySelector<HTMLElement>(".box");
        const panel = containerRef.current?.querySelector<HTMLElement>(".panel");
        
        if (!box || !panel) return;

        const targetScale = Math.max(
            window.innerWidth / box.offsetWidth,
            window.innerHeight / box.offsetHeight
        ) - 0.5;

        ScrollTrigger.create({
            trigger: ".panel",
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
                        height: '0vh', 
                        width: '100vw', 
                        display: 'flex', 
                        position: 'relative'
                    }}
                >
                    <div
                        className="box"
                        style={{
                            margin: 'auto',
                            width: 'clamp(280px, 40vw, 600px)',
                            height: 'calc(clamp(280px, 40vw, 600px) * 9 / 16)',
                            transformOrigin: 'center center'
                        }}
                    >
                        <Image 
                            src="/cover-image.jpeg"
                            alt="cover-image"
                            fill={true}
                        />
                        {/* <video
                            className="w-full h-full object-cover"
                            loop
                            playsInline
                            controls
                        >
                            <source src="/fobia-demo-video-beta.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}
                    </div>
                </div>

                <div className="end-panel" />

            </div>
        </div>
    );
}