const { Builder, By, until, Key , ActionSequence, TouchSequence , WebDriver} = require('selenium-webdriver');

const amazonResultsFunctions = {
  async getSearchedWords(){
    var expectedSearchedTextElem = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="s-result-count"]//*[@class="a-color-state a-text-bold"]')));
    var expectedSearchedText = await expectedSearchedTextElem.getText();
    return expectedSearchedText;
  },

  async getResults(){
    var resultsElem = await this.getElementsByXPath('//*[@class="a-size-medium s-inline  s-access-title  a-text-normal"]');
    var results = await Promise.all(resultsElem.map((resultElem)=>{
      return resultElem.getText();
    }));
    return results;
  }
}

module.exports = amazonResultsFunctions;