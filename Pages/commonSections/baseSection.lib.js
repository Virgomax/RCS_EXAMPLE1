const { Builder, By, until, Key , ActionSequence, TouchSequence , WebDriver} = require('selenium-webdriver');
const basicFun = require('../../helpers/basicFunctions.lib');


const baseSectionFunctions = {
  async goTo(url){
    await this.driver.get(url);
    //it is exactly the same than:
    //this.navigate().to(url);
  },

  async goBack(){
    await this.driver.navigate().back();
  },

  async goForward(){
    await this.driver.navigate().forward();
  },

  async refresh(){
    await this.driver.navigate().refresh();
  },

  async getTitle(){
    return await this.driver.getTitle();
  },

  async getCurrentUrl(){
    return await this.driver.getCurrentUrl();
  },

  async getElementById(id){
    return await this.driver.findElement(By.id(id));
  },

  async getElementByClassName(className){
    return await this.driver.findElement(By.className(className));
  },

  async getElementByName(name){
    return await this.driver.findElement(By.name(name));
  },

  async getElementByTagName(tagName){
    return await this.driver.findElement(By.css(tagName));
  },

  async getElementByLinkText(linkText){  //Only for "a" tags(text inside anchor tags). 
    return await this.driver.findElement(By.linkText(linkText));
  },

  async getElementByPartialLinkText(partialLinkText){  //Only for "a" tags(text inside anchor tags). 
    return await this.driver.findElement(By.partialLinkText(partialLinkText));
  },

  async getElementByXPath(xPath){  //Only for "a" tags(text inside anchor tags). 
    return await this.driver.findElement(By.xpath(xPath));
  },

  async getElementsByXPath(xPath){  //Only for "a" tags(text inside anchor tags). 
    return await this.driver.findElements(By.xpath(xPath));
  },

  async getCell(tableId,columnName,rowName){

    var rowsXPath = `//*[@id="${tableId}"]//tr`;
    var columnHeadersXPath = `//*[@id="${tableId}"]//th`;

    try{
      var columnHeaders = await this.getElementsByXPath(columnHeadersXPath);
      var columnTitles = await Promise.all(columnHeaders.map((columnHeader)=>{
        return columnHeader.getText();
      }));
      var columnIndex = columnTitles.indexOf(columnName);

      var rows = await this.getElementsByXPath(rowsXPath);
      var rowTitles = await Promise.all(rows.map((row)=>{
        return row.findElement(By.xpath('./td[1] | ./th[1]')).getText(); //we have to make sure that the result of findElements is "Not null" otherwise the ".getText()" promise will crash.
      }));
      var rowIndex = rowTitles.indexOf(rowName);

      return this.getElementByXPath(`//*[@id="${tableId}"]//tr[${rowIndex+1}]//td[${columnIndex+1}]`);      
    }
    catch(e){
      console.log(e);
    };
  },

  async fillOutField(xpath,value){
    var field = await this.driver.wait(until.elementLocated(By.xpath(xpath)));
    await field.clear();
    await field.sendKeys(value);
  },

  async fillOutForm(valuesObj){ //for now it does NOT uses the form name, only the name attributes of the input elements
    var keyArray = Object.keys(valuesObj);
    await Promise.all(keyArray.map(async (key)=>{
      return this["fillOut_" + key](valuesObj[key]);
    }));
  },

  async clickOn(xpath){
    var elem = await this.driver.wait(until.elementLocated(By.xpath(xpath)));
    await elem.click();
  },

  async switchTab(pageClass,tabIndex){
    var windowHandles = await this.driver.getAllWindowHandles();
    await this.driver.switchTo().window(windowHandles[tabIndex]);
    var page = new pageClass(this.driver);
    return page;
  },

  async waitUntilUrlIs(expectedUrl,pageClass){
    await this.driver.wait(until.urlIs(expectedUrl));
    var page = new pageClass(this.driver);
    return page;
  },

  async waitUntilUrlIs_caseInsensitive(expectedUrl,pageClass){
    var urlRegExp = new RegExp(basicFun.escapeRegExp(expectedUrl),'i');
    await this.driver.wait(until.urlMatches(urlRegExp));
    var page = new pageClass(this.driver);
    return page;
  },
  
  async close(){
    await this.driver.close();
  },

  async end(){
    await this.driver.close();
    await this.driver.quit();
  }
}

module.exports = baseSectionFunctions