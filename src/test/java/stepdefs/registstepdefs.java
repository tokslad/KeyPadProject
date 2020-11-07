package stepdefs;

import RegistrationPage.regisPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class registstepdefs {
    WebDriver driver;
    public regisPage registration;
    @Given("^I navigate to propertyrete website$")
    public void iNavigateToPropertyreteWebsite() {
        System.setProperty("Webdriver.gecko.driver", "geckodriver");
        driver = new FirefoxDriver();
        registration = new regisPage(driver);
        driver.get("https://propertyrete.com/account/authentication");
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        registration.IClickOnRegister();

    }

    @When("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String FIRSTNAME) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        registration.IEnterFirstName(FIRSTNAME);
    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String LASTNAME) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        registration.IEnterLastName(LASTNAME);
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String EMAIL) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        registration.IEnterEmail(EMAIL);
    }

    @And("^I enter phone number \"([^\"]*)\"$")
    public void iEnterPhoneNumber(String PHONENUMBER) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        registration.IEnterPhoneNumber(PHONENUMBER);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String PASSWORD) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        registration.IEnterPassword(PASSWORD);
    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String CONFIRMPASSWORD) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        registration.IEnterConfirmPassword(CONFIRMPASSWORD);
    }

    @And("^I click on sign up button$")
    public void iClickOnSignUpButton() {
        registration.IClickOnSignUp();
    }

    @Then("^I get the outcome \"([^\"]*)\"$")
    public void iGetTheOutcome(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
