

    Array.prototype.myMap = function(callback) {
  
      var T, A, k;
  
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }
      var O = Object(this);
      var len = O.length >>> 0;
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
      if (arguments.length > 1) {
        T = arguments[1];
      }
      A = new Array(len);
      k = 0;
      while (k < len) {
  
        var kValue, mappedValue;
        if (k in O) {
          kValue = O[k];
          mappedValue = callback.call(T, kValue, k, O);
          A[k] = mappedValue;
        }
        k++;
      }
      return A;
    };
  const arr=[1,2,3,4,5,6,7,8,9];
  let roots = arr.myMap(function(num) {
    return 2*num;
})
console.log(roots);