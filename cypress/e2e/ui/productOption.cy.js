import BuyPage from "../../pages/buyPage"
import ShopPage from "../../pages/shopPage"
import price from "../../fixtures/price.json"
import text from "../../fixtures/text.json"
import products from "../../fixtures/product.json"

describe("Product Options tests", () => {
  const buyPage = new BuyPage()
  const shopPage = new ShopPage()

  beforeEach(() => {
    buyPage.open()

    console.log(products)
  })

  Array(
    {
      name: "organizations",
      usageButton: buyPage.forOrganizationsOption,
      expected: price.organizations_monthly_ultimate
    }, 
    {
      name: "individual use",
      usageButton: buyPage.forIndividualsOption,
      expected: price.individual_monthly_ultimate
    } 
  ).forEach( ({name, usageButton, expected} ) => {
    it(`Check price with monthly billing for ${name}`, () => {
      usageButton()
        .click({force: true})

      buyPage.monthlyOption()
        .click({force: true})

      buyPage.ultimateProduct
        .name()
        .contains(text.ultimateName)

      buyPage.ultimateProduct
        .priceTitle()
        .contains(text.priceTitlePerMonth)

      buyPage.ultimateProduct
        .price()
        .contains(expected.priceEuro)

      buyPage.ultimateProduct
        .price()
        .contains(expected.priceCents)
        
      // add data-test for AI price and VAT
      // add checking for AI price and VAT  
    })
  })

  it.skip("Check price with yearly billing for organizations/individuals" , () => {})

  it("Check AI checkbox changes the price and quote link", () => {
    buyPage.monthlyOption()
      .click({force: true})
    
    buyPage.ultimateProduct
      .quoteLink()
      .should("be.visible")
    
    buyPage.ultimateProduct
      .AICheckbox()
      .click()
    
    buyPage.ultimateProduct
      .quoteLink()
      .should("not.exist")

    buyPage.ultimateProduct
      .price()
      .contains(price.organizations_monthly_ultimate.priceWithAIEuro)   
    
    buyPage.ultimateProduct
      .price()
      .contains(price.organizations_monthly_ultimate.priceWithAIVents)   
  })

  it("Buy button redirects to the shop page", () => {
    buyPage.ultimateProduct
      .buyButton()
      .click()

    cy.url().should("include", shopPage.path)  
  })

  it("Quote button redirects to the shop page", () => {
    buyPage.ultimateProduct
      .buyButton()
      .click()

    cy.url().should("include", shopPage.path)  
  })

  products.forEach( product => {
    it(`${product} should be in the All Products Pack`, () => {
      buyPage.allProductsProduct
        .productsPackExpandedButton()
        .click()

      buyPage.allProductsProduct
        .productsPackList()
        .should("be.visible")
        .contains(product)
    })
  })

  it.skip("Learn more link should redirect to /all page", () => {})

  it.skip("All Products Pack should have Best offer label", () => {})

  it.skip("Perpetual fallback license should lead to the lisence page", () => {})

  it.skip("VAT ID should lead to the VAT page", () => {})
})
