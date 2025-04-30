import { DeveloperPng, FrameSvg, HinsunSvg, IdeaSvg } from "@/assets"
import { Button } from "@/components"
import Image from "next/image"
import * as React from "react"
import { Paytone_One } from "next/font/google"

const paytone = Paytone_One({ weight: "400", subsets: ["latin"] })

export const Hero: React.FC = () => {
    return (
        <div className="container px-20 mx-auto w-full h-[80vh] flex flex-row justify-center items-center pt-[90px]">
            <div className="h-full flex-1 flex flex-col justify-center items-start">
                <p className="text-xl mt-16">Hi 👋🏻, My name is Hoai</p>
                <h1 className={`text-4xl font-semibold ${paytone.className} drop-shadow-xl`}>
                    Machine Learning Engineer
                </h1>
                <div className="text-[16px] mt-5 flex flex-col">
                    <p>
                        I am a writer ✍🏻 and machine learning engineer, specializing in building scalable machine
                        learning solutions, innovative mobile applications, and modern software systems.
                    </p>
                    <span className="my-2" />
                    <p>
                        With a deep passion for Machine Learning/Deep Learning, and software development, I bridge the
                        gap between intelligent technologies and real-world impact, crafting solutions that are both
                        efficient and user-centric.
                    </p>
                </div>

                <Button className="mt-10 px-6">Hire Me</Button>
            </div>

            <div className="h-full flex-1 flex flex-col items-center">
                <div className="w-full flex flex-row justify-between mt-[40px]">
                    <Image src={HinsunSvg} alt="Hinsun" width={200} height={200} />
                </div>
                <div className="relative w-80 h-80">
                    <Image src={FrameSvg} alt="Frame" className="absolute top-0 left-0 right-0 bottom-0" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-row justify-center items-center">
                        <Image src={DeveloperPng} alt="Developer" width={300} height={300} className="rounded-md" />
                    </div>

                    <Image src={IdeaSvg} alt="Idea" width={60} height={60} className="absolute -top-7 -right-5" />
                </div>
            </div>
        </div>
    )
}
