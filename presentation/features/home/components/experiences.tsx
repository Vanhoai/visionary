"use client"

import * as React from "react"
import {
    PyTorch,
    CPlusPlus,
    Kotlin,
    Python,
    RustDark,
    Figma,
    Android,
} from "developer-icons"
import Image from "next/image"
import { OpenCvSvg } from "@/core"

const CORE_RADIUS_PERCENT = 0.15
const INNER_RADIUS_PERCENT = 0.4
const OUTER_RADIUS_PERCENT = 0.8

type ExperienceType = "TECH" | "NONE"

interface ExperienceItem {
    icon: React.ReactNode | string
    angle: number
    size: number
    type: ExperienceType
}

const innerItems: ExperienceItem[] = [
    { icon: <CPlusPlus size={50} />, angle: 340, size: 100, type: "TECH" },
    { icon: "#FFA3A3", angle: 40, size: 24, type: "NONE" },
    { icon: <Kotlin size={48} />, angle: 90, size: 100, type: "TECH" },
    { icon: <RustDark size={56} />, angle: 160, size: 100, type: "TECH" },
    { icon: "#41BA3F", angle: 210, size: 40, type: "NONE" },
    { icon: <Python size={60} />, angle: 260, size: 120, type: "TECH" },
]

const outerItems: ExperienceItem[] = [
    {
        icon: <Image src={OpenCvSvg} alt="OpenCV" width={90} height={90} />,
        angle: 20,
        size: 160,
        type: "TECH",
    },
    { icon: "#FF5E5E", angle: 70, size: 60, type: "NONE" },
    { icon: <Figma size={80} />, angle: 120, size: 140, type: "TECH" },
    { icon: <Android size={80} />, angle: 200, size: 160, type: "TECH" },
    { icon: "#FFBC6F", angle: 240, size: 40, type: "NONE" },
    { icon: <PyTorch size={100} />, angle: 300, size: 160, type: "TECH" },
    { icon: "#41BA3F", angle: 340, size: 24, type: "NONE" },
]

const Experiences: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null)

    const [containerSize, setContainerSize] = React.useState<number | null>(
        null,
    )
    const [coreRadius, setCoreRadius] = React.useState<number>(0)
    const [innerRadius, setInnerRadius] = React.useState<number>(0)
    const [outerRadius, setOuterRadius] = React.useState<number>(0)

    React.useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth
            setContainerSize(width)
            setCoreRadius(width * CORE_RADIUS_PERCENT)
            setInnerRadius(width * INNER_RADIUS_PERCENT)
            setOuterRadius(width * OUTER_RADIUS_PERCENT)
        }
    }, [containerRef])

    const calculatePosition = (angle: number, radius: number) => {
        const radian = (angle - 90) * (Math.PI / 180)
        const x = radius / 2 + (radius / 2) * Math.cos(radian)
        const y = radius / 2 + (radius / 2) * Math.sin(radian)
        return { x, y }
    }

    return (
        <div className="w-full min-h-screen py-12">
            <h2 className="text-center text-3xl font-bold text-gray-300 mb-8">
                EXPERIENCE WITH
            </h2>
            <style jsx>{`
                @keyframes rotateClockwise {
                    from {
                        transform: translate(-50%, -50%) rotate(0deg);
                    }
                    to {
                        transform: translate(-50%, -50%) rotate(360deg);
                    }
                }

                @keyframes rotateCounterClockwise {
                    from {
                        transform: translate(-50%, -50%) rotate(0deg);
                    }
                    to {
                        transform: translate(-50%, -50%) rotate(-360deg);
                    }
                }

                @keyframes rotateItemReverse {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(-360deg);
                    }
                }

                @keyframes rotateItemReverseCounter {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                .inner-orbit {
                    animation: rotateClockwise 30s linear infinite;
                }

                .outer-orbit {
                    animation: rotateCounterClockwise 40s linear infinite;
                }

                .inner-item-content {
                    animation: rotateItemReverse 30s linear infinite;
                }

                .outer-item-content {
                    animation: rotateItemReverseCounter 40s linear infinite;
                }

                .experience-item {
                    transition: all 0.3s;
                    cursor: pointer;
                }
            `}</style>

            <div
                ref={containerRef}
                className="relative w-full max-w-5xl mx-auto"
                style={{ height: containerSize ? containerSize : undefined }}
            >
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200"
                    style={{
                        width: coreRadius,
                        height: coreRadius,
                        borderRadius: coreRadius / 2,
                    }}
                />

                <div
                    className="bg-transparent absolute top-1/2 left-1/2 inner-orbit rounded-full border-dashed"
                    style={{
                        width: innerRadius,
                        height: innerRadius,
                        borderRadius: innerRadius / 2,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "#DFDFDF",
                    }}
                >
                    {innerItems.map((item, index) => {
                        const pos = calculatePosition(item.angle, innerRadius)
                        if (item.type === "NONE") {
                            return (
                                <div
                                    key={`inner-${index}`}
                                    className="absolute experience-item"
                                    style={{
                                        left: `calc(50% + ${
                                            pos.x - innerRadius / 2
                                        }px)`,
                                        top: `calc(50% + ${
                                            pos.y - innerRadius / 2
                                        }px)`,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                >
                                    <div
                                        className="item-wrapper rounded-full"
                                        style={{
                                            width: item.size,
                                            height: item.size,
                                            backgroundColor:
                                                item.icon as string,
                                        }}
                                    >
                                        <div className="inner-item-content w-full h-full" />
                                    </div>
                                </div>
                            )
                        }

                        return (
                            <div
                                key={`inner-${index}`}
                                className="absolute experience-item"
                                style={{
                                    left: `calc(50% + ${
                                        pos.x - innerRadius / 2
                                    }px)`,
                                    top: `calc(50% + ${
                                        pos.y - innerRadius / 2
                                    }px)`,
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                <div
                                    className="item-wrapper bg-white rounded-full flex items-center justify-center font-bold border border-gray-300"
                                    style={{
                                        width: item.size,
                                        height: item.size,
                                    }}
                                >
                                    <div className="inner-item-content text-gray-800 text-2xl">
                                        {item.icon}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div
                    className="bg-transparent absolute top-1/2 left-1/2 outer-orbit rounded-full border-dashed"
                    style={{
                        width: outerRadius,
                        height: outerRadius,
                        borderRadius: outerRadius / 2,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "#DFDFDF",
                    }}
                >
                    {outerItems.map((item, index) => {
                        const pos = calculatePosition(item.angle, outerRadius)
                        if (item.type === "NONE") {
                            return (
                                <div
                                    key={`outer-${index}`}
                                    className="absolute experience-item"
                                    style={{
                                        left: `calc(50% + ${
                                            pos.x - outerRadius / 2
                                        }px)`,
                                        top: `calc(50% + ${
                                            pos.y - outerRadius / 2
                                        }px)`,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                >
                                    <div
                                        className="item-wrapper rounded-full"
                                        style={{
                                            width: item.size,
                                            height: item.size,
                                            backgroundColor:
                                                item.icon as string,
                                        }}
                                    >
                                        <div className="outer-item-content w-full h-full" />
                                    </div>
                                </div>
                            )
                        }

                        return (
                            <div
                                key={`outer-${index}`}
                                className="absolute experience-item"
                                style={{
                                    left: `calc(50% + ${
                                        pos.x - outerRadius / 2
                                    }px)`,
                                    top: `calc(50% + ${
                                        pos.y - outerRadius / 2
                                    }px)`,
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                <div
                                    className="item-wrapper bg-white rounded-full flex items-center justify-center font-bold border border-gray-300"
                                    style={{
                                        width: item.size,
                                        height: item.size,
                                    }}
                                >
                                    <div className="outer-item-content text-gray-800 text-2xl">
                                        {item.icon}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Experiences
