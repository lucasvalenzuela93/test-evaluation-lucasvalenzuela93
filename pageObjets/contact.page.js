const Page = require('./page');
const path = require('path');

class ContactPage extends Page {
    get contactUsButton() { return $('li a[href*="contact_us"]')}
    get getInTouchTItle() { return $('[class="contact-form"] h2[class="title text-center"]')}
    get nameInput() { return $('input[data-qa="name"]')}
    get emailInput() { return $('input[data-qa="email"]')}
    get subjectInput() { return $('input[data-qa="subject"]')}
    get messageInput() { return $('textarea[data-qa="message"]')}
    get uploadFileButton() { return $('input[name="upload_file"]')}
    get submitButton() { return $('input[data-qa="submit-button"]')}
    get successMessage() { return $('[class="status alert alert-success"]')}
    
    async clickContactUsButton() {
        await this.contactUsButton.click();
    }

    async fillForm(name, email, subject, message) {
        const filePath = path.join(__dirname, '../data/file.txt');

        await this.nameInput.setValue(name);
        await this.emailInput.setValue(email);
        await this.subjectInput.setValue(subject);
        await this.messageInput.setValue(message);
        await this.uploadFileButton.setValue(filePath);
        await this.submitButton.click();
        await browser.acceptAlert();
    }
}

module.exports = new ContactPage();
