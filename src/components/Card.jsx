// Card.jsx (correção de classes)
export default function Card({ children, system }) {
    return (
        <div className={`rounded-md p-6 shadow-lg ${system === 'vampire' ? 'bg-vampire-primary' : 'bg-dnd-primary'}`}>
            {children}
        </div>
    );
}