const { Then } = require('@wdio/cucumber-framework');
const { page } = require("../po");
const compareText = require("./utils/compare-text");

Then('Page title should {string} {string}', async function(shouldBeParameter, titleText) {
    const pageTitle = await browser.getTitle();
    return compareText(pageTitle, titleText, shouldBeParameter);
});

Then(/^modal window should( not)? be displayed$/, async (notArg) => {
    let assert = expect(page('textbook').loginWindow.loginFormModal);
    if (notArg) {
        assert = assert.not;
    }
    return assert.toBeDisplayed();
});