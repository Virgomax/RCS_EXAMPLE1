const amazonSectionFunctions = {
  async clickBook(){
    await this.clickOn('//*[@class="amzn-native-product-link-catcher"][1]');
  },

  async fillOutAmazonSearchField(value){
    await this.fillOutField('//*[@class="amzn-native-search"]',value);
  },

  async clickSearchAmazon(){
    await this.clickOn('//*[@class="amzn-native-search-go"]');
  },

  async searchBooks(searchedText){
    await this.fillOutField('//*[@class="amzn-native-search"]',searchedText);
    await this.clickOn('//*[@class="amzn-native-search-go"]');
    var amazonPage = await this.switchTab(AmazonPage,1);
    var expectedSearchedText = await amazonPage.getSearchedWords();
    var results = await amazonPage.getResults();

    var resultsObj = {results,expectedSearchedText,page: amazonPage};
    return resultsObj;
  }
}

module.exports = amazonSectionFunctions;