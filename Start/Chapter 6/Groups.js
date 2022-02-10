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
     return g2
    
    }

  }

  let g3 = Group.from([10, 20]);
  console.log(g3);
  console.log('group' in g3);
  console.log(g3.has(10));
// → true
console.log(g3.has(30));
// → false