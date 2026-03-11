import { Header } from '../components/Header';
import './Errorpage.css';

export function Error404Page() {
    return (
        <>
            <Header />
            <div className="error-404">Page Not Found</div>
        </>
    );
}