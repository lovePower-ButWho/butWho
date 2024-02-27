package com.lovePower.butWho.service.user;

import com.lovePower.butWho.domain.user.User;
import com.lovePower.butWho.domain.user.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public void join(User user){
        userRepository.save(user);
    }
}
