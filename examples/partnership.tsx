import Image from "next/image"

const HEADING_FONT = "font-[family-name:var(--font-playfair-display)]"

function Partnership() {
    return (
        <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-[320px_1fr]">
            {/* Logo */}
            <div className="flex justify-center">
                <div className="relative aspect-square w-full max-w-[280px]">
                    <Image
                        src="/assets/TYL-blue-square-scaled.png"
                        alt="Thank You Life"
                        fill
                        sizes="(max-width: 768px) 60vw, 280px"
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Copy */}
            <div>
                <h2 className={`text-3xl font-medium md:text-4xl ${HEADING_FONT}`}>
                    Our Partnership with Thank You Life
                </h2>
                <p className="mt-6 text-muted-foreground">
                    At Psyberspace, we believe healing should ripple outward &mdash; beyond
                    the therapy room and into the community. That&rsquo;s why we&rsquo;ve
                    partnered with Thank You Life (TYL), an independent 501(c)(3) nonprofit
                    dedicated to expanding access to psychedelic-assisted therapy for people
                    who might not otherwise have the opportunity. TYL has created a fund for
                    our practice to offset the cost of this life-changing treatment for our
                    clients in need, helping bring ketamine-assisted therapy to those who
                    cannot afford it on their own.
                </p>

                <p className="mt-6 rounded-lg border-l-4 border-[#6d8c43] bg-[#6d8c43]/5 px-4 py-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Important Note:</span>{" "}
                    Supporting TYL is completely optional and separate from your Psyberspace
                    program fees. 100% of donations go directly to the nonprofit.
                </p>

                <p className="mt-6 text-muted-foreground">
                    If you&rsquo;d like to extend the impact of your healing journey and help
                    others access life-changing care, you can contribute directly below:
                </p>

                <iframe
                    src="https://givebutter.com/embed/c/psy-kap"
                    title="Donate via Givebutter"
                    name="givebutter"
                    width="100%"
                    height="615"
                    frameBorder="0"
                    scrolling="no"
                    allow="payment"
                    loading="lazy"
                    className="mt-8 w-full max-w-[800px]"
                />
            </div>
        </section>
    )
}

export default Partnership
