package com.lovePower.butWho.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    //custom exception

    //해당 유저가 공략을 모두 끝내지 않았을 때
    NOT_COMPLETED("BAD_REQUEST","공략이 모두 완료되지 않았습니다.");

    private final String error;
    private final String message;
}
