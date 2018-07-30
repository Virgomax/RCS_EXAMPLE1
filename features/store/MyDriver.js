const { Builder } = require('selenium-webdriver');
var MyDriver={};

var executeOpenWindows = async (initialWindowName,totalQuantity)=>{  //open new pop-up window
  await MyDriver.driver.executeAsyncScript((values)=>{
    // http://www.tysoncadenhead.com/blog/executeasyncscript-in-selenium-webdriver-for-node/
    // ------- START: THIS CODE IS EXECUTED IN THE WEBDRIVER WINDOW ----------
    var callback = arguments[arguments.length - 1];  //callback is needed for coming back form the webdriver window
    var initialWindowName = values.initialWindowName;
    var totalQuantity = values.totalQuantity;
    for(var windowName=initialWindowName; windowName<initialWindowName+totalQuantity;windowName++)
    {
      window.open('https://www.google.com',windowName
      ,'scrollbars=1,menubar=0,resizable=1,width=850,height=900'); //parameters for new pop-up window  
    }
    callback();
    // ------- END: UP TO HERE IS EXECUTED IN THE WEBDRIVER WINDOW ---------
  },{initialWindowName,totalQuantity}); //this object is going to be injected as the argument of the function, in this case: "values"
}

MyDriver.driver = new Builder().forBrowser('chrome').build();

MyDriver.createWindows = async (str_desiredQuantity)=>{    // opens new or closes left over pop-up windows to match the qunatity of users.
  var desiredQuantity = parseInt(str_desiredQuantity);
  let windows = await MyDriver.driver.getAllWindowHandles();
  let currentQuantity = windows.length;

  if(currentQuantity<desiredQuantity)
  {

    let neededLength = desiredQuantity-currentQuantity;
    //console.log('currentQuantity =',currentQuantity);
    //console.log('neededLength =',neededLength);
    await executeOpenWindows(currentQuantity,neededLength);

  }
  else if(desiredQuantity<currentQuantity){
    let leftoverLength = currentQuantity - desiredQuantity;
    //console.log('currentQuantity =',currentQuantity);
    //console.log('leftoverLength =',leftoverLength);
    
    for(var i=1; i<=leftoverLength;i++)
    {
      //console.log("closing:",currentQuantity-i);
      //console.log(windows);
      await MyDriver.driver.switchTo().window(windows[currentQuantity-i]);
      await MyDriver.driver.close();
    }
    await MyDriver.driver.switchTo().window(windows[0]);
  }
};

MyDriver.switchTo = async (str_windowId)=>{   //switch to (pop-up) window of user number "windowId"
  var windowId = parseInt(str_windowId);
  var windows = await MyDriver.driver.getAllWindowHandles();
  //console.log('looking for window: ',windowId);
  //console.log(windows);
  var currentWindow = await MyDriver.driver.getWindowHandle();



  if(currentWindow!=windows[windowId-1])
  {await MyDriver.driver.switchTo().window(windows[windowId-1]);}
}

module.exports = MyDriver;
