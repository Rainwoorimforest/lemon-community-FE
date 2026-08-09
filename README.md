# 🍋 Lemon 영어회화 플랫폼

## Front-end 소개

데일리 영어 회화 표현을 피드로 공유하고 채팅으로 연습할 수 있는 _🍋레몬 영어회화 플랫폼_입니다.
공유하고 싶은 영어 표현을 게시하고, 팀원들과 표현을 자유롭게 연습해볼 수 있습니다.
React 라이브러리를 사용하여 구현하였고, 이외에 초기 프로젝트 기획, 화면구성, 백엔드 연결까지 직접 구현하였습니다.

## 개발 인원 및 기간

- 개발기간 : 2026-05-29 ~ 2026-08-09
- 개발 인원 : 프론트엔드/백엔드 1명 (본인)

## 사용 기술 및 tools

- 개발: React
- 기획: [🍋 레몬 기획 노션](https://spotted-beard-c11.notion.site/3aeb3a32364e801fa6d6ec1829a624b3?source=copy_link)

## 폴더 구조
<details>
<summary><b>📂 프론트엔드 폴더 구조 보기 (React)</b></summary>
<div markdown="1">

```text
📦 blue-community (Frontend)
 ┣ 📂 public
 ┃ ┗ 📜 index.html              # 메인 HTML 파일
 ┣ 📂 src
 ┃ ┣ 📂 components              # 공통 UI 컴포넌트
 ┃ ┃ ┣ 📂 chat                  # 채팅방 전용 하위 컴포넌트들
 ┃ ┃ ┣ 📜 Header.js             # 상단 네비게이션 헤더
 ┃ ┃ ┣ 📜 InputField.js         # 공통 입력 폼 컴포넌트
 ┃ ┃ ┣ 📜 Modal.js              # 공통 모달 컴포넌트
 ┃ ┃ ┗ 📜 Sidebar.js            # 사이드바 컴포넌트
 ┃ ┣ 📂 context
 ┃ ┃ ┗ 📜 AuthContext.js        # 전역 로그인 상태 관리 (Context API)
 ┃ ┣ 📂 css                     # 스타일시트 모음
 ┃ ┃ ┣ 📜 tokens.css            # 전역 디자인 시스템 (컬러, 여백 등)
 ┃ ┃ ┗ 📜 *.css                 # 각 페이지 및 컴포넌트별 스타일
 ┃ ┣ 📂 hooks                   # 커스텀 훅 모음
 ┃ ┃ ┣ 📜 useFetch.js           # API 통신 커스텀 훅
 ┃ ┃ ┣ 📜 useInput.js           # 인풋 폼 유효성 검사 훅
 ┃ ┃ ┗ 📜 useLoadData.js        # 무한 스크롤 및 데이터 로드 훅
 ┃ ┣ 📂 mock-data               # 목업(테스트용) 데이터 폴더
 ┃ ┣ 📂 pages                   # 화면 라우팅 페이지 컴포넌트
 ┃ ┃ ┣ 📜 Home.js               # 메인 랜딩 페이지
 ┃ ┃ ┣ 📜 Login.js              # 로그인 페이지
 ┃ ┃ ┣ 📜 SignUp.js             # 회원가입 페이지
 ┃ ┃ ┣ 📜 PostList.js           # 게시글 전체 목록 페이지 (/board)
 ┃ ┃ ┣ 📜 PostDetail.js         # 게시글 상세 페이지
 ┃ ┃ ┣ 📜 PostWrite.js          # 게시글 작성/수정 페이지
 ┃ ┃ ┣ 📜 UserInfoUpdate.js     # 회원 프로필 수정 페이지 (/profile)
 ┃ ┃ ┣ 📜 PasswordUpdate.js     # 비밀번호 변경 페이지
 ┃ ┃ ┗ 📜 ChatDetail.js         # 실시간 채팅방 페이지
 ┃ ┣ 📂 utils
 ┃ ┃ ┗ 📜 validators.js         # 정규식 및 유효성 검사 유틸리티
 ┃ ┣ 📜 App.js                  # 메인 라우터 설정 파일
 ┃ ┣ 📜 index.css               # 전역 기본 스타일 
 ┃ ┗ 📜 index.js                # 리액트 진입점 (Entry Point)
 ┣ 📜 .gitignore                # Git 제외 파일 목록
 ┗ 📜 package.json              # 프로젝트 의존성 관리 파일
```

## 서비스 화면


## 트러블 슈팅
- Context

## 회고
