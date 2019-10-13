package com.celnap.auth.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.celnap.auth.api.LoginApi;
import com.celnap.auth.model.ReqData;
import com.celnap.auth.model.ResData;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.NativeWebRequest;

import javax.validation.Valid;
import java.util.Optional;

@CrossOrigin
@RestController
public class AuthController implements LoginApi {

    @Override
    public ResponseEntity<ResData> loginPost(@Valid ReqData reqData) {
        try {
            ResData res = new ResData();
            if(verifyUser(reqData)) {
                Algorithm algorithm = Algorithm.HMAC256("secret");
                String token = JWT.create()
                        .withIssuer("issuer")
                        .sign(algorithm);
                res.setToken(token);
            }
            else{
                res.setMsg("Invalid credentials");
            }
            return ResponseEntity.ok(res);
        }
        catch (Exception ex){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

    }

    static boolean verifyUser(ReqData reqData){
        String name=reqData.getName();
        String psw=reqData.getPsw();
        return name.equals("1") && psw.equals("1");
    }
}

