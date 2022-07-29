const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageObjets/login.page');
const ContactPage = require('../pageObjets/contact.page');
const ProductsPage = require('../pageObjets/products.page');
const productsPage = require('../pageObjets/products.page');

const credentials = {
    name: "Test", 
    email: "fakeemail+test7@gmail.com", 
    password: "Pass123", 
    number: "1414"
}

Given(/^User lands on Automation Exercise page$/, async() => {
    await browser.deleteAllCookies();
    await LoginPage.goToMainPage();
    await expect(LoginPage.automationExerciseLabel).toBeDisplayed();
});

When(/^the user click on 'Signup \/ Login' button$/, async() => {
    await LoginPage.clickSingupLoginButton();
})

When(/^user enter credentials$/, async () => {
    await expect(LoginPage.newUserSignupTitle).toBeDisplayed();
    await LoginPage.newUserSingup(credentials.name, credentials.email);
});

Then(/^user should see a message saying (.*)$/, async (message) => {
    await expect(LoginPage.enterAccountInformationLabel).toBeDisplayed();
    await expect(LoginPage.enterAccountInformationLabel).toHaveTextContaining(message);
    
});

When(/^user fills details$/, async () => {
    await LoginPage.fillDetails(credentials.password, credentials.name, credentials.number);
    await LoginPage.createAccountButtom.click();
});

Then(/^account created label is displayed$/, async () => {
    await expect(LoginPage.accountCreatedLabel).toBeDisplayed();
    await LoginPage.clickContinue();
});

Then(/^user (.*) is logged$/, async (userName) => {
    await expect(LoginPage.loggedAsLabel).toHaveTextContaining(userName);
});

Then(/^user is deleted$/, async () => {
    await LoginPage.deleteAccount();
    await expect($('div[class="page-header"]')).toBeDisplayed(); //'ACCOUNT DELETED!' is not visible
});

When(/^user logins with credentials$/, async () => {
    await expect(LoginPage.loginLabel).toBeDisplayed();
    await LoginPage.login(credentials.email, credentials.password);
});

When(/^the user click on 'Contact us' button$/, async() => {
    await ContactPage.clickContactUsButton();
    await expect(ContactPage.getInTouchTItle).toBeDisplayed();
})

When(/^user fill all required fields$/, async() => {
    await ContactPage.fillForm(credentials.name, credentials.email, 'Subject text', 'Message text');
})

Then(/^verify success message is displayed$/, async() => {
    await expect(ContactPage.successMessage).toBeDisplayed();
})

When(/^the user click on 'Products' button$/, async() => {
    await ProductsPage.clickProductsButton();
    await expect(ProductsPage.allProductsTitle).toBeDisplayed();
    await expect(ProductsPage.productsList).toBeDisplayed();
})

Then(/^user selects the first product listed$/, async() => {
    await ProductsPage.selectFirstProduct();
    await expect(ProductsPage.writeYourReview).toBeDisplayed();
})

Then(/^the products details are displayed$/, async() => {
    await expect(ProductsPage.productName).toBeDisplayed();
    await expect(ProductsPage.productCategory).toBeDisplayed();
    await expect(ProductsPage.productPrice).toBeDisplayed();
    await expect(ProductsPage.productCondition).toBeDisplayed();
    await expect(ProductsPage.productBrand).toBeDisplayed();
})

