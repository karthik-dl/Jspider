class Oraganization
{
    constructor(Ename,empid,age){
        this.Ename=Ename;
        this.empid=empid;
        this.age=age;
    }

}
class Faculty extends Oraganization
{
    constructor(Ename,empid,age,skills,classes)
    {
        super(Ename,empid,age)
        this.skills=skills;
        this.classes=classes;
    }
}
