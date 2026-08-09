# 🍋 Lemon 영어회화 플랫폼

## Front-end 소개

- **🍋 레몬 영어회화 플랫폼**
  데일리 영어 회화 표현을 피드로 공유하고, 채팅을 통해 실시간으로 연습할 수 있는 커뮤니티 플랫폼. 공유하고 싶은 표현을 게시하고 팀원들과 자유롭게 대화하며 학습할 수 있는 환경을 제공함.
- **기획부터 백엔드 연동까지 1인 프론트엔드 개발**
  초기 서비스 기획부터 UI/UX 화면 구성, 컴포넌트 설계, 백엔드 API 연동까지 프론트엔드의 전 과정을 주도적으로 단독 구현함.
- **React 기반의 SPA 구현**
  

## 개발 인원 및 기간
- **개발 기간** : 2026. 05. 29 ~ 2026. 08. 09
- **개발 인원** : 1명 (기획, 프론트엔드, 백엔드 전 과정 1인 개발)
  

## 사용 기술 및 도구 (Tech Stack & Tools)
- 기획: [🍋 레몬 기획 노션](https://spotted-beard-c11.notion.site/3aeb3a32364e801fa6d6ec1829a624b3?source=copy_link)
- **Library/Framework** : React
- **Language** : JavaScript 
- **Styling** : CSS Modules / Styled-Components 
- **HTTP/Network** : WebSocket (STOMP)


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
- Context을 이용하여 userId를 가져오는게 안정적인가 응답 dto를 가져와야하는가?

## 회고
리액트에서 가장 중요한 것은 State 상태가 언제 변하는지 이해하는 것입니다

리액트에서는 state가 변경될때마다 재렌더링될 수 있습니다. 그래서 useCallback이나 메모이제이션으로 불필요한 재렌더링을 막는 것이 중요함을 느꼈습니다. 사실 이 부분은 아직 프론트에서 완벽하게 클린코드를 하지 못한 부분이고, 체화가 어려운 부분 같습니다. 일반적인 프로그래밍 언어와 달리 코드가 순차적으로 동작하기 보다는 의존성배열을 어떻게 주는지, 메모이제이션에 의해 바뀌지 않는 값인지에 따라 동작흐름을 개발자 알고 코드작성을 하는 것이 중요했습니다. 

useEffect에서 생명주기도 이해하며 클린업의 시점을 아니까 스트릿모드 시에 왜 2번 로그에 찍히는지(오류가 아니라 잘 돼가는 신호) 알고 넘어갈 수 있었습니다. 

그리고 가능한 컴포넌트화 하여 재사용이 가능한 로직을 만들어야 합니다. 첫번째 일단 협업 시 부모컴포넌트에서 jsx에 의해 코드 가독성이 떨어지면 안되고, Avatar나 Header처럼 로그인 한 유저의 정보를 Context으로 들고다니는 컴포넌트는 이후에 재렌더링 시에 바로 유저의 id를 할당받을 수 있고, 무엇보다도 굳이 백엔드에서 userId를 중복해서 응답받지않아도 되었습니다. 장단점이 있겠지만 이런식으로의 로그인 한 유저의 id를 어떤 식으로 관리하는지가 서비스페이지의 성능을 판가름 할 것 같습니다.

디자인 설계 패턴에 해당하는 AOP가 리액트에서는 CustomHook이라고 느꼈습니다. 리액트 문법을 알고 사용하니 의식적으로 반복되는 기능들을 커스텀훅으로 묶게 되었습니다. API 호출을 하는 Fetch 같은 기능도 커스텀훅으로 묶어서 어떤 페이지에서 코드가독성 좋게 묶을 수 있다고 생각하였고, 헬퍼텍스트처럼 유효성검사 또한 커스텀 훅으로 관리해서 편하다고 느꼈습니다. 하지만, 클린코드 시점에서 또는 협업에서는 안티패턴일 수 있음을 염두하고 이 부분 사용은 조금 조심스럽습니다..

리액트의 안티문법을 최대한 피하려고 하였습니다. State 끌어올리기, 컨텍스트 이용해서 props drilling 피하기 등이 그 예시였습니다. 

종합적으로 리액트는 사용하면 할수록 클린코드 해야겠다는 부분이 계속해서 보이는 것 같습니다. 재사용이 가능하도록 코드를 정리하면 너무 과도하게 묶여 안티패턴이 아닌가? 하는 고민의 반복이었습니다. 이러한 것은 잘 작성 된 리액트 코드나 개념을 더 공부해야 해결될 문제 같았습니다. 그래도 이후에 리액트를 다시 한다면,

- **컴포넌트화를 백엔드의 db설계처럼 집중할 것입니다.** 부모컴포넌트에 어떤 함수를 쓰고 전체 폴더구조는 어떻게 가져가야할지 프롬트엔드가 코드 작성할 때 청사진을 가질 수 있습니다.
- 항상 state의 렌더링시점을 유의해야합니다.
- 의존성배열에서 안티패턴을 조심하자
