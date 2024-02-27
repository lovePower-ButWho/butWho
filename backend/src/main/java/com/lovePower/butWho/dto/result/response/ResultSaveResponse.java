package com.lovePower.butWho.dto.result.response;

import com.lovePower.butWho.domain.result.Result;
import lombok.Getter;

@Getter
public class ResultSaveResponse {
    private String mbti;
    private Integer lovePower;

    public ResultSaveResponse(String mbti,Integer lovePower){
        this.mbti = mbti;
        this.lovePower = lovePower;
    }
}
