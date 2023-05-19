module.exports = {
    "Appwrk Test": browser => {
        browser.url("https://appwrk.com/")
        browser.windowMaximize()
        browser.pause(3000)
        const hireDev = "//a[@class='default-btn ml-0 btn-arrow']"
        browser.useXpath()
        browser.click(hireDev)
        browser.assert.elementPresent(`//*[@id="hireResource"]/div[1]/div[1]/div/div/div/div`)
    },
    "Contact Me": browser => {
        this["Appwrk Test"]
        browser.pause(2000)
        browser.click("//img[@title='APPWRK IT Solutions Pvt. Ltd.- Logo']")
        browser.pause(2000)
        const requestQuote = "//a[@id='request_a_quote_header']"
        browser.click(requestQuote)
        browser.pause(2000)
        browser.assert.elementPresent(`//*[@id="expertConsultForm_header"]`)
    },
    "Fill in the Form": browser => {
        this["Contact Me"]
        const fullName = "//input[@placeholder='Full name']"
        const selectISDCode = '//div[@class="form-group"]//select[@id="countryList"]'
        const ISDCodeValue = '//div[@class="form-group"]//select[@id="countryList"]/option[text()="Angola (+ 244)"]'
        const email = "//input[@placeholder='Email address']"
        const phoneNumber = "//div[@class='form-group']//input[@placeholder='Phone number']"
        const briefAboutProject = "//textarea[@placeholder='Please share anything that will help prepare for our meeting.']"
        const projectLink = "//input[@name='file']"
        const submitButton = "//input[@class='wpcf7-form-control has-spinner wpcf7-submit btn-block']"
        browser.setValue(fullName, "Steven S")
            .setValue(email, "s.steven.3115@gmail.com")
            .click(selectISDCode)
            .click(ISDCodeValue)
            .setValue(phoneNumber, "7894561230")
            .setValue(briefAboutProject, "There's no brief available about the project")
            .setValue(projectLink, "Not Applicable")
        browser.pause(5000)
            .click(submitButton)
    },
    "Verify The Filled Form": browser => {
        this["Fill in the Form"]
        const thankYouPage = `//*[@id="thankyou"]`
        browser.assert.elementPresent(thankYouPage)
    }
}