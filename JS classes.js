//declaring class and constructor
class Student{
    constructor(name,surname){
        this.name=name;
        this.surname=surname;
    }
    fullName=()=>this.name+" "+this.surname;
    percent=(m1,m2,m3)=>(m1+m2+m3)/3;
}

let S1=new Student("Rhutvij","Chiplunkar");
let S2=new Student("Aneesh","Berade");

console.log(S1.name)
console.log(S2.fullName()+" with percent "+S2.percent(80,60,100));

//inheritance
class FE extends Student{
    constructor(name,surname,clg){
        super(name,surname);
        this.clg=clg;
    }
    percentile=(per)=>"Percentile is : "+per;
}

let FE1=new FE("Kedar","Dalvi","Pict");
console.log(FE1.clg);
console.log(FE1.fullName());
console.log(FE1.percentile(99.6356));


//Getter and Setter methods
class Sample{
    constructor(name){
        this.SampleName=name;
    }
    get SampleName(){
        return this.name;
    }
    set SampleName(nm){
        this.name=nm;
    }
    //static methods
    static StaticFunc=()=>"This is Static method in JS"
}

let S=new Sample("abc");
S.SampleName="pqr";
console.log(S.SampleName);
console.log(S.name);
console.log(Sample.StaticFunc());           //should be called by class name