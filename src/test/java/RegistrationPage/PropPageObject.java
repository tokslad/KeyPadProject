package RegistrationPage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class PropPageObject {
    public PropPageObject(WebDriver driver)
    {
        PageFactory.initElements(driver, this);
    }
}
