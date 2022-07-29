const Page = require('./page');
// const path = require('path');

class ProductsPage extends Page {
    get productsButton() { return $('li a[href="/products"]')}
    get allProductsTitle() { return $('h2[class="title text-center"]')}
    get productsList() { return $('[class="features_items"]')}
    get firstViewProductButton() { return $('li a[href="/product_details/1"]')}
    get writeYourReview() { return $('[class="active"]')}
    get productName() { return $('[class="product-information"] h2')}
    get productCategory() { return $('.//p[contains(text(), "Category")]')}
    get productPrice() { return $('[class="product-information"] span span')}
    get productCondition() { return $('.//b[contains(text(), "Condition")]')}
    get productBrand() { return $('.//b[contains(text(), "Brand")]')}

    async clickProductsButton() {
        await this.productsButton.click();
    }

    async selectFirstProduct() {
        await this.firstViewProductButton.scrollIntoView();
        await this.firstViewProductButton.click();
    }

}

module.exports = new ProductsPage();
