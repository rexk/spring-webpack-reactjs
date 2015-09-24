# 스프링 Webpack Reactjs 예제
본 프로젝트는 최근 인기가 많은 ReactJS를 Webpack이라는 번들러를 통하여 자바 Spring에 접목할 수
있는지 실험하기 위한 목적으로 작성되었다.

[English Documentation is here](https://github.com/rexk/spring-webpack-reactjs/blob/master/README_en.md)

## 시스템 요구사항
* JDK 7 혹은 JDK 8
* Maven
* [NodeJS](https://nodejs.org/en/) 0.12 혹은 그 이상

## 프로젝트 설치하기
```bash
## 웹팩 설치
npm install -g webpack

## NodeJs 모듈들 설치
npm install

## Maven Dependencies 인스톨
mvn install
```

## 프로젝트 실행하기
```bash
## 자바 서버를 포트 8080에서 실행
java -jar target/spring-webpack-reactjs-0.1.0.jar

## NodeJs 서버를 포트 3000에서 실행
npm start
```

이후 브라우저에서 http://localhost:3000 를 실행한다.
