package com.lovePower.butWho.error;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import org.springframework.http.ResponseEntity;

@Builder
@Getter
public class ErrorResponseEntity {
    private String error;
    private String msg;
}
