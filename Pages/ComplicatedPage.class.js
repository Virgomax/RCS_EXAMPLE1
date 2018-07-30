const { Builder, By, until, Key , ActionSequence, TouchSequence , WebDriver} = require('selenium-webdriver');
const BasePage = require('./BasePage.class');

class ComplicatedPage extends BasePage {

  async open(){
    await this.goTo('https://www.ultimateqa.com/complicated-page/');
  }

  async searchArticles(searchedText){
    await this.fillOutField('//*[@id="s"]',searchedText);
    await this.clickOn('//*[@id="searchsubmit"]');
    var expectedUrl = 'https://www.ultimateqa.com/?s='+encodeURIComponent(searchedText).replace('%20',"\\+");
    await this.driver.wait(until.urlIs(expectedUrl));
    var resultsElem = await this.getElementsByXPath('//*[@class="entry-title"]/a');
    var results = await Promise.all(resultsElem.map((resultElem)=>{
      return resultElem.getText();
    }));
    return results;
    
  }

  async searchBooks(searchedText){
    await this.fillOutField('//*[@class="amzn-native-search"]',searchedText);
    await this.clickOn('//*[@class="amzn-native-search-go"]');
    var windowHandles = await this.driver.getAllWindowHandles();
    await this.driver.switchTo().window(windowHandles[1]);
    /*
    var expectedUrlRegExp = new RegExp("(?=.*https:\/\/www\.amazon\.com)(?=.*&field-keywords="+encodeURIComponent(searchedText).replace('%20',"\\+")+").*"); 
    var currentUrl = await this.driver.getCurrentUrl();
    var meetsRegExp = expectedUrlRegExp.test(currentUrl);
    console.log("currentUrl",currentUrl);
    console.log("meetsRegExp",meetsRegExp);
    */

    var expectedSearchedTextElem = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="s-result-count"]//*[@class="a-color-state a-text-bold"]')));
    var expectedSearchedText = await expectedSearchedTextElem.getText();

    var resultsElem = await this.getElementsByXPath('//*[@class="a-size-medium s-inline  s-access-title  a-text-normal"]');
    var results = await Promise.all(resultsElem.map((resultElem)=>{
      return resultElem.getText();
    }));
    

    var resultsObj = {results,expectedSearchedText};
    return resultsObj;
  }

}

module.exports = new ComplicatedPage();