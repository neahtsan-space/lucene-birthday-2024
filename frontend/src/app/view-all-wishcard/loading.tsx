import './loading.css';

export default function Loading(): JSX.Element {
    return (
        <div className="loading-screen">
            <div className="dots-container">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="loading-text">Loading...</div>
        </div>
    );
};
