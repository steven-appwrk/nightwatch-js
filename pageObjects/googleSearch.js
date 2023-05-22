module.exports = {
    url: 'https://www.google.co.in/advanced_search',
    elements: {
        name: { selector: `#xX4UFf` },
        languageSelector: {
            selector: `#lr_button`
        },
        selectedLanguage: {
            selector: `li[id=':m'] div[class='goog-menuitem-content']`
        },
        lastUpdate: {
            selector: `#as_qdr_button`
        },
        updatedTime: {
            selector: `li[id=':80'] div[class='goog-menuitem-content']`
        },
        submit: {
            selector: `input[value='Advanced Search']`
        },
        mainColumn: {
            selector: `.SwsxUd`
        },
        bottomGoogleLogo: {
            selector: `a[aria-label='Page 2'] span[class='SJajHc NVbCr']`
        },
        topGoogleLogo: {
            selector: `img[alt='Google']`
        }
    }
}