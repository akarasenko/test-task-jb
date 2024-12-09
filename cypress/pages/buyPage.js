import BasePage from "./basePage"
import {ProductOptions, ProductComponent} from "./components/productComponent"

export default class BuyPage extends BasePage {
    path = "/idea/buy/"

    forOrganizationsOption = () => cy.contains("For Organizations")

    forIndividualsOption = () => cy.contains("For Individual Use")

    forSpecialOption = () => cy.contains("Special Categories")

    yearlyOption = () => cy.contains("Yearly billing")

    monthlyOption = () => cy.contains("Monthly billing")

    ultimateProduct = new ProductComponent(ProductOptions.Ultimate)

    allProductsProduct = new ProductComponent(ProductOptions.allProducts)

    trialButton = () => cy.contains("Request a trial")
}