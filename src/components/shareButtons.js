import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  MailruShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  MailruIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share";

export default ({ link = window.location.href }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: 20, marginBottom: 15, fontWeight: 500 }}>Invite your friends and other aspirants to take Test</p>
      <EmailShareButton url={link}>
        <EmailIcon size={38} style={{ margin: 5 }} round={true} />
      </EmailShareButton>
      <FacebookShareButton url={link}>
        <FacebookIcon size={38} style={{ margin: 5 }} round={true} />
      </FacebookShareButton>
      <LinkedinShareButton url={link}>
        <LinkedinIcon size={38} style={{ margin: 5 }} round={true} />
      </LinkedinShareButton>
      <MailruShareButton url={link}>
        <MailruIcon size={38} style={{ margin: 5 }} round={true} />
      </MailruShareButton>
      <TelegramShareButton url={link}>
        <TelegramIcon size={38} style={{ margin: 5 }} round={true} />
      </TelegramShareButton>
      <TwitterShareButton url={link}>
        <TwitterIcon size={38} style={{ margin: 5 }} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={link}>
        <WhatsappIcon size={38} style={{ margin: 5 }} round={true} />
      </WhatsappShareButton>
    </div>
  );
};
