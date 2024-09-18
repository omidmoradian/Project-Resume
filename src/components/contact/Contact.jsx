import {useRef} from 'react';
import './contact.css'
import {Email, Telegram, WhatsApp} from "@mui/icons-material";
import {Button, FormControl, TextareaAutosize, TextField} from "@mui/material";
import emailjs from "@emailjs/browser";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zz59lrs', 'template_iby348p', form.current, 'mX38-ifebj93hWOeA')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.error(error);
            });
        form.current.reset();

    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Concat Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <Email className='contact__option-icon'/>
                        <h5>Email</h5>
                        <h4>omidmoradi1512@gmail.com</h4>
                        <a href='mailto:omidmoradi1512@gmail.com'>Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <Telegram className='contact__option-icon'/>
                        <h5>Telegram</h5>
                        <h4>egatortutorials</h4>
                        <a href='https://Telegram.com'>Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <WhatsApp className='contact__option-icon'/>
                        <h5>WhatsApp</h5>
                        <h4>+989193664612</h4>
                        <a href='https://api.whatsapp.com/send?phone+989193664612'>Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
                    <TextField   sx={{
                        '& .MuiInputBase-root': {
                            width: '100%',
                            color: 'white',
                            padding: '0.5rem',
                            borderRadius: '0.5rem',
                            background: 'transparent',
                            border: '2px solid #4DB5FF66',
                            resize: 'none',
                        }
                    }} type='text' name='name' placeholder='Your Full Name' required/>
                    <TextField sx={{
                        '& .MuiInputBase-root': {
                            width: '100%',
                            color: 'white',
                            padding: '0.5rem',
                            borderRadius: '0.5rem',
                            background: 'transparent',
                            border: '2px solid #4DB5FF66',
                            resize: 'none',
                        }
                    }} type='email' name='email' placeholder='Your Email' required/>
                    <textarea rows={7} name='message' placeholder='Your Message' required></textarea>
                    <Button className='btn btn-primary' type='submit'>Submit</Button>
                </FormControl>
                </form>
            </div>
        </section>
    );
};

export default Contact;
