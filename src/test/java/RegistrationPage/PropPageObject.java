package RegistrationPage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import utilities.Hooks;

public class PropPageObject {
    public WebDriver driver;


    public PropPageObject(Hooks hooks) {
        this.driver = hooks.getDriver();
    }
}
