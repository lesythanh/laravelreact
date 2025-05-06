import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"

import '../assets/scss/Accordion.scss'
import { FaHome, FaUser, FaCube } from "react-icons/fa";


const Aside = () => {
    return (
        <aside className="app-aside w-60 bg-[#111c43] h-full fixed">
            <div className="main-sidebar-header w-60 p-3.5 fixed z-10 h-14 text-center border-solid border-b border-menu-border">
                <a href="" className="inline-block"><img className="h-8" src="https://cdn-media.sforum.vn/storage/app/media/anh-dep-8.jpg" alt="" /></a>
            </div>
            <div className="main-sidebar mt-14">
                <div className="menu-category px-6 py-3 text-[#a3aed1] text-10px tracking-wider font-semibold opacity-50">
                    MAIN
                </div>
                <Accordion type="single" collapsible className="px-3 sidebar-accordion">
                    <AccordionItem value="item-1" className="rounded-lg bg-[rgba(255, 255, 255, .05)]">
                        <AccordionTrigger className="text-[#a3aed1]">
                            <div className="menu-label flex flex-1 items-center">
                                <FaHome className="text-sm mr-5 " />
                                <span>Dashboard</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="border-0">
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="menu-category px-6 py-3 text-[#a3aed1] text-10px tracking-wider font-semibold opacity-50">
                    FUNCTION
                </div>
                <Accordion type="single" collapsible className="px-3 sidebar-accordion">
                    <AccordionItem value="item-1" className="rounded-lg">
                        <AccordionTrigger className="text-[#a3aed1]">
                            <div className="menu-label flex flex-1 items-center">
                                <FaUser className="text-sm mr-5 " />
                                <span>QL Thành Viên</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="border-0">
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="rounded-lg">
                        <AccordionTrigger className="text-[#a3aed1]">
                            <div className="menu-label flex flex-1 items-center">
                                <FaCube className="text-sm mr-5 " />
                                <span>QL Sản Phẩm</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="border-0">
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </aside>
    );
}

export default Aside;
