const Page = require('./page');
class LoginPage extends Page {
    get singupLoginButton() { return $('li a[href*="login"]')}
    get logoutButton() { return $('li a[href*="logout"]')}
    get newUserSignupTitle() { return $('[class="signup-form"] h2')}
    get inputUsername() { return $('input[data-qa="signup-name"]')}
    get inputEmailAddress() { return $('input[data-qa="signup-email"]')}
    get buttonSubmit() { return $('button[data-qa="signup-button"]')}
    get enterAccountInformationLabel() { return $('[class="title text-center"]:nth-child(1)')}
    get mrTitle() { return $('input[value="Mr"]')}
    get registerInputPassword() { return $('input[type="password"]')}
    get selectDaysDropdown() { return $('[name=days]')}
    get selectMonthsDropdown() { return $('[name=months]')}
    get selectYearsDropdown() { return $('[name=years]')}
    get checkNewsletter() { return $('input[id="newsletter"]')}
    get checkReceiveOffers() { return $('input[id="optin"]')}
    get firstNameInput() { return $('input[id="first_name"]')}
    get lastNameInput() { return $('input[id="last_name"]')}
    get companyInput() { return $('input[id="company"]')}
    get address1Input() { return $('input[id="address1"]')}
    get address2Input() { return $('input[id="address2"]')}
    get countryDropdown() { return $('select[id="country"]')}
    selectCountry(country) { return $(`option[value="${country}"]`)}
    get stateInput() { return $('input[id="state"]')}
    get cityInput() { return $('[name="city"]')}
    get zipcodeInput() { return $('input[id="zipcode"]')}
    get mobileNumberInput() { return $('input[id="mobile_number"]')}
    get createAccountButtom() { return $('button[data-qa="create-account"]')}
    get accountCreatedLabel() { return $('h2[data-qa="account-created"]')}
    get continueButton() { return $('a[data-qa="continue-button"]')}
    get loggedAsLabel() { return $('.//a[contains(text(), " Logged in as ")]/b')}
    get deleteAccountButton() { return $('li a[href*="delete_account"]')}
    get loginLabel() { return $('[class="login-form"] h2')}
    get emailLoginInput() { return $('input[data-qa="login-email"]')}
    get passwordLoginInput() { return $('input[data-qa="login-password"]')}
    get loginButton() { return $('button[data-qa="login-button"]')}

    async clickSingupLoginButton() {
        await this.singupLoginButton.click();
    }

    async newUserSingup(username, emailAddress) {
        await this.inputUsername.setValue(username);
        await this.inputEmailAddress.setValue(emailAddress);
        await this.buttonSubmit.click();
    }

    async fillDate(day, month, year) {
        await this.selectDaysDropdown.click;
        await this.selectDaysDropdown.$(`option[value="${day}"]`).click;
        await this.selectMonthsDropdown.click;
        await this.selectMonthsDropdown.$(`option[value="${month}"]`).click;
        await this.selectYearsDropdown.click;
        await this.selectYearsDropdown.$(`option[value="${year}"]`).click;
    }

    async fillDetails(password, testInput, testNumber) {
        await this.mrTitle.click();
        await this.registerInputPassword.setValue(password);
        await this.fillDate('28', '07', '2000');
        await this.checkNewsletter.click();
        await this.checkReceiveOffers.scrollIntoView();
        await this.checkReceiveOffers.click();
        await this.firstNameInput.setValue(testInput);
        await this.lastNameInput.setValue(testInput);
        await this.companyInput.setValue(testInput);
        await this.address1Input.setValue(testInput);
        await this.address2Input.setValue(testInput);
        await this.stateInput.setValue(testInput);
        await this.cityInput.setValue(testInput);
        await this.zipcodeInput.setValue(testNumber);
        await this.mobileNumberInput.setValue(testNumber);
    }
    
    async clickContinue() {
        await this.continueButton.click();
    }

    async deleteAccount() {
        await this.deleteAccountButton.click();
    }

    async login(emailAddress, password) {
        await this.emailLoginInput.setValue(emailAddress);
        await this.passwordLoginInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();
