import { use, useEffect, useState } from 'react';

export const BotaoDarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const temaSalvo = localStorage.getItem('theme');
        if(temaSalvo === 'dark'){
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    }, []);

    const trocaTema = () => {
        const novoTema = !isDark;
        setIsDark(novoTema);

        document.documentElement.classList.toggle('dark', novoTema);
        localStorage.setItem('theme', novoTema ? 'dark' : 'light');
    };

    return (
        <button onClick={trocaTema} className='p-1.5 mr-5 bg-gray-300 dark:bg-gray-700 text-2xl text-black dark:text-white rounded transition-all'>{isDark? '🌙' : '☀️' }</button>
    )
}

