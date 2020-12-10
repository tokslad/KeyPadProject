package RegistrationPage;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utilities.Hooks;

import java.nio.charset.Charset;
import java.security.SecureRandom;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
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
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        driver.findElement(firstname).sendKeys(firstName+generateRandomString(6));
    }

    public void IEnterLastName(String lastName){
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        driver.findElement(lastname).sendKeys(lastName+generateRandomString(5));
    }


    public void IEnterEmail(String Email){
        Random randomGenerator = new Random();
        int randomInt = randomGenerator.nextInt(1000);
        driver.findElement(email).sendKeys(Email+randomInt+"@gmail.com");
    }


    public static String generateRandomString(int length) {
         String CHAR_LOWER = "abcdefghijklmnopqrstuvwxyz";
         String CHAR_UPPER = CHAR_LOWER.toUpperCase();


         String DATA_FOR_RANDOM_STRING = CHAR_LOWER + CHAR_UPPER;
         SecureRandom random = new SecureRandom();
        if (length < 1) throw new IllegalArgumentException();

        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) {


            int rndCharAt = random.nextInt(DATA_FOR_RANDOM_STRING.length());
            char rndChar = DATA_FOR_RANDOM_STRING.charAt(rndCharAt);


            System.out.format("%d\t:\t%c%n", rndCharAt, rndChar);

            sb.append(rndChar);

        }

        return sb.toString();

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
        return registrationinfo.equals("Thankyouforsigninguppleasecheckyourmailormobiletoactivateyouraccount");

    }







}
