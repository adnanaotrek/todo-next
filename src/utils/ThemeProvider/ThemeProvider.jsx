"use client";

import { useEffect, useState } from "react";

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "dark";
        document.documentElement.classList.add(storedTheme);
        setTheme(storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <>
            <div className="bg-gray-200 dark:bg-gray-950 text-black dark:text-white flex items-center justify-end py-4 px-10 sticky top-0">
                <button
                    onClick={toggleTheme}
                    className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-400 dark:bg-gray-800 transition-colors duration-300 hover:shadow-lg"
                >
                    <span
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${theme === "light" ? "opacity-0" : "opacity-100"
                            }`}
                    >
                        {/* Sun Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-yellow-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v2.25M12 18.75V21m9-9h-2.25M3 12H5.25m15.364 6.364l-1.591-1.591M6.227 7.227L4.636 5.636m0 12.728 1.591-1.591m12.728-12.728-1.591 1.591M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
                            />
                        </svg>
                    </span>
                    <span
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#1f2937"
                            className="w-5 h-5"
                        >
                            <path
                                d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z">
                            </path>
                        </svg>
                    </span>
                </button>
            </div>
            {children}
        </>
    );
}
