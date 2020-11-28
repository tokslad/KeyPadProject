package stepdefs;

import RegistrationPage.PropPageObject;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import utilities.Hooks;

public class Propstepdef {
   public WebDriver driver;
    PropPageObject propPageObject;


    public Propstepdef(Hooks hooks) {
        this.driver = hooks.getDriver();
        propPageObject = new PropPageObject(hooks);
    }

    @Given("^that I’m on propertyrete homepage$")
    public void thatIMOnPropertyreteHomepage() {

    }

    @When("^I click on buy$")
    public void iClickOnBuy() {
    }

    @And("^I select property for sale$")
    public void iSelectPropertyForSale() {
    }

    @And("^I enter town name$")
    public void iEnterTownName() {
    }

    @And("^I click search$")
    public void iClickSearch() {
    }

    @Then("^I should see more filters$")
    public void iShouldSeeMoreFilters() {
    }
}
