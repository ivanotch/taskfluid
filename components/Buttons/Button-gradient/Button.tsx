
import './styles.css';

export default function ButtonGradient({children, onClick}: {children: string, onClick: () => void}) {
    
    return (
        <button type='button' onClick={onClick}>{children}</button>
    );
}