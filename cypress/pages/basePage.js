export default class BasePage {
    path

    open(..._args) {
        if (!this.path) {
            throw new Error("Page path is not defined")
        }
        cy.visit(this.path)
    }
}