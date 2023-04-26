const { Given, When } = require('@wdio/cucumber-framework');
const { page } = require('../po');

Given('I open {string} page', function(pageName) {
    return page(pageName).open();
});

When('I click {string} button in the sitetoolbar menu',  function(button) {
    return page('textbook').siteToolBarMenu.clickButton(button);
});

When('I click {string} button in modal window', function(button) {
    return page('textbook').loginWindow.clickButton(button);
});