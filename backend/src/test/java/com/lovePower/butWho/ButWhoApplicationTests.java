package com.lovePower.butWho;
import com.lovePower.butWho.domain.user.User;
import com.lovePower.butWho.dto.result.request.ResultSaveRequest;
import com.lovePower.butWho.dto.result.response.ResultSaveResponse;
import com.lovePower.butWho.service.result.ResultService;
import com.lovePower.butWho.service.result.ResultServiceTest;
import com.lovePower.butWho.service.user.UserService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest()
class ButWhoApplicationTests {

	@Autowired
	private UserService userService;
	@Autowired
	private ResultService resultService;
	@Test
	@DisplayName("결과저장테스트")
	void contextLoads() {
		ResultServiceTest test = new ResultServiceTest(userService,resultService);
		test.saveCharacterResult();
	}
}
