export function Chapter_2() {
  return [
    // title
    {
      type: "title",
      value: "Chapter 2",
    },
    // subtitle
    {
      type: "subtitle",
      value: "Java – Objects & Classes",
    },
    // list
    {
      type: "list",
      value: [
        "State: represents the data (value) of an object.",
        "Behavior: represents the behavior (functionality) of an object such as deposit, withdraw, etc.",
        "Identity: An object identity is typically implemented via a unique ID. The value of the ID is not visible to the external user. However, it is used internally by the JVM to identify each object uniquely.",
      ],
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
          For Example, Pen is an object. Its name is Reynolds; color is white, known as its state. It is used to write, so writing is its behavior.
          `,
    },
    // content
    {
      type: "content",
      value: `
        An object is an instance of a class. A class is a template or blueprint from which objects are created. So, an object is the instance(result) of a class.
      `,
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: "Object Definitions:",
    },
    // list
    {
      type: "list",
      value: [
        "An object is a real-world entity.",
        "An object is a runtime entity.",
        "The object is an entity which has state and behavior.",
        "The object is an instance of a class.",
      ],
    },
    // content
    {
      type: "content-start",
      ignore: "true",
      value: `
          What is a class in Java
      `,
    },
    // content
    {
      type: "content",
      value: `
          A class is a group of objects which have common properties. It is a template or blueprint from which objects are created. It is a logical entity. It can't be physical.
      `,
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
         "A class in Java can contain:",
      `,
    },
    //list
    {
      type: "list",
      value: [
      "Fields",
      "Methods",
      "Constructors",
      "Blocks",
      "Nested class and interface",
      ],
    },
    // content
    {
      type: "content-start",
      ignore: "true",
      value: `
        Syntax to declare a class:
      `,
    },
    // code
    {
      type: "code",
      ignore: "true",
      value: `
        class <class_name>{  
            field;  
            method;  
              }  
      `,
    },
    // header
    {
      type: "header",
      value: "Instance variable in Java",
    },
    // content
    {
      type: "content-start",
      value: `
        A variable which is created inside the class but outside the method is known as an instance variable. Instance variable doesn't get memory at compile time. It gets memory at runtime when an object or instance is created. That is why it is known as an instance variable.
      `,
    },
    // header
    {
      type: "header",
      value: "Method in java",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
        In Java, a method is like a function which is used to expose the behavior of an object.
      `,
    },
    // list
    {
      type: "list",
      value: [
        "Advantage of Method",
        "Code Reusability",
        "Code Optimization",
      ],
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      New() keyword in Java
      `,
    },
    // content
    {
      type: "content",
      value: `
      The new() keyword is used to allocate memory at runtime. All objects get memory in Heap memory area.
      `,
    },
    // header
    {
      type: "header",
      value: "3 Ways to initialize object",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
        There are 3 ways to initialize object in Java.
      `,
    },
    // list
    {
      type: "list",
      value: [
        "By reference variable",
        "By method",
        "By constructor",
      ],
    },
    // header
    {
      type: "header",
      value: "1) Object and Class Example: Initialization through reference",
    },
    // content
    {
      type: "content-start",
      value: `
        Initializing an object means storing data into the object. Let's see a simple example where we are going to initialize the object through a reference variable.
      `,
    },
    // code
    {
      type: "code",
      value: `
        class Student{  
          int id;  
          String name;  
        }  
          class TestStudent2{  
          public static void main(String args[]){  
            Student s1=new Student();  
            s1.id=101;  
            s1.name="Sonoo";  
          System.out.println(s1.id+" "+s1.name);//printing members with a white space  
        }  
      } 
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        OUTPUT:
        101 Sonoo
      `,
    },
    // header
    {
      type: "header",
      value: "2) Object and Class Example: Initialization through method",
    },
    // content
    {
      type: "content-start",
      ignore: "true",
      value: `
        In this example, we are creating the two objects of Student class and initializing the value to these objects by invoking the insertRecord method. Here, we are displaying the state (data) of the objects by invoking the displayInformation() method.
      `,
    },
    // code
    {
      type: "code",
      value: `
        class Student{  
          int rollno;  
          String name;  
          void insertRecord(int r, String n){  
            rollno=r;  
            name=n;  
        }  
      void displayInformation(){System.out.println(rollno+" "+name);}  
        }  
      class TestStudent4{  
        public static void main(String args[]){  
          Student s1=new Student();  
          Student s2=new Student();  
          s1.insertRecord(111,"Karan");  
          s2.insertRecord(222,"Aryan");  
          s1.displayInformation();  
          s2.displayInformation();  
          }  
        }  
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        OUTPUT:

        111 Karan
        222 Aryan
      `,
    },
    // header
    {
      type: "header",
      value: "3) Object and Class Example: Initialization through a constructor",    
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
        Object and Class Example: Employee
        `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        Let's see an example where we are maintaining records of employees.
      `,
    },
    // code
    {
      type: "code",
      value: `
          class Employee{  
            int id;  
            String name;  
            float salary;  
          void insert(int i, String n, float s) {  
            id=i;  
            name=n;  
            salary=s;  
          }  
          void display(){System.out.println(id+" "+name+" "+salary);}  
          }  
          public class TestEmployee {  
          public static void main(String[] args) {  
            Employee e1=new Employee();  
            Employee e2=new Employee();  
            Employee e3=new Employee();  
            e1.insert(101,"ajeet",45000);  
            e2.insert(102,"irfan",25000);  
            e3.insert(103,"nakul",55000);  
            e1.display();  
            e2.display();  
            e3.display();  
          }  
        } 
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        OUTPUT:

        101 ajeet 45000.0
        102 irfan 25000.0
        103 nakul 55000.0
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/IUqKuGNasdM",
    },
    // header
    {
      type: "header",
      value: "Constructors",
    },
    // content
    {
      type: "content",
      value: `
        In Java, a constructor is a block of codes similar to the method. It is called when an instance of the class is created. At the time of calling constructor, memory for the object is allocated in the memory.

        It is a special type of method which is used to initialize the object.

        Every time an object is created using the new() keyword, at least one constructor is called.

        It calls a default constructor if there is no constructor available in the class. In such case, Java compiler provides a default constructor by default.
 
        There are two types of constructors in Java: no-arg constructor, and parameterized constructor.

        Note: It is called constructor because it constructs the values at the time of object creation. It is not necessary to write a constructor for a class. It is because java compiler creates a default constructor if your class doesn't have any.
      `,
    },
    // header
    {
      type: "header",
      value: "Rules for creating Java constructor",
    },
    // context
    {
      type: "content-start",
      value: `
        There are two rules defined for the constructor.
      `,
    },
    // list
    {
      type: "list",
      value: [
        "1. Constructor name must be the same as its class name",
        "2. A Constructor must have no explicit return type",
        "3. A Java constructor cannot be abstract, static, final, and synchronized",
      ],
    },
    // header
    {
      type: "header",
      value: "Types of Java constructors",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
        There are two types of constructors in Java:
      `,
    },
    // list
    {
      type: "list",
      value: [
        "1. Default constructor (no-arg constructor)",
        "2. Parameterized constructor",
      ],
    },
    // header
    {
      type: "header",
      value: "Java Default Constructor",
    },
    // content
    {
      type: "content-start",
      value: `
        A constructor is called "Default Constructor" when it doesn't have any parameter.
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: "Syntax of default constructor:",
    },
    // code
    {
      type: "code",
      ignore: "true",
      value: `
        <class_name>(){}
      `,
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: "Example of default constructor",
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        In this example, we are creating the no-arg constructor in the Bike class. It will be invoked at the time of object creation.
      `,
    },
    // code
    {
      type: "code",
      value: `
        //Java Program to create and call a default constructor  
            class Bike1{  
        //creating a default constructor  
            Bike1(){System.out.println("Bike is created");}  
        //main method  
            public static void main(String args[]){  
            //calling a default constructor  
            Bike1 b=new Bike1();  
          }  
        }  
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        OUTPUT:

        Bike is created
      `,
    },
    // content
    {
      type: "content-start",
      value: `
      Rule: If there is no constructor in a class. Compiler automatically creates a default constructor.
      `,
    },
    // header
    {
      type: "header",
      value: "Q) What is the purpose of a default constructor?",
    },
    // content
    {
      type: "content-start",
      value: `
      The default constructor is used to provide the default values to the object like 0, null, etc., depending on the type.
      `,
    },
    // header 
    {
      type: "header",
      value: "Java Parameterized Constructor",
    },
    // content
    {
      type: "content-start",
      value: `
      A constructor which has a specific number of parameters is called a parameterized constructor.
      `,
    },
    // header
    {
      type: "header",
      value: "Why use the parameterized constructor?",
    },
    // content
    {
      type: "content-start",
      value: `
      The parameterized constructor is used to provide different values to distinct objects. However, you can provide the same values also.
      `,
    },
    // header
    {
      type: "header",
      value: "Example of parameterized constructor",
    },
    // content
    {
      type: "content-start",
      value: `
      In this example, we have created the constructor of Student class that have two parameters. We can have any number of parameters in the constructor.
      `,
    },
    // code
    {
      type: "code",
      value: `
      //Java Program to demonstrate the use of the parameterized constructor.  
      class Student4{  
          int id;  
          String name;  
          //creating a parameterized constructor  
          Student4(int i,String n){  
          id = i;  
          name = n;  
          }  
          //method to display the values  
          void display(){System.out.println(id+" "+name);}  
         
          public static void main(String args[]){  
          //creating objects and passing values  
          Student4 s1 = new Student4(111,"Karan");  
          Student4 s2 = new Student4(222,"Aryan");  
          //calling method to display the values of object  
          s1.display();  
          s2.display();  
         }  
      }  
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        OUTPUT:

        111 Karan
        222 Aryan
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/pgBk8HC7jbU",
    },
    // header
    {
      type: "header",
      value: "Singleton design pattern in Java",
    },
    // content
    {
      type: "content-start",
      value: `
      Singleton Pattern says that just"define a class that has only one instance and provides a global point of access to it".

      In other words, a class must ensure that only single instance should be created and single object can be used by all other classes.
      `,
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      There are two forms of singleton design pattern
      `,
    },
    // list
    {
      type: "list",
      value: [
        "Early Instantiation: creation of instance at load time.",
        "Lazy Instantiation: creation of instance when required.",
      ],
    },
    // header
    {
      type: "header",
      value: "Advantage of Singleton design pattern",
    },
    // content
    {
      type: "content-start",
      value: `
      Saves memory because object is not created at each request. Only single instance is reused again and again.]
      `,
    },
    // header
    {
      type: "header",
      value: "Usage of Singleton design pattern",
    },
    // content
    {
      type: "content-start",
      value: `
      Singleton pattern is mostly used in multi-threaded and database applications. It is used in logging, caching, thread pools, configuration settings etc.
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/v2imluYMIRI",
    },
    // header
    {
      type: "header",
      value: "How to Create Object in Java",
    },
    // content
    {
      type: "content-start",
      value: `
      The object is a basic building block of an OOPs language. In Java, we cannot execute any program without creating an object. There is various way to create an object in Javathat we will discuss in this section, and also learn how to create an object in Java.
      `,
    },
    // header
    {
      type: "header",
      value: "Java : provides five ways to create an object.",
    },
    // list
    {
      type: "list",
      value: [
        "Using new Keyword",
        "Using clone() method",
        "Using newInstance() method of the Class class",
        "Using newInstance() method of the Constructor class",
        "Using Deserialization",
      ],
    },
    // header
    {
      type: "header",
      value: "Using new Keyword",
    },
    // content
    {
      type: "content-start",
      value: `Using the new keyword is the most popular way to create an object or instance of the class. When we create an instance of the class by using the new keyword, it allocates memory (heap) for the newly created object and also returns the reference of that object to that memory. The new keyword is also used to create an array. The syntax for creating an object is:
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        ClassName object = new ClassName(); 
            `,
    },
    // header
    {
      type: "header",
      value: "CreateObjectExample1.java",
    },
    // code
    {
      type: "code",
      value: `
      public class CreateObjectExample1   
        {    
          void show()    
          {    
          System.out.println("Welcome to javaTpoint");    
          }    
          public static void main(String[] args)   
          {    
          //creating an object using new keyword   
          CreateObjectExample1 obj = new CreateObjectExample1();   
         //invoking method using the object  
          obj.show();    
         }    
        }   
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        OUTPUT:

        Welcome to javaTpoint
            `,
    },
    //header
    {
      type: "header",
      value: "Using clone() Method",
    },
    // content
    {
      type: "content-start",
      value: `
      The clone() method is the method of Object class. It creates a copy of an object and returns the same copy. The JVM creates a new object when the clone() method is invoked. It copies all the content of the previously created object into new one object. Note that it does not call any constructor. We must implement the Cloneable interface while using the clone() method. The Method throws CloneNotSupportedException exception if the object's class does not support the Cloneable interface. The subclasses that override the clone() method can throw an exception if an instance cannot be cloned.
        `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        Note: The method creates a copy of the object not a new object.

        Syntax: protected Object clone() throws CloneNotSupportedException 

        We use the following statement to create a new object.

        ClassName newobject = (ClassName) oldobject.clone();
      `,
    },
    // header
    {
      type: "header",
      value: "CreateObjectExample2.java",
    },
    // code
    {
      type: "code",
      value: `
      public class CreateObjectExample3 implements Cloneable   
        {   
        @Override  
        protected Object clone() throws CloneNotSupportedException   
        {   
        //invokes the clone() method of the super class      
        return super.clone();   
        }   
        String str = "New Object Created";   
        public static void main(String[] args)   
        {  
        //creating an object of the class     
        CreateObjectExample3 obj1 = new CreateObjectExample3();   
        //try catch block to catch the exception thrown by the method  
        try  
        {  
        //creating a new object of the obj1 suing the clone() method  
        CreateObjectExample3 obj2 = (CreateObjectExample3) obj1.clone();   
        System.out.println(obj2.str);   
        }   
        catch (CloneNotSupportedException e)   
        {   
        e.printStackTrace();   
        }   
        }   
        }  
      `,
    },
    // content
    {
      type: "content",
      value: `
        OUTPUT: 
        New Object Created
      `,
    },
    // header
    {
      type: "header",
      value: "Using newInstance() Method of Class class",
    },
    // content
    {
      type: "content-start",
      value: `
        The newInstance() method of the Class class is also used to create an object. It calls the default constructor to create the object. It returns a newly created instance of the class represented by the object. It internally uses the newInstance() method of the Constructor class.
            `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        Syntax: public T newInstance()throws InstantiationException, IllegalAccessException  

        It throws the IllegalAccessException, InstantiationException, ExceptionInInitializerError exceptions.
            `,
    },
    // context
    {
      type: "content",
      value: `
        We can create an object in the following ways:

        ClassName object = ClassName.class.newInstance();  

        OR

        ClassName object = (ClassName) Class.forName("fully qualified name of the class").newInstance();  
        `,
    },
    // content
    {
      type: "content",
      value: `
      In the above statement, forName() is a static method of Class class. It parses a parameter className of type String. It returns the object for the class with the fully qualified name. It loads the class but does not create any object. It throws ClassNotFoundException if the class cannot be loaded and LinkageError if the linkage fails.

      To create the object, we use the newInstance() method of the Class class. It works only when we know the name of the class and the class has a public default constructor.
        `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        In the following program, we have creates a new object using the newInstance() method.
        `,
    },
    // header
    {
      type: "header",
      value: "CreateObjectExample3.java",
    },
    // code
    {
      type: "code",
      value: `
        public class CreateObjectExample4  
          {   
          void show()    
          {    
          System.out.println("A new object created.");    
          }    
          public static void main(String[] args)   
          {   
          try  
          {  
          //creating an instance of Class class  
          Class cls = Class.forName("CreateObjectExample4");   
          //creates an instance of the class using the newInstance() method  
          CreateObjectExample4 obj = (CreateObjectExample4) cls.newInstance();   
          //invoking the show() method  
          obj.show();   
          }   
          catch (ClassNotFoundException e)   
          {   
          e.printStackTrace();   
          }   
          catch (InstantiationException e)   
          {   
          e.printStackTrace();   
          }   
          catch (IllegalAccessException e)   
          {   
          e.printStackTrace();   
          }   
          }   
          }  
        `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        OUTPUT:

        A new object created.
          `,
    },
    // header
    {
      type: "header",
      value: "Using newInstance() Method of Constructor class",
    },
    // content
    {
      type: "content-start",
      value: `
        It is similar to the newInstance() method of the Class class. It is known as a reflective way to create objects. The method is defined in the Constructor class which is the class of java.lang.reflect package. We can also call the parameterized constructor and private constructor by using the newInstance() method. It is widely preferred in comparison to newInstance() method of the Class class.
        `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        Syntax: 
        public T newInstance(Object... initargs) throws InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException 
       `,
    },
    // content
    {
      type: "content",
      value: `
        The method parses an array of Objects as an argument. The values of primitive types wrapped in a wrapper Object of the appropriate type. It returns a new object created by calling the constructor. It throws IllegalAccessException, IllegalArgumentException, InstantiationException, InvocationTargetException, ExceptionInInitializerError Exceptions.
        `,
    },
    // context
    {
      type: "content",
      ignore: "true",
      value: `
        We can create an object in the following way:
        `,
    },
    //  code
    {
      type: "code",
      ignore: "true",
      value: `
        Constructor<Employee>constructor=Employee.class.getConstructor();  
        Employee emp3 = constructor.newInstance(); 
      `,
    },
    // header
    {
      type: "header",
      value: "CreateObjectExample4.java",
    },
    // code
    {
      type: "code",
      value: `
        import java.lang.reflect.*;   
          public class CreateObjectExample5  
          {   
          private String str;   
          CreateObjectExample5()   
          {   
          }   
          public void setName(String str)   
          {   
          this.str = str;   
          }   
          public static void main(String[] args)   
          {   
          try  
          {   
          Constructor<CreateObjectExample5> constructor = CreateObjectExample5.class.getDeclaredConstructor();   
          CreateObjectExample5 r = constructor.newInstance();   
          r.setName("JavaTpoint");   
          System.out.println(r.str);   
          }   
          catch (Exception e)   
          {   
          e.printStackTrace();   
          }   
          }   
          }  
      `,
    },
    // content
    { 
      type: "content",
      ignore: "true",
      value: `
        OUTPUT:

        JavaTpoint
        `,
    },
    // header
    {
      type: "header",
      value: "Instance Variable in Java",
    },
    // content
    {
      type: "content-start",
      value: `
        In any programming language, the program needs identifiers for storing different values that can be used throughout the program. These identifiers are variables.
      `,
    },
    // context
    {
      type: "content",
      ignore: "true",
      value: `
        Variable in Java
      `,
    },
    // list
    {
      type: "list",
      value: [
        "A variable is a name assigned to a value that is stored inside the system memory. The value can be updated during the program execution.",
        "In Java programming, the variables used for the program need to declare them first.",
        "The variable is declared using a data type followed by the identifier name. The variable can be initialized at the time of declaration or it can be assigned a value taken from the user during the program execution.",
        "There are basically three types of variables in Java,",
          "1.Java Local variable",
          "2. Java Instance variable",
          "3. Java Static variable / Java class variable",
      ],
    },
    // context
    {
      type: "content",
      ignore: "true",
      value: `
Java Instance Variable
      `,
    },
    // list
    {
      type: "list",
      value: [
        "The variables that are declared inside the class but outside the scope of any method are called instance variables in Java.",
        " The instance variable is initialized at the time of the class loading or when an object of the class is created.",
        "An instance variable can be declared using different access modifiers available in Java like default, private, public, and protected.",
        "Instance variables of different types have default values that are specified in the next point.",
      ],
    },
    // context
    {
      type: "content",
      ignore: "true",
      value: `
        Features
      `,
    },
    // list
    {
      type: "list",
      value: [
        "1. To use an instance variable an object of the class must be created.",
        "2. An instance variable is destroyed when the object it is associated with is destroyed.",
        "3. An instance variable does not compulsory need to be initialized.",
        "4. An instance variable does not compulsory need to be initialized.",
      ],
    },
    // context
    {
      type: "content",
      ignore: "true",
      value: `
        Limitations of Instance Variable
      `,
    },
    // list
    {
      type: "list",
      value: [
        "1. It cannot be declared static, abstract, striftp, synchronized, and native.",
        "2. It can be declared final and transient.",
        "3. It can be of any of the four access modifiers available in Java (private, public, protected, and default).",
      ],
    },
    // header
    {
      type: "header",
      value: "Default Values of Instance Variables in Java",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
        The instance variables in Java are of different data types as follows;
      `,
    },
    // table
    {
      type: "image",
      value: "Chapter_2_table_1.png",
    },
    // header
    {
      type: "header",
      value: "Java source file declaration rules",
    },
    // content
    {
      type: "content-start",
      value: `
        A Java source file is a plain text file containing Java source code and having .java extension. The .java extension means that the file is the Java source file. Java source code file contains source code for a class, interface, enumeration, or annotation type. There are some rules associated to Java source file. We should adhere to following rules while writing Java source code.
      `,
    },
    // list
    {
      type: "list",
      value: [
        "There can be only one public class per source code file.",
        "Comments can appear at the beginning or end of any line in the source code file; they are independent of any of the positioning rules discussed here. Java comment can be inserted anywhere in a program code where a white space can be",
        "If there is a public class in a file, the name of the file must match the name of the public class. For example, a class declared as public class Dog { } must be in a source code file named Dog.java.",
        "If the class is part of a package, the package statement must be the first line in the source code file, before any import statements that may be present.",
        "If there are import statements, they must go between the package statement (if there is one) and the class declaration. If there isn't a package statement, then the import statement(s) must be the first line(s) in the source code file. If there are no package or import statements , the class declaration must be the first line in the source code file.",
        "import and package statements apply to all classes within a source code file. In other words, there's no way to declare multiple classes in a file and have them in different packages, or use different imports.",
        "A file can have more than one non~public class.",
        "Files with non~public classes can have a name that does not match any of the classes in the file",
      ],
    },
    // header
    {
      type: "header",
      value: `
          Difference between Local, Instance and Static variables in Java
      `,
    },
    // table
    {
      type: "image",
      value: "Chapter_2_table_2.png",
    },
    // header
    {
      type: "header",
      value: "Java Package",
    },
    // content
    {
      type: "content-start",
      value: `
        A java package is a group of similar types of classes, interfaces and sub-packages. Package in java can be categorized in two form, built-in package and user-defined package.
        There are many built-in packages such as java, lang, awt, javax, swing, net, io, util, sql etc.
      `,
    },
    // context
    {
      type: "content",
      ignore: "true",
      value: `
        Advantage of Java Package
      `,
    },
    // list
    {
      type: "list",
      value: [
        "1. Java package is used to categorize the classes and interfaces so that they can be easily maintained.",
        "2. Java package provides access protection.",
        "3. Java package removes naming collision.",
      ],
    },
    // image
    {
      type: "image",
      value: "Chapter_2_image_2.png",
    },
    // header
    {
      type: "header",
      value: "Simple example of java package",
    },
    // content
    {
      type: "content-start",
      ignore: "true",
      value: `
        The package keyword is used to create a package in java.
      `,
    },
    // code
    {
      type: "code",
      value: `
          //save as Simple.java  
            package mypack;  
            public class Simple{  
            public static void main(String args[]){  
            System.out.println("Welcome to package");  
          }  
        }  
      `,
    },
    // header
    {
      type: "header",
      value: "How to compile java package",
    },
    // content
    {
      type: "content-start",
      value: `
        If you are not using any IDE, you need to follow the syntax given below:

        javac -d directory javafilename  

        For example

        javac -d . Simple.java  
      `,
    },
    // content
    {
      type: "content",
      value: `
        The -d switch specifies the destination where to put the generated class file. You can use any directory name like /home (in case of Linux), d:/abc (in case of windows) etc. If you want to keep the package within the same directory, you can use . (dot).
      `,
    },
    // header
    {
      type: "header",
      value: "How to run java package program",
    },
    // content
    {
      type: "content-start",
      ignore: "true",
      value: `
        You need to use fully qualified name e.g. mypack.Simple etc to run the class.

        To Compile: javac -d.Simple.java
        To Run: java mypack.Simpla
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
          OUTPUT: 
          Welcome to package
      `,
    },
    // content
    {
      type: "content",
      value: `
        The -d is a switch that tells the compiler where to put the class file i.e. it represents destination. The . represents the current folder.
      `,
    },
    // header
    {
      type: "header",
      value: "How to access package from another package?",
    },
    // context
    {
      type: "content-start",
      value: `
          There are three ways to access the package from outside the package.
      `,
    },
    // list
    {
      type: "list",
      value: [
        "1. import package.*;",
        "2. import package.classname;",
        "3. fully qualified name.",
      ],
    },
    // header
    {
      type: "header",
      value: "1) Using packagename.*",
    },
    // content
    {
      type: "content-start",
      value: `
        If you use package.* then all the classes and interfaces of this package will be accessible but not subpackages.
        The import keyword is used to make the classes and interface of another package accessible to the current package.
      `,
    },
    // header
    {
      type: "header",
      value: "Example of package that import the packagename.*",
    },
    // code
    {
      type: "code",
      value: `
        //save by A.java  
          package pack;  
          public class A{  
            public void msg(){System.out.println("Hello");}  
          } 
          //save by B.java  
          package mypack;  
          import pack.*;  
            
          class B{  
            public static void main(String args[]){  
             A obj = new A();  
             obj.msg();  
            }  
          }  
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        OUTPUT: Hello
      `,
    },
    // header
    {
      type: "header",
      value: "2) Using packagename.classname",
    },
    // content
    {
      type: "content-start",
      value: `
          If you import package.classname then only declared class of this package will be accessible.
      `,
    },
    // header
    {
      type: "header",
      value: "Example of package by import package.classname",
    },
    // code
    {
      type: "code",
      value: `
        //save by A.java  
  
          package pack;  
          public class A{  
            public void msg(){System.out.println("Hello");}  
          }  
        //save by B.java  
          package mypack;  
          import pack.A;  
            
          class B{  
            public static void main(String args[]){  
             A obj = new A();  
             obj.msg();  
            }  
          }  
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
          OUTPUT: Hello
      `,
    },
    // header
    {
      type: "header",
      value: "3) Using fully qualified name",
    },
    // content
    {
      type: "content-start",
      value: `
          accessible. Now there is no need to import. But you need to use fully qualified name every time when you are accessing the class or interface.
          It is generally used when two packages have same class name e.g. java.util and java.sql packages contain Date class.
      `,
    },
    // header
    {
      type: "header",
      value: "Example of package by import fully qualified name",
    },
    // code
    {
      type: "code",
      value: `
        //save by A.java  
          package pack;  
          public class A{  
            public void msg(){System.out.println("Hello");}  
          }  
        //save by B.java  
          package mypack;  
          class B{  
            public static void main(String args[]){  
             pack.A obj = new pack.A();//using fully qualified name  
             obj.msg();  
            }  
          }  
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        OUTPUT: Hello
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        NOTE: If you import a package, subpackages will not be imported.
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
      value: "Data Types in Java",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
          Data types specify the different sizes and values that can be stored in the variable. There are two types of data types in Java:
      `,
    },
    // list
    {
      type: "list",
      value: [
        "Primitive data types: The primitive data types include boolean, char, byte, short, int, long, float and double.",
        "Non-primitive data types: The non-primitive data types include Classes, Interfaces, and Arrays.",
      ],
    },
    // header
    {
      type: "header",
      value: "Java Primitive Data Types",
    },
    // content
    {
      type: "content-start",
      value: `
        In Java language, primitive data types are the building blocks of data manipulation. These are the most basic data types available in Java language
        Java is a statically-typed programming language. It means, all variablesmust be declared before its use. That is why we need to declare variable's type and name.
      `,
    },
    // table
    {
      type: "image",
      value: "Chapter_2_table_2.png",
    },
    // header
    {
      type: "header",
      value: "Boolean Data Type",
    },
    // content
    {
      type: "content-start",
      value: `
        The Boolean data type is used to store only two possible values: true and false. This data type is used for simple flags that track true/false conditions.
        The Boolean data type specifies one bit of information, but its "size" can't be defined precisely.
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        Example:  
        Boolean one = False
      `,
    },
    // header
    {
      type: "header",
      value: "Byte Data Type",
    },
    // content
    {
      type: "content-start",
      value: `
        The byte data type is an example of primitive data type. It isan 8-bit signed two's complement integer. Its value-range lies between -128 to 127 (inclusive). Its minimum value is -128 and maximum value is 127. Its default value is 0.
        The byte data type is used to save memory in large arrays where the memory savings is most required. It saves space because a byte is 4 times smaller than an integer. It can also be used in place of "int" data type.
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
          Example:
          byte a = 10, byte b = -20  
      `,
    },
    // header
    {
      type: "header",
      value: "Short Data Type",
    },
    // content
    {
      type: "content-start",
      value: `
          The short data type is a 16-bit signed two's complement integer. Its value-range lies between -32,768 to 32,767 (inclusive). Its minimum value is -32,768 and maximum value is 32,767. Its default value is 0.
          The short data type can also be used to save memory just like byte data type. A short data type is 2 times smaller than an integer.
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
          Example:
          short s = 10000, short r = -5000  
      `,
    },
    // header
    {
      type: "header",
      value: "Int Data Type",
    },
    // content
    {
      type: "content-start",
      value: `
          The int data type is a 32-bit signed two's complement integer. Its value-range lies between - 2,147,483,648 (-2^31) to 2,147,483,647 (2^31 -1) (inclusive). Its minimum value is - 2,147,483,648and maximum value is 2,147,483,647. Its default value is 0.
          The int data type is generally used as a default data type for integral values unless if there is no problem about memory.
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
          Example:
          int a = 100000, int b = -200000 
      `,
    },
    // header
    {
      type: "header",
      value: "Long Data Type",
    },
    // content
    {
      type: "content-start",
      value: `
          The long data type is a 64-bit two's complement integer. Its value-range lies between -9,223,372,036,854,775,808(-2^63) to 9,223,372,036,854,775,807(2^63 -1)(inclusive). Its minimum value is - 9,223,372,036,854,775,808and maximum value is 9,223,372,036,854,775,807. Its default value is 0. The long data type is used when you need a range of values more than those provided by int.
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
          Example:
          Long a = 100000L, long b = -200000L  
      `,
    },
    // header
    {
      type: "header",
      value: "Float Data Type",
    },
    // content
    {
      type: "content-start",
      value: `
          The float data type is a single-precision 32-bit IEEE 754 floating point.Its value range is unlimited. It is recommended to use a float (instead of double) if you need to save memory in large arrays of floating point numbers. The float data type should never be used for precise values, such as currency. Its default value is 0.0F.
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
          Example:
          float f1 = 234.5f  
      `,
    },
    // header
    {
      type: "header",
      value: "Double Data Type",
    },
    // content
    {
      type: "content-start",
      value: `
          The double data type is a double-precision 64-bit IEEE 754 floating point. Its value range is unlimited. The double data type is generally used for decimal values just like float. The double data type also should never be used for precise values, such as currency. Its default value is 0.0d.
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
          Example:
          double d1 = 12.3 
      `,
    },
    // header
    {
      type: "header",
      value: "Char Data Type",
    },
    // content
    {
      type: "content-start",
      value: `
          The char data type is a single 16-bit Unicode character. Its value-range lies between '\u0000' (or 0) to '\uffff' (or 65,535 inclusive).The char data type is used to store characters.
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
          Example:
          char letterA = 'A'
      `,
    },
    // header
    {
      type: "header",
      value: "Why char uses 2 byte in java and what is \u0000 ?",
    },
    // content
    {
      type: "content-start",
      ignore: "true",
      value: `
        It is because java uses Unicode system not ASCII code system. The \u0000 is the lowest range of Unicode system.
      `,
    },
    // header
    {
      type: "header",
      value: "REFERENCE DATATYPES",
    },
    // content
    {
      type: "content-start",
      value: `
        Reference datatypes in java are those which contains reference/address of dynamically created objects. These are not predefined like primitive data types.
      `,
    },
    // context
    {
      type: "content",
      ignore: "true",
      value: `
        Following are the reference types in Java.
      `,
    },
    // list
    {
      type: "list",
      value: [
          "class types − This reference type points to an object of a class.",
          "array types − This reference type points to an array",
          "interface types − This reference type points to an object of a class which implements an interface.",
        ],
    },
    // context
    {
      type: "content",
      ignore: "true",
      value: `
        Once we create a variable of these types (i.e. when we create an array or object, class or interface).
      `,
    },
    // list
    {
      type: "list",
      value: [
          "These variables only store the address of these values.",
          "Default value of any reference variable is null.",
          "A reference variable can be used to refer any object of the declared type or any compatible type.",
        ],
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/0MFC_Vw9NxY",
    },
    // header
    {
      type: "header",
      value: "Literals in Java",
    },
    // content
    {
      type: "content-start",
      value: `
          In Java, literal is a notation that represents a fixed value in the source code. In lexical analysis, literals of a given type are generally known as tokens. In this section, we will discuss the term literals in Java.
      `,
    },
    // header
    {
      type: "header",
      value: "Literals",
    },
    // content
    {
      type: "content-start",
      value: `
          In Java, literals are the constant values that appear directly in the program. It can be assigned directly to a variable. Java has various types of literals. The following figure represents a literal.
      `,
    },
    // image
    {
      type: "image",
      value: "Chapter_2_image_3.png",
    },
    // header
    {
      type: "header",
      value: "Types of Literals in Java",
    },
    // content
    {
      type: "content-start",
      ignore: "true",
      value: `
        There are the majorly four types of literals in Java:
      `,
    },
    // list
    {
      type: "list",
      value: [
        "1. Integer Literal",
        "2. Character Literal",
        "Boolean Literal",
        "String Literal",
      ],
    },
    // header
    {
      type: "header",
      value: "Integer Literals",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
        Integer literals are sequences of digits. There are three types of integer literals:
      `,
    },
    // list content
    {
      type: "content",
      value: `
        Decimal Integer: These are the set of numbers that consist of digits from 0 to 9. It may have a positive (+) or negative (-) Note that between numbers commas and non-digit characters are not permitted. For example, 5678, +657, -89, etc.

        Example:
        int decVal = 26;  

        Octal Integer: It is a combination of number have digits from 0 to 7 with a leading 0. For example, 045, 026,

        Example:
        int octVal = 067;  

        Hexa-Decimal: The sequence of digits preceded by 0x or 0X is considered as hexadecimal integers. It may also include a character from a to f or A to F that represents numbers from 10 to 15, respectively. For example, 0xd, 0xf,

        Example:
        int hexVal = 0x1a; 

        Binary Integer: Base 2, whose digits consists of the numbers 0 and 1 (you can create binary literals in Java SE 7 and later). Prefix 0b represents the Binary system. For example, 0b11010.

        Example:
        int binVal = 0b11010;  
      `,
    },
    // header
    {
      type: "header",
      value: "Real Literals",
    },
    // content
    {
      type: "content-start",
      ignore: "true",
      value: `
        The numbers that contain fractional parts are known as real literals. We can also represent real literals in exponent form. For example, 879.90, 99E-3, etc.
      `,
    },
    // header
    {
      type: "header",
      value: "Backslash Literals",
    },
    // content
    {
      type: "content-start",
      value: `
        Java supports some special backslash character literals known as backslash literals. They are used in formatted output. For example:
      `,
    },
    //list
    {
      type: "list",
      value: [
        "\\n: It is used for a new line",
        "\\t: It is used for horizontal tab",
        "\\b: It is used for blank space",
        "\\v: It is used for vertical tab",
        "\\a: It is used for a small beep",
        "\\r: It is used for carriage return",
        "\\': It is used for a single quote",
        "\\\": It is used for double quotes",
      ],
    },
    // header
    {
      type: "header",
      value: "Character Literals",
    },
    // content
    {
      type: "content-start",
      value: `
          A character literal is expressed as a character or an escape sequence, enclosed in a single quote ('') mark. It is always a type of char. For example, 'a', '%', '\u000d', etc.
      `,
    },
    // header
    {
      type: "header",
      value: "String Literals",
    },
    // content
    {
      type: "content-start",
      value: `
          String literal is a sequence of characters that is enclosed between double quotes ("") marks. It may be alphabet, numbers, special characters, blank space, etc. For example, "Jack", "12345", "\n", etc.
      `,
    },
    // header
    {
      type: "header",
      value: "Floating Point Literals",
    },
    // content
    {
      type: "content-start",
      value: `
          The vales that contain decimal are floating literals. In Java, float and double primitive types fall into floating-point literals. Keep in mind while dealing with floating-point literals.
      `,
    },
    // list
    {
      type: "list",
      value: [
        "Floating-point literals for float type end with F or f. For example, 6f, 8.354F, etc. It is a 32-bit float literal.",
        "Floating-point literals for double type end with D or d. It is optional to write D or d. For example, 6d, 8.354D, etc. It is a 64-bit double literal.",
        "It can also be represented in the form of the exponent.",
      ],
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/lGDC7YUlQAc",
    },
    // header
    {
      type: "header",
      value: "Local Variables in Java",
    },
    // list
    {
      type: "list",
      value: [
        "Local variables are declared in methods, constructors, or blocks.",
        "Local variables are created when the method, constructor or block is   entered and the variable will be destroyed once it exits the method, constructor, or block.",
        "Access modifiers cannot be used for local variables.",
        "Local variables are visible only within the declared method, constructor, or block.",
        "Local variables are implemented at stack level internally.",
        "There is no default value for local variables, so local variables should   be declared and an initial value should be assigned before the first use.",
      ],
    },
    // content
    {
      type: "content",
      value: `
        The variables declared inside the body of the method are termed local variables. A function is a collection of statements that are designed to perform a specific task. Functions take certain input(s) and its parameter and give output or return value. A function is created that one can not have to write the same code, again and again, we call to use it as many times just by calling the function name.
      `,
    },
    // code
    {
      type: "code",
      value: `
        public static return_type function_name(parameter 1, parameter 2, .....)
          {
              // Body of function
              // or set of statements    
          }
      `,
    },
    // header
    {
      type: "header",
      value: "What is Return Type? ",
    },
    // content
    {
      type: "content-start",
      value: `
        A function may return a value. The return type of a function is the data type of the value of the function return. The return type of function can be on any data type but sometimes it is not required to return the function so use the void return type. In void return type function did not return any value. Now let’s get an example for a better understanding of it.
      `,
    },
    // code
    {
      type: "code",
      value: `
        // Java Program to Illustrate Return Type
        // In a Method
        // Class
        public class GFG {
          // Method 1
          // To compute area of circle
          public static double Area(double radius)
          {
            // Computing area of circle
            double area = radius * radius * 3.14;
         
            // Returning computed area
            return area;
          }
          // Method 2
          // Main driver method
          public static void main(String[] args)
          {
            // Custom input
            double radius = 4.4;
         
            // Calling method and storing result
            double answer = Area(radius);
         
            // Printing area of circle on console
            System.out.println(answer);
          }
        }
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        OUTPUT:
        60.79040000000001
      `,
    },
    // header
    {
      type: "header",
      value: "Why Do We Need a Function?",
    },
    // list
    {
      type: "list",
      value: [
        "Reusability: Once a function is created, it can be over and over again.  you can call the function as many times as we need it, which saves  work  and time. now suppose you are required to find the area of a  rectangle, now we have to option one we can apply a formula each  time to get the area or we can just make a function for finding the rea of the rectangle and call the function whenever we need it.",
        "Easy Debugging: It is easy to find the error and correct the code in a   function as compared to raw code without a function where you must  correct the error(if required) everywhere the specific task of the  function is performed.",
        "Neet code: A code created with a function is ready o read and dry run. You don’t need to type the same code, again and again, instead you  can invoke the function it is needed.",
        "Modularisation: Modularisation means to divide the code into small     modules (part) each performing its specific task. Functions help in doing so as they are the same fragment of the program designed to   perform the specific task.",
      ],
    },
    // header
    {
      type: "header",
      value:" How does function calling work?",
    },
    // content
    {
      type: "content-start",
      value: `
        The function begins called is called by the callee(name of the function) and the function which calls the callee is the caller. When a function is called, program control goes to the entry point of the function. Entrypoint is where the function is defined. So focus now to shift to the callee and the caller function and the caller function goes in paused state.
      `,
    },
    // code
    {
      type: "code",
      value: `
        // Java Program to Illustrate Working Of Function Calling
        // Class
        class GFG {
          // Method 1
          public static int findsum(int a, int b)
          {
            int sum = a + b;
            return sum;
          }
          // Method 2
          // Main driver method
          public static void main(String[] args)
          {
            int a = 10, b = 20;
            int c = findsum(a, b);
            System.out.print(c);
          }
        }
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        OUTPUT:
        30

        Here in the above example, the code entry point of the function findsum() is at line number 2. so when the function calls occur the control goes to findsum() (line 2), then after that the statement in the function findsum() is executed the programme control comes back at last.
      `,
    },
    // header
    {
      type: "header",
      value: "Local Variable and Scopes ",
    },
    // content
    { 
      type: "content-start",
      value: `
          A local variable is a variable that is given a local scope. Local variable belonging to a function or a block has their scope only within the function or block inside which it is declared. The scope of a variable is part of a program for which this variable is accessible.

          The lifetime of a variable: The lifetime of a variable is the time period for which the declared variable has a valid memory. Scope and lifetime of a variable are two different concepts, the scope of a variable is part of a program for which this variable is accessible whereas lifetime is the duration for which this variable has a valid memory.

          Pass by Value: When the parameters are passed to a function bypass by the value method, then the formal parameters are allocated to a new memory. These parameters have the same value as that of actual parameters. Since the formal parameters are allocated to new memory any changes in these parameters will not reflect the actual parameter.
      `,
    },
    // code
    {
      type: "code",
      value: `
          // Java Program to Illustrate variable and Scopes
          // Inside a Method
          // Class
          public class GFG {
            // Method 1
            public static void increase(int x, int y)
            {
              x++;
              y = y + 1;
              // Print statement
              System.out.println(x + " : " + y);
            }
            // Method 2
            // Main driver method
            public static void main(String[] args)
            {
              int a = 10;
              int b = 40;
              increase(a, b);
              System.out.println(a + " : " + b);
            }
          }
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
          OUTPUT:
          11 : 41
          10 : 40
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/FUSquzYxJ-g",
    },
    // header
    {
      type: "Instance variables in Java",
    },
    // list
    {
      type: "list",
      value: [
        "Instance variables are declared in a class, but outside a method, constructor or any block",
        "When space is allocated for an object in the heap, a slot for each instance variable value is created.",
        "Instance variables are created when an object is created with the use of the keyword 'new' and destroyed when the object is destroyed.",
        "Instance variables hold values that must be referenced by more than one method, constructor or block, or essential parts of an object's state that must be present throughout the class.",
        "Instance variables can be declared at the class level before or after use.",
        "Access modifiers can be given for instance variables.",
        "The instance variables are visible for all methods, constructors, and block in the class. Normally, it is recommended to make these variables private (access level). However, visibility for subclasses can be given for these variables with the use of access modifiers.",
        "Instance variables have default values. For numbers, the default value is 0, for Booleans it is false, and for object references it is null. Values can be assigned during the declaration or within the constructor.",
        "Instance variables can be accessed directly by calling the variable name inside the class. However, within static methods (when instance variables are given accessibility), they should be called using the fully qualified name. ObjectReference.VariableName.",
      ],
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
      value: `
        import java.io.*;
        public class Employee {

           // this instance variable is visible for any child class.
           public String name;

           // salary variable is visible in Employee class only.
           private double salary;

           // The name variable is assigned in the constructor.
           public Employee (String empName) {
              name = empName;
           }

           // The salary variable is assigned a value.
           public void setSalary(double empSal) {
              salary = empSal;
           }

           // This method prints the employee details.
           public void printEmp() {
              System.out.println("name  : " + name );
              System.out.println("salary :" + salary);
           }

           public static void main(String args[]) {
              Employee empOne = new Employee("Ransika");
              empOne.setSalary(1000);
              empOne.printEmp();
           }
        }
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        Output
        This will produce the following result −

        name  : Ransika
        salary :1000.0
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/wufA9YMDoC4",
    },
    // header
    {
      type: "header",
      value: "Class/Static Variables",
    },
    // content
    {
      type: "content-start",
      value: `
        Class variables also known as static variables are declared with the static keyword in a class, but outside a method, constructor or a block.
      `,
    },
    // list
    {
      type: "list",
      value: [
        "There would only be one copy of each class variable per class,   regardless of how many objects are created from it.",
        "Static variables are rarely used other than being declared as constants. Constants are variables that are declared as public/private, final, and   static. Constant variables never change from their initial value",
        "Static variables are stored in the static memory. It is rare to use static variables other than declared final and used as either public or private  constants.",
        "Static variables are created when the program starts and destroyed   when the program stops.",
        "Visibility is similar to instance variables. However, most static variables  are declared public since they must be available for users of the class.",
        "Default values are same as instance variables. For numbers, the  default value is 0; for Booleans, it is false; and for object references, it  is null. Values can be assigned during the declaration or within the  constructor. Additionally, values can be assigned in special static initializer blocks.",
        "Static variables can be accessed by calling with the class name  ClassName.VariableName. ",
        "When declaring class variables as public static final, then variable names (constants) are all in upper case. If the static variables are not  public and final, the naming syntax is the same as instance and local   variables.",
      ],
    },
    // code
    {
      type: "code",
      value: `
        import java.io.*;public class Employee {
 
       // salary  variable is a private static variable
       private static double salary;
     
       // DEPARTMENT is a constant
       public static final String DEPARTMENT = "Development ";
     
       public static void main(String args[]) {
          salary = 1000;
          System.out.println(DEPARTMENT + "average salary:" + salary);
       }}
      `,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
        Output:
        Development average salary:1000
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/UcsoLgBaGmg",
    },
  ];
}