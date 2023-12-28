
var myLibrary = (function () {
    function addElements(array) {
      if (array.length > 0) {
        array.push('test', 'testOne');
      }
      return array;
    }
  
    function processArray(inputArray) {
      if (!Array.isArray(inputArray)) {
        throw new Error('Input must be an array');
      }
  
      var processedArray = addElements(inputArray);
  
      return processedArray;
    }
  
    return {
      processArray: processArray,
    };
  })();
  
  module.exports = myLibrary