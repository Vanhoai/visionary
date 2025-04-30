"use client"

import { HeartRed, KerasPng, MLOpsPng, OpencvSvg, StarBlue, StarYellow, TensorflowSvg } from "@/assets"
import Image from "next/image"
import React from "react"

const dataScienceSkills = [
    {
        name: "MLOps Basic",
        icon: MLOpsPng,
        height: 36,
        width: 54,
    },
    {
        name: "NumPy",
        icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/numpy.png",
        height: 28,
        width: 28,
    },
    {
        name: "Tensorflow",
        icon: TensorflowSvg,
        height: 36,
        width: 36,
    },
    {
        name: "Keras",
        icon: KerasPng,
        height: 32,
        width: 32,
    },
    {
        name: "Computer Vision",
        icon: OpencvSvg,
        height: 36,
        width: 36,
    },
]

export const Skills: React.FC = () => {
    return (
        <div className="container px-20 mx-auto mt-40">
            <div className="flex flex-row">
                <div className="flex-1 flex flex-row justify-start">
                    <h2 className="text-2xl">{"Skills and Technologies I've Been Applying"}</h2>
                    <Image src={StarYellow} alt="Face" width={40} height={40} />
                </div>
                <div className="flex-1" />
            </div>

            <div className="grid grid-cols-3 mt-10 border-b-2">
                <div className="border-t-2 border-r-2">
                    <div className="py-4">
                        <div className="flex flex-col">
                            <h2 className="mb-2">Languages</h2>
                            <div className="flex flex-row flex-1 items-center gap-3 justify-start">
                                <Image
                                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c++.png"
                                    alt="C++"
                                    width={32}
                                    height={32}
                                />

                                <Image
                                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png"
                                    alt="Python"
                                    width={32}
                                    height={32}
                                />

                                <Image
                                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kotlin.png"
                                    alt="Kotlin"
                                    width={30}
                                    height={30}
                                />

                                <Image
                                    src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png"
                                    alt="TypeScript"
                                    width={32}
                                    height={32}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 border-t-2 py-4 flex flex-col gap-2">
                        <h1 className="text-lg">Soft Skills</h1>
                        <p>Can communicate in English.</p>
                        <p>Strong problem-solving and critical thinking abilities.</p>
                        <p>Able to manage time and prioritize tasks efficiently.</p>
                    </div>
                </div>

                <div className="h-[600px] border-t-2 border-r-2 flex flex-col">
                    <div className="flex-1 p-4 flex flex-col">
                        <Image src={StarBlue} alt="Star" width={40} height={40} />

                        <h1 className="font-medium text-lg mt-4">Data Science</h1>
                        <ul className="flex flex-col gap-2">
                            <li>Building scalable machine learning systems.</li>
                            <li>Deploying models into software products.</li>
                            <li>Analyzing data and statistical modeling.</li>
                        </ul>
                    </div>
                    <div className="flex-1 border-t-2 flex flex-col p-4">
                        <Image src={HeartRed} alt="Star" width={40} height={40} />

                        <h1 className="font-medium text-lg mt-4">Software Development</h1>
                        <ul className="flex flex-col gap-2">
                            <li>Integrating AI/ML into mobile apps.</li>
                            <li>Building scalable backend architectures.</li>
                            <li>Optimizing UI and app performance.</li>
                        </ul>
                    </div>
                </div>

                <div className="h-[600px] border-t-2 flex flex-col">
                    <div className="flex-1 p-4 flex flex-col">
                        {dataScienceSkills.map((skill) => {
                            return (
                                <div key={skill.name} className="flex flex-row items-center h-12">
                                    <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={skill.width}
                                        height={skill.height}
                                    />
                                    <p className="text-lg ml-2 line-clamp-1">{skill.name}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex-1 border-t-2 flex flex-col p-4">
                        <div className="flex flex-row items-center h-12">
                            <Image
                                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/android.png"
                                alt="Android"
                                width={32}
                                height={32}
                            />
                            <p className="text-lg ml-2 line-clamp-1">Android Development</p>
                        </div>

                        <div className="flex flex-row items-center h-12">
                            <Image
                                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ios.png"
                                alt="iOS"
                                width={32}
                                height={32}
                            />
                            <p className="text-lg ml-2 line-clamp-1">iOS Development</p>
                        </div>

                        <div className="flex flex-row items-center h-12">
                            <Image
                                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rabbitmq.png"
                                alt="RabbitMQ"
                                width={28}
                                height={28}
                            />
                            <p className="text-lg ml-3 line-clamp-1">RabbitMQ</p>
                        </div>

                        <div className="flex flex-row items-center h-12">
                            <Image
                                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png"
                                alt="Docker"
                                width={32}
                                height={32}
                            />
                            <p className="text-lg ml-2 line-clamp-1">Docker</p>
                        </div>

                        <div className="flex flex-row items-center h-12">
                            <Image
                                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/figma.png"
                                alt="Figma"
                                width={32}
                                height={32}
                            />
                            <p className="text-lg ml-2 line-clamp-1">Figma Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
