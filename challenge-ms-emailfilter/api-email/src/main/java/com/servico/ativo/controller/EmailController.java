package com.servico.ativo.controller;



import com.servico.ativo.model.EmailModel;
import com.servico.ativo.repository.EmailRepository;
import com.servico.ativo.service.EmailService;

import java.util.List;

import org.bson.json.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send-email")
    public ResponseEntity<EmailModel> sendEmail(@RequestBody EmailModel model){

        emailService.sendEmail(model);

        return new ResponseEntity<>(model, HttpStatus.OK);
    
    }
    @GetMapping("/emails")
    public ResponseEntity<List<EmailModel>> getEmails(){
    
        return new ResponseEntity<>(emailService.getEmails(),HttpStatus.OK);
    }
    
    

    
}
