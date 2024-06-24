import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
        const onMoseMove = ({ x, y }) => {
            const coords = { x, y };
            console.log(coords);
        }

        window.addEventListener('mousemove', onMoseMove);
        return () => {
            window.removeEventListener('mousemove', onMoseMove);
        }
    }, [])

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
