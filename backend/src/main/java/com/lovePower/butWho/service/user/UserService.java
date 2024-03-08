package com.lovePower.butWho.service.user;

import com.lovePower.butWho.dto.UserDto;
import java.util.List;

public interface UserService {
    UserDto createUser(UserDto userDto);
    UserDto findUserByEmail(String email);
    
}
