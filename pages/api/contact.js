// import sendgrid from '@sendgrid/mail';

// export default async (req, res) => {
//   if (req.method === 'POST') {
//     try {
//       sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
//       const { name, email, message } = req.body;

//       const msg = {
//         to: 'mridoy031@gmail.com',
//         from: email,
//         subject: `New Contact from ${name}`,
//         text: message,
//       };

//       await sendgrid.send(msg);
//       res.status(200).json({ message: 'Message sent successfully' });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       res.status(500).json({ message: 'Error sending message' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// };


import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      const msg = {
        to: 'mridoy031@gmail.com',
        from: email,
        subject: `New Contact from ${name}`,
        text: message,
      };

      await sgMail.send(msg);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ message: 'Error sending message' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
