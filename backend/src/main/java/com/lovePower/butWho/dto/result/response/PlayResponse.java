package com.lovePower.butWho.dto.result.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PlayResponse {
    private Integer id;
    private Boolean isPlayed;
    private Integer lovePower;
}
