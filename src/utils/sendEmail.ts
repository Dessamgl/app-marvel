import emailjs from 'emailjs-com';

export default async function sendEmail(
  userMailToSend: string,
  message: string,
): Promise<boolean> {
  const result = await emailjs.send(
    `${process.env.REACT_APP_MAIL_SERVICE_ID}`,
    `${process.env.REACT_APP_MAIL_TEMPLATE_ID}`,
    {
      message: `${message}`,
      toemail: `${userMailToSend}`,
    },
    `${process.env.REACT_APP_MAIL_USER_ID}`,
  );

  return result.status === 200;
}
