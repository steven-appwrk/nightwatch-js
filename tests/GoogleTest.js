module.exports = {
    //Following is a Test to practice a Google Advanced Search Form 
    '@tags': ['Google'],
    "Google Search Form Test": browser => {
        const pom = browser.page.googleSearch();
        browser.windowMaximize()
        pom
            .navigate()
            .setValue('@name', `IPL`)
            .click('@languageSelector')
            .click('@selectedLanguage')
            .click('@lastUpdate')
            .click('@updatedTime')
            .saveScreenshot('screenshots/googleForm.png')
            .pause(3000)
            .click('@submit')
            .saveScreenshot('screenshots/result.png')
            .assert.elementPresent('@mainColumn', 'The IPL table was visible')
            .assert.urlContains('as_q=IPL', 'IPL is searhced Successfully')
            .assert.urlContains('lr=lang_hi', 'The Language was set to Hindi')
        browser.execute(function () {
            // Scroll down to the bottom of the page
            window.scrollBy(0, document.body.scrollHeight);
        })
            .pause(3000)
        pom
            .assert.elementPresent('@bottomGoogleLogo', 'The page has been scrolled down till the bottom')
        browser.execute(function () {
            // Scroll down to the Top of the page
            window.scrollTo(0, 0);
        })
            .pause(3000)
        pom
            .assert.elementPresent('@topGoogleLogo', 'The page has been scrolled up till the top')
    }
}