<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=Rolling&fontSize=90" />

# 📗 목차 #
<b>

- 📝 [개요](#-포트폴리오-개요)
- 🛠 [기술 및 도구](#-기술-및-도구)
- 🔗 [배포 링크](#-배포-링크)
- 🤝 [팀원 소개 및 기능 구현](#-팀원-소개-및-기능-구현)
  - [김수환](#김수환)
  - [양서연](#양서연)
  - [윤아영](#윤아영)
  - [최원석](#최원석)
  - [홍성욱](#홍성욱)
- 🙋 [Q&A](#-Q&A)

</b>



## **📝 포트폴리오 개요**

> **프로젝트명:** Rolling
>
> **참여자:** 김수환(팀장), 양서연, 윤아영, 최원석, 홍성욱
>
> **제작 기간:** 2024.02.24 ~ 2024.03.12
>
> **배포일:** 2024.03.11
>
> **사용 기술:** React, Css Modules
>
> **문의:** shwan_2@naver.com

<br />

## **🛠 기술 및 도구**

![React](https://img.shields.io/badge/React-53C1DE?style=flat-square&logo=react&logoColor=white) 
![GitHub](https://img.shields.io/badge/Github-%23121011.svg?style=flat-square&logo=github&logoColor=white)
![CssModule](https://img.shields.io/badge/CssModules-0ABF53?style=flat-square&logo=cssmodules&logoColor=white)



<br />

## **🔗 배포 링크**

**배포 링크:** [https://rolling-4-7team.netlify.app](https://rolling-4-7team.netlify.app/)

<br />

<br />

## **🤝 팀원 소개 및 기능 구현**

### **김수환**

> **맡은 파트:** post/{id} 페이지, Header, Card_list, Card 컴포넌트
>
> **주요 기능:** 무한 스크롤 방식으로 카드 배치, 카카오톡 공유, 이모지 추가
>
> **주요 기능 설명:**
> - 페이지에 처음 접근 시 5개의 카드가 화면에 나오게 하고 스크롤을 내릴 때마다 로딩 스피너가 돌면서 카드가 6개씩 배치됩니다. Intersection Observer API를 사용하였습니다.
> - 카카오톡 docs를 참고해 api를 사용하여 카카오톡 공유하기 기능을 만들었고 sender와 배경 이미지 url을 넘겨주어 카카오톡 미리보기 화면에 나오게 했습니다.
> - emoji-picker-react 라이브러리를 사용하여 구현했습니다.
>
> **문제 및 해결 방법:**
> - 무한 스크롤을 구현 후 post/{id} 페이지에서 edit 페이지로 이동 할 때 useNavigate를 사용하였는데 이렇게 구현 했을 때 기존의 카드 list 데이터가 그대로 남아있어서 useEffect 내부에 데이터를 초기화하는 setState를 추가하여 문제를 해결했습니다. 또한 스크롤도 맨 위로 가게 되어 불필요한 이벤트 호출을 막았습니다. 배경 이미지의 경우 스크롤 했을 때 이미지가 계속 커지는 문제가 발생해서 repeat속성을 주고 width는 100vw로 하여 무한 스크롤을 하면 같은 이미지가 화면 크기에 맞게 조절 되면서 아래로 계속 나올 수 있게 만들었습니다.
>   
> **서비스 시연:**
>   

https://github.com/codeit-sprint-4-project-1-team7/project-1-team7/assets/155133655/d2b8b42a-ac7b-4beb-8ae8-7dda714e1a6a

> 
### **양서연**
> **맡은 파트:** post 페이지, color, font, Option 컴포넌트
>
> **주요 기능:** 이미지 파일 업로드, 롤링 페이퍼 생성
>
> **주요 기능 설명:**
> - 컬러와 이미지 탭에 따라 배경을 선택 할 수 있고 이미지의 경우 이미지 파일을 업로드하여 선택할 수 있습니다. 
> - 선택한 이미지와 롤링 페이퍼 이름으로 롤링 페이퍼를 생성하고 해당 페이퍼 페이지로 이동합니다.
>
> **문제 및 해결 방법:**
> - 선택한 이미지 파일을 post 요청을 보내어 해당하는 이미지 url을 받아오도록 구현하는데, 이용하려했던 사이트의 api에서 자꾸 429 에러가 발생하는 문제가 있었습니다. 팀장님의 도움으로 imagebb 사이트를 발견했고, 해당 사이트의 api를 사용했더니 문제없이 데이터를 보내고 url을 받아올 수 있었습니다.
>   
> **서비스 시연:**
>   

https://github.com/codeit-sprint-4-project-1-team7/project-1-team7/assets/155133655/c9b76e7d-f5b2-4c20-ab80-2754e1e97c10


### **윤아영**
> **맡은 파트:** post/{id}/edit 페이지, Button 컴포넌트
>
> **주요 기능:** 롤링페이퍼 삭제하기, 메시지 삭제하기
>
> **주요 기능 설명:**
> - 카드에 있는 쓰레기통 버튼 클릭 시 해당 메시지 삭제 API를 보내고 messages state를 변경합니다.
> - 삭제하기 버튼 클릭 시 해당 롤링페이퍼를 삭제하는 API를 보내고 list 페이지로 이동합니다.
> 
> **문제 및 해결 방법:**
> - 카드 클릭 시 모달이 뜨는 이벤트가 등록되어 있어 쓰레기통 버튼을 눌렀을 때도 모달창이 뜨는 문제가 발생했습니다. e.stopPrpagation()을 사용해 문제를 해결했습니다.
>   
> **서비스 시연:**
>

https://github.com/codeit-sprint-4-project-1-team7/project-1-team7/assets/155133655/7a9fcc87-a262-4410-9886-8acf40751f00


> 
### **최원석**
> **맡은 파트:** post/{id}/message 페이지, TextField 컴포넌트
>
> **주요 기능:** 이미지 파일 업로드, TextArea 구현, 롤링페이퍼 메시지 작성
>
> **주요 기능 설명:**
> - 이미지 파일을 업로드 할 수 있습니다.
> - react-quill 라이브러리를 사용해 TextArea를 구현했습니다.
> - 선택한 이미지 파일과 작성한 텍스트 area 내용, 관계, 폰트, 이름 등을 포함한 데이터를 post 요청하여 메시지가 생성됩니다.
> 
> **문제 및 해결 방법:**
> - TextArea를 직접 구현하려 했으나 특정 부분에 스타일링을 적용하는 것이 어려워서 react-quill 라이브러리를 적용했습니다.
> - react-quill은 사용자가 작성한 메시지를 HTML 형태로 반환하며, 이를 다른 페이지에서 보여줄 때 보안 이슈가 발생할 수 있으므로 DOMPurify 라이브러리를 사용하여 보안 취약점을 방지했습니다.
> - 기본 이미지의 api 응답이 늦어서 이미지가 안 보이는 현상이 생겨 로딩되는 시간에 각 이미지가 로드될 때까지 로딩 이미지를 보여주도록 설정해 문제를 해결했습니다.
>   
> **서비스 시연:**
>

https://github.com/codeit-sprint-4-project-1-team7/project-1-team7/assets/155133655/54734480-af26-4016-9ac0-65bd2423749f


### **홍성욱**
> **맡은 파트:** 메인 페이지, list 페이지, Modal, Toast, Badge 컴포넌트
>
> **주요 기능:** 버튼 클릭으로 스크롤 구현
>
> **주요 기능 설명:**
> - 버튼을 클릭하거나 터치하여 스크롤이 됩니다.
> 
> **문제 및 해결 방법:**
> - 버튼을 누를 때마다 스크롤 위치를 파악하여 useState를 통해 시작위치 도달값과 마지막위치 도달값을 다루어 구현하였습니다. 그러나 드래그나 터치로 직접 진행하는 스크롤이 아니였기 때문에 버튼 클릭시 스크롤이 부드럽지 않았고 이를 해결하기 위해 scrollBy 메소드의 smooth 옵션을 활용했습니다. 그런데 이 옵션을 활용한 결과 실제로 스크롤이 완료되기까지 약간의 delay가 생겼고 그로 인해 스크롤 위치를 제대로 파악하지 못하는 문제가 발생했습니다. 이를 해결하기 위해 발생하는 delay만큼 기다렸다가 스크롤 위치를 파악하도록 setTimeout함수를 활용하여 해결하였습니다.
>   
> **서비스 시연:**
>

https://github.com/codeit-sprint-4-project-1-team7/project-1-team7/assets/155133655/0b3e0172-a809-4560-a1f8-db6e70de4ca7

## **🙋 Q&A** 

**Q&A:** [https://few-seed-7cb.notion.site/Q-A-16d6a36f426c4d44ba27806c10fb107e](https://few-seed-7cb.notion.site/Q-A-16d6a36f426c4d44ba27806c10fb107e)
<br/>
