# 🎬 영화 트레일러 사이트

## 📌 프로젝트 소개

영화 트레일러 사이트 만들기

## 📌 배포

-- 링크 넣기 --
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

## 📌 프로젝트 구조

<details>
<summary>open</summary>

```
새로 넣기
```

</details>

## 📌기술 스택
 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## 📌기능 목록 명세

### ✔ home page

-   페이지당 최대 32개 상품까지 조회
-   상품을 클릭시 해당 상품 페이지 이동
-   페이지네이션을 이용하여 효율적인 페이지 탐색
-   좋아요와 리뷰 갯수 시각화에 따른 유저 경험 향상

### ✔ now playing page

-   UI/UX를 기반으로 현재 상영 중인 영화 목록 페이지를 구성하고 디자인을 함.

### ✔ upcoming page

-   UI/UX를 기반으로 스토어 상품 주문 레이아웃을 구성하고 디자인을 함.
-   세션 스토리지에 담긴 주문내역 데이터를 기반으로 데이터 처리
-   주문하기를 누르면 주문 내역확인 페이지로 이동

### ✔ top-rated page

-   UI/UX를 기반으로 스토어 상품 주문 레이아웃을 구성하고 디자인을 함.
-   주문 내역을 컴포넌트로 분리하여 구성
-   msw를 사용하여 코드 내 axios로 목데이터를 가져옴

### ✔ 영화 상세 페이지

-   관리자는 관리자 계정으로 로그인할 수 있도록 구현하였습니다.
-   관리자 로그인

### ✔ 영화 검색 페이지

-   관리자는 관리자 계정으로 로그인할 수 있도록 구현하였습니다.
-   관리자 로그인

## 📌 캐싱
캐싱은 자주 접근하는 데이터의 복사본을 요청-응답 경로를 따라 여러 곳에 저장하는 것이다. API 캐싱은 사용자가 요청을 할 때마다 API가 서버에 대한 연결을 만들지 않아도 되기 때문에 사용자 브라우저와 서버 간의 응답 시간을 개선하는 데 도움을 준다. 그리고 서버에서 처리해야 하는 요청 수를 줄여주기 때문에 페이지 로딩 속도가 향상 되고, 응답 시간이 단축되어 사용자에게 좋은 경험을 주기도 한다. 데이터를 장기간 보관하지 않고 주기적으로 자동 삭제 되어 데이터를 효율적으로 저장할 수 있으며 이를 통해 성능 개선이 된다.
