# Blido
 익명 질문 서비스

## 프로젝트 소개 및 목적
라이브 세션 중 궁금한 내용을 실명으로 질문하기 어려운 사람들을 위한 질문 서비스입니다.  
Java17, Springboot 3.x 버전 기술 사용을 목적으로 프로젝트를 만들었습니다.

## 개발 환경
- Java 17
- Springboot 3.1.1
- Gradle
- Spring Data JPA
- MySQL 8.0.31
- React.js 18.2.0
- Docker

## 실행 방법

1. Blido를 클론합니다.
```
git clone https://github.com/bjo6300/Blido
```

2. .env를 생성합니다.  
blido/.env
```
MYSQL_ROOT_PASSWORD=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=
```


3. application.yml을 설정합니다.  

blido/src/main/resources/application.yml 수정  
```
spring:
  profiles:
    include:
      - docker
```

blido/src/main/resources/application-docker.yml 생성
```
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://mysql:3306/{MYSQL_DATABASE}?createDatabaseIfNotExist=true&characterEncoding=UTF-8&profileSql=true&useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
    username: {MYSQL_USER}
    password: {MYSQL_PASSWORD}

  jpa:
    database: mysql
    hibernate:
      ddl-auto: update 
    properties:
      hibernate:
        format_sql: true
        use_sql_comments: true
    show_sql: true

logging:
  level:
    org:
      hibernate: info
```

4. Springboot & MySQL을 실행합니다.  

docker-compose.yml 파일 경로에서 명령어를 실행
```
docker compose up --build
```

5. frontend를 실행합니다.

frontend 경로에서 명령어 실행
```
npm i
npm run start
```

## 시연
<table  style="text-align: center; width=950px">
    <tbody>
        <tr>
          <th style="text-align: center;">메인 화면</th>
          <th style="text-align: center;">최근 댓글</th>
         <th style="text-align: center;">미응답 댓글</th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th><img src="https://github.com/bjo6300/Blido/assets/70627982/51a5b51e-9c16-4ec4-8a72-08166b7d71b3"  width="300px" height="400px"/></th>
          <th><img src="https://github.com/bjo6300/Blido/assets/70627982/5656e498-f6c7-4a0f-beac-f7ae3696c9e6"  width="300px" height="400px"/></th>
         <th><img src="https://github.com/bjo6300/Blido/assets/70627982/69825ff4-1b28-4255-9367-34bbc821572c"  width="300px" height="400px"/></th>
        </tr>
     </tbody>
 </table>

<hr>

## 발전 가능성
1. 발표 식별자를 만든다. (회원, UUID 등)
2. 회원이 만든 질문을 관리할 수 있는 마이페이지 구현한다.
3. 발표 수정, 삭제 API를 구현했지만 회원이 없어 이용하지 못했다. 요구사항 분석을 꼼꼼히 해서 필요한 API만 구현해야겠다.
4. 댓글에 좋아요 기능을 추가해 인기순으로 댓글을 정렬한다.
