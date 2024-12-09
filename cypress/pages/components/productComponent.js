export const ProductOptions = {
    "Ultimate": "product-card-IntelliJ-IDEA-Ultimate",
    "allProducts": "product-card-All-Products-Pack"
}

export class ProductComponent {
    product
    
    constructor(productString) {
        if (!productString || !Object.values(ProductOptions).includes(productString)) {
            console.log(productString)
            throw new Error("Product is not defined")
        }
        this.product = productString
    }

    productComponent = () => cy.getByDataTest(this.product).filter(":visible")

    name = () => this.productComponent().find("[data-test='product-name']")

    description = () => this.productComponent().find("[data-test='product-description']")

    logo = () => this.productComponent().find("[data-test='product-list-logo']")
    
    AICheckbox = () => this.productComponent().find("[data-test='checkbox']")

    priceTitle = () => this.productComponent().find("[data-test='product-price-title']")

    price = () => this.productComponent().find("[data-test='product-price']")

    buyButton = () => this.productComponent().find("[data-test='product-card-footer-buy-button']")

    quoteLink = () => this.productComponent().find("[data-test='product-card-footer-links']")

    productsPackExpandedButton = () => this.productComponent().find("[data-test='collapse-trigger']")

    productsPackList = () => this.productComponent().find("[data-test='product-list']")
}