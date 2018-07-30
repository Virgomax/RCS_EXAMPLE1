var basicFun = {
  jsUcfirst(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
  },
  
  escapeRegExp(str){
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  },
  
  createUrl(baseUrl,paramsObj){
    return baseUrl+Object.keys(paramsObj).map((key,i)=>{
      let symbol="&";
      if(i==0){
        symbol="?";
      }
      return symbol+key+"="+encodeURIComponent(paramsObj[key]).replace('%20',"\\+");
    }).join('');
  },
   
  objectKeyValues(keysArray,valuesArray){
    return Object.assign( ...keysArray.map( (k, i) => ( {[k]: valuesArray[i]} ) ) ); //https://stackoverflow.com/a/47036100/7491858
  },

  arrayCountUp(startNum,lenght){
    return Array.from(Array(lenght).keys()).map(i=>i+startNum);  //http://www.jstips.co/en/javascript/create-range-0...n-easily-using-one-line/
  },
  
  arrayFill(lenght,value){
    return Array.apply(null, Array(lenght)).map(x => value);
  },

  objectFill(startKey,lenght,value){
    var keysArray = this.arrayCountUp(startKey,lenght);
    var valuesArray = this.arrayFill(lenght,value);
    return this.objectKeyValues(keysArray,valuesArray);
     
  },

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
}

module.exports = basicFun;