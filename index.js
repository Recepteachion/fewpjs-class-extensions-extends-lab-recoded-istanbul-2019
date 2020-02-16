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
    
    for (let i=0;i<this.array.length;i++){
      if (this.array[i]+ ===3) return true
    }
    
  }
}