import React  from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    
}
    from 'reactstrap';
//  import css files
import './css/your.css';
import './css/contact.css';

const Formgroup = () => {

    const handleYourData = () => {
        const inputName = document.getElementsByName('exampleName');
        const inputEmail = document.getElementsByName('exampleEmail');
        const inputSubject = document.getElementsByName('exampleSubject');
        const textarea = document.getElementsByName('text');
        if (inputEmail.innerHTML === undefined || inputName.innerHTML === undefined || inputSubject.innerHTML === undefined || textarea.innerHTML === undefined) {
            if (inputName.innerHTML === undefined) {
                console.log('salom')
                let pName = document.getElementById('name').innerHTML = 'Please enter at least 4 chars'
            }
            if (inputEmail.innerHTML === undefined) {
                console.log('salom')
                let pEmail = document.getElementById('email').innerHTML = 
               'Please enter a valid email'
            }
            if (inputSubject.innerHTML === undefined) {
                console.log('salom')
                let pSubject = document.getElementById('subject').innerHTML = 'Please enter at least 8 chars of subject'
            }
            if (textarea.innerHTML === undefined) {
                console.log('salom')
                let pText = document.getElementById('text').innerHTML = 'Please write something for us'

            }
        }
    }
    return (
        <div className="yourdata col-12 col-lg-6 col-md-12">
            <div>
                <div>
                    <i className="material-icons md-24">email</i>
                    <h4>Contact form</h4>
                </div>
                <p>Want to work with us or just want to say hello? Don't hesitate to get in touch!</p>
            </div>
            <Form action="/" method="POST">
                <FormGroup>
                    <Label for="exampleName">Name *</Label>
                    <Input type="text" name="exampleName" id="exampleName" placeholder="with a placeholder" />
                    <p id="name"></p>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email *</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="password placeholder" />
                    <p id="email"></p>
                </FormGroup>
                <FormGroup>
                    <Label for="subject">Subject *</Label>
                    <Input type="text" name="subject" id="exampleSubject" placeholder="subject placeholder" />
                    <p id="subject"></p>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                    <p id="text"></p>
                </FormGroup>

                <Button className="btn-info" onClick={handleYourData}>Send a message</Button>
            </Form>
        </div>
    )
}
export default Formgroup;