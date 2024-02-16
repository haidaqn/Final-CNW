import { ThemeProvider } from '@/components/theme-provider';
import { useEffect, useState } from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './features/Home';
import { Book, BookDetail } from './features/Book';

function App() {
    const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            if (currentScrollTop > 200) setShowScrollButton(true);
            else setShowScrollButton(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ThemeProvider defaultTheme="light" storageKey="theme">
            <div className="relative w-screen h-screen">
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="/" element={<Book />} />
                        <Route path="book/:bid" element={<BookDetail />} />
                    </Route>
                </Routes>
            </div>
            {showScrollButton && (
                <a
                    href="#"
                    className="bg-gray-400 hidden sm:flex fixed  justify-center items-center bottom-6 right-6 p-2 bg-main rounded-full"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <AiFillCaretUp size={24} color="white" />
                </a>
            )}
        </ThemeProvider>
    );
}

export default App;
