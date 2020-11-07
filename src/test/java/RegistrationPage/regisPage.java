package RegistrationPage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import java.util.Random;

public class regisPage {
    public regisPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(how = How.XPATH, using = ("//*[@id=\"register-tab\"]"))
    private WebElement register;

    public void IClickOnRegister()
    {
        register.click();
    }

    @FindBy(how = How.XPATH,using = ("//*[@id=\"first_name\"]"))
    private WebElement firstname;

    public void IEnterFirstName(String FIRSTNAME)
    {
        firstname.sendKeys(FIRSTNAME);
    }

    @FindBy(how = How.XPATH,using = ("//*[@id=\"last_name\"]"))
    private WebElement lastName;

    public void IEnterLastName(String LASTNAME)
    {
        lastName.sendKeys(LASTNAME);
    }

    @FindBy(how = How.XPATH,using = ("//*[@id=\"email\"]"))
    private WebElement emailAddress;

    public void IEnterEmail(String EMAIL)
    {
        //Random randomGenerator = new Random();
        //int randomInt = randomGenerator.nextInt(1000);
        //emailAddress.sendKeys(emailAddress+randomInt+"@gmail.com");
        emailAddress.sendKeys(EMAIL);
    }

    @FindBy(how = How.XPATH,using = ("//*[@id=\"mobile\"]"))
    private WebElement phoneNumber;

    public void IEnterPhoneNumber(String PHONENUMBER)
    {
        phoneNumber.sendKeys(PHONENUMBER);
    }

    @FindBy(how = How.XPATH,using = ("//*[@id=\"reg_password\"]"))
    private WebElement password;

    public void IEnterPassword(String PASSWORD)
    {
        password.sendKeys(PASSWORD);
    }

    @FindBy(how = How.XPATH,using = ("//*[@id=\"confirm_password\"]"))
    private WebElement confirmPassword;

    public void IEnterConfirmPassword(String CONFIRMPASSWORD)
    {
        confirmPassword.sendKeys(CONFIRMPASSWORD);
    }

    @FindBy(how = How.XPATH,using = ("//*[@id=\"btn_signup\"]"))
    private WebElement signUp;

    public void IClickOnSignUp()
    {
        signUp.click();
    }

}
