package com.lovePower.butWho.error;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class ExceptionController {
    @ExceptionHandler(IllegalArgumentException.class)
    public static ResponseEntity<ErrorResponseEntity> illegalArgumentException(IllegalArgumentException e){
        log.info(e.getMessage());
        ErrorResponseEntity errorResponseEntity = ErrorResponseEntity.builder()
                .error("IllegalArgumentException")
                .msg(e.getMessage())
                .build();
        return new ResponseEntity<>(errorResponseEntity, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(CustomException.class)
    public static ResponseEntity<ErrorResponseEntity> notCompletedException(CustomException e){
        log.info(e.getErrorCode().getError());
        ErrorResponseEntity errorResponseEntity = ErrorResponseEntity.builder()
                .error(e.getErrorCode().getError())
                .msg(e.getErrorCode().getMsg())
                .build();
        return new ResponseEntity<>(errorResponseEntity, HttpStatus.BAD_REQUEST);
    }
}
