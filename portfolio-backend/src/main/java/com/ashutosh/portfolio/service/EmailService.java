package com.ashutosh.portfolio.service;

import com.ashutosh.portfolio.model.ContactRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    private static final Logger log = LoggerFactory.getLogger(EmailService.class);

    private final JavaMailSender mailSender;

    @Value("${portfolio.email.to}")
    private String toEmail;

    @Value("${portfolio.email.from}")
    private String fromEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    /**
     * Sends an email to Ashutosh's inbox when someone fills the contact form.
     */
    public void sendContactEmail(ContactRequest req) throws MessagingException {
        log.info("Sending contact email from: {} <{}>", req.getName(), req.getEmail());

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setFrom(fromEmail);
        helper.setTo(toEmail);
        helper.setReplyTo(req.getEmail());
        helper.setSubject("📩 Portfolio Contact: " + req.getSubject());
        helper.setText(buildHtmlBody(req), true);

        mailSender.send(message);
        log.info("Contact email sent successfully from {}", req.getEmail());

        // Also send a confirmation email to the sender
        sendConfirmationEmail(req);
    }

    /**
     * Auto-reply confirmation to the person who contacted.
     */
    private void sendConfirmationEmail(ContactRequest req) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(req.getEmail());
            helper.setSubject("Thanks for reaching out, " + req.getName() + "! 🙏");
            helper.setText(buildConfirmationHtml(req), true);

            mailSender.send(message);
            log.info("Confirmation email sent to {}", req.getEmail());
        } catch (Exception e) {
            log.warn("Could not send confirmation email to {}: {}", req.getEmail(), e.getMessage());
            // Don't throw — confirmation failure shouldn't fail the main request
        }
    }

    private String buildHtmlBody(ContactRequest req) {
        return """
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8"/>
              <style>
                body { font-family: 'Segoe UI', Arial, sans-serif; background: #0a0a10; color: #e8e8f0; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 0 auto; background: #0f0f1a; border: 1px solid rgba(245,158,11,0.2); border-radius: 12px; overflow: hidden; }
                .header { background: linear-gradient(135deg, #1a1a2e, #0f0f1a); padding: 32px; border-bottom: 2px solid #f59e0b; text-align: center; }
                .header h1 { color: #f59e0b; font-size: 24px; margin: 0; }
                .header p { color: #6b7280; font-size: 13px; margin: 8px 0 0; font-family: monospace; }
                .body { padding: 32px; }
                .field { margin-bottom: 20px; padding: 16px; background: rgba(255,255,255,0.03); border-left: 3px solid #f59e0b; border-radius: 0 8px 8px 0; }
                .label { font-size: 11px; color: #f59e0b; letter-spacing: 2px; text-transform: uppercase; font-family: monospace; margin-bottom: 6px; }
                .value { font-size: 15px; color: #e8e8f0; line-height: 1.6; }
                .message-box { background: rgba(245,158,11,0.05); border: 1px solid rgba(245,158,11,0.15); border-radius: 8px; padding: 20px; margin-top: 8px; }
                .footer { padding: 20px 32px; background: rgba(255,255,255,0.02); border-top: 1px solid rgba(255,255,255,0.05); text-align: center; font-size: 12px; color: #4b5563; font-family: monospace; }
                .reply-btn { display: inline-block; margin-top: 16px; padding: 12px 28px; background: #f59e0b; color: #000; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>📩 New Portfolio Contact</h1>
                  <p>// Someone contacted you via your portfolio</p>
                </div>
                <div class="body">
                  <div class="field">
                    <div class="label">From</div>
                    <div class="value">%s</div>
                  </div>
                  <div class="field">
                    <div class="label">Email</div>
                    <div class="value"><a href="mailto:%s" style="color:#f59e0b;">%s</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Subject</div>
                    <div class="value">%s</div>
                  </div>
                  <div class="field">
                    <div class="label">Message</div>
                    <div class="message-box value">%s</div>
                  </div>
                  <div style="text-align:center; margin-top:24px;">
                    <a href="mailto:%s?subject=Re: %s" class="reply-btn">↩ Reply to %s</a>
                  </div>
                </div>
                <div class="footer">
                  Ashutosh Panda Portfolio • pandaashutosh2210@gmail.com • Bangalore, India
                </div>
              </div>
            </body>
            </html>
            """.formatted(
                req.getName(),
                req.getEmail(), req.getEmail(),
                req.getSubject(),
                req.getMessage().replace("\n", "<br/>"),
                req.getEmail(), req.getSubject(), req.getName()
        );
    }

    private String buildConfirmationHtml(ContactRequest req) {
        return """
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8"/>
              <style>
                body { font-family: 'Segoe UI', Arial, sans-serif; background: #0a0a10; color: #e8e8f0; margin: 0; padding: 0; }
                .container { max-width: 580px; margin: 0 auto; background: #0f0f1a; border: 1px solid rgba(245,158,11,0.2); border-radius: 12px; overflow: hidden; }
                .header { background: linear-gradient(135deg, #1a1a2e, #0f0f1a); padding: 40px 32px; border-bottom: 2px solid #f59e0b; text-align: center; }
                .header h1 { color: #f59e0b; font-size: 26px; margin: 0 0 8px; }
                .body { padding: 32px; line-height: 1.7; color: #9ca3af; }
                .highlight { color: #f59e0b; font-weight: 600; }
                .footer { padding: 20px 32px; background: rgba(255,255,255,0.02); border-top: 1px solid rgba(255,255,255,0.05); text-align: center; font-size: 12px; color: #4b5563; font-family: monospace; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>✅ Message Received!</h1>
                  <p style="color:#6b7280; font-size:13px; margin:0;">Ashutosh Panda — Java Developer</p>
                </div>
                <div class="body">
                  <p>Hi <span class="highlight">%s</span>,</p>
                  <p>Thank you for reaching out! I've received your message regarding <strong style="color:#e8e8f0;">"%s"</strong> and will get back to you as soon as possible — typically within 24 hours.</p>
                  <p>In the meantime, feel free to connect with me on <a href="https://linkedin.com/in/ashutoshpanda-b12805218" style="color:#f59e0b;">LinkedIn</a>.</p>
                  <p style="margin-top:24px;">Best regards,<br/><span class="highlight">Ashutosh Panda</span><br/><span style="font-size:13px; color:#6b7280;">Java Developer | Spring Boot & Microservices | Bangalore</span></p>
                </div>
                <div class="footer">
                  pandaashutosh2210@gmail.com • +91 9583028419 • Bangalore, India
                </div>
              </div>
            </body>
            </html>
            """.formatted(req.getName(), req.getSubject());
    }
}
