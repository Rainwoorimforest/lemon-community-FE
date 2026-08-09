# 🍋 Lemon 영어회화 플랫폼

## Front-end 소개

- **🍋 레몬 영어회화 플랫폼**
  데일리 영어 회화 표현을 피드로 공유하고, 채팅을 통해 실시간으로 연습할 수 있는 커뮤니티 플랫폼. 공유하고 싶은 표현을 게시하고 팀원들과 자유롭게 대화하며 학습할 수 있는 환경을 제공함.
- **기획부터 백엔드 연동까지 1인 프론트엔드 개발**
  초기 서비스 기획부터 UI/UX 화면 구성, 컴포넌트 설계, 백엔드 API 연동까지 프론트엔드의 전 과정을 주도적으로 단독 구현함.
- **React 기반의 SPA 구현**
  React 라이브러리를 활용하여 Single Page Application(SPA)으로 구축해 부드럽고 빠른 사용자 경험(UX)을 제공함.
  

## 개발 인원 및 기간
- **개발 기간** : 2026. 05. 29 ~ 2026. 08. 09
- **개발 인원** : 1명 (기획, 프론트엔드, 백엔드 전 과정 1인 개발)
  

## 사용 기술 및 도구 (Tech Stack & Tools)
- 기획: [🍋 레몬 기획 노션](https://spotted-beard-c11.notion.site/3aeb3a32364e801fa6d6ec1829a624b3?source=copy_link)
- **Library/Framework** : React
- **Language** : JavaScript / TypeScript (사용하신 것 남기기)
- **Styling** : CSS Modules / Styled-Components / Tailwind CSS (사용하신 것 남기기)
- **State Management** : Zustand / Redux / Context API (사용하신 것 남기기)
- **HTTP/Network** : Axios, WebSocket (STOMP)


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
</details>

## 서비스 화면
#### 홈
|메인 페이지| 로그인 페이지 | 회원가입 페이지 |
|:---:|:---:|:---:|
| ![홈페이지](/readme_images/home.png)| ![로그인 페이지](/readme_images/login.png) | ![회원가입 페이지](/readme_images/signup.png) |

##### 게시글 
|게시글 전체 조회|게시글 상세|게시글 작성 및 수정|
|:---:|:---:|:---:|
| ![게시글 전체 목록](/readme_images/post_list.png)|![게시글 상세 조회](/readme_images/post_detail_top.png)|![게시글 작성 및 수정](/readme_images/post_write.png)|

#### 댓글/좋아요/조회수
|게시글 통계와 댓글|댓글 수정|댓글 삭제 모달|
|:---:|:---:|:---:|
| ![게시글 통계 목록 및 댓글](/readme_images/post_stat_comment.png)|![댓글 조회](/readme_images/comment_update.png)|![댓글 작성 및 수정](/readme_images/comment_modal.png)|

#### 채팅
|채팅방|채팅방 햄버거 Bar(방장)|채팅방 햄버거 Bar(일반)|
|:---:|:---:|:---:|
| ![채팅방](/readme_images/chat.png)|![채팅방 햄버거 Bar(방장)](/readme_images/chat_setting_host.png)|![채팅방 햄버거 Bar(일반)](/readme_images/chat_setting_general.png)|

|채팅방 나가기|
|:---:|
| ![채팅방 나가기 모달](/readme_images/chat_modal.png)|

## 트러블 슈팅
- Context

## 회고
..
