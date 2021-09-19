const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dualex143@hotmail.com',
        subject: 'Thanks for Joining in!',
        text: `Welcome to the app, ${name}. let me know how you get along with the app.`
    })
}

const sendUnsubscribeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dualex143@hotmail.com',
        subject: 'We regret your departure!',
        text: `Hi, ${name}. We are sorry you are leaving, but we are waiting for you soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendUnsubscribeEmail
}