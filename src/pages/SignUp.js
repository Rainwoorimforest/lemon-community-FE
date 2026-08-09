import React, { useState, useCallback, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js';
import { useInput } from '../hooks/useInput.js';
import { validateEmail, validatePassword, validatePasswordCheck, validateNickname } from '../utils/validators.js';
import InputField from '../components/InputField.js';
import Avatar from '../components/Avatar.js';

import '../css/signup.css';


export default function SignUp() {
    const navigate = useNavigate();
    const [signUpdata, setSignUpData] = useState(null);
    const [profileFile, setProfileFile] = useState(null); // 실제 서버로 보낼 파일 객체
    const [previewUrl, setPreviewUrl] = useState("");     // 브라우저 렌더링용 임시 임베드 주소

    const emailInput = useInput("", validateEmail);
    const passwordInput = useInput("", validatePassword);
    const passwordCheckInput = useInput("", (val) => validatePasswordCheck(passwordInput.value, val));
    const nicknameInput = useInput("", validateNickname); 

    const isFormValid = 
        emailInput.value && !emailInput.error &&
        passwordInput.value && !passwordInput.error &&
        passwordCheckInput.value && !passwordCheckInput.error &&
        nicknameInput.value && !nicknameInput.error;

    
    const { data: fetchedData, loading, error } = useFetch(
        signUpdata ? '/users/signup' : null,
        {
          method: 'POST',
          body: signUpdata, 
        },
        [signUpdata]
    );

    useEffect(() => {
        if (fetchedData) {
            alert("회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.");
            navigate('/login'); 
        }
    }, [fetchedData, navigate]);

    useEffect(() => {
        if (error) {
            console.log(error.message);
            alert("회원가입 실패. 다시 시도해 주세요.");
            setSignUpData(null);
        }
    }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isFormValid) {
            const formData = new FormData();
            const payload = {
                email: emailInput.value,
                password: passwordInput.value,
                passwordCheck: passwordCheckInput.value,
                nickname: nicknameInput.value
            };
            formData.append("request", new Blob([JSON.stringify(payload)], { type: "application/json" }));
            
            if (profileFile) {
                formData.append("file", profileFile);
            }
            
            setSignUpData(formData);
        } else {
            alert("입력 정보를 다시 확인해 주세요.");
        }
    };

    // 이미지 받고 처리 핸들러 // TODO: 11,12w 이후 보완하기
    const handleProfileChange = (e) => {
        const file = e.target.files[0]; 
        if (!file) return;

        setProfileFile(file);

        // 화면에 보여주기 위한 임시 브라우저 탭 참조 주소 생성
        const nextPreviewUrl = URL.createObjectURL(file);
        setPreviewUrl(nextPreviewUrl);
    };



    
    const handleGoToLogin = useCallback(() => {
        navigate(`/login`); 
    }, [navigate]);
    
    return (
        <div className="signup-page">
            <div className="signup-card">

                {/* ── 왼쪽 소개 패널 ── */}
                <div className="signup-panel">
                    <div>
                        {/* 로고 */}
                        <div className="signup-panel__logo">
                            <div className="signup-panel__logo-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 2C16 2 22 8 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 8 8 2 12 2Z" fill="none" />
                                </svg>
                            </div>
                            <span className="signup-panel__logo-name">Lemon English</span>
                        </div>

                        {/* 메인 타이틀 */}
                        <h2 className="signup-panel__heading">
                            지금 바로<br />시작하세요
                        </h2>
                        <p className="signup-panel__desc">
                            상쾌하게 단단해지는<br />우리의 영어 회화 시간
                        </p>
                    </div>

                    {/* 왼쪽 지면 */}
                    <ul className="signup-panel__stats">
                        <li className="signup-panel__stat">
                            <span className="signup-panel__stat-label">등록 회원</span>
                            <span className="signup-panel__stat-value">12,000+</span>
                        </li>
                        <li className="signup-panel__stat">
                            <span className="signup-panel__stat-label">게시글</span>
                            <span className="signup-panel__stat-value">48,000+</span>
                        </li>
                        <li className="signup-panel__stat">
                            <span className="signup-panel__stat-label">평균 만족도</span>
                            <span className="signup-panel__stat-value">4.9★</span>
                        </li>
                    </ul>

                    {/* 푸터 카피라이트 */}
                    <div className="signup-panel__footer">
                        <p className="signup-panel__footer-text">© 2026 Lemon English</p>
                    </div>
                </div>

                {/* ── 오른쪽 폼 영역 ── */}
                <div className="signup-form-area">
                    <div className="mb-6">
                        <h1 className="signup-form-area__title">회원가입</h1>
                        <p className="signup-form-area__subtitle">정보를 입력하고 커뮤니티에 참여하세요</p>
                    </div>

                    {/* 전체 조율을 하는 form 태그 */}
                    <form id="signupForm" className="signup-form" onSubmit={handleSubmit}>
                        
                        {/* 프로필 이미지 업로드 영역 */}
                        <div className="profile-upload-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                            <Avatar 
                                src={previewUrl} 
                                nickname={nicknameInput.value}
                                size={100}
                                className="profile-preview"
                                onClick={() => document.getElementById('profileImgInput').click()}
                            />
                            <label htmlFor="profileImgInput" className="btn-upload">
                                프로필 사진 선택
                            </label>

                            <input 
                                type="file" 
                                id="profileImgInput" 
                                accept="image/*" 
                                style={{ display: 'none' }} 
                                onChange={handleProfileChange}
                            />
                            
                            <p className="field__helper field__helper--hint" id="profilImageHelper">*프로필 사진을 추가해주세요.</p>
                        </div>

                        <InputField
                            label="이메일"
                            type="email"
                            id="emailInput"
                            placeholder="example@email.com"
                            autoComplete="off"
                            value={emailInput.value}
                            onChange={emailInput.onChange}
                            errorMessage={emailInput.error}
                            helperText="로그인에 사용할 이메일 주소"
                        />
                        
                        <InputField
                            label="비밀번호"
                            type="password"
                            id="passwordInput"
                            placeholder="8자 이상 입력하세요"
                            autoComplete="new-password"
                            value={passwordInput.value}
                            onChange={passwordInput.onChange}
                            errorMessage={passwordInput.error}
                            helperText="영문, 숫자 조합 8자 이상 권장"
                        />
                        
                        <InputField
                            label="비밀번호 확인"
                            type="password"
                            id="passwordCheckInput" 
                            placeholder="비밀번호를 다시 입력하세요"
                            autoComplete="new-password"
                            value={passwordCheckInput.value}
                            onChange={passwordCheckInput.onChange}
                            errorMessage={passwordCheckInput.error}
                            helperText="위에 입력한 비밀번호와 동일하게 입력하세요."
                        />
                        
                        <InputField
                            label="닉네임"
                            type="text"
                            id="nicknameInput"
                            placeholder="이름 또는 닉네임 입력"
                            value={nicknameInput.value}
                            onChange={nicknameInput.onChange}
                            errorMessage={nicknameInput.error}
                            helperText="실명 또는 닉네임 (2자 이상)"
                        />

                        {/* 가입하기 버튼 */}
                        <button type="submit" id="signupSubmitBtn" className="btn-primary" disabled={!isFormValid || loading}>
                            {loading ? "가입 중..." : "회원가입"}
                        </button>

                        {/* 결과 알림 */}
                        {fetchedData && <p style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>회원가입 성공!</p>}
                        {error && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>가입 실패: {error.message}</p>}
                    </form>

                    {/* 하단 로그인 전환 링크 */}
                    <div className="signup-switch">
                        <span>이미 계정이 있으신가요? </span>
                        <button type="button" id="goToLoginBtn" className="signup-switch__link" onClick={handleGoToLogin}>로그인 하러가기</button>
                    </div>
                </div>

            </div>
        </div>
    );

}