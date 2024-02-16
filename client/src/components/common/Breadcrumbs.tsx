import { AiFillCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export interface PathItem {
    text: string;
    path: string;
}

interface BreadcrumbsProps {
    items?: PathItem[];
}
export const Breadcrumbs = (props: BreadcrumbsProps) => {
    const { items } = props;

    return (
        <div className="hidden sm:flex gap-3 sm:px-[100px] py-2">
            {items?.map((item, index) => (
                <div
                    className=" flex items-center justify-center gap-4"
                    key={index + index + item.path}
                >
                    <Link
                        to={item.path}
                        className={`text-lg capitalize gap-3 ${
                            index !== items.length - 1 && 'hover:text-[#0A68FF] cursor-pointer'
                        }`}
                    >
                        {item.text}
                    </Link>
                    <span>{index !== items.length - 1 && <AiFillCaretRight />}</span>
                </div>
            ))}
        </div>
    );
};
