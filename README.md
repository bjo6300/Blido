# Blido
 익명 질문 서비스

## 프로젝트 소개 및 목적
라이브 세션 중 궁금한 내용을 실명으로 질문하기 어려운 사람들을 위한 질문 서비스입니다.  
Java17, Springboot 3.x 버전 기술 사용을 목적으로 프로젝트를 만들었습니다.

## 프로젝트 환경
- Java 17
- Springboot 3.1.1
- Gradle
- Spring Data JPA
- MySQL 8.0.31
- React.js 18.2.0
- Docker

## 프로젝트 실행 방법

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
