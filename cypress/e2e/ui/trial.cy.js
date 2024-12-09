import BuyPage from "../../pages/buyPage"
import RequestTrialPage from "../../pages/requestTrialPage"
import text from "../../fixtures/text.json"

describe('Request a trial test', () => {
  const buyPage = new BuyPage()
  const requestTrialPage = new RequestTrialPage()

  beforeEach(() => {
    buyPage.open()
  })

  it("Request a trial test", () => {
    cy.contains(text.trialTitle)
      .should("be.visible")

    cy.contains(text.trialText1)
      .should("be.visible")

    cy.contains(text.trialText2)
      .should("be.visible")

    buyPage.trialButton()
      .contains(text.trialButton)
      .click()

    cy.url()
      .should("contain", requestTrialPage.path)  
  })
})
