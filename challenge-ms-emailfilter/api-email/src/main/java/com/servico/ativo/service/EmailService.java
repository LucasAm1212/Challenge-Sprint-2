package com.servico.ativo.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.bson.json.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.servico.ativo.model.EmailModel;
import com.servico.ativo.model.StatusEmail;
import com.servico.ativo.repository.EmailRepository;

@Service
public class EmailService {
	@Autowired
	private EmailRepository emailRepository;
	@Autowired
	private JavaMailSender emailSender;

	@SuppressWarnings("finally")
	public EmailModel sendEmail(EmailModel model) {

		System.out.println("Enviando e-mail");
		model.setSendDateEmail(LocalDateTime.now());

		try {
			SimpleMailMessage message = new SimpleMailMessage();
			message.setFrom(model.getEmailFrom());
			message.setTo(model.getEmailTo());
			message.setSubject(model.getSubject());
			message.setText(model.getText());
			emailSender.send(message);
			model.setStatusEmail(StatusEmail.SEND);
		} catch (Exception e) {
			model.setStatusEmail(StatusEmail.ERROR);
		} finally {

			return emailRepository.save(model);
		}

	}

	public List<EmailModel> getEmails() {
		
		try {

			return emailRepository.findAll();

		} catch (Exception e) {
			return new ArrayList<EmailModel>();
		}
	}
}
