package com.lovePower.butWho.dto.result.response;

import com.lovePower.butWho.domain.result.ResultRepository;
import com.lovePower.butWho.domain.user.User;
import lombok.Getter;

import java.util.List;

@Getter
public class UserInfoResponse {
    private String name;
    private List<FinalResponse> result;

    public UserInfoResponse(String name, List<FinalResponse> result){
        this.name = name;
        this.result = result;
    }
}
