# mySlang 🗣

> ## 프로젝트 소개

배포: <a href="https://myslang-26396.web.app/">https://myslang-26396.web.app/</a>

테스트 ID: slang@test.com
<br />
테스트 PW: 123123123

<a href='https://rapidapi.com/community/api/urban-dictionary/'>urbandictionary 공개 rapid api</a>를 이용해 만든 나만의 슬랭 영어사전입니다.
<br />
미드나 영드를 보며 들었던 슬랭 단어들을 검색할 수 있는 서비스입니다.
<br />
로그인 없이 검색 서비스를 이용할 수 있지만, 내 단어 리스트에 저장하기 위해선 로그인이 필요합니다.
<br />
로그인 후 프로필 페이지에서 내가 저장한 단어를 볼 수 있습니다.

> ## 적용한 라이브러리 & 스택

- React
- ReactRouter

  - Client side routing을 구현하기 위해 사용했습니다.

- Axios
  - 인스턴스를 생성해 중복 코드 작성을 감소하기 위해 사용했습니다.
  - 데이터 요청 시 JSON 데이터 자동변환 기능을 쓰기위해 사용했습니다.
- Tailwind CSS
  - 스타일 코드의 직관적 이해와 한 파일에서 관리가 가능해 사용했습니다.
  - UI 컴포넌트를 스타일링하기 위해 사용했습니다.
- Firebase
  - 백엔드 서버를 따로 구축할 필요가 없고 간편하여 사용했습니다.

> ## 최종 구현 화면
<center>

 |                                                          랜딩 페이지                                                           |
 | :----------------------------------------------------------------------------------------------------------------------------: |
 | <img src="https://user-images.githubusercontent.com/92916958/198070376-8bfe4b37-350f-45c1-9e33-4ab768ebd535.gif" width="500"/> |
 <br />

### 🙅🏻‍♀️ 로그인을 하지 않았을 때
<br />

|                                                               홈                                                               |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/92916958/198069637-b2d3cf9a-0b49-4fa5-a3e8-46402eafbca0.gif" width="500"/> |

|                                                        단어 검색 페이지                                                        |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/92916958/198069811-e368873f-5502-4638-ab9f-d3109085445a.gif" width="500"/> |

|                                                         프로필 페이지                                                          |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/92916958/198070026-6dcf19a7-7cf4-48ec-a8e4-f60ee80f4550.gif" width="500"/> |

<br />

### 🙅🏻‍♀️ 로그인을 했을 때

<br />

|                                                               홈                                                               |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/92916958/198070561-03b2c776-259a-4d32-a40d-14168813cbaa.gif" width="500"/> |

|                                                        단어 검색 페이지                                                        |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/92916958/198070733-fe658cbc-b9c4-4944-b217-3978ad2c3210.gif" width="500"/> |

|                                                         프로필 페이지                                                          |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/92916958/198070890-5eb399a9-ad1c-459c-aa1e-1a3e91310df3.gif" width="500"/> |                                     |
</center>

> ## 프로젝트 구조

<center>
<img src="https://user-images.githubusercontent.com/92916958/198074893-53cd9fb6-7799-4c7e-b522-3f9dac005715.png" height='700px'/></center>

> ## 폴더 구조

|    폴더    |                         용도                          |
| :--------: | :---------------------------------------------------: |
|    api     |  firebase 통신과 사전 api 통신을 위한 Axios custom hook  |
|   pages    |             라우트 별로 UI 컴포넌트 작성              |
|   store    |      프로젝트 전역에서 사용할 기본 context 작성       |
|   firebase    |      프로젝트 전역에서 사용할 firebase 초기 설정 작성       |
| components | 프로젝트 전역에서 재 사용할 수 있는 components를 작성 |
| assets | 프로젝트에서 사용되는 이미지 파일 |

> ## 개발 일지 (with 트러블 슈팅)

|        주제         |                                                                                                                                  과정 로그                                                                                                                                  |
| :-----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      MySlang을 개발하게 된 이유      | <a href="https://velog.io/@kimconut/MySlang-%EB%82%98%EB%A7%8C%EC%9D%98-%EC%8A%AC%EB%9E%AD-%EB%8B%A8%EC%96%B4%EC%9E%A5">MySlang을 개발하게 된 이유</a> |
|    UI 개발    |                       <a href="https://velog.io/@kimconut/MySlang-Profile-UI-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B0%9C%EB%B0%9C-%EC%A4%91-%EB%A7%9E%EB%8B%A5%EB%9C%A8%EB%A6%B0-width-padding-margin-%EC%9D%B4%EC%8A%88">UI 개발 중 만난 padding, margin 이슈</a>                        |
|     UI 개발 완료 & Tailwind CSS      |                                                                 <a href="https://velog.io/@kimconut/MySlang%EC%97%90-%ED%95%84%EC%9A%94%ED%95%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B0%9C%EB%B0%9C-%EC%99%84%EB%A3%8C">UI 컴포넌트 개발 완료 & Tailwind CSS 후기</a>                                                                  |
|  api 분리 & axios  |                                    <a href="https://velog.io/@kimconut/MySlang-api-%EB%B6%84%EB%A6%AC-.env%EC%84%A4%EC%A0%95-axios-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0">api 분리와 axios 사용 이유, 환경변수(env)설정하기</a>                                     |
| 페이지 이동  |                                               <a href="https://velog.io/@kimconut/MySlang-%EB%AA%A8%EB%8B%AC-%EC%86%8D-%EB%B2%84%ED%8A%BC-%ED%81%B4%EB%A6%AD-%ED%9B%84-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0">모달 속 버튼 클릭 후 페이지 이동 구현하기</a>   
| 데이터 가져오기  |                                               <a href="https://velog.io/@kimconut/MySlang-%EC%84%A0%ED%83%9D%ED%95%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B0%92-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0">클릭한 리스트의 데이터 값 가져오기</a>   
| 로컬 스토리지  |                                               <a href="https://velog.io/@kimconut/MySlang-%EB%A1%9C%EC%BB%AC%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%9C-%EA%B0%92-%EA%B0%9D%EC%B2%B4%EB%A1%9C-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0">로컬 스토리지에 저장한 값 객체로 가져오기</a>   
| 유저 인증  |                                               <a href="https://velog.io/@kimconut/MySlang-firebase%EC%97%90%EC%84%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%A0%95%EB%B3%B4-%EB%B0%9B%EC%95%84%EC%98%A4%EB%8A%94-%EC%86%8D%EB%8F%84%EA%B0%80-%EB%8A%90%EB%A6%BC">firebase의 유저 확인 속도에 따른 에러 처리하기</a> 
| 데이터 삭제하기  |                                               <a href="https://velog.io/@kimconut/MySlang-%EC%A0%80%EC%9E%A5%ED%95%9C-%EB%8B%A8%EC%96%B4-%EB%A6%AC%EC%8A%A4%ED%8A%B8%EC%97%90%EC%84%9C-%EC%82%AD%EC%A0%9C%ED%95%98%EA%B8%B0">단어 리스트에 저장한 단어 삭제하기</a> 
> ## 배운 점 & 개선하고 싶은 점

### 배운 점🙋🏻‍♀️ 

#### 1. 데이터를 다루는 방법
- 매번 데이터를 저장하던 방식과는 다른 방식을 이용해 단어 저장 기능을 구현했다.
  <br />
  데이터를 생성하고 저장하는 방법에는 다양한 방법이 있다는 것을 이번 프로젝트를 하며 배웠다.
#### 2. 새로운 지식을 빠르게 학습하여 적용할 수 있는 사람

- 이번 프로젝트에서 Tailwind CSS를 배워서 적용했는데, 금방 익혀 능숙하게 사용했다.
- react router에서 새로운 hook(useNavigate)를 사용해봤는데 비슷한 역할을 하는 다른 hook도 있었지만 둘의 장점을 비교해 내 프로젝트에 좀 더 알맞는 hook을 사용했다. 
- 공식 문서를 읽고, 깃헙에서 적용 예제를 보고 내 프로젝트에 맞게 적용하는 경험을 해보고 어려운 기술을 금방 배워 적용할 기회가 있더라도 잘 할 수 있을 거라는 자신감이 생겼다.

### 개선하고 싶은 점🙆🏻‍♀️

1. 모달 창에서 로그인 페이지로 넘어갔을 때 로그인 후 무조건 홈으로 가는 것이 아니라 로그인을 하기 위해 출발했던 곳으로 돌아오기
