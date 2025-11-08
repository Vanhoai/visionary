import React from "react"
import Image from "next/image"

// <div className="flex justify-center lg:justify-end">
//     <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden shadow-xl">
//         <Image
//             src="https://i.pinimg.com/736x/19/5c/15/195c15bc600ba3e50ff5ac3be08c3667.jpg"
//             alt="Profile"
//             fill
//             className="object-cover"
//             priority
//         />
//     </div>
// </div>

const About: React.FC = () => {
    return (
        <div className="container mx-auto py-16">
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="space-y-6 flex-1">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            I'm Hoài, a writer and machine learning engineer. I was born and raised in a small
                            rice-farming village in Vietnam.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            I'm deeply passionate about Machine Learning (ML) and Deep Learning (DL), with a particular
                            interest in Computer Vision and Algorithms. Currently, I'm exploring creative applications
                            of AI in education and on edge devices.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            I graduated from FPT Polytechnic College and am currently studying Computer Science and
                            Engineering at the University of Information Technology.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            I love building systems from the ground up — from designing architectures to implementing
                            algorithms from scratch. I enjoy understanding how things truly work, whether it’s
                            optimizing image processing pipelines, crafting efficient code, or designing learning
                            frameworks that balance performance and clarity.
                        </p>
                    </div>

                    <div className="w-[35%]">
                        <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden">
                            <Image
                                src="https://i.pinimg.com/736x/19/5c/15/195c15bc600ba3e50ff5ac3be08c3667.jpg"
                                alt="Profile"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-6 mt-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        In the field of ML and DL, I'm currently learning and applying frameworks like TensorFlow,
                        Keras, and PyTorch to build AI models. I'm especially interested in Computer Vision and
                        deploying intelligent applications on edge devices. I continuously strive to deepen my knowledge
                        in this area, and my goal is to become a professional Deep Learning Engineer in the near future.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        In software development, I've worked with technologies such as Kotlin, Jetpack Compose,
                        Coroutines, Ktor, Room, Retrofit, and Dagger Hilt for mobile apps. On the backend, I prefer
                        using Go to build scalable systems. I'm also passionate about system architecture and follow
                        patterns like Clean Architecture and Domain-Driven Design.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
