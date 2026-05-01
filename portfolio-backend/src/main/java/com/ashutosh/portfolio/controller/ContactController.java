package com.ashutosh.portfolio.controller;

import com.ashutosh.portfolio.model.ContactRequest;
import com.ashutosh.portfolio.service.EmailService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {
        "http://localhost:3000",
        "https://ashutosh-panda-2210.vercel.app"
})
public class ContactController {

    private static final Logger log = LoggerFactory.getLogger(ContactController.class);

    private final EmailService emailService;

    public ContactController(EmailService emailService) {
        this.emailService = emailService;
    }

    /**
     * Health check endpoint
     * GET http://localhost:8080/api/health
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        return ResponseEntity.ok(Map.of(
            "status", "UP",
            "service", "Ashutosh Portfolio Backend",
            "message", "Email service is running"
        ));
    }

    /**
     * Contact form endpoint
     * POST http://localhost:8080/api/contact
     *
     * Request body:
     * {
     *   "name": "John Doe",
     *   "email": "john@example.com",
     *   "subject": "Job Opportunity",
     *   "message": "Hi Ashutosh..."
     * }
     */
    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> contact(@Valid @RequestBody ContactRequest req) {
        log.info("Contact request received from: {} <{}>", req.getName(), req.getEmail());

        try {
            emailService.sendContactEmail(req);
            return ResponseEntity.ok(Map.of(
                "status", "success",
                "message", "Your message has been sent! Ashutosh will get back to you soon."
            ));
        } catch (Exception e) {
            log.error("Failed to send contact email: {}", e.getMessage(), e);
            return ResponseEntity
                .status(500)
                .body(Map.of(
                    "status", "error",
                    "message", "Failed to send email. Please try again or email directly at pandaashutosh2210@gmail.com"
                ));
        }
    }
}
