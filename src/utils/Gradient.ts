import React from 'react';

interface GradientProps {
    from: string;
    to: string;
    dir: 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top';
    children: React.ReactNode;
}

export default function Gradient  ({ from, to, dir, children }: GradientProps) { {
    const calculateDirection = () => {
        if (dir === 'left-to-right') return 'to right'
        if (dir === 'right-to-left') return 'to left'
        if (dir === 'top-to-bottom') return '180deg'
        if (dir === 'bottom-to-top') return '0deg'
    };

    return React.createElement('span', {
        style: {
            background: `linear-gradient(${calculateDirection()}, ${from}, ${to})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        }
    }, [children])
}
}