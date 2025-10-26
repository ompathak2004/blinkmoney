interface BackButtonProps {
    onClick?: () => void;
    className?: string;
}

export function BackButton({ onClick, className = "" }: BackButtonProps) {
    const handleBack = () => {
        if (onClick) {
            onClick();
        } else {
            window.history.back();
        }
    };

    return (
        <button
            onClick={handleBack}
            className={`flex items-center gap-2 px-2 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 group cursor-pointer ${className}`}
            aria-label="Go back"
        >
            <div className="w-4 h-4 md:w-6 md:h-6 flex items-center justify-center">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                >
                    <path
                        d="M15 18L9 12L15 6"
                        stroke="#1E1E1E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <span className="font-semibold text-sm md:text-base leading-[140%] tracking-[0.01em] text-[#1E1E1E] underline decoration-1 underline-offset-2 group-hover:no-underline transition-all duration-200">
                Back
            </span>
        </button>
    );
}
