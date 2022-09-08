# 🎬 영화 트레일러 사이트

## 📌 프로젝트 소개

영화 트레일러 사이트 만들기

## 📌 배포

https://movie-trailer-fe-5.netlify.app/
<br />

## 📌 프로젝트 설치 및 시작

#### 프로젝트 클론

```shell
$ git clone https://github.com/wanted-pre-onboarding-frontend-6/Assign-3.git
```

#### 패키지 설치

```shell
$ npm install
```

#### 서버 실행

```shell
$ npm run start
```

## 📌 팀원 소개

<br/>

<table align="center">
<tr >
<td align="center"><a href="https://github.com/LoggingCo"><img  src="https://avatars.githubusercontent.com/LoggingCo" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/sming0112"><img src="https://avatars.githubusercontent.com/sming0112" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/YSBINN"><img src="https://avatars.githubusercontent.com/YSBINN" width="100%" height="50%" /></a></td>
<td align="center"><a href="https://github.com/Leejha"><img src="https://avatars.githubusercontent.com/Leejha" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/seriparkdev"><img src="https://avatars.githubusercontent.com/seriparkdev" width="100%"  height="50%"/></a></td>
</tr>
<tr>
<td align="center"><b>김성용(팀장)</b></td>
<td align="center"><b>성민규</b></td>
<td align="center"><b>임상빈</b></td>
<td align="center"><b>이재하</b></td>
<td align="center"><b>박세리</b></td>
</tr>
<tr>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
</tr>
</table>

## 📌프로젝트 과정 소개

[Git전략](https://github.com/wanted-pre-onboarding-frontend-6/Assign-1/wiki/Git-%EC%A0%84%EB%9E%B5)

[커밋 컨벤션 및 코딩 컨벤션](https://github.com/wanted-pre-onboarding-frontend-6/Assign-1/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98-%EB%B0%8F-%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98)

## 📌 디자인 시안
[LINK (designed by 김성용)](https://www.figma.com/file/NUfCromXgunwSMxY3UrQ59/Untitled?node-id=0%3A1)

## 📌 프로젝트 구조

<details>
<summary>open</summary>

```
├─apis
├─assets
│  ├─font
│  └─img
├─components
│  ├─content
│  ├─layout
│  │  ├─footer
│  │  ├─header
│  │  │  └─search
│  │  └─sidebar
│  └─spinner
├─hooks
├─pages
│  ├─home
│  │  └─components
│  │      └─homeMovieList
│  │          ├─content
│  │          └─sidebar
│  ├─movieDetail
│  │  └─components
│  ├─nowPlaying
│  └─search
├─queries
│  └─movie
├─styles
└─types
    ├─api
    └─style
```

</details>

## 📌기술 스택
 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## 📌기능 목록 명세

### ✔ common 

-   피그마 디자인을 토대로 UI/UX 구현
-   movie list에서 평점, 프리뷰를 구현하여 사용자 경험 향상
-   각 api와 query를 분리하여 useInfiniteQuery 사용
-   react query를 사용하여 infinite scroll 구현

### ✔ home page

-   UI/UX를 기반으로 현재 매안 페이지를 구성하고 디자인을 함.

### ✔ now playing page

-   UI/UX를 기반으로 현재 상영 중인 영화 목록 페이지를 구성하고 디자인을 함.

### ✔ upcoming page

-   UI/UX를 기반으로 계봉 예정인 영화 목록 페이지를 구성하고 디자인을 함.

### ✔ top-rated page

-   UI/UX를 기반으로 평가 순위가 높은 영화 목록 페이지를 구성하고 디자인을 함.
-   react query를 통해 infinite scroll 구현

### ✔ detail page
-   UI/UX를 기반으로 영화 상세 페이지를 구성하고 디자인을 함.
-   해당 movie 정보에 video가 있는경우 페이지 접속 시 자동재생 기능
-   movie에 대한 상세 정보 UI 구현 

### ✔ search page

-   UI/UX를 기반으로 검색된 영화 페이지를 구성하고 디자인을 함.
-   input state값으로 navigate 후 api response load

## 📌 Best Practice

### 💡 React Query 채택 이유

fetching, caching, user state 업데이트 등을 리액트 애플리케이션에서 처리할 때 편리하고, 이번 과제의 요구 사항인 infinite scroll 구현 기능(useInfiniteQuery) 또한 제공하기 때문에 채택했습니다.

### 💡 styled components 스타일 코드 컴포넌트 내에 배치

응집도를 우선시 하여 컴포넌트 구현 코드와 같이 배치하였습니다.

## 📌 캐싱
 캐싱은 자주 접근하는 데이터의 복사본을 요청-응답 경로를 따라 여러 곳에 저장하는 것이다. API 캐싱은 사용자가 요청을 할 때마다 API가 서버에 대한 연결을 만들지 않아도 되기 때문에 사용자 브라우저와 서버 간의 응답 시간을 개선하는 데 도움을 준다. 그리고 서버에서 처리해야 하는 요청 수를 줄여주기 때문에 페이지 로딩 속도가 향상 되고, 응답 시간이 단축되어 사용자에게 좋은 경험을 주기도 한다. 데이터를 장기간 보관하지 않고 주기적으로 자동 삭제 되어 데이터를 효율적으로 저장할 수 있으며 이를 통해 성능 개선이 된다.

## 📌 cacheTime 
 데이터가 inactive 상태일 때 캐싱된 상태로 남아있는 시간,cacheTime이 지나면 가비지 콜렉터로 수집된다. cacheTime 데이터를 fetch하는 동안 캐시 데이터를 보여준다.
cacheTime은 staleTime과 관계없이, 무조건 inactive 된 시점을 기준으로 캐시 데이터 삭제를 결정한다.

## 📌 staleTime
 데이터가 fresh 상태에서 -> stale 상태로 변경되는데 걸리는 시간 데이터가 한번 fetch 되고 나서 staleTime이 지나지 않았다면 unmount 후 mount 되어도 fetch가 일어나지 않는다.


