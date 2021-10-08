# [네이버 메인 레이아웃 클론](https://naver-cloning-kimyeim.vercel.app/)

<div align="center" style="display: flex; justify-content: flex;">
<img width="500" alt="스크린샷 2021-09-27 오전 12 15 08" src="https://user-images.githubusercontent.com/59479363/134815638-c0490716-2263-431f-b2c3-ced6a5a13430.gif">
<div>⬇️  스크롤 감지 헤더, 슬라이드 구현  |  반응형 구현  ⬆️</div>
<div>
<img height="300" alt="스크린샷 2021-09-27 오전 12 15 08" src="https://user-images.githubusercontent.com/59479363/134815933-c5baddf3-5ff3-4086-83ce-0dfc3fca2f55.gif">
<img height="300" alt="스크린샷 2021-09-27 오전 12 15 08" src="https://user-images.githubusercontent.com/59479363/134815780-28c28192-0007-413b-8869-693362dce052.gif">
<img height="300" alt="스크린샷 2021-09-27 오전 12 15 08" src="https://user-images.githubusercontent.com/59479363/134815789-23d5c175-b1b6-480f-a652-6ed8a1e82798.gif">
</div>
</div>

#### 💡 반응형 구현 - js 사용 
  - 3개의 column을 갖는 grid를 생성하고, 각 column에 하나의 div가 존재합니다. 
  - resize 이벤트가 발생할 때 마다 grid item들을 원하는 div에 렌더링합니다.
  - ex) 중간 단계의 화면에서 첫 번째 div에 있던 `추석 카드` 컴포넌트가 화면 너비가 최대 단계가 되면 각각 두 번째, 세 번째 div에서 새롭게 렌더링 됩니다.
  - 🤔 리팩토링 전에는 css grid만을 사용했습니다.
    - grid area를 사용해 grid item의 위치를 직접 지정해주는 방식을 사용했으나, 컴포넌트의 높이가 제각각이라서 item 사이 gap이 조금씩 넓어지는 문제가 생겼습니다.

#### 💡 슬라이드 구현 
  - 전체 내용을 담을 div를 생성하고 해당 div에 overflow: scroll; white-space: nowrap; 을 적용했습니다.
  - 해당 div 안에 item 들을 가로 방향으로 길게 담은 div를 넣습니다.

#### 💡 스크롤 감지 헤더 구현 - js 사용
  - scroll 이벤트가 발생할 때 마다 현재 scroll 위치를 확인합니다.
  - scroll 위치가 200 이상이면 헤더가 나타납니다.
  - 다시 scroll 위치가 줄어들면 헤더가 사라집니다.

#### 😲 프로젝트 하면서 신기했던 것
  -  화면에 나타나있는 이미지가 독자적인 하나의 이미지가 아니라 여러 개의 이미지를 합친 경우가 많았습니다.
    - ex) `날씨` 컴포넌트의 날씨 아이콘 중 비가 오는 아이콘은 구름 이미지와 비 이미지를 합친 것
    - ex) `now` 컴포넌트의 포스터는 포스터 이미지, 좌측 상단의 live 아이콘 이미지, 중앙 하단의 방송 제목 이미지 총 3가지를 합친 것
  - 대부분의 아이콘이 이미지 스프라이트로 되어있었습니다.
  - 화면 속 컴포넌트들이 시간이 지나면 랜덤하게 변경됩니다. 같은 컴포넌트 안에서도 내용이 바뀝니다.

#### 🥺 아쉬운 점 / 보강할 것
  - sass를 제대로 활용하지 못했습니다. 
  - width가 500px 이하일 때를 고려해서 만들지 못했습니다. 
  - js 없이 grid 부분을 구현해보고 싶습니다. 
