class LoginWindowComponent {

    get loginFormModal() {
        return $('.login-form_modal');
    }

    get loginSubmitBtn() {
        return $('.login-form__submit');
    }

    get loginCloseBtn() {
        return $('.close-button');
    }

        /**
     * @param button {'login'} 
     */
        async clickButton(button) {
            if (button.toLowerCase() === 'submit') {
                await this.loginSubmitBtn.click();
            } else {
                await this.loginCloseBtn.click();
            }
        }
}

module.exports = LoginWindowComponent;