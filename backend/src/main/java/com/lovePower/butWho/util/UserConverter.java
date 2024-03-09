package com.lovePower.butWho.util;

import com.lovePower.butWho.domain.user.User;
import com.lovePower.butWho.dto.UserDto;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserConverter {

    private static final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User fromUserDto(UserDto userDto) {
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setAuthority(1);
        user.setNickName(userDto.getName());
        if (userDto.getPassword() != null) {
            String encodedPassword = passwordEncoder.encode(userDto.getPassword());
            user.setPassword(encodedPassword);
        } else {
            user.setPassword(null);
        }
        return user;
    }
}
