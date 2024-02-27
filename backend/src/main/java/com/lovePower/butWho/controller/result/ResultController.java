package com.lovePower.butWho.controller.result;

import com.lovePower.butWho.domain.result.Result;
import com.lovePower.butWho.dto.result.request.ResultSaveRequest;
import com.lovePower.butWho.dto.result.response.FinalResponse;
import com.lovePower.butWho.dto.result.response.ResultSaveResponse;
import com.lovePower.butWho.service.result.ResultService;
import org.springframework.web.bind.annotation.*;

@RestController
public class ResultController {

    private final ResultService resultService;

    public ResultController(ResultService resultService){
        this.resultService = resultService;
    }

    //캐릭터별 결과 저장
    @PostMapping("/result/{character}")
    public ResultSaveResponse saveResult(@RequestHeader("Authorization") String email,
                                         @RequestBody ResultSaveRequest request, @PathVariable Integer character)
    {
        return resultService.saveCharacterResult(email,request,character);
    }

    //해당 유저의 모든 공략 후 최종 결과 반환
//    @GetMapping("/result/final")
//    public FinalResponse allResults(@RequestHeader("Authorization") String email){
//        resultService.getFinalresult(email);
//
//    }

}
