import { DeveloperPng } from "@/assets"
import Image from "next/image"
import React from "react"

const AboutPage = () => {
    return (
        <div className="pt-[90px] container mx-auto">
            <div className="flex flex-row mt-10">
                <div className="flex flex-1 flex-col gap-5">
                    <p>
                        Chào bạn, mình là Hoài một kỹ sư máy học và còn là một người viết ✍🏻. Mình sinh ra và lớn lên ở
                        một vùng quê thuộc Đồng bằng sông Cửu Long thuộc Việt Nam.
                    </p>
                    <p>
                        Với niềm đam mê thuật toán, công nghệ, mình đã quyết định đi theo hướng học máy và học sâu, mình
                        rất thích thị giác máy tính mình luôn cố gắng học tập và nghiên cứu mỗi ngày để phát triển và
                        tạo ra sản phẩm có ích phục vụ cho mọi người.
                    </p>

                    <p>
                        Trước đây mình từng học ngành lập trình máy tính ở Cao đẳng FPT Polytechnic, còn hiện tại thì
                        mình quyết định học liên thông lên trường ĐH Công nghệ Thông tin thuộc ĐH Quốc gia TP HCM và
                        khoa mình học là Khoa học và kỹ thuật máy tính.
                    </p>
                </div>

                <div className="w-1/3 h-1/3">
                    <Image src={DeveloperPng} alt="Developer" className="rounded-[50%]" />
                </div>
            </div>

            <div className="flex flex-col gap-5 mt-5">
                <p>
                    Mình có khoảng 2 năm làm Software cụ thể là Mobile và Backend khá nhiều, nhưng có lẽ chỉ đủ phát
                    triển phần mềm ở mức độ trung bình thôi, chưa đủ để phát triển một hệ thống lớn. Trong phần mềm thì
                    mình học được kha khá kiến thức về phần mềm như: design pattern, clean architecture, domain-driven
                    design. Công nghệ mình sử dụng ở phía Mobile là React Native, Jetpack Compose, Coroutines, Room, ...
                    Còn phía Backend thì công nghệ yêu thích của mình là NestJS, tuy nhiên gần đây thì mình thích Go để
                    xây dựng hệ thống hơn.
                </p>
                <p>
                    Về học máy và học sâu, mình rất thích nghiên cứu về việc xây dụng và tối ưu các mô hình. Đặc biệt
                    mình rất quan tâm đến lĩnh vực thị giác máy tính. Công nghệ mình đã và đang sử dụng là Tensorflow,
                    Pytorch, Keras, OpenCV, YOLO, ... Về NLP mình chỉ học qua chứ không thật sự mạnh về nó.
                </p>
                <p>
                    Cuối cùng thì mình là một người rất rất thích thể thao và du lịch, mình thích những trải nghiệm và
                    luôn mong muốn có thể mở rộng hiểu biết của mình nhiều hơn về các nơi mình đến và các nền văn hoá mà
                    mình đi qua.
                </p>
            </div>
        </div>
    )
}

export default AboutPage
