package stepdefs;

import RegistrationPage.FindAgentPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import utilities.Hooks;

public class FindAgentStepdef {
    public WebDriver driver;
    FindAgentPage findAgentPage;


    public FindAgentStepdef(Hooks hooks) {
        this.driver = hooks.getDriver();
        findAgentPage = new FindAgentPage(hooks);
    }

    @Given("^I navigate to propertyrete$")
    public void iNavigateToPropertyrete() {
    }

    @When("^I click on find agent$")
    public void iClickOnFindAgent() {
    }

    @And("^I enter location$")
    public void iEnterLocation() {
    }

    @And("^I enter agent name$")
    public void iEnterAgentName() {
    }

    @And("^I select agent type$")
    public void iSelectAgentType() {
    }

    @And("^I click on the search button$")
    public void iClickOnTheSearchButton() {
    }

    @Then("^I should see agents available$")
    public void iShouldSeeAgentsAvailable() {
    }
}
