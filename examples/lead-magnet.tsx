import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"

const HEADING_FONT = "font-[family-name:var(--font-playfair-display)]"

function LeadMagnet() {
    return (
        <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2">
            {/* Guide cover */}
            <div className="flex justify-center">
                <Image
                    src="/assets/THE-TINY-ALIVE-TEST-1.png"
                    alt="The Tiny Alive Test — free mini-guide"
                    width={1545}
                    height={1999}
                    className="h-auto w-full max-w-sm rounded-xl shadow-2xl"
                />
            </div>

            {/* Copy */}
            <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#6d8c43]">
                    Ready to transform your mental wellness?
                </p>
                <h2 className={`mt-4 text-3xl font-medium md:text-5xl ${HEADING_FONT}`}>
                    Feel Flat, Not Broken?
                </h2>
                <div className="mt-6 flex flex-col gap-4 text-lg text-muted-foreground">
                    <p>
                        If you&rsquo;re not sad, not okay, just&hellip; flat&mdash;this free
                        mini-guide is for that.
                    </p>
                    <p>
                        The Tiny Alive Test helps you notice the flicker that you&rsquo;re
                        still here&mdash;no fixing, just reconnecting.
                    </p>
                    <p>
                        Download now to gently reboot your nervous system&mdash;one small
                        spark at a time.
                    </p>
                </div>

                <Button
                    asChild
                    className="mt-10 h-auto rounded-full bg-[#16311f] px-6 py-3 text-base text-white hover:bg-[#16311f]/90"
                >
                    <Link href="/download">Grab Your Free Copy</Link>
                </Button>
            </div>
        </section>
    )
}

export default LeadMagnet
