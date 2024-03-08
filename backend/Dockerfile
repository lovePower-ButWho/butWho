FROM openjdk:17-jdk-slim
LABEL authors="jubokyeong"

ARG JAR_FILE=./build/libs/*.jar
COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java","-Dspring.profiles.active=dev","/app.jar"]