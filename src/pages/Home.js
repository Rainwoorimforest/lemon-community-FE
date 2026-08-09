import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

export default function Home() {
    const navigate = useNavigate();

    const handleGoToLogin = useCallback(() => {
        navigate(`/login`);
    }, [navigate]);

    return (
        <div className="home-container">
            {/* Decorative background elements */}
            <div className="decorative-circle circle-1"></div>
            <div className="decorative-circle circle-2"></div>

            <div className="home-content">
                <div className="lemon-icon">🍋</div>
                <h1 className="home-title">Lemon English</h1>
                <p className="home-subtitle">
                    상큼하고 즐거운 영어 회화의 시작!<br />
                    레몬 잉글리시와 함께 매일매일 새로운 표현을 배워보세요.
                </p>
            </div>

            <div className="start-button-wrapper">
                <button type="button" className="start-button" onClick={handleGoToLogin}>
                    시작하기
                </button>
            </div>
        </div>
    );
}