
package com.ashutosh.portfolio.service;

import com.ashutosh.portfolio.model.ContactRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Map;

@Service
public class EmailService {

    private static final Logger log =
            LoggerFactory.getLogger(EmailService.class);

    private final RestClient restClient;
    private final String apiKey;
    private final String from;
    private final String to;

    public EmailService(
            @Value("${resend.api.url}") String apiUrl,
            @Value("${resend.api.key}") String apiKey,
            @Value("${resend.from}") String from,
            @Value("${portfolio.email.to}") String to) {

        this.restClient = RestClient.builder()
                .baseUrl(apiUrl)
                .build();

        this.apiKey = apiKey;
        this.from = from;
        this.to = to;
    }

    public void sendContactEmail(ContactRequest req) {

        String subject = req.getSubject() == null
                || req.getSubject().isBlank()
                ? "New Portfolio Contact Message"
                : req.getSubject();

        String emailBody = String.format(
                """
                New contact message received from your portfolio.

                Name: %s
                Email: %s
                Subject: %s

                Message:
                %s
                """,
                req.getName(),
                req.getEmail(),
                subject,
                req.getMessage()
        );

        Map<String, Object> requestBody = Map.of(
                "from", from,
                "to", List.of(to),
                "reply_to", req.getEmail(),
                "subject", subject,
                "text", emailBody
        );

        try {
            restClient.post()
                    .uri("")
                    .contentType(MediaType.APPLICATION_JSON)
                    .header("Authorization", "Bearer " + apiKey)
                    .body(requestBody)
                    .retrieve()
                    .toBodilessEntity();

            log.info(
                    "Contact email sent successfully for: {}",
                    req.getEmail()
            );

        } catch (Exception e) {

            log.error(
                    "Resend email delivery failed: {}",
                    e.getMessage(),
                    e
            );

            throw new RuntimeException(
                    "Unable to send contact email",
                    e
            );
        }
    }
}
