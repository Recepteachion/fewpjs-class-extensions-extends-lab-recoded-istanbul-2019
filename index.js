// Your code here
class Polygon{
  constructor(array){
    this.array = array;
  }
  
  get countSides(){
    return this.array.length
  }
  
  get perimeter(){
    return array.reduce( (a,b) =>a+b )
  }
}

class Triangle extends Polygon{
  get isValid (){
    
    
    if (this.array[i]+ this.array[i+1] >this.array[i] ) {
      return true
    }else{
      return false
    }
  }
}

class Square extends Polygon{
  get isValid(){
    if (this.array[0]===this.array[1])
    
  }
}