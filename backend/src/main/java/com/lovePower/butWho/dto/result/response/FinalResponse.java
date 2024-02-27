package com.lovePower.butWho.dto.result.response;

import com.lovePower.butWho.domain.result.Result;
import lombok.Getter;

import java.util.List;


@Getter
public class FinalResponse {
    Integer targetId;
    String mbti;
    Integer lovePower;

    public FinalResponse(Integer targetId,String mbti,Integer lovePower){
        this.targetId = targetId;
        this.mbti = mbti;
        this.lovePower = lovePower;
    }

}
