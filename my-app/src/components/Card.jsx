export default function Card({ children, system }) {
    return (
        <div
            className={`rounded-md p-6 shadow-lg${system === 'vampire' ? 'br-vampire-primary' : 'bg-dnd-primary'}`}
        >
            {children}
        </div>
    );
}