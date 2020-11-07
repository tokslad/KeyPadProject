package stepdefs;

import RegistrationPage.PropPageObject;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Propstepdef {
    WebDriver driver;
    public PropPageObject property;
    @Given("^that I’m on propertyrete homepage$")
    public void thatIMOnPropertyreteHomepage() {
        System.setProperty("WebDriver.gecko.driver","geckodriver");
        driver = new FirefoxDriver();
        property = new PropPageObject(driver);
        driver.get("http://propertyrete.com");
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
