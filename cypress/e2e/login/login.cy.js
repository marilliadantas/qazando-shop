/// <reference types = "cypress" />

import homePage from "../../support/pages/home_page";
import loginPage from "../../support/pages/login_page";

describe('Login', () => {
    beforeEach(() => {
        homePage.accessLoginPage()
    });

    it('Login success', () => {
        loginPage.fillLogin("kylian@teste.com", "123Teste")
        loginPage.logIn()
        loginPage.checkLoginSuccess()
        loginPage.checkUrl('/my-account');
    });

    it('Login with invalid email', () => {
        loginPage.fillLogin("emailinvalido", "123Teste")
        loginPage.logIn()
        loginPage.checkMessage("E-mail inválido.")
    });

    it('Login with invalid password', () => {
        loginPage.fillLogin("kylian@teste.com", "teste23871")
        loginPage.logIn()
        loginPage.checkMessage("Senha inválida.")
    });

    it('Login with blank email', () => {
        loginPage.fillLogin(null, "123Teste")
        loginPage.logIn()
        loginPage.checkMessage("E-mail inválido.")
    });

    it('Login with blank password', () => {
        loginPage.fillLogin("kylian@teste.com", null)
        loginPage.logIn()
        loginPage.checkMessage("Senha inválida.")
    });

    it('Login with blank email and password', () => {
        loginPage.fillLogin(null, null)
        loginPage.logIn()
        loginPage.checkMessage("E-mail inválido.")
        loginPage.checkMessage("Senha inválida.")
    });

    it('Select and Deselect remember me checkbox', () => {
        loginPage.selectCheckbox()
        loginPage.checkCheckbox()
        loginPage.deselectCheckbox()
        loginPage.checkCheckboxUncheck()
    });

    it('Validate link create account', () => {
        loginPage.clickLinkCreateAccount()
        loginPage.checkLinkRegistration()
        loginPage.checkUrl('/register')
    });
});