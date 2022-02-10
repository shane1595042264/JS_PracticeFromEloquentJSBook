// Your code here (and the code from the previous exercise)
class Group {
    constructor(group=[]){
        this.group=group;
    }
    add(v){
        if(!(this.group.includes(v))){
            this.group.push(v);
        }
    }
    delete(v){
        this.group.filter(i => i !== v);    
    }
    has(v){
        if(this.group.includes(v)){
            return true
        }
        return false;
    }
   static from(i){
      let g2 = new Group
     i.map( v => g2.add(v))
     return g2.group
    
    }

  }

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c