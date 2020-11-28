package RegistrationPage;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import utilities.Hooks;

import java.util.Random;

public class RegisPage {
    public WebDriver driver;


    public RegisPage(Hooks hooks) {
        this.driver = hooks.getDriver();
    }


    By firstname= By.xpath("//*[@id=\"first_name\"]");
    By helloSignin = By.linkText("Hello sign in");
    By register = By.xpath("//*[@id=\"register-tab\"]");
    By lastname = By.xpath("//*[@id=\"last_name\"]");
    By email = By.xpath("//*[@id=\"email\"]");
    By phonenumber = By.xpath("//*[@id=\"mobile\"]");
    By password = By.xpath("//*[@id=\"reg_password\"]");
    By confirmpassword = By.xpath("//*[@id=\"confirm_password\"]");
    By signup = By.xpath("//*[@id=\"btn_signup\"]");
    By registrationinfo = By.xpath("//*[@id=\"successModalBody\"]");

    public void navigateToUrl(String url){
        driver.navigate().to(url);
    }

    public void IClickOnHelloSignIn() throws InterruptedException {
        Thread.sleep(5000);
        driver.findElement(helloSignin).click();
    }


    public void IClickOnRegister(){
        driver.findElement(register).click();
    }

    public void IEnterFirstName(String firstName) throws InterruptedException {
        Thread.sleep(5000);
        driver.findElement(firstname).sendKeys(firstName);
    }

    public void IEnterLastName(String lastName){
        driver.findElement(lastname).sendKeys(lastName);
    }

    public void IEnterEmail(String Email){
        driver.findElement(email).sendKeys(Email);
    }

    public void IEnterPhoneNumber(String phoneNumber){
        driver.findElement(phonenumber).sendKeys(phoneNumber);
    }

    public void IEnterPassword(String Password){
        driver.findElement(password).sendKeys(Password);

    }

    public void IEnterConfirmPassword(String ConfirmPassword){
        driver.findElement(confirmpassword).sendKeys(ConfirmPassword);
    }

    public void IClickOnSignUp(){
        driver.findElement(signup).click();
    }

    public boolean IsRegistrationInfoDisplayed(String RegistrationInfo){
        return RegistrationInfo.equals("Thankyouforsigninguppleasecheckyourmailormobiletoactivateyouraccount");

    }







}
