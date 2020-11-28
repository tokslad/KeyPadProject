package stepdefs;

import RegistrationPage.RegisPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import utilities.Hooks;
import static org.junit.Assert.assertTrue;

public class registstepdefs {
   public WebDriver driver;
   RegisPage regisPage;


    public registstepdefs(Hooks hooks) {
        this.driver = hooks.getDriver();
        regisPage = new RegisPage(hooks);
    }

    @And("I click on hello sign in")
    public void iClickOnHelloSignIn() throws InterruptedException {
        regisPage.IClickOnHelloSignIn();
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        regisPage.IClickOnRegister();

    }

    @When("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstName) throws InterruptedException {
        regisPage.IEnterFirstName(firstName);

    }

    @Given("I navigate to propertyrete website {string}")
    public void iNavigateToPropertyreteWebsite(String url) {
        regisPage.navigateToUrl(url);
    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lastName){
        regisPage.IEnterLastName(lastName);

    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String Email){
        regisPage.IEnterEmail(Email);

    }
//
    @And("^I enter phone number \"([^\"]*)\"$")
    public void iEnterPhoneNumber(String phoneNumber){
        regisPage.IEnterPhoneNumber(phoneNumber);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String Password){
        regisPage.IEnterPassword(Password);

    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String ConfirmPassword){
        regisPage.IEnterConfirmPassword(ConfirmPassword);

    }

    @And("^I click on sign up button$")
    public void iClickOnSignUpButton(){
        regisPage.IClickOnSignUp();

    }


//    @Then("a message Thank you for signing up please check your mail or mobile to activate your account")
//    public void aMessageThankYouForSigningUpPleaseCheckYourMailOrMobileToActivateYourAccount(String RegistrationInfo) {
//        Assert.assertEquals(RegistrationInfo, "Thank you for signing up please check your mail or mobile to activate your account");
//    }


    @Then("a message {string}")
    public void aMessage(String RegistrationInfo) {
        Assert.assertEquals(RegistrationInfo,"Thank you for signing up please check your mail or mobile to activate your account");
    }
}
