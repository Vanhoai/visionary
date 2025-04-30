import { DeveloperPng } from "@/assets"
import Image from "next/image"
import React from "react"

const AboutPage = () => {
    return (
        <div className="pt-[90px] px-20 container mx-auto">
            <div className="flex flex-row mt-16">
                <div className="flex flex-1 flex-col gap-5">
                    <p>
                        I’m Hoài, a writer and machine learning engineer. I was born and raised in a small rice-farming
                        village in Vietnam.
                    </p>
                    <p>
                        I’m deeply passionate about <span className="text-yellow-500">Machine Learning (ML)</span> and{" "}
                        <span className="text-yellow-500">Deep Learning (DL)</span>, with a particular interest in{" "}
                        <span className="text-yellow-500">Computer Vision and Algorithms</span>. Currently, I’m
                        exploring creative applications of AI in education and on edge devices.
                    </p>

                    <p>
                        I graduated from FPT Polytechnic College and am currently studying Computer Science and
                        Engineering at the University of Information Technology.
                    </p>
                </div>

                <div className="w-1/3 h-1/3">
                    <Image src={DeveloperPng} alt="Developer" className="rounded-[50%]" />
                </div>
            </div>

            <div className="flex flex-col gap-5 mt-5">
                <p>{`Previously, I worked as a Mobile Developer, focusing mainly on Android and occasionally on iOS. I also have experience in backend development. I enjoy solving technical challenges and improving application performance and scalability.`}</p>
                <p>
                    In software development, I’ve worked with technologies such as{" "}
                    <span className="text-yellow-500">
                        Kotlin, Jetpack Compose, Coroutines, Ktor, Room, Retrofit, and Dagger Hilt
                    </span>{" "}
                    for mobile apps. On the backend, I prefer using Go to build scalable systems. I’m also passionate
                    about system architecture and follow patterns like Clean Architecture, and Domain-Driven Design.
                </p>
                <p>
                    In the field of ML and DL, I’m currently learning and applying frameworks like{" "}
                    <span className="text-yellow-500">TensorFlow, Keras, and PyTorch</span> to build AI models. I’m
                    especially interested in Computer Vision and deploying intelligent applications on edge devices. I
                    continuously strive to deepen my knowledge in this area, and my goal is to become a professional
                    Deep Learning Engineer in the near future.
                </p>
            </div>
        </div>
    )
}

export default AboutPage
