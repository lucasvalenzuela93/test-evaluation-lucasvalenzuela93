/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    get automationExerciseLabel() { return $('[class="logo pull-left"]')}

    goToMainPage() { return browser.url('https://automationexercise.com')}
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    goToPage(path) { return browser.url(`https://automationexercise.com/${path}`)}
}
