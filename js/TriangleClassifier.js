var TriangleClassifier = function() {
  this.isNotATriangle = function(a,b,c) {
    if( a + b > c &&
        a + c > b &&
        b + c > a ) {
      return false;
    }
    else {
      return true;
    }
  };
  this.classify = function(a,b,c) {
    if (this.isNotATriangle(a,b,c)) {
      throw "Not a valid triangle.";
    }
    else if (a === b && b === c && a === c) {
      return "equilateral";
    }
    else if (a === b || b === c || c === a) {
      return "isosceles";
    }
    else if (a !== b && b !== c && a !== c) {
      return "scalene";
    }
    else {
      return "unknown";
    }
  };
};
