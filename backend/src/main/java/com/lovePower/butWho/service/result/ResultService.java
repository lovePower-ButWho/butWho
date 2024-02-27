package com.lovePower.butWho.service.result;

import com.lovePower.butWho.domain.result.Result;
import com.lovePower.butWho.domain.result.ResultRepository;
import com.lovePower.butWho.domain.user.User;
import com.lovePower.butWho.domain.user.UserRepository;
import com.lovePower.butWho.dto.result.request.ResultSaveRequest;
import com.lovePower.butWho.dto.result.response.FinalResponse;
import com.lovePower.butWho.dto.result.response.ResultSaveResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ResultService {
    private final ResultRepository resultRepository;
    private final UserRepository userRepository;

    public ResultService(ResultRepository resultRepository, UserRepository userRepository){
        this.resultRepository = resultRepository;
        this.userRepository = userRepository;
    }


    //플레이 결과 계산 후 mbti 도출 및 결과 저장
    @Transactional
    public ResultSaveResponse saveCharacterResult(String email, ResultSaveRequest request, Integer character){
        User user = userRepository.findById(email).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 사용자입니다."));
        String mbti = request.getE() > request.getI() ? "E" : "I";
        mbti += request.getN() > request.getS() ? "N" : "S";
        mbti += request.getF() > request.getT() ? "F" : "T";
        mbti += request.getP() > request.getJ() ? "P" : "J";

        Result result = Result.builder()
                .targetId(character)
                .mbti(mbti)
                .lovePower(request.getLovePower())
                .user(user)
                .build();
        resultRepository.save(result);
        return new ResultSaveResponse(mbti, request.getLovePower());
    }

    //모든 공략 후 최종 결과 반환
//    @Transactional
//    public FinalResponse getFinalresult(String email){
//        User user = userRepository.findById(email).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 유저입니다."));
//
//    }
}
