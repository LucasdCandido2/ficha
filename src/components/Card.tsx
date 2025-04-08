interface CardProps {
    children: React.ReactNode;
    system?: string;
}

export default function Card({ children, system }: CardProps) {
    return (
        <div className={`rounded-md p-6 shadow-lg ${system === 'vampire' ? 'bg-vampire-primary' : 'bg-dnd-primary'}`}>
            {children}
        </div>
    );
}