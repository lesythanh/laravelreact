import { FaHome, FaUser } from "react-icons/fa";

export const sidebarItem = [
    {
        label: 'MAIN',
        items: [
            {
                icon: <FaHome className="text-sm mr-2" />,
                active: ['dashboard'],
                lable: 'Dashboard',
                link: [
                    {
                        title: 'Thống kê chung', to: '/dashboard',
                    },
                    {
                        title: 'Thống kê đơn hàng', to: '/dashboard/order',
                    }
                ]
            }
        ]
    },
    {
        label: 'FUNCTION',
        items: [
            {
                icon: <FaUser className="text-sm mr-2" />,
                active: ['user'],
                lable: 'Quản Lý Thành Viên',
                link: [
                    {
                        title: 'Quản Lý Nhóm Thành Viên', to: '/user/catalogue',
                    },
                    {
                        title: 'Quản Lý Thành Viên', to: '/user',
                    }
                ]
            }
        ]
    }
]