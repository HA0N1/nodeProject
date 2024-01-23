# Node 입문 주차 개인 과제


## 🏁 Goal:  "Node.js와 express를 활용한 나만의 내배캠 장터 백엔드 서버 만들기"

💡 과제 제출
- 제출 기한 : 01월 23일(화) 12시까지

-  학습 과제를 끝내고 나면 할 수 있어요! 
    1. Node.js를 이용해서 웹 프레임워크를 구현할 수 있어요.
    2. MongoDB와 mongoose를 이용하여 원하는 데이터베이스를 설계하고 활용할 수 있어요.
    3. Express.js를 기반으로 CRUD(Create, Read, Update, Delete) 기능이 포함된 REST API를 만들 수 있어요.
    4. AWS EC2에 Express.js 를 이용한 웹 서비스를 배포할 수 있어요.
    5. 프로젝트에 요구 사항을 토대로 API 리스트를 작성하고, 백엔드 서버를 설계할 수 있어요.

🛠️  Tech Stack: 백엔드 기술 스택 
1. 웹 프레임워크: Node.js에서 가장 대표적인 웹 프레임워크인 Express.js를 사용합니다.
2. 패키지 매니저: 빠른 설치 속도와 우수한 패키지 관리를 지원하는 npm 또는 yarn 패키지 매니저를 사용합니다.
3. 모듈 시스템: 최신 JS 문법을 지원하는 ES6 모듈 시스템 또는 기본 CommonJS 모듈 시스템을 사용합니다.
4. 데이터베이스: [ MongoDB Cloud ](https://www.mongodb.com/products/platform/cloud)에서 대여한 대표적인 NoSQL인  MongoDB Atlas 을 사용합니다.
5. ODM:  Mongo의 데이터를 쉽게 읽고 쓰게 해주는 [ mongoose](https://mongoosejs.com/docs/guide.html) ODM 을 사용합니다.

 
🚩 필수 요구 사항

0️⃣ 필수 요구 사항: 프로젝트 관리
1. `.env` 파일을 이용해서 민감한 정보(DB 계정 정보, API Key 등)를 관리합니다.
2. `.gitignore` 파일을 생성하여 `.env` 파일과 `node_modules` 폴더가 Github에 올라가지 않도록 설정합니다.
3. `.prettierrc` 파일을 생성하여 일정한 코드 포맷팅을 유지할 수 있도록 설정합니다.

1️⃣ 필수 요구 사항: API 구현하기
1. 상품 작성 API
    - 상품명, 작성 내용, 작성자명, 비밀번호를  request 에서 전달 받기
    - 상품은 두 가지 상태,  판매 중(`FOR_SALE`)및 판매 완료(`SOLD_OUT`)  를 가질 수 있습니다.
    - 상품 등록 시 기본 상태는  판매 중(`FOR_SALE`)  입니다.
2. 상품 목록 조회 API
    - 상품명, 작성자명, 상품 상태, 작성 날짜 조회하기
    - 상품 목록은 작성 날짜를 기준으로  내림차순(최신순)  정렬하기
3. 상품 상세 조회 API
    - 상품명, 작성 내용, 작성자명, 상품 상태, 작성 날짜 조회하기
4. 상품 정보 수정 API
    - 상품명, 작성 내용, 상품 상태, 비밀번호를  request 에서 전달받기
    - 수정할 상품과 비밀번호 일치 여부를 확인한 후, 동일할 때만 글이  수정 되게 하기
    - 선택한 상품이 존재하지 않을 경우, “상품 조회에 실패하였습니다." 메시지 반환하기
5. 상품 삭제 API
    - 비밀번호를  request 에서 전달받기
    - 수정할 상품과 비밀번호 일치 여부를 확인한 후, 동일할 때만 글이  삭제 되게 하기
    - 선택한 상품이 존재하지 않을 경우, “상품 조회에 실패하였습니다." 메시지 반환하기

 
2️⃣ 필수 요구 사항: AWS EC2 배포
- 여러분의 프로젝트를  [AWS EC2](https://ap-northeast-2.console.aws.amazon.com/ec2) 에 배포해주세요!
- [Gabia](https://gabia.com/) 또는 [AWS Route 53](https://us-east-1.console.aws.amazon.com/route53/v2/)을 이용해 도메인 주소를 연결한다면 더욱 좋습니다!
- 배포된 IP 주소 또는 연결된 도메인 주소를 제출해주세요!

📚 개발한 API 테스트 해보기!
- Thunder Client를 이용해 HTTP 요청을 시도해보세요!

❓ Why: 과제 제출시에는 아래 질문의 답변과 함께 제출해주세요.
1. 수정 및 삭제 API에서 Resource를 구분하기 위해서 어떤 방식으로 요청(Request) 하셨나요? (`param`, `query`, `body`)
2. 대표적인 HTTP Method의 4가지( `GET`, `POST`, `PUT`, `DELETE` )는 각각 어떤 상황에서 사용하였나요?
3. API 설계 시 RESTful한 원칙을 따랐나요? 어떤 부분이 RESTful한 설계를 반영하였고, 어떤 부분이 그렇지 않았나요?
4. 폴더 구조(Directory Structure)를 역할 별로 분리하였다면, 어떤 이점을 가져다 주었을까요?
5. `mongoose`에서 상품 상태는 어떠한 방식으로 관리하였나요? 이 외에도 어떤 방법들이 있었을까요?
        


