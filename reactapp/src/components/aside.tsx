import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"

import '../assets/scss/Accordion.scss'
import '../assets/scss/Aside.scss'
import { FaHome, FaUser, FaCube } from "react-icons/fa";
import { Link } from "react-router-dom";


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
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-[#a3aed1] rounded-lg bg-[rgba(255, 255, 255, .05)]">
                            <div className="menu-label flex flex-1 items-center">
                                <FaHome className="text-sm mr-5 " />
                                <span>Dashboard</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="border-0 mt-2">
                            <ul>
                                <li className="pl-6">
                                    <Link className="side-menu__item block text-[#a3aed1] text-13px relative hover:text-white rounded-lg hover:bg-[rgba(255, 255, 255, .05)]" to="/dashboard">
                                        Thống kê chung
                                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 border border-solid border-primary rounded-full border-white"></span>
                                    </Link>
                                </li>
                                <li className="pl-6">
                                    <Link className="side-menu__item block text-[#a3aed1] text-13px relative hover:text-white rounded-lg hover:bg-[rgba(255, 255, 255, .05)]" to="/dashboard/order">
                                        Thống kê đơn hàng
                                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 border border-solid border-primary rounded-full border-white"></span>
                                    </Link>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="menu-category px-6 py-3 text-[#a3aed1] text-10px tracking-wider font-semibold opacity-50 mt-10px">
                    FUNCTION
                </div>
                <Accordion type="single" collapsible className="px-3 sidebar-accordion">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-[#a3aed1] rounded-lg">
                            <div className="menu-label flex flex-1 items-center">
                                <FaUser className="text-sm mr-2" />
                                <span>QL Thành Viên</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="border-0 mt-2">
                            <ul>
                                {/* <li className="pl-6">
                                    <Link className="side-menu__item block text-[#a3aed1] text-13px relative hover:text-white rounded-lg hover:bg-[rgba(255, 255, 255, .05)]" href="">
                                        Quản Lý Nhóm Thành Viên
                                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 border border-solid border-primary rounded-full border-white"></span>
                                    </Link>
                                </li> */}
                                <li className="pl-6">
                                    <Link className="side-menu__item block text-[#a3aed1] text-13px relative hover:text-white rounded-lg hover:bg-[rgba(255, 255, 255, .05)]" to="/user">
                                        Quản Lý Thành Viên
                                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 border border-solid border-primary rounded-full border-white"></span>
                                    </Link>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </aside>
    );
}

export default Aside;
