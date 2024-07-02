'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HomePage = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirigir a "/posts" al cargar la página de inicio
        router.replace('/posts');
    }, []);

    // Este componente no necesita renderizar nada en el cliente
    return null;
};

export default HomePage;