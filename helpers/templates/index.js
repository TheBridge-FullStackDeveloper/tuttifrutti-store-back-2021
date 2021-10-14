const activation = ({ to, token }) => ({
  from: `" 🤟 Tutteam" ${process.env.MAIL_USER}`,
  to,
  subject: 'Confirma tu correo',
  html: `
    <h2> Un último paso </h2>
    <p> para confirmar tu cuenta, haz clic aquí: 
    <a href="${process.env.SERVER_URL}:${process.env.SERVER_PORT}/auth/confirmation/${token}" target="_blank"> ${process.env.SERVER_URL}:${process.env.SERVER_PORT}/auth/confirmation/${token} </a>
    </p>
  `,
});

const confirmation = ({ to, username }) => ({
  from: `" 🤟 Tutteam" ${process.env.MAIL_USER}`,
  to,
  subject: `${username}, tu cuenta ha sido verificada`,
  html: `
    <h2> Gracias por registrarte ${username} </h2>
    <p> ${username}, esto es un template de plantilla </p>  
  `,
});

const passwordUpdate = ({ email, token }) => ({
  from: `" 🤟 Tutteam" ${process.env.MAIL_USER}`,
  to,
  subject: 'Contraseña olvidada',
  html: `
  <h2>¿Has olvidado tu contraseña?</h2>
  <p>Haz clicl <a href="http://localhost:3000/auth/password/request?token=${token}&email=${email}"> aquí </a> para poder obtener una nueva contraseña</p>
  <p>Gracias por tu confianza</p>
  `,
});

module.exports = {
  activation,
  confirmation,
  passwordUpdate,
};
