import { useEffect, useState } from "react";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-50 transition-all duration-75"
            style={{
                transform: `translate(${position.x - 10}px, ${position.y - 8}px)`,
            }}
        />
    );
};

export default Cursor;