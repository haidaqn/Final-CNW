import { Footer, Header } from '@/components/common';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Outlet } from 'react-router-dom';

export const Home = () => {
    const breadcrumb = [
        {
            path: '/',
            text: 'Trang chủ',
        },
        {
            path: '#',
            text: 'Nhà Sách Tiki',
        },
    ];

    return (
        <div className="bg-gray-100 ">
            <Header />
            <Breadcrumbs items={breadcrumb} />
            <Outlet />
            <Footer />
        </div>
    );
};
