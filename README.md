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

1. 모달 창에서 로그인 페이지로 넘어갔을 때 로그인 후 무조건 홈으로 가는 것이 아니라
<br />
    로그인을 하기 위해 출발했던 곳으로 돌아오기
