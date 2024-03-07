package com.lovePower.butWho.dto.result.request;

import com.lovePower.butWho.domain.result.Result;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResultSaveRequest {
    private Integer E;
    private Integer I;
    private Integer N;
    private Integer S;
    private Integer F;
    private Integer T;
    private Integer P;
    private Integer J;
    private Integer lovePower;


    @Builder
    public ResultSaveRequest(Integer E,Integer I,Integer N,Integer S,Integer F,Integer T,Integer P,Integer J, Integer lovePower){
        this.E = E;
        this.I = I;
        this.N = N;
        this.S = S;
        this.F = F;
        this.T = T;
        this.P = P;
        this.J = J;
        this.lovePower = lovePower;
    }

}

