package com.lovePower.butWho.service.user;

import com.lovePower.butWho.domain.user.User;
import com.lovePower.butWho.domain.user.UserRepository;
import com.lovePower.butWho.dto.UserDto;
import com.lovePower.butWho.util.UserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final UserConverter userConverter;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, UserConverter userConverter) {
        this.userConverter = userConverter;
        this.userRepository = userRepository;
    }

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = userConverter.fromUserDto(userDto);
        User savedUser = userRepository.save(user);
        return userDto;
    }

    @Override
    public UserDto findUserByEmail(String email) {
        return null;
    }
}
