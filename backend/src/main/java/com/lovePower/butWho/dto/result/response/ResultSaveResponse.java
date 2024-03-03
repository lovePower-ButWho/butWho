package com.lovePower.butWho.dto.result.response;

import com.lovePower.butWho.domain.result.Result;
import lombok.Getter;

@Getter
public class ResultSaveResponse {
    private String mbti;

    public ResultSaveResponse(String mbti){
        this.mbti = mbti;
    }
}
