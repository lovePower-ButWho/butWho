package com.lovePower.butWho.controller.user;

import com.lovePower.butWho.domain.user.User;
import com.lovePower.butWho.dto.UserDto;
import com.lovePower.butWho.dto.response.user.LoginResponse;
import com.lovePower.butWho.service.user.CustomUserDetailsService;
import com.lovePower.butWho.service.user.UserService;
import com.lovePower.butWho.util.JwtUtil;
import com.lovePower.butWho.domain.user.UserRepository;
import com.lovePower.butWho.dto.request.user.LoginRequest;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private CustomUserDetailsService userDetailsService;
    @Autowired
    private UserRepository userRepository;
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDto userDto) throws Exception {

        userService.createUser(userDto);
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(userDto.getEmail(), userDto.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect user name or password", e);
        }

        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(userDto.getEmail());

        String email = userDto.getEmail();
        User user = userRepository.findByEmail(email);

        final String jwt = jwtUtil.generateToken(userDetails, user.getAuthority());

        return ResponseEntity.ok(new LoginResponse(jwt));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect user name or password", e);
        }

        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(loginRequest.getEmail());

        String email = loginRequest.getEmail();
        User user = userRepository.findByEmail(email);

        final String jwt = jwtUtil.generateToken(userDetails, user.getAuthority());

        return ResponseEntity.ok(new LoginResponse(jwt));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {

        String token = jwtUtil.extractTokenFromRequest(request);
        if (token == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        return ResponseEntity.ok().build();
    }
}
