import { Separator } from "@/components/ui"
import React from "react"

interface WorkExperience {
    position: string
    company: string
    companyUrl?: string
    period: string
    technologies: string
    responsibilities: string[]
}

const workExperiences: WorkExperience[] = [
    {
        position: "Mobile Developer",
        company: "Be Earning",
        companyUrl: "#",
        period: "May - Aug 2024 / Thu Duc city",
        technologies: "Android Kotlin, JNI, Hilt, MLKit, Room Database, NFC, QuickJS",
        responsibilities: [
            "Collaborate with team to implement assigned functionality on knowledge like Firebase, Android Core, Cryptography, Room.",
            "Refactor core sdk on seed generation, keys, wallets and save with room database",
            "Research JNI, QuickJS and implement with GGWare and read CCCD",
            "Implement reading CCCD and Credit Card (Visa, ....) with Kotlin",
        ],
    },
    {
        position: "Mobile Developer",
        company: "Be Earning",
        companyUrl: "#",
        period: "May - Aug 2024 / Thu Duc city",
        technologies: "Android Kotlin, JNI, Hilt, MLKit, Room Database, NFC, QuickJS",
        responsibilities: [
            "Collaborate with team to implement assigned functionality on knowledge like Firebase, Android Core, Cryptography, Room.",
            "Refactor core sdk on seed generation, keys, wallets and save with room database",
            "Research JNI, QuickJS and implement with GGWare and read CCCD",
            "Implement reading CCCD and Credit Card (Visa, ....) with Kotlin",
        ],
    },
    {
        position: "Mobile Developer",
        company: "Be Earning",
        companyUrl: "#",
        period: "May - Aug 2024 / Thu Duc city",
        technologies: "Android Kotlin, JNI, Hilt, MLKit, Room Database, NFC, QuickJS",
        responsibilities: [
            "Collaborate with team to implement assigned functionality on knowledge like Firebase, Android Core, Cryptography, Room.",
            "Refactor core sdk on seed generation, keys, wallets and save with room database",
            "Research JNI, QuickJS and implement with GGWare and read CCCD",
            "Implement reading CCCD and Credit Card (Visa, ....) with Kotlin",
        ],
    },
]

const Works: React.FC = () => {
    return (
        <section className="container mx-auto py-12">
            <h2 className="text-center text-3xl font-bold text-gray-300 mb-16">WORK EXPERIENCE</h2>

            <div className="space-y-12">
                {workExperiences.map((work, index) => (
                    <React.Fragment key={`work-${index}`}>
                        <div key={index} className="flex gap-10">
                            <div className="flex flex-col">
                                <div>
                                    <h3 className="text-[16px] text-foreground">
                                        {work.position},{" "}
                                        {work.companyUrl ? (
                                            <a
                                                href={work.companyUrl}
                                                className="text-green-600 hover:text-green-700 transition-colors"
                                            >
                                                {work.company}
                                            </a>
                                        ) : (
                                            <span className="text-green-600">{work.company}</span>
                                        )}
                                    </h3>
                                    <p className="text-sm text-muted-foreground italic mt-1">{work.period}</p>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col space-y-3">
                                <div>
                                    <p className="text-[16px] text-foreground">Technologies: {work.technologies}</p>
                                </div>

                                <div className="space-y-2">
                                    {work.responsibilities.map((responsibility, idx) => (
                                        <p key={idx} className="text-[16px] text-muted-foreground leading-relaxed">
                                            {responsibility}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {index < workExperiences.length - 1 && <Separator />}
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default Works
