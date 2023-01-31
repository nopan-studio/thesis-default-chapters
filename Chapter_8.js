export function Chapter_8() {
  return [
    // title
    {
      type: "title",
      value: "Chapter 8",
    },
    // subtitle
    {
      type: "subtitle",
      value: "Java – Polymorphism",
    },
    // context
    {
      type: "content-start",
      value: `
      Polymorphism is the ability of an object to take on many forms. The most common 
      use of polymorphism in OOP occurs when a parent class reference is used to refer 
      to a child class object. Any Java object that can pass more than one IS-A test 
      is considered to be polymorphic. In Java, all Java objects are polymorphic since 
      any object will pass the IS-A test for their own type and for the class Object.
      It is important to know that the only possible way to access an object is through a 
      reference variable. A reference variable can be of only one type. Once declared, 
      the type of a reference variable cannot be changed.The reference variable can be 
      reassigned to other objects provided that it is not declared final. The type of the 
      reference variable would determine the methods that it can invoke on the object.
      A reference variable can refer to any object of its declared type or any subtype of 
      its declared type. A reference variable can be declared as a class or interface type.
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Example
      Let us look at an example.
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      value: `
      public interface Vegetarian{}
      public class Animal{}
      public class Deer extends Animal implements Vegetarian{}
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
      Now, the Deer class is considered to be polymorphic since this has multiple inheritance. Following are true for the above examples
      `,
    },
    //list
    {
      type: "list",
      ignore: "true",
      value: [
        "A Deer IS-A Animal",
        "A Deer IS-A Vegetarian",
        "A Deer IS-A Deer",
        "A Deer IS-A Object",
      ],
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      When we apply the reference variable facts to a Deer object reference, the following declarations are legal −
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Example
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      value: `
      Deer d = new Deer();
      Animal a = d;
      Vegetarian v = d;
      Object o = d;
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      All the reference variables d, a, v, o refer to the same Deer object in the heap.
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/Ft88V_rDO4I",
    },
    // header
    {
      type: "header",
      value: "Virtual Methods",
    },
    // content
    {
      type: "content-start",
      value: `
      In this section, I will show you how the behavior of overridden methods in Java allows you to 
      take advantage of polymorphism when designing your classes.We already have discussed method 
      overriding, where a child class can override a method in its parent. An overridden method is 
      essentially hidden in the parent class, and is not invoked unless the child class uses the 
      super keyword within the overriding method.
      `,
    },
    // content
    {
      type: "content-start",
      ignore: "true",
      value: `
      Example
      `,
    },
    // code
    {
      type: "code",
      value: `
      /* File name : Employee.java */
      public class Employee {
        private String name;
        private String address;
        private int number;
        
        public Employee(String name, String address, int number) {
          System.out.println("Constructing an Employee");
          this.name = name;
          this.address = address;
          this.number = number;
        }
        
        public void mailCheck() {
          System.out.println("Mailing a check to " + this.name + " " + this.address);
        }
        
        public String toString() {
          return name + " " + address + " " + number;
        }
        
        public String getName() {
          return name;
        }
        
        public String getAddress() {
          return address;
        }
        
        public void setAddress(String newAddress) {
          address = newAddress;
        }
        
        public int getNumber() {
          return number;
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore:"true",
      value: `
      Now suppose we extend Employee class as follows −
      `,
    },
    //code
    {
      type: "code",
      value: `
      /* File name : Salary.java */
      public class Salary extends Employee {
        private double salary; // Annual salary
        
        public Salary(String name, String address, int number, double salary) {
          super(name, address, number);
          setSalary(salary);
        }
        
        public void mailCheck() {
          System.out.println("Within mailCheck of Salary class ");
          System.out.println("Mailing check to " + getName()
          + " with salary " + salary);
        }
        
        public double getSalary() {
          return salary;
        }
        
        public void setSalary(double newSalary) {
          if(newSalary >= 0.0) {
            salary = newSalary;
          }
        }
        
        public double computePay() {
          System.out.println("Computing salary pay for " + getName());
          return salary/52;
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore:"true",
      value: `
      Now, you study the following program carefully and try to determine its output −
      `,
    },
    //code
    {
      type: "code",
      value: `
      /* File name : VirtualDemo.java */
      public class VirtualDemo {
        
        public static void main(String [] args) {
          Salary s = new Salary("Mohd Mohtashim", "Ambehta, UP", 3, 3600.00);
          Employee e = new Salary("John Adams", "Boston, MA", 2, 2400.00);
          System.out.println("Call mailCheck using Salary reference --");   
          s.mailCheck();
          System.out.println("\n Call mailCheck using Employee reference--");
          e.mailCheck();
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore:"true",
      value: `
      This will produce the following result −
      `,
    },
    //content
    {
      type: "content",
      ignore:"true",
      value: `
      Output
      Constructing an Employee
      Constructing an Employee
      
      Call mailCheck using Salary reference --
      Within mailCheck of Salary class
      Mailing check to Mohd Mohtashim with salary 3600.0
      
      Call mailCheck using Employee reference--
      Within mailCheck of Salary class
      Mailing check to John Adams with salary 2400.0
      `,
    },
    //content
    {
      type: "content",
      ignore:"true",
      value: `
      Output
      Constructing an Employee
      Constructing an Employee
      
      Call mailCheck using Salary reference --
      Within mailCheck of Salary class
      Mailing check to Mohd Mohtashim with salary 3600.0
      
      Call mailCheck using Employee reference--
      Within mailCheck of Salary class
      Mailing check to John Adams with salary 2400.0
      `,
    },
    //content
    {
      type: "content",
      ignore:"true",
      value: `
      Here, we instantiate two Salary objects. One using a Salary reference s, 
      and the other using an Employee reference e. While invoking s.mailCheck(), 
      the compiler sees mailCheck() in the Salary class at compile time, and the 
      JVM invokes mailCheck() in the Salary class at run time.mailCheck() on e is 
      quite different because e is an Employee reference. When the compiler sees 
      e.mailCheck(), the compiler sees the mailCheck() method in the Employee class.
      Here, at compile time, the compiler used mailCheck() in Employee to validate 
      this statement. At run time, however, the JVM invokes mailCheck() in the Salary class.
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/u0L74Qnep4Y",
    },
    // header
    {
      type: "header",
      value: "Java - Abstraction",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      As per dictionary, abstraction is the quality of dealing with ideas rather than events. 
      For example, when you consider the case of e-mail, complex details such as what happens 
      as soon as you send an e-mail, the protocol your e-mail server uses are hidden from the user. 
      Therefore, to send an e-mail you just need to type the content, mention the address of the receiver, and click send.
      Likewise in Object-oriented programming, abstraction is a process of hiding the implementation 
      details from the user, only the functionality will be provided to the user. In other words, 
      the user will have the information on what the object does instead of how it does it.
      In Java, abstraction is achieved using Abstract classes and interfaces.
      
      `,
    },
    // header
    {
      type: "header",
      value: "Abstract Class",
    },
    // context
    {
      type: "content-start",
      value: `
      A class which contains the abstract keyword in its declaration is known as abstract class.
      Abstract classes may or may not contain abstract methods, i.e., methods without body ( public void get(); )
      But, if a class has at least one abstract method, then the class must be declared abstract.
      If a class is declared abstract, it cannot be instantiated. To use an abstract class, you have 
      to inherit it from another class, provide implementations to the abstract methods in it.
      If you inherit an abstract class, you have to provide implementations to all the abstract methods in it.
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
      Example
      This section provides you an example of the abstract class. To create an abstract class, 
      just use the abstract keyword before the class keyword, in the class declaration.
      `,
    },
    // code
    {
      type: "code",
      value: `
      /* File name : Employee.java */
      public abstract class Employee {
        private String name;
        private String address;
        private int number;
        
        public Employee(String name, String address, int number) {
          System.out.println("Constructing an Employee");
          this.name = name;
          this.address = address;
          this.number = number;
        }
        
        public double computePay() {
          System.out.println("Inside Employee computePay");
          return 0.0;
        }
        
        public void mailCheck() {
          System.out.println("Mailing a check to " + this.name + " " + this.address);
        }
        
        public String toString() {
          return name + " " + address + " " + number;
        }
        
        public String getName() {
          return name;
        }
        
        public String getAddress() {
          return address;
        }
        
        public void setAddress(String newAddress) {
          address = newAddress;
        }
        
        public int getNumber() {
          return number;
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      You can observe that except abstract methods the Employee class is same as normal class in Java. 
      The class is now abstract, but it still has three fields, seven methods, and one constructor.
      
      Now you can try to instantiate the Employee class in the following way −
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      value: `
      /* File name : AbstractDemo.java */
      public class AbstractDemo {
        
        public static void main(String [] args) {
          /* Following is not allowed and would raise error */
          Employee e = new Employee("George W.", "Houston, TX", 43);
          System.out.println("\n Call mailCheck using Employee reference--");
          e.mailCheck();
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      When you compile the above class, it gives you the following error −
      
      Employee.java:46: Employee is abstract; cannot be instantiated
      Employee e = new Employee("George W.", "Houston, TX", 43);
      ^
      1 error
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/Lvnb83qt57g",
    },
    // header
    {
      type: "header",
      value: "Inheriting the Abstract Class",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      We can inherit the properties of Employee class just like concrete class in the following way −
      
      Example
      `,
    },
    // code
    {
      type: "code",
      value: `
      /* File name : Salary.java */
      public class Salary extends Employee {
        private double salary;   // Annual salary
        
        public Salary(String name, String address, int number, double salary) {
          super(name, address, number);
          setSalary(salary);
        }
        
        public void mailCheck() {
          System.out.println("Within mailCheck of Salary class ");
          System.out.println("Mailing check to " + getName() + " with salary " + salary);
        }
        
        public double getSalary() {
          return salary;
        }
        
        public void setSalary(double newSalary) {
          if(newSalary >= 0.0) {
            salary = newSalary;
          }
        }
        
        public double computePay() {
          System.out.println("Computing salary pay for " + getName());
          return salary/52;
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Here, you cannot instantiate the Employee class, but you can 
      instantiate the Salary Class, and using this instance you can 
      access all the three fields and seven methods of Employee class as shown below.
      `,
    },
    //code
    {
      type: "code",
      ignore:"true",
      value: `
      /* File name : AbstractDemo.java */
      public class AbstractDemo {
        
        public static void main(String [] args) {
          Salary s = new Salary("Mohd Mohtashim", "Ambehta, UP", 3, 3600.00);
          Employee e = new Salary("John Adams", "Boston, MA", 2, 2400.00);
          System.out.println("Call mailCheck using Salary reference --");
          s.mailCheck();
          System.out.println("\n Call mailCheck using Employee reference--");
          e.mailCheck();
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      This produces the following result −
      
      Output
      Constructing an Employee
      Constructing an Employee
      Call mailCheck using Salary reference --
      Within mailCheck of Salary class 
      Mailing check to Mohd Mohtashim with salary 3600.0
      
      Call mailCheck using Employee reference--
      Within mailCheck of Salary class 
      Mailing check to John Adams with salary 2400.0
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/ZUlOs5B4nN0",
    },
    // header
    {
      type: "header",
      value: "Abstract Methods",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      If you want a class to contain a particular method but you want the actual 
      implementation of that method to be determined by child classes, you can 
      declare the method in the parent class as an abstract.
      `,
    },
    //list
    {
      type: "list",
      value: [
        "abstract keyword is used to declare the method as abstract",
        "You have to place the abstract keyword before the method name in the method declaration.",
        "An abstract method contains a method signature, but no method body.",
        "Instead of curly braces, an abstract method will have a semi colon (;) at the end.",
      ],
    },
    //content
    {
      type: "content",
      ignore: "true",
      value:`
      Following is an example of the abstract method.
      
      Example
      `,
    },
    //code
    {
      type: "content",
      ignore: "true",
      value: `
      public abstract class Employee {
        private String name;
        private String address;
        private int number;
        
        public abstract double computePay();
        // Remainder of class definition
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value:`
      Declaring a method as abstract has two consequences −
      `,
    },
    //list
    {
      type: "list",
      value: [
        "The class containing it must be declared as abstract.",
        "Any class inheriting the current class must either override the abstract method or declare itself as abstract.",
      ],
    },
    //content
    {
      type: "content",
      ignore: "true",
      value:`
      Note − Eventually, a descendant class has to implement the abstract method; otherwise, 
      you would have a hierarchy of abstract classes that cannot be instantiated.
      
      Suppose Salary class inherits the Employee class, then it should implement the computePay() method as shown below −
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      value: `
      /* File name : Salary.java */
      public class Salary extends Employee {
        private double salary;   // Annual salary
        
        public double computePay() {
          System.out.println("Computing salary pay for " + getName());
          return salary/52;
        }
        // Remainder of class definition
      }
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/2T9P-EvHh9g",
    },
    // header
    {
      type: "header",
      value: "Java - Encapsulation",
    },
    // context
    {
      type: "content-start",
      value: `
      Encapsulation is one of the four fundamental OOP concepts. The other three are inheritance, 
      polymorphism, and abstraction. Encapsulation in Java is a mechanism of wrapping the data 
      (variables) and code acting on the data (methods) together as a single unit. In encapsulation, 
      the variables of a class will be hidden from other classes, and can be accessed only through 
      the methods of their current class. Therefore, it is also known as data hiding.
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value:`
      To achieve encapsulation in Java −
      `,
    },
    //list
    {
      type: "list",
      value: [
        "Declare the variables of a class as private.",
        "Provide public setter and getter methods to modify and view the variables values.",
      ],
    },
    //content
    {
      type: "content",
      ignore: "true",
      value:`
      Example
      Following is an example that demonstrates how to achieve Encapsulation in Java −
      `,
    },
    //code
    {
      type: "code",
      value: `
      /* File name : EncapTest.java */
      public class EncapTest {
        private String name;
        private String idNum;
        private int age;
        
        public int getAge() {
          return age;
        }
        
        public String getName() {
          return name;
        }
        
        public String getIdNum() {
          return idNum;
        }
        
        public void setAge( int newAge) {
          age = newAge;
        }
        
        public void setName(String newName) {
          name = newName;
        }
        
        public void setIdNum( String newId) {
          idNum = newId;
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      The public setXXX() and getXXX() methods are the access points of the 
      instance variables of the EncapTest class. Normally, these methods are 
      referred as getters and setters. Therefore, any class that wants to access 
      the variables should access them through these getters and setters.
      
      The variables of the EncapTest class can be accessed using the following program −
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      value: `
      /* File name : RunEncap.java */
      public class RunEncap {
        
        public static void main(String args[]) {
          EncapTest encap = new EncapTest();
          encap.setName("James");
          encap.setAge(20);
          encap.setIdNum("12343ms");
          
          System.out.print("Name : " + encap.getName() + " Age : " + encap.getAge());
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      This will produce the following result −
      
      Output
      Name : James Age : 20
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/cU94So54cr8",
    },
    //header
    {
      type: "header",
      value: "Benefits of Encapsulation",
    },
    //list
    {
      type: "list",
      value: [
        "The fields of a class can be made read-only or write-only.",
        "A class can have total control over what is stored in its fields.",
      ],
    },
    // header
    {
      type: "header",
      value: "Java - Interfaces",
    },
    // context
    {
      type: "content-start",
      value: `
      An interface is a reference type in Java. It is similar to class. It is a collection 
      of abstract methods. A class implements an interface, thereby inheriting the abstract methods of the interface.
      Along with abstract methods, an interface may also contain constants, default methods, static methods, 
      and nested types. Method bodies exist only for default methods and static methods.
      Writing an interface is similar to writing a class. But a class describes the attributes 
      and behaviors of an object. And an interface contains behaviors that a class implements.
      Unless the class that implements the interface is abstract, all the methods of the 
      interface need to be defined in the class.
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
      An interface is similar to a class in the following ways −
      `,
    },
    //list
    {
      type: "list",
      value: [
        "An interface can contain any number of methods.",
        "An interface is written in a file with a .java extension, with the name of the interface matching the name of the file.",
        "The byte code of an interface appears in a .class file.",
        "Interfaces appear in packages, and their corresponding bytecode file must be in a directory structure that matches the package name.",
      ],
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
      However, an interface is different from a class in several ways, including −
      `,
    },
    //list
    {
      type: "list",
      value: [
        "You cannot instantiate an interface.",
        "An interface does not contain any constructors.",
        "All of the methods in an interface are abstract.",
        "An interface cannot contain instance fields. The only fields that can appear in an interface must be declared both static and final.",
        "An interface is not extended by a class; it is implemented by a class.",
        "An interface can extend multiple interfaces.",
      ],
    },
    // header
    {
      type: "header",
      value: "Declaring Interfaces",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      The interface keyword is used to declare an interface. Here is a simple example to declare an interface −
      
    },
    //content
    {
      type: "content",
      ignore: "true",
      Example
      Following is an example of an interface −
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      value:`
      Example
      /* File name : NameOfInterface.java */
      import java.lang.*;
      // Any number of import statements
      
      public interface NameOfInterface {
        // Any number of final, static fields
        // Any number of abstract method declarations\
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value:`
      Interfaces have the following properties −
      `,
    },
    //list
    {
      type: "list",
      value: [
        "An interface is implicitly abstract. You do not need to use the abstract keyword while declaring an interface.",
        "Each method in an interface is also implicitly abstract, so the abstract keyword is not needed.",
        "Methods in an interface are implicitly public.",
      ],
    },
    //content
    {
      type: "content",
      ignore: "true",
      value:`
      Example
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      /* File name : Animal.java */
      value:`
      interface Animal {
        public void eat();
        public void travel();
      }
      `,
    },
    //header
    {
      type: "header",
      value: "Implementing Interfaces",
    },
    //context
    {
      type: "content-start",
      value: `
      When a class implements an interface, you can think of the class as signing 
      a contract, agreeing to perform the specific behaviors of the interface. 
      If a class does not perform all the behaviors of the interface, the class 
      must declare itself as abstract. A class uses the implements keyword to 
      implement an interface. The implements keyword appears in the class declaration 
      following the extends portion of the declaration.
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Example
      `,
    },
    //code
    {
      type: "code",
      value: `
      /* File name : MammalInt.java */
      public class MammalInt implements Animal {
        
        public void eat() {
          System.out.println("Mammal eats");
        }
        
        public void travel() {
          System.out.println("Mammal travels");
        } 
        
        public int noOfLegs() {
          return 0;
        }
        
        public static void main(String args[]) {
          MammalInt m = new MammalInt();
          m.eat();
          m.travel();
        }
      } 
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      This will produce the following result −
      
      Output
      Mammal eats
      Mammal travels
      
      When overriding methods defined in interfaces, there are several
      rules to be followed −
      `,
    },
    //list
    {
      type: "list",
      value: [
        "Checked exceptions should not be declared on implementation methods other than the ones declared by the interface method or subclasses of those declared by the interface method.",
        "The signature of the interface method and the same return type or subtype should be maintained when overriding the methods.",
        "An implementation class itself can be abstract and if so, interface methods need not be implemented.",
      ],
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      When implementation interfaces, there are several rules −
      `,
    },
    //list
    {
      type: "list",
      value: [
        "A class can implement more than one interface at a time.",
        "A class can extend only one class, but implement many interfaces.",
        "An interface can extend another interface, in a similar way as a class can extend another class.",
      ],
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/kTpp5n_CppQ",
    },
    // header
    {
      type: "header",
      value: "Extending Interfaces",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      An interface can extend another interface in the same way that 
      a class can extend another class. The extends keyword is used 
      to extend an interface, and the child interface inherits the 
      methods of the parent interface. The following Sports interface
      is extended by Hockey and Football interfaces.
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
      Example
      `,
    },
    // code
    {
      type: "code",
      ignore: "true",
      value: `
      // Filename: Sports.java
      public interface Sports {
        public void setHomeTeam(String name);
        public void setVisitingTeam(String name);
      }
      
      // Filename: Football.java
      public interface Football extends Sports {
        public void homeTeamScored(int points);
        public void visitingTeamScored(int points);
        public void endOfQuarter(int quarter);
      }
      
      // Filename: Hockey.java
      public interface Hockey extends Sports {
        public void homeGoalScored();
        public void visitingGoalScored();
        public void endOfPeriod(int period);
        public void overtimePeriod(int ot);
      }
      `,
    },
    //content
    {
      type: "content",
      value: `
      The Hockey interface has four methods, but it inherits two from Sports; 
      thus, a class that implements Hockey needs to implement all six methods. 
      Similarly, a class that implements Football needs to define the three methods 
      from Football and the two methods from Sports.
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/R7j9S2wwR2M",
    },
    // header
    {
      type: "header",
      value: "Extending Multiple Interfaces",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      A Java class can only extend one parent class. Multiple inheritance is not allowed. 
      Interfaces are not classes, however, and an interface can extend more than one parent interface.
      The extends keyword is used once, and the parent interfaces are declared in a comma-separated list.
      For example, if the Hockey interface extended both Sports and Event, it would be declared as −
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Example
      public interface Hockey extends Sports, Event
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/XJbLQuQvMeE",
    },
    // header
    {
      type: "header",
      value: "Tagging Interfaces",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      The most common use of extending interfaces occurs when the parent interface does 
      not contain any methods. For example, the MouseListener interface in the java.awt.event 
      package extended java.util.EventListener, which is defined as −
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Example
      package java.util;
      public interface EventListener
      {}
      
      An interface with no methods in it is referred to as a tagging interface. 
      There are two basic design purposes of tagging interfaces −
      `,
    },
    // header
    {
      type: "header",
      value: "Creates a common parent",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      As with the EventListener interface, which is extended by dozens of other interfaces 
      in the Java API, you can use a tagging interface to create a common parent among a 
      group of interfaces. For example, when an interface extends EventListener, the JVM 
      knows that this particular interface is going to be used in an event delegation scenario.
      `,
    },
    // header
    {
      type: "header",
      value: "Adds a data type to a class",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      This situation is where the term, tagging comes from. A class that implements a tagging interface 
      does not need to define any methods (since the interface does not have any), but the class becomes 
      an interface type through polymorphism.
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/Ggjxn8Q9VuE",
    },
    // header
    {
      type: "header",
      value: "Java - Packages",
    },
    // context
    {
      type: "content-start",
      value: `
      Packages are used in Java in order to prevent naming conflicts, to control access, 
      to make searching/locating and usage of classes, interfaces, enumerations and annotations easier, etc.
      A Package can be defined as a grouping of related types (classes, interfaces, enumerations 
        and annotations ) providing access protection and namespace management.
        `,
      },
      //content
      {
        type: "content",
        ignore: "true",
        value: `
        Some of the existing packages in Java are −
        `,
      },
      //list
      {
        type: "list",
        value: [
          "java.lang − bundles the fundamental classes",
          "java.io − classes for input , output functions are bundled in this package",
        ],
      },
      //content
      {
        type: "content",
        value: `
        Programmers can define their own packages to bundle group of classes/interfaces, etc. 
        It is a good practice to group related classes implemented by you so that a programmer 
        can easily determine that the classes, interfaces, enumerations, and annotations are related.
        Since the package creates a new namespace there won't be any name conflicts with names in 
        other packages. Using packages, it is easier to provide access control and it is also easier 
        to locate the related classes.
        `,
      },
      // header
      {
        type: "header",
        value: "Creating a Package",
      },
      // context
      {
        type: "content-start",
        value: `
        While creating a package, you should choose a name for the package and include a package 
        statement along with that name at the top of every source file that contains the classes, 
        interfaces, enumerations, and annotation types that you want to include in the package.
        The package statement should be the first line in the source file. There can be only one 
        package statement in each source file, and it applies to all types in the file.
        If a package statement is not used then the class, interfaces, enumerations, 
        and annotation types will be placed in the current default package.
        `,
      },
      //content
      {
        type: "content",
        ignore: "true",
        value: `
        To compile the Java programs with package statements, you have to use -d option as shown below.
        javac -d Destination_folder file_name.java
        
        Then a folder with the given package name is created in the specified destination, and the 
        compiled class files will be placed in that folder.
        
        Example
        Let us look at an example that creates a package called animals. It is a good practice to use 
        names of packages with lower case letters to avoid any conflicts with the names of classes and interfaces.
        
        Following package example contains interface named animals −
        `,
      },
      //code
      {
        type: "code",
        ignore: "true",
        value: `
        /* File name : Animal.java */
        package animals;
        
        interface Animal {
          public void eat();
          public void travel();
        }
        `,
      },
      //content
      {
        type: "content",
        ignore:"true",
        value: `
        Now, let us implement the above interface in the same package animals −
        `,
      },
      //code
      {
        type: "code",
        value: `
        package animals;
        /* File name : MammalInt.java */
        
        public class MammalInt implements Animal {
          
          public void eat() {
            System.out.println("Mammal eats");
          }
          
          public void travel() {
            System.out.println("Mammal travels");
          } 
          
          public int noOfLegs() {
            return 0;
          }
          
          public static void main(String args[]) {
            MammalInt m = new MammalInt();
            m.eat();
            m.travel();
          }
        } 
        `,
      },
      //content
      {
        type: "content",
        ignore:"true",
        value: `
        Now compile the java files as shown below −
        
        $ javac -d . Animal.java 
        $ javac -d . MammalInt.java
        
        Now a package/folder with the name animals will be created in the current 
        directory and these class files will be placed in it as shown below.
        `,
      },
      //image
      {
        type: "image",
        value: `chapter_8_image_1 `,
      },
      //content
      {
        type: "content",
        ignore:"true",
        value: `
        You can execute the class file within the package and get the result as shown below.
        
        Mammal eats
        Mammal travels
        `,
      },
      // link video
      {
        type: "video",
        value: "https://youtube.com/embed/eEujVn-ZTLE",
      },
      // header
      {
        type: "header",
        value: "The import Keyword",
      },
      // context
      {
        type: "content-start",
        ignore: "true",
        value: `
        If a class wants to use another class in the same package, the package name need not 
        be used. Classes in the same package find each other without any special syntax.
        `,
      },
      //content
      {
        type: "content",
        ignore: "true",
        value: `
        Example
        Here, a class named Boss is added to the payroll package that already contains Employee. 
        The Boss can then refer to the Employee class without using the payroll prefix, as demonstrated by the following Boss class.
        `,
      },
      //code
      {
        type: "code",
        ignore: "true",
        value: `
        package payroll;
        public class Boss {
          public void payEmployee(Employee e) {
            e.mailCheck();
          }
        }
        `,
      },
      //content
      {
        type: "content",
        ignore:"true",
        value: `
        What happens if the Employee class is not in the payroll package? The Boss class must then 
        use one of the following techniques for referring to a class in a different package.
        
        The fully qualified name of the class can be used. For example −
        
        payroll.Employee
        
        The package can be imported using the import keyword and the wild card (*). For example −
        
        import payroll.*;
        
        The class itself can be imported using the import keyword. For example −
        
        import payroll.Employee;
        
        Note − A class file can contain any number of import statements. The import statements must appear 
        after the package statement and before the class declaration.
        `,
      },
      // link video
      {
        type: "video",
        value: "https://youtube.com/embed/ipMdsje9J6s",
      },
      // header
      {
        type: "header",
        value: "The Directory Structure of Packages",
      },
      // context
      {
        type: "content-start",
        ignore: "true",
        value: `
        Two major results occur when a class is placed in a package −
        `,
      },
      //list
      {
        type: "list",
        value: [
          "The name of the package becomes a part of the name of the class, as we just discussed in the previous section.",
          "The name of the package must match the directory structure where the corresponding bytecode resides.",
        ],
      },
      //content
      {
        type: "content",
        ignore: "true",
        value: `
        Here is simple way of managing your files in Java −
        
        Put the source code for a class, interface, enumeration, or annotation type in a
        text file whose name is the simple name of the type and whose extension is .java.
        
        For example −
        `,
      },
      //code
      {
        type: "content",
        ignore: "true",
        value: `
        // File Name :  Car.java
        package vehicle;
        
        public class Car {
          // Class implementation.   
        }
        `,
      },
      //content
      {
        type: "content",
        ignore: "true",
        value: `
        Now, put the source file in a directory whose name reflects the name of the package to which the class belongs −
        
        ....\\vehicle\\Car.java
        
        Now, the qualified class name and pathname would be as follows −
        
        `,
      },
      //list
      {
        type: "list",
        value: [
          "Class name → vehicle.Car",
          "Path name → vehicle\\Car.java (in windows)",
        ],
      },
      //content
      {
        type: "content",
        ignore: "true",
        value: `
        In general, a company uses its reversed Internet domain name for its package names.
        
        Example − A company's Internet domain name is apple.com, then all its package names would start with com.apple. 
        Each component of the package name corresponds to a subdirectory.
        
        Example − The company had a com.apple.computers package that contained a Dell.java source file, it would be 
        contained in a series of subdirectories like this −
        
        ....\\com\\apple\\computers\\Dell.java
        
        At the time of compilation, the compiler creates a different output file for each class, interface and 
        enumeration defined in it. The base name of the output file is the name of the type, and its extension is .class.
        
        For example −
        
        `,
      },
      //code
      {
        type: "content",
        ignore: "true",
        value: `
        // File Name: Dell.java
        package com.apple.computers;
        
        public class Dell {
        }
        
        class Ups {
        }
        
        `,
      },
      //content
      {
        type: "content",
        ignore: "true",
        value: `
        Now, compile this file as follows using -d option −
        
        $javac -d . Dell.java
        The files will be compiled as follows −
        
        .\\com\\apple\\computers\\Dell.class
        .\\com\\apple\\computers\\Ups.class
        
        You can import all the classes or interfaces defined in \\com\\apple\\computers\\ as follows −
        
        import com.apple.computers.*;
        
        Like the .java source files, the compiled .class files should be in a series of directories 
        that reflect the package name. However, the path to the .class files does not have to be the 
        same as the path to the .java source files. You can arrange your source and class directories separately, as −
        
        <path-one>\\sources\\com\\apple\\computers\\Dell.java
        
        <path-two>\\classes\\com\\apple\\computers\\Dell.class
        `,
      },
      //content
      {
        type: "content",
        value: `
        By doing this, it is possible to give access to the classes directory to other programmers without revealing your sources. 
        You also need to manage source and class files in this manner so that the compiler and the Java Virtual Machine (JVM) can 
        find all the types your program uses. The full path to the classes directory, <path-two>\\classes, is called the class path, 
        and is set with the CLASSPATH system variable. Both the compiler and the JVM construct the path to your .class files by 
        adding the package name to the class path. Say <path-two>\\classes is the class path, and the package name is com.apple.
        computers, then the compiler and JVM will look for .class files in <path-two>\\classes\\com\\apple\\computers. A class path 
        may include several paths. Multiple paths should be separated by a semicolon (Windows) or colon (Unix). By default, the 
        compiler and the JVM search the current directory and the JAR file containing the Java platform classes so that these 
        directories are automatically in the class path.
        `,
      },
      // link video
      {
        type: "video",
        value: "https://youtube.com/embed/Ni7YwpS6mds",
      },
      // header
      {
        type: "header",
        value: "Set CLASSPATH System Variable",
      },
      // context
      {
        type: "content-start",
        ignore: "true",
        value: `
        To display the current CLASSPATH variable, use the following commands in Windows and UNIX (Bourne shell) −
        `,
      },
      //list
      {
        type: "list",
        value: [
          "In Windows → C:\\> set CLASSPATH",
          "In UNIX → % echo $CLASSPATH",
        ],
      },
      //content
      {
        type: "content",
        ignore: "true",
        value: `
        To delete the current contents of the CLASSPATH variable, use −
        `,
      },
      //list
      {
        type: "list",
        value: [
          "In Windows → C:\\> set CLASSPATH =",
          "In UNIX → % unset CLASSPATH; export CLASSPATH",
        ],
      },
      //content
      {
        type: "content",
        ignore: "true",
        value: `
        To set the CLASSPATH variable −
        `,
      },
      
      //list
      {
        type: "list",
        value: [
          "In Windows → set CLASSPATH = C:\\users\\jack\\java\\classes",
          "In UNIX → % CLASSPATH = /home/jack/java/classes; export CLASSPATH",
        ],
      },
      // link video
      {
        type: "video",
        value: "https://youtube.com/embed/XplNh_w3oyY",
      },
    ];
  }
  