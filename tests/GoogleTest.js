module.exports = {
    //Following is a Test to practice a Google Advanced Search Form 
    "Google Test": browser => {
        const nameSearch = `#xX4UFf`
        const languageSelector = `#lr_button`
        const selectedLanguage = `li[id=':m'] div[class='goog-menuitem-content']`
        const lastUpdate = `#as_qdr_button`
        const updatedTime = `li[id=':80'] div[class='goog-menuitem-content']`
        const submitButton = `input[value='Advanced Search']`
        const mainDiv = `.SwsxUd`
        browser
            .url("https://www.google.co.in/advanced_search")
            .windowMaximize()
            .setValue(nameSearch, `IPL`)
            .click(languageSelector)
            .click(selectedLanguage)
            .click(lastUpdate)
            .click(updatedTime)
            .saveScreenshot('screenshots/googleForm.png')
            .click(submitButton)
            .saveScreenshot('screenshots/result.png')
            .assert.urlContains('as_q=IPL', 'IPL is searhced Successfully')
            .assert.urlContains('lr=lang_hi', 'The Language was set to Hindi')
            .assert.elementPresent(mainDiv, 'The IPL table was visible')

    }
}