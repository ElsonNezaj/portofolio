import React from "react";
import styles from "./styles.module.scss";
import { Button, Form, Input, Typography } from "antd";

export default function ContactSection() {
  return (
    <div id="contact" className={styles.contactSectionContainer}>
      <Typography className={styles.sectionTitle}>Contact</Typography>
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactFormContainer}>
          <Typography className={styles.formMessage}>
            Fill in the form below to reach out immediately
          </Typography>
          <Form className={styles.contactForm}>
            <Input
              placeholder="Full Name"
              bordered
              type="text"
              className={styles.contactInput}
            />
            <Input
              placeholder="E-mail"
              bordered
              type="email"
              className={styles.contactInput}
            />
            <Input.TextArea
              placeholder="Message"
              bordered
              className={styles.contactTextArea}
            />
            <Button className={styles.submitButton}>Submit</Button>
          </Form>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.infoRow}>
            <Typography className={styles.infoRowLabel}>LinkedIn: </Typography>
            <Typography className={styles.infoRowInfo}>
              <a href="https://www.linkedin.com/in/elson-nezaj-a79837246/">
                Elson Nezaj
              </a>
            </Typography>
          </div>
          <div className={styles.infoRow}>
            <Typography className={styles.infoRowLabel}>Instagram: </Typography>
            <Typography className={styles.infoRowInfo}>
              <a href="https://www.instagram.com/soninezaj/">@soni.nezaj</a>
            </Typography>
          </div>
          <div className={styles.infoRow}>
            <Typography className={styles.infoRowLabel}>E-mail: </Typography>
            <Typography className={styles.infoRowInfo}>
              elsonnezaj2005@gmail.com
            </Typography>
          </div>
          <div className={styles.infoRow}>
            <Typography className={styles.infoRowLabel}>Location: </Typography>
            <Typography className={styles.infoRowInfo}>
              Tirana, Albania
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
