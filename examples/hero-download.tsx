import Link from "next/link"
import Image from "next/image"
import { CalendarDays } from "lucide-react"
import { Button } from "../components/ui/button"

function HeroDownload() {
    return (
        <div className="relative mx-[10%] w-[80%] overflow-hidden rounded-xl bg-[#6d8c43]">
            <div className="flex flex-col items-center md:flex-row">
                {/* Copy + CTA */}
                <div className="relative z-10 flex-1 px-8 py-14 md:px-16 md:py-20">
                    <h2 className="font-serif text-4xl font-medium text-white md:text-6xl">
                        Book an Appointment Now!
                    </h2>
                    <p className="mt-4 text-lg text-white/85 md:text-xl">
                        Make a booking with our online form
                    </p>
                    <Button
                        asChild
                        className="mt-10 h-auto rounded-full bg-[#16311f] px-6 py-3 text-base text-white hover:bg-[#16311f]/90"
                    >
                        <Link href="https://psyberspacetherapy.janeapp.com/">
                            <CalendarDays />
                            Book Free 20 Minute Consultation
                        </Link>
                    </Button>
                </div>

                {/* Illustration */}
                <div className="relative flex w-full items-center justify-center md:w-[45%]">
                    <span className="absolute aspect-square w-[70%] rounded-full bg-white/10" />
                    <Image
                        src="/assets/human-copyright-1.png"
                        alt="Line-art illustration of a person"
                        width={660}
                        height={620}
                        className="relative z-10 h-auto w-[75%] max-w-md object-contain md:w-[85%]"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroDownload
