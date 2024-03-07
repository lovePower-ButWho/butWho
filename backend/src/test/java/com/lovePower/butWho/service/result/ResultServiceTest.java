package com.lovePower.butWho.service.result;

import com.lovePower.butWho.domain.result.ResultRepository;
import com.lovePower.butWho.domain.user.User;
import com.lovePower.butWho.domain.user.UserRepository;
import com.lovePower.butWho.dto.result.request.ResultSaveRequest;
import com.lovePower.butWho.dto.result.response.FinalResponse;
import com.lovePower.butWho.dto.result.response.ResultSaveResponse;
import com.lovePower.butWho.service.user.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class ResultServiceTest {
	UserService userService;
	ResultService resultService;

	public ResultServiceTest(UserService userService, ResultService resultService) {
		this.userService = userService;
		this.resultService = resultService;
	}

	@Test
	@DisplayName("결과저장테스트")
    public void saveCharacterResult() {
        //given
		User user = new User("test@gmail.com","pass","tester");
		userService.join(user);
		ResultSaveRequest request = ResultSaveRequest.builder().E(65).I(34).S(45)
				.N(42)
				.F(13)
				.T(90)
				.P(78)
				.J(23)
				.lovePower(87)
				.build();
		//when
		ResultSaveResponse response = resultService.saveCharacterResult(user.getEmail(), request,1);
		System.out.println(response.getMbti());
		//Then
		assertEquals(response.getMbti(),"ESTP");
    }
}