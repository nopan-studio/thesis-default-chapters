export function Chapter_3() {
  return [
    // title
    {
      type: "title",
      value: "Chapter 3",
    },
    // subtitle
    {
      type: "subtitle",
      value: "Java Modifier Types",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      There are two types of modifiers in Java: access modifiers and non-access modifiers.
      `,
    },
    // content
    {
      type: "content",
      value: `
      The access modifiers in Java specifies the accessibility or 
      scope of a field, method, constructor, or class. We can change the access 
      level of fields, constructors, methods, and class by applying the access modifier on it.
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      There are four types of Java access modifiers:
      `,
    },
    //list
    {
      type: "list",
      value: [
        "1. Private: The access level of a private modifier is only within the class. It cannot be accessed from outside the class.",
        "2. Default: The access level of a default modifier is only within the package. It cannot be accessed from outside the package. If you do not specify any access level, it will be the default.",
        "3. Protected: The access level of a protected modifier is within the package and outside the package through child class. If you do not make the child class, it cannot be accessed from outside the package.",
        "4. Public: The access level of a public modifier is everywhere. It can be accessed from within the class, outside the class, within the package and outside the package.",
      ],
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      There are many non-access modifiers, such as static, abstract, synchronized, native, volatile, transient, etc. Here, we are 
      going to learn the access modifiers only.
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/Ruy-yzj-JG8",
    },
    // header
    {
      type: "header",
      value: "Understanding Java Access Modifiers",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      Let's understand the access modifiers in Java by a simple table.
      `,
    },
    //image
    {
      type: "image",
      value: `chapter_3_image_1`,
    },
    // header
    {
      type: "header",
      value: "1) Private",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      The private access modifier is accessible only within the class.
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Simple example of private access modifier
      In this example, we have created two classes A and Simple. A class 
      contains private data member and private method. We are accessing these 
      private members from outside the class, so there is a compile-time error.
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      value: `
      class A{  
        private int data=40;  
        private void msg(){System.out.println("Hello java");}  
      }  
      
      public class Simple{  
        public static void main(String args[]){  
          A obj=new A();  
          System.out.println(obj.data);//Compile Time Error  
          obj.msg();//Compile Time Error  
        }  
      }  
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Role of Private Constructor
      If you make any class constructor private, you cannot create the 
      instance of that class from outside the class. For example:
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      value: `
      class A{  
        private A(){}//private constructor  
        void msg(){System.out.println("Hello java");}  
      }  
      public class Simple{  
        public static void main(String args[]){  
          A obj=new A();//Compile Time Error  
        }  
      }
      `,
    },
    {
      type: "header",
      value: "2) Default",
    },
    // context
    {
      type: "content-start",
      value: `
      If you don't use any modifier, it is treated as default by default. The default modifier 
      is accessible only within package. It cannot be accessed from outside the package. 
      It provides more accessibility than private. But, it is more restrictive than protected, and public.
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Example of default access modifier
      In this example, we have created two packages pack and mypack. We are accessing the A class 
      from outside its package, since A class is not public, so it cannot be accessed from outside the package.
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      value: `
      class A{  
        //save by A.java  
        package pack;  
        class A{  
          void msg(){System.out.println("Hello");}  
        }  
        
        //save by B.java  
        package mypack;  
        import pack.*;  
        class B{  
          public static void main(String args[]){  
            A obj = new A();//Compile Time Error  
            obj.msg();//Compile Time Error  
          }  
        }   
        `,
      },
      // header
      {
        type: "header",
        value: "3) Protected",
      },
      // context
      {
        type: "content-start",
        value: `
        The protected access modifier is accessible within package and outside the package but through inheritance only.
        The protected access modifier can be applied on the data member, method and constructor. It can't be applied on the class.
        It provides more accessibility than the default modifer.
        `,
      },
      //content
      {
        type: "content",
        ignore: "true",
        value: `
        In this example, we have created the two packages pack and mypack. The A class of pack package is public, so can be accessed 
        from outside the package. But msg method of this package is declared as protected, so it can be accessed from outside the class only through inheritance.
        `,
      },
      //code
      {
        type: "code",
        ignore: "true",
        value: `
        save by A.java  
        package pack;  
        public class A{  
          protected void msg(){System.out.println("Hello");}  
        }  
        
        //save by B.java  
        package mypack;  
        import pack.*;  
        
        class B extends A{  
          public static void main(String args[]){  	
            B obj = new B();  
            obj.msg();  
          }
        }
        `,
      },
      // header
      {
        type: "header",
        value: "4) Public",
      },
      // context
      {
        type: "content-start",
        ignore: "true",
        value: `
        The public access modifier is accessible everywhere. It has the widest scope among all other modifiers.
        `,
      },
      //content
      {
        type: "content",
        ignore: "true",
        value: `
        Example of public access modifier
        `,
      },
      //code
      {
        type: "code",
        ignore: "true",
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
      //content
      {
        type: "content",
        ignore: "true",
        value: `
        Java Access Modifiers with Method Overriding
        If you are overriding any method, overridden method (i.e. declared in subclass) must not be more restrictive.
        
        `,
      },
      //code
      {
        type: "code",
        ignore: "true",
        value: `
        class A{  
          protected void msg(){System.out.println("Hello java");}  
        }  
        
        public class Simple extends A{  
          void msg(){System.out.println("Hello java");}//C.T.Error  
          public static void main(String args[]){  
            Simple obj=new Simple();  
            obj.msg();  
          }  
        }
        `,
      },
      //content
      {
        type: "content",
        ignore: "true",
        value: `
        The default modifier is more restrictive than protected. That is why, there is a compile-time error.
        
        `,
      },
      // link video
      {
        type: "video",
        value: "https://youtube.com/embed/H0OetoieSDQ",
      },
      // header
      {
        type: "header",
        value: "Non-Access modifiers",
      },
      // context
      {
        type: "content-start",
        ignore: "true",
        value: `
        Non-access modifiers provide information about the characteristics of a class, 
        method, or variable to the JVM. Seven types of Non-Access modifiers are present 
        in Java. They are –
        `,
      },
      //list
      {
        type: "list",
        value: [
          "static",
          "final",
          "abstract",
          "synchronized",
          "volatile",
          "transient",
          "native",
        ],
      },
      // header
      {
        type: "header",
        value: "1) Static",
      },
      // context
      {
        type: "content-start",
        value: `
        The static keyword means that the entity to which it is applied is available outside 
        any particular instance of the class. That means the static methods or the attributes 
        are a part of the class and not an object. The memory is allocated to such an attribute 
        or method at the time of class loading. The use of a static modifier makes the program more 
        efficient by saving memory. A static field exists across all the class instances, and without 
        creating an object of the class, they can be called.
        `,
      },
      //code
      {
        type: "code",
        ignore: "true",
        value: `
        
        import java.io.*;
        
        // static variable
        class static_gfg {
          static String s = "GeeksforGeeks"; 
        }
        class GFG {
          public static void main(String[] args)
          {
            // No object required
            System.out.println(
              static_gfg.s); 
            }
          }
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          In this above code sample, we have declared the String as static, part of the static_gfg class. 
          Generally, to access the string, we first need to create the object of the static_gfg class, 
          but as we have declared it as static, we do not need to create an object of static_gfg class 
          to access the string. We can use className.variableName for accessing it.
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/lplsn06fOtw",
        },
        // header
        {
          type: "header",
          value: "2. final",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          The final keyword indicates that the specific class cannot be extended or a method cannot be overridden. 
          Let’s understand that with an example –
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          Example 1:
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          import java.io.*;
          
          class final_gfg { 
            String s1 = "geek1";
          }
          class extended_gfg extends final_gfg { 
            
            String s2 = "geek2";
          }
          class GFG {
            public static void main(String[] args)
            {
              // creating object
              extended_gfg obj = new extended_gfg(); 
              
              System.out.println(obj.s1);
              System.out.println(obj.s2);
            }
          }
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          In this above code, the final_gfg class is extended by the extended_gfg class, and the code is working fine and producing output.
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/0JyfM9F8Fv0",
        },
        // header
        {
          type: "header",
          value: "3. abstract",
        },
        // context
        {
          type: "content-start",
          value: `
          abstract keyword is used to declare a class as partially implemented means an object cannot be 
          created directly from that class. Any subclass needs to be either implement all the methods of 
          the abstract class, or it should also need to be an abstract class. The abstract keyword cannot 
          be used with static, final, or private keywords because they prevent overriding, and we need to 
          override methods in the case of an abstract class.
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          Java
          // abstract class
          abstract class abstract_gfg{ 
            abstract void myMethod();
          }
          
          //extending abstract class
          class MyClass extends abstract_gfg{ 
            
            // overriding abstract method otherwise
            // code will produce error
            void myMethod(){ 
              System.out.println("GeeksforGeeks");
            }
          }
          class GFG{
            public static void main(String[] args) {
              MyClass obj=new MyClass();
              obj.myMethod(); 
            }
          }
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          In the above code, abstract_gfg is an abstract class, and myMethod() is an abstract method. 
          So, we first need to extend the abstract_gfg class that we have done here using MyClass. 
          After extending, we also need to override the abstract method otherwise, the code will produce errors.
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/AzhdbkUaLjk",
        },
        // header
        {
          type: "header",
          value: "4. synchronized",
        },
        // context
        {
          type: "content-start",
          value: `
          synchronized keyword prevents a block of code from executing by multiple threads at once. 
          It is very important for some critical operations. Let us understand by an example –
          `,
        },
        //code
        {
          type: "code",
          value: `
          Java
          import java.io.*;
          
          class Counter{
            int count;
            void increment(){
              count++;
            }
          }
          class GFG{
            public static void main(String[] args) throws InterruptedException {
              Counter c=new Counter();
              
              // Thread 1
              Thread t1=new Thread(new Runnable() {
                @Override
                public void run() {
                  for(int i=1;i<=10000;i++){
                    c.increment();
                  }
                }
              });
              
              // Thread 2
              Thread t2=new Thread(new Runnable() {
                @Override
                public void run() {
                  for(int i=1;i<=10000;i++){
                    c.increment();
                  }
                }
              });
              
              t1.start();
              t2.start();
              t1.join();
              t2.join();
              
              System.out.println(c.count);
            }
          }
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/MAfYOFs_DB4",
        },
        // header
        {
          type: "header",
          value: "5. volatile",
        },
        // context
        {
          type: "content-start",
          value: `
          The volatile keyword is used to make the class thread-safe. That means if a variable is declared as volatile, 
          then that can be modified by multiple threads at the same time without any issues. The volatile keyword is 
          only applicable to a variable. A volatile keyword reduces the chance of memory inconsistency. The value of 
          a volatile variable is always read from the main memory and not from the local thread cache, and it helps 
          to improve thread performance.
          
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Let us understand by an example:
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          import java.io.*;
          import java.util.*;
          
          class Geeks extends Thread{
            boolean running=true;
            @Override
            public void run(){
              while(running){
                System.out.println("GeeksforGeeks");
              }
            }
            public void shutDown(){
              running=false;
            }
          }
          class GFG{
            public static void main(String[] args) {
              Geeks obj = new Geeks();
              obj.start();
              Scanner input = new Scanner(System.in);
              input.nextLine();
              obj.shutDown();
            }
          }
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          Output
          
          In the above code, the program should ideally stop if Return Key/Enter is pressed, 
          but in some machines, it may happen that the variable running is cached, and we are 
          not able to change its value using the shutDown() method. In such a case, the program 
          will execute infinite times and cannot be exited properly. To avoid caching and make it 
          Thread-safe, we can use volatile keywords while declaring the running variable.
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/MAfYOFs_DB4",
        },
        // header
        {
          type: "header",
          value: "6. transient",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This needs prior knowledge of serialization in Java. You can refer to the following article for that:- serialization in java.
          `,
        },
        // content
        {
          type: "content",
          value: `
          The transient keyword may be applied to member variables of a class to indicate that the member 
          variable should not be serialized when the containing class instance is serialized. Serialization 
          is the process of converting an object into a byte stream. When we do not want to serialize the 
          value of a variable, then we declare it as transient. To make it more transparent, let’s take an 
          example of an application where we need to accept UserID and Password. At that moment, we need 
          to declare some variable to take the input and store the data, but as the data is susceptible, 
          so we do not want to keep it stored after the job is done. To achieve this, we can use the transient 
          keyword for variable declaration. That particular variable will not participate in the serialization 
          process, and when we deserialize that, we will receive the default value of the variable.
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Let’s see a sample code for the same –
          `,
        },
        //code
        {
          type: "code",
          value: `
          import java.io.*;
          
          class transient_gfg implements Serializable {
            // normal variable
            int a = 10; 
            
            // Transient variables
            transient String UserID="admin"; 
            transient String Password="tiger123";
            
          }
          class GFG{
            public static void main(String[] args) throws IOException, ClassNotFoundException {
              transient_gfg obj=new transient_gfg();
              
              // printing the value of transient
              // variable before serialization process
              System.out.println("UserID :"+obj.UserID);
              System.out.println("Password: "+obj.Password);
              System.out.println("a = "+obj.a);
              
              // serialization
              FileOutputStream fos = new FileOutputStream("abc.txt");
              ObjectOutputStream oos = new ObjectOutputStream(fos);
              oos.writeObject(obj);
              
              // de-serialization
              FileInputStream fis = new FileInputStream("abc.txt");
              ObjectInputStream ois = new ObjectInputStream(fis);
              transient_gfg output = (transient_gfg)ois.readObject();
              
              // printing the value of transient 
              // variable after de-serialization process
              System.out.println("UserID :"+output.UserID);
              System.out.println("Password: "+output.Password);
              System.out.println("a = "+obj.a);
              
            }
          }
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          As you see from the output, after serialization, the values of UserID and Password are no longer present. 
          However, the value of ‘a’, which is a normal variable, is still present.
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/MAfYOFs_DB4",
        },
        // header
        {
          type: "header",
          value: "7. native",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          The native keyword may be applied to a method to indicate that the method is implemented 
          in a language other than Java. Using this java application can call code written in C, C++, 
          or assembler language. A shared code library or DLL is required in this case. Let’s see an example first –
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          import java.io.*;
          
          class GFG
          {
            // native method
            public native void printMethod (); 
            static
            {
              // The name of DLL file
              System.loadLibrary ("LibraryName");  
            }
            public static void main (String[] args)
            {
              GFG obj = new GFG ();
              obj.printMethod ();
            }
          }
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          In the above code, we have a native method. The method is defined in any other language, 
          loaded by a java application using the shared DLL file. Implementation of the DLL file is out of scope for this article.
          `,
        },
        // header
        {
          type: "header",
          value: "The Static Modifier",
        },
        // context
        {
          type: "content-start",
          value: `
          The static keyword in Java has multiple connotations and can be 
          associated with a field, method, or a class. The decision to declare 
          a field, method, or a class as static is a key step in class design. 
          Anything designated as static is not meant for any dynamic purposes. 
          In Java, we first encounter this modifier with the main method. 
          There is an important reason for main to be static, as we shall see down 
          the line.
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/8gC2cashtIE",
        },
        // header
        {
          type: "header",
          value: "The static Fields",
        },
        // context
        {
          type: "content-start",
          value: `
          The variables that marked static are called class variables. This is in contrast to other non-static 
          member variables, which are called object variables. Object variable means that, 
          when several objects are instantiated, each object gets a distinct copy of the 
          variable and can manipulate them independently.
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          For Example,
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          class A {
            public int intVar = 10;
            public A(){}
          }
          
          A oa1 = new A();
          oa1.intVar = oa1.intVar + 5;
          A oa2 = new A();
          oa2.intVar = oa2.intVar * 5;
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          The objects oa1 and oa2 get a distinct copy of the member intVar. Each of them can be 
          manipulated without having an effect on the other. The member variable intVar of oa1 
          is distinctly different from intVar of oa2. This difference is determined by the objects 
          they are part of. Therefore, non-static variable are object variables. Static variables, 
          on the other hand, are class variables. This means that every object created from the class 
          shares the same variable. An excellent example to understand this is by asking the question: 
          Count objects that are created of a particular class? The solution requires that we must have 
          a counter to keep track of the objects that are created from a specific class by incrementing 
          the counter at each constructor call. The counter variable, therefore, must be shared (not a copy) 
          by all the objects that are created. This counter variable is the right candidate to be declared as static.
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          public class Main {
            public static int counter = 0;
            public Main(){
              counter ++;
              System.out.println("No. of objects = "
              +counter);
            }
            public static void main(String[] args) {
              Main m1 = new Main();
              Main m2 = new Main();
              Main m3 = new Main();
            }
          }
          `,
        },
        //content
        {
          type: "content",
          value: `
          The static field has many other applications, such as creating a global variable. This is particularly 
          useful in creating application-level programming constants. Because static fields are shared among all 
          instances of the class, no separate memory allocation occurs when the class is instantiated. When JVM 
          loads the class definition into memory, static fields of a class get allocated just once. Any number of 
          objects instantiated share this allocated space throughout the life of the program. The non-static fields, 
          on the other hand, have separate existences with each object created and has an independent memory space. 
          This memory is garbage collected with its container as the object gets out of scope. Therefore, any modification 
          of value on the non-static variable remains local to the instantiated object and is not reflected on other 
          instantiation of the same class. Because a static variable is shared, the modification is visible to all instances of the class.
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/PF_NRDK5G-4",
        },
        // header
        {
          type: "header",
          value: "The static Methods",
        },
        // context
        {
          type: "content-start",
          value: `
          Similar to static fields, a method can also be declared as static. Methods typically define the behavior of 
          the class. There are methods whose behavior depends on the state of the object, and there are methods whose 
          behavior does not depend on the state of the object. Consider the trim() method of the String class, which 
          returns a string value after removing leading and trailing whitespaces. This method depends on the state of 
          the String object whose whitespace it must remove. There is another method, such as valueOf (Boolean c), in 
          the String class, which returns the string representation of the Boolean argument. This method is not dependent 
          on the state of the string object while operating on the argument. These types of methods, which are not dependent 
          on the state of the object but somehow related to the class itself, are a right candidate to be declared as the static method.
          Similar to static fields, a static method is also called a class method rather than object method for the same reason.
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/1rdbEUh3R_o",
        },
        // header
        {
          type: "header",
          value: "Accessing static Fields/Methods",
        },
        // context
        {
          type: "content-start",
          value: `
          A static field can be accessed via object reference as well as by the class name whereas non-static fields or 
          methods, even if declared public, cannot be accessed by the class name. Invoking through class name means that 
          we do not have to instantiate an object of the class to invoke the field or method. In the Java API library, 
          all methods in the Math class are declared static. As a result, we can invoke them by the class name as follows.
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          System.out.println("Square root of 8.36 = "
          + Math.sqrt(8.36));
          System.out.println("Ceiling value of 8.36 = "
          + Math.ceil(8.36));
          System.out.println("Floor value of 8.36 = "
          + Math.floor(8.36));
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          Note that there is no need to maintain any object state for the preceding calculation. 
          Therefore, there is absolutely no reason to create an object to request these services.
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          As we can see, the main method in Java is always declared by using a static modifier in the method declaration. 
          This is a necessary because main typically is the first method that is invoked by the JVM; therefore, the interpreter 
          must be allowed to invoke it without instantiating an object from the class that contains main. Because static methods 
          are qualified to be invoked without instantiating a class, we cannot use a this or super reference in a static method. 
          This is obvious, isn’t it? The this and super references have no meaning or do not exist without a class instance. 
          Also, the static fields and methods are accessible within the static method code. The non-static fields are restricted 
          to the class instance, hence they cannot be accessed within the body of the static method.
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          package com.mano.examples;
          public class Main {
            private static int staticIntVar;
            private int intVar;
            public Main(){ }
            public static void staticFunc(){
              // ...
            }
            public void nonStaticFunc(){
              // ...
            }
            public static void main(String[] args) {
              staticIntVar = 10;  // This is OK
              intVar = 10;        // This is not OK, will not compile
              staticFunc();       // This is OK
              nonStaticFunc();    // This is not OK, will not compile
            }
          }
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/t78BTpWtySE",
        },
        // header
        {
          type: "header",
          value: "The static Initializers",
        },
        // context
        {
          type: "content-start",
          value: `
          The static initializers are encompassed within the curly braces preceded by the static keyword. 
          It is like a method definition without a name, arguments, or return type, like an anonymous method. 
          But, why do we need static initializers? In a typical scenario, constructors are used to initialize 
          the non-static fields. They are called each time objects are instantiated. We can use the constructor 
          to initialize the static field of a class, but static initializers have a different purpose. In a situation 
          where we need to initialize fields before the constructor is invoked, such that the value of the field 
          is already available in the field when the constructor is invoked, static initializers are used. The 
          static initializers or the block are executed automatically during class load time. This is particularly 
          useful in allocation of resources that are required throughout the life-cycle of the class. There can be 
          multiple initialization block in a program.
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          public class Main {
            static{
              int CONSTANT_A = 99;
              int CONSTANT_B = 100;
              // ...
            }
            static{
              String NAME_A = "HELLO";
              String NAME_B = "WORLD";
              // ...
            }
            // ...
          }
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          Note that JVM puts some restriction on the size of the block. The limit is 64K; therefore, 
          we must limit our code accordingly. We cannot throw a checked exception from the static block. 
          And, as should be obvious, a this or super reference cannot be used within the static block. 
          The static initializers make testing difficult; therefore, they should be used sparingly.
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/8TlN2W0tI-8",
        },
        // header
        {
          type: "header",
          value: "The Final Modifier",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          The final modifier keyword makes that the programmer cannot 
          change the value anymore. The actual meaning depends on whether 
          it is applied to a class, a variable, or a method. We look at these 
          three cases in more detail.
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/DezKSLQ0-ls",
        },
        // header
        {
          type: "header",
          value: "final Classes",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          A final class cannot have subclasses. An example:
          public final class MathConstants {
            ...
          }
          This skeleton defines a class called MathConstants that is publicly 
          accessible but cannot be subclassed.
          `,
        },
        // header
        {
          type: "header",
          value: "final Variables",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          A final variable cannot be changed once it is initialized, In the above class of mathematical 
          constants you can for example define a numerical approximation of pi by
          
          public final static double PI = 3.141592654;
          
          It is a convention, but not obligatory, to capitalize the name of a final object.
          `,
        },
        // header
        {
          type: "header",
          value: "final Methods",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          A final method cannot be overridden by subclasses. There are two reasons for introducing 
          such a method:
          `,
        },
        //list
        {
          type: "list",
          value: [
            "1. Disallowing subclasses to change the meaning of the method;",
            "2. Increasing efficiency by allowing the compiler to turn calls to the method into inline Java code.",
          ],
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          In the class of mathematical constants you could define a final method to generate a random constant.
          public final static randomNumber() {
            ...
          }
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/r9CMJZ4T__8",
        },
        // header
        {
          type: "header",
          value: "The Abstract Modifier",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          The abstract modifier in Java is applicable for classes and methods but not for variables. It is used to 
          achieve Abstraction, one of the key concepts in Object-Oriented Programming.
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/52frlN8webg",
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
          Even if we don’t know the implementation, we can still declare a method with the abstract modifier, 
          which means that only declaration, not implementation, is available for abstract methods. As a result, 
          abstract methods should be terminated by a semi-colon.
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          public abstract void m1();
          public abstract void m2() {}
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          In the above code snippet, the declaration of method m1() is correct whereas that of m2() is incorrect.
          
          Child class(the class that extends the parent class) is responsible for providing the 
          implementation of parent class abstract methods.
          
          Consider a Vehicle as a real-world application of abstract methods. Varied vehicles have 
          different numbers of wheels, such as a car with four wheels, an auto with three wheels, 
          and so on. Let us create a Vehicle class and define a getNumberOfWheels() method inside it.
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          public abstract class Vehicle {
            public abstract int getNumberOfWheels();
          }
          class Car extends Vehicle {
            @Override
            public int getNumberOfWheels() {
              return 4;
            }
          }
          class Auto extends Vehicle {
            @Override
            public int getNumberOfWheels() {
              return 3;
            }
          }
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          We provide instructions to the child class by declaring method abstract in the parent class 
          that these methods must be implemented by the child class.
          
          Note:
          Abstract methods never talk about implementation. If any modifier talks about implementation, 
          then it forms an illegal combination with the abstract modifier.
          
          The following are various illegal combinations of modifiers for methods with respect to the abstract modifier.
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
          ignore: "true",
          value: `
          If we are not allowed to construct an object for any Java class (due to partial implementation), 
          we must declare such classes with the abstract modifier, i.e., object instantiation is not 
          possible for abstract classes.
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          public abstract class Test {
            public static void main(String[] args) {
              Test t = new Test();
            }
          }
          `,
        },
        // header
        {
          type: "header",
          value: "final and abstract",
        },
        // context
        {
          type: "content-start",
          value: `
          Abstract methods must be overridden in the child class to provide implementation whereas we cannot override 
          final methods. Hence abstract final method forms illegal combination. For final classes, we cannot create 
          child classes whereas, for abstract classes, we have to create child classes to provide the implementation 
          of the abstract methods. Hence, final abstract combination is illegal at the class level too.The final class
          cannot contain abstract methods whereas the abstract class can contain final methods.
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          abstract class P {
            public final void m1() {
            }
          }
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/jVOVLZe7Hj8",
        },
        // header
        {
          type: "header",
          value: "Access Modifiers in Java",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          There are two types of modifiers in Java: access modifiers and non-access modifiers.
          The access modifiers in Java specifies the accessibility or scope of a field, method, 
          constructor, or class. We can change the access level of fields, constructors, methods, 
          and class by applying the access modifier on it.
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          There are four types of Java access modifiers:
          
          Private: The access level of a private modifier is only within the class. It cannot be 
          accessed from outside the class.
          Default: The access level of a default modifier is only within the package. It cannot be 
          accessed from outside the package. If you do not specify any access level, it will be the default.
          Protected: The access level of a protected modifier is within the package and outside the package 
          through child class. If you do not make the child class, it cannot be accessed from outside the package.
          Public: The access level of a public modifier is everywhere. It can be accessed from within the class, 
          outside the class, within the package and outside the package.
          
          There are many non-access modifiers, such as static, abstract, synchronized, native, volatile, transient, etc. 
          Here, we are going to learn the access modifiers only.
          `,
        },
        // header
        {
          type: "header",
          value: "1) Private",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          The private access modifier is accessible only within the class.
          
          Simple example of private access modifier
          
          In this example, we have created two classes A and Simple. A class contains private data member 
          and private method. We are accessing these private members from outside the class, so there is 
          a compile-time error.
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          class A{  
            private int data=40;  
            private void msg(){System.out.println("Hello java");}  
          }  
          
          public class Simple{  
            public static void main(String args[]){  
              A obj=new A();  
              System.out.println(obj.data);//Compile Time Error  
              obj.msg();//Compile Time Error  
            }  
          }  
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          Role of Private Constructor
          If you make any class constructor private, you cannot create the instance of 
          that class from outside the class. For example:
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          class A{  
            private A(){}//private constructor  
            void msg(){System.out.println("Hello java");}  
          }  
          public class Simple{  
            public static void main(String args[]){  
              A obj=new A();//Compile Time Error  
            }  
          } 
          `,
        },
        // header
        {
          type: "header",
          value: "2) Default",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          If you don't use any modifier, it is treated as default by default. The default modifier 
          is accessible only within package. It cannot be accessed from outside the package. It 
          provides more accessibility than private. But, it is more restrictive than protected, and public.
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Example of default access modifier
          
          In this example, we have created two packages pack and mypack. We are accessing the A class from 
          outside its package, since A class is not public, so it cannot be accessed from outside the package.
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          //save by A.java  
          package pack;  
          class A{  
            void msg(){System.out.println("Hello");}  
          }  
          //save by B.java  
          package mypack;  
          import pack.*;  
          class B{  
            public static void main(String args[]){  
              A obj = new A();//Compile Time Error  
              obj.msg();//Compile Time Error  
            }  
          }   
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          In the above example, the scope of class A and its method msg() is default so 
          it cannot be accessed from outside the package.
          `,
        },
        // header
        {
          type: "header",
          value: "3) Protected",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          The protected access modifier is accessible within package and outside the package but through inheritance only.
          The protected access modifier can be applied on the data member, method and constructor. It can't be applied on the class.
          It provides more accessibility than the default modifer.
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Example of protected access modifier
          
          In this example, we have created the two packages pack and mypack. The A class of pack package is public, 
          so can be accessed from outside the package. But msg method of this package is declared as protected, so it can 
          be accessed from outside the class only through inheritance.
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          //save by A.java  
          package pack;  
          public class A{  
            protected void msg(){System.out.println("Hello");}  
          }  
          //save by B.java  
          package mypack;  
          import pack.*;  
          
          class B extends A{  
            public static void main(String args[]){  
              B obj = new B();  
              obj.msg();  
            }  
          }    
          `,
        },
        // header
        {
          type: "header",
          value: "4) Public",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          The public access modifier is accessible everywhere. It has the widest scope among all other modifiers.
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Example of public access modifier
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
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
          Output:Hello
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/H0OetoieSDQ",
        },
        // header
        {
          type: "header",
          value: "Java Access Modifiers with Method Overriding",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          If you are overriding any method, overridden method (i.e. declared in subclass) must not be more restrictive.
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          class A{  
            protected void msg(){System.out.println("Hello java");}  
          }  
          
          public class Simple extends A{  
            void msg(){System.out.println("Hello java");}//C.T.Error  
            public static void main(String args[]){  
              Simple obj=new Simple();  
              obj.msg();  
            }  
          }   
          `,
        },
        //content
        {
          type: "content",
          ignore: "true",
          value: `
          The default modifier is more restrictive than protected. That is why, there is a compile-time error.
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/AhrUxKoZWTk",
        },
        // subtitle
        {
          type: "subtitle",
          value: "Java- Basic Operators",
        },
        // header
        {
          type: "header",
          value: "The Arithmetic Operators",
        },
        // context
        {
          type: "content-start",
          value: `
          These operators involve the mathematical operators that can be used to perform various simple or 
          advanced arithmetic operations on the primitive data types referred to as the operands. These 
          operators consist of various unary and binary operators that can be applied on a single or two 
          operands. Let’s look at the various operators that Java has to provide under the arithmetic operators. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Arithmetic Operators in Java
          
          Now let’s look at each one of the arithmetic operators in Java: 
          `,
        },
        // header
        {
          type: "header",
          value: "1. Addition(+):",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator is a binary operator and is used to add two operands.
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Syntax: 
          
          num1 + num2
          Example: 
          
          num1 = 10, num2 = 20
          sum = num1 + num2 = 30
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          import java.io.*;
          
          class Addition {
            public static void main(String[] args)
            {
              // initializing variables
              int num1 = 10, num2 = 20, sum = 0;
              
              // Displaying num1 and num2
              System.out.println("num1 = " + num1);
              System.out.println("num2 = " + num2);
              
              // adding num1 and num2
              sum = num1 + num2;
              System.out.println("The sum = " + sum);
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
          num1 = 10
          `,
        },
        // header
        {
          type: "header",
          value: "2. Subtraction(-):",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator is a binary operator and is used to subtract two operands.
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Syntax: 
          
          num1 - num2
          Example: 
          
          num1 = 20, num2 = 10
          sub = num1 - num2 = 10
          Java
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          // Java code to illustrate Subtraction operator
          
          import java.io.*;
          
          class Subtraction {
            public static void main(String[] args)
            {
              // initializing variables
              int num1 = 20, num2 = 10, sub = 0;
              
              // Displaying num1 and num2
              System.out.println("num1 = " + num1);
              System.out.println("num2 = " + num2);
              
              // subtracting num1 and num2
              sub = num1 - num2;
              System.out.println("Subtraction = " + sub);
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
          num1 = 20
          num2 = 10
          Subtraction = 10
          
          `,
        },
        // header
        {
          type: "header",
          value: "3. Multiplication(*):",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator is a binary operator and is used to multiply two operands. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Syntax: 
          
          num1 * num2
          Example: 
          
          num1 = 20, num2 = 10
          mult = num1 * num2 = 200
          Java
          
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          // Java code to illustrate Multiplication operator
          
          import java.io.*;
          
          class Multiplication {
            public static void main(String[] args)
            {
              // initializing variables
              int num1 = 20, num2 = 10, mult = 0;
              
              // Displaying num1 and num2
              System.out.println("num1 = " + num1);
              System.out.println("num2 = " + num2);
              
              // Multiplying num1 and num2
              mult = num1 * num2;
              System.out.println("Multiplication = " + mult);
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
          num1 = 20
          num2 = 10
          Multiplication = 200
          `,
        },
        // header
        {
          type: "header",
          value: "4. Division(/):",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This is a binary operator that is used to divide the first operand(dividend) by the second operand(divisor) and give the quotient as a result. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Syntax: 
          
          num1 / num2
          Example: 
          
          num1 = 20, num2 = 10
          div = num1 / num2 = 2
          Java
          
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          // Java code to illustrate Division operator
          
          import java.io.*;
          
          class Division {
            public static void main(String[] args)
            {
              // initializing variables
              int num1 = 20, num2 = 10, div = 0;
              
              // Displaying num1 and num2
              System.out.println("num1 = " + num1);
              System.out.println("num2 = " + num2);
              
              // Dividing num1 and num2
              div = num1 / num2;
              System.out.println("Division = " + div);
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
          num1 = 20
          num2 = 10
          Division = 2
          `,
        },
        // header
        {
          type: "header",
          value: "5. Modulus(%):",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This is a binary operator that is used to return the remainder when the first operand(dividend) is divided by the second operand(divisor). 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Syntax: 
          
          num1 % num2
          Example: 
          
          num1 = 5, num2 = 2
          mod = num1 % num2 = 1
          Java
          
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          // Java code to illustrate Modulus operator
          
          import java.io.*;
          
          class Modulus {
            public static void main(String[] args)
            {
              // initializing variables
              int num1 = 5, num2 = 2, mod = 0;
              
              // Displaying num1 and num2
              System.out.println("num1 = " + num1);
              System.out.println("num2 = " + num2);
              
              // Remaindering num1 and num2
              mod = num1 % num2;
              System.out.println("Remainder = " + mod);
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
          num1 = 5
          num2 = 2
          Remainder = 1
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/_XZ6i7cjdH8",
        },
        // header
        {
          type: "header",
          value: "Java Relational Operators",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          are a bunch of binary operators used to check for relations between two operands, including equality, 
          greater than, less than, etc. They return a boolean result after the comparison and are extensively 
          used in looping statements as well as conditional if-else statements and so on. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          The general format of representing relational operator is: 
          
          Syntax:
          
          variable1 relation_operator variable2
          Let us look at each one of the relational operators in Java:
          
          `,
        },
        // header
        {
          type: "header",
          value: "Operator 1: ‘Equal to’ operator (==)",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator is used to check whether the two given operands are equal or not. The operator returns true 
          if the operand at the left-hand side is equal to the right-hand side, else false. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Syntax: 
          
          var1 == var2
          Illustration:
          
          var1 = "GeeksforGeeks"
          var2 = 20
          var1 == var2 results in false
          Example:
          
          Java
          `,
        },
        //code
        {
          type: "code",
          value: `
          // Java Program to Illustrate equal to Operator
          
          // Importing I/O classes
          import java.io.*;
          
          // Main class
          class GFG {
            
            // Main driver method
            public static void main(String[] args)
            {
              // Initializing variables
              int var1 = 5, var2 = 10, var3 = 5;
              
              // Displaying var1, var2, var3
              System.out.println("Var1 = " + var1);
              System.out.println("Var2 = " + var2);
              System.out.println("Var3 = " + var3);
              
              // Comparing var1 and var2 and
              // printing corresponding boolean value
              System.out.println("var1 == var2: "
              + (var1 == var2));
              
              // Comparing var1 and var3 and
              // printing corresponding boolean value
              System.out.println("var1 == var3: "
              + (var1 == var3));
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
          Var1 = 5
          Var2 = 10
          Var3 = 5
          var1 == var2: false
          var1 == var3: true
          `,
        },
        // header
        {
          type: "header",
          value: "Operator 2: ‘Not equal to’ Operator(!=)",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator is used to check whether the two given operands are equal or not. It functions 
          opposite to that of the equal-to-operator. It returns true if the operand at the left-hand 
          side is not equal to the right-hand side, else false. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Syntax: 
          
          var1 != var2
          Illustration: 
          
          var1 = "GeeksforGeeks"
          var2 = 20
          
          var1 != var2 results in true
          Example:
          
          Java
          `,
        },
        //code
        {
          type: "code",
          value: `
          // Java Program to Illustrate No- equal-to Operator
          
          // Importing I/O classes
          import java.io.*;
          
          // Main class
          class GFG {
            
            // Main driver method
            public static void main(String[] args)
            {
              // Initializing variables
              int var1 = 5, var2 = 10, var3 = 5;
              
              // Displaying var1, var2, var3
              System.out.println("Var1 = " + var1);
              System.out.println("Var2 = " + var2);
              System.out.println("Var3 = " + var3);
              
              // Comparing var1 and var2 and
              // printing corresponding boolean value
              System.out.println("var1 == var2: "
              + (var1 != var2));
              
              // Comparing var1 and var3 and
              // printing corresponding boolean value
              System.out.println("var1 == var3: "
              + (var1 != var3));
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
          Var1 = 5
          Var2 = 10
          Var3 = 5
          var1 == var2: true
          var1 == var3: false
          `,
        },
        // header
        {
          type: "header",
          value: "Operator 3: ‘Greater than’ operator(>)",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This checks whether the first operand is greater than the second operand or not. 
          The operator returns true when the operand at the left-hand side is greater than the right-hand side. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Syntax: 
          
          var1 > var2
          Illustration: 
          
          var1 = 30
          var2 = 20
          
          var1 > var2 results in true
          Example:
          
          Java
          `,
        },
        //code
        {
          type: "code",
          value: `
          // Java code to Illustrate Greater than operator
          
          // Importing I/O classes
          import java.io.*;
          
          // Main class
          class GFG {
            
            // Main driver method
            public static void main(String[] args)
            {
              // Initializing variables
              int var1 = 30, var2 = 20, var3 = 5;
              
              // Displaying var1, var2, var3
              System.out.println("Var1 = " + var1);
              System.out.println("Var2 = " + var2);
              System.out.println("Var3 = " + var3);
              
              // Comparing var1 and var2 and
              // printing corresponding boolean value
              System.out.println("var1 > var2: " + (var1 > var2));
              
              // Comparing var1 and var3 and
              // printing corresponding boolean value
              System.out.println("var3 > var1: "
              + (var3 >= var1));
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
          Var1 = 30
          Var2 = 20
          Var3 = 5
          var1 > var2: true
          var3 > var1: false
          `,
        },
        // header
        {
          type: "header",
          value: "Operator 4: ‘Less than’ Operator(<)",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This checks whether the first operand is less than the second operand or not. The operator returns 
          true when the operand at the left-hand side is less than the right-hand side. It functions opposite 
          to that of the greater-than operator. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Syntax: 
          
          var1 < var2
          Illustration: 
          
          var1 = 10
          var2 = 20
          
          var1 < var2 results in true
          Example:
          
          Java
          `,
        },
        //code
        {
          type: "code",
          value: `
          // Java code to Illustrate Less than Operator
          
          // Importing I/O classes
          import java.io.*;
          
          // Main class
          class GFG {
            
            // Main driver method
            public static void main(String[] args)
            {
              // Initializing variables
              int var1 = 10, var2 = 20, var3 = 5;
              
              // Displaying var1, var2, var3
              System.out.println("Var1 = " + var1);
              System.out.println("Var2 = " + var2);
              System.out.println("Var3 = " + var3);
              
              // Comparing var1 and var2 and
              // printing corresponding boolean value
              System.out.println("var1 < var2: " + (var1 < var2));
              
              // Comparing var2 and var3 and
              // printing corresponding boolean value
              System.out.println("var2 < var3: " + (var2 < var3));
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
          Var1 = 10
          Var2 = 20
          Var3 = 5
          var1 < var2: true
          var2 < var3: false
          `,
        },
        // header
        {
          type: "header",
          value: "Operator 5: Greater than or equal to (>=)",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This checks whether the first operand is greater than or equal to the second operand or not. 
          The operator returns true when the operand at the left-hand side is greater than or equal 
          to the right-hand side. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Syntax: 
          
          var1 >= var2
          Illustration:
          
          var1 = 20
          var2 = 20
          var3 = 10
          
          var1 >= var2 results in true
          var2 >= var3 results in true
          Example:
          
          Java
          
          `,
        },
        //code
        {
          type: "code",
          value: `
          // Java Program to Illustrate Greater than or equal to
          // Operator
          
          // Importing I/O classes
          import java.io.*;
          
          // Main class
          class GFG {
            
            // Main driver method
            public static void main(String[] args)
            {
              // Initializing variables
              int var1 = 20, var2 = 20, var3 = 10;
              
              // Displaying var1, var2, var3
              System.out.println("Var1 = " + var1);
              System.out.println("Var2 = " + var2);
              System.out.println("Var3 = " + var3);
              
              // Comparing var1 and var2 and
              // printing corresponding boolean value
              System.out.println("var1 >= var2: "
              + (var1 >= var2));
              
              // Comparing var2 and var3 and
              // printing corresponding boolean value
              System.out.println("var2 >= var3: "
              + (var3 >= var1));
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
          Var1 = 20
          Var2 = 20
          Var3 = 10
          var1 >= var2: true
          var2 >= var3: false
          
          `,
        },
        // header
        {
          type: "header",
          value: "Operator 6: Less than or equal to (<=)",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This checks whether the first operand is less than or equal to the second operand or not. 
          The operator returns true when the operand at the left-hand side is less than or equal 
          to the right-hand side. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Syntax: 
          
          var1 <= var2
          Illustration: 
          
          var1 = 10
          var2 = 10
          var3 = 9
          
          var1 <= var2 results in true
          var2 <= var3 results in false
          Example:
          
          Java
          `,
        },
        //code
        {
          type: "code",
          value: `
          /// Java Program to Illustrate Less
          // than or equal to operator
          
          // Importing I/O classes
          import java.io.*;
          
          // Main class
          class GFG {
            
            // Main driver method
            public static void main(String[] args)
            {
              // Initializing variables
              int var1 = 10, var2 = 10, var3 = 9;
              
              // Displaying var1, var2, var3
              System.out.println("Var1 = " + var1);
              System.out.println("Var2 = " + var2);
              System.out.println("Var3 = " + var3);
              
              // Comparing var1 and var2 and
              // printing corresponding boolean value
              System.out.println("var1 <= var2: "
              + (var1 <= var2));
              
              // Comparing var2 and var3 and
              // printing corresponding boolean value
              System.out.println("var2 <= var3: "
              + (var2 <= var3));
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
          Var1 = 10
          Var2 = 10
          Var3 = 9
          var1 <= var2: true
          var2 <= var3: false
          `,
        },
        // header
        {
          type: "header",
          value: "Bitwise Operators",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          Bitwise operators are used to performing the manipulation of individual bits of a number. 
          They can be used with any integral type (char, short, int, etc.). They are used when performing 
          update and query operations of the Binary indexed trees.
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Now let’s look at each one of the bitwise operators in Java:  
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/EDepDr70dqg",
        },
        // header
        {
          type: "header",
          value: "1. Bitwise OR (|)",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator is a binary operator, denoted by ‘|’. It returns bit 
          by bit OR of input values, i.e., if either of the bits is 1, it gives 1, else it shows 0. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Example:
          
          a = 5 = 0101 (In Binary)
          b = 7 = 0111 (In Binary)
          
          Bitwise OR Operation of 5 and 7
          0101
          | 0111
          ________
          0111  = 7 (In decimal) 
          
          `,
        },
        // header
        {
          type: "header",
          value: "2. Bitwise AND (&)",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator is a binary operator, denoted by ‘&.’ It returns bit by bit AND of input 
          values, i.e., if both bits are 1, it gives 1, else it shows 0. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Example:
          
          a = 5 = 0101 (In Binary)
          b = 7 = 0111 (In Binary)
          
          Bitwise AND Operation of 5 and 7
          0101
          & 0111
          ________
          0101  = 5 (In decimal) 
          
          `,
        },
        // header
        {
          type: "header",
          value: "3. Bitwise XOR (^)",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator is a binary operator, denoted by ‘^.’ It returns bit by bit XOR of input values, 
          i.e., if corresponding bits are different, it gives 1, else it shows 0. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Example:
          
          a = 5 = 0101 (In Binary)
          b = 7 = 0111 (In Binary)
          
          Bitwise XOR Operation of 5 and 7
          0101
          ^ 0111
          ________
          0010  = 2 (In decimal) 
          
          `,
        },
        // header
        {
          type: "header",
          value: "4. Bitwise Complement (~)",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator is a unary operator, denoted by ‘~.’ It returns the one’s complement representation 
          of the input value, i.e., with all bits inverted, which means it makes every 0 to 1, and every 1 to 0.  
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Example:
          
          a = 5 = 0101 (In Binary)
          
          Bitwise Complement Operation of 5
          
          ~ 0101
          ________
          1010  = 10 (In decimal) 
          
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/qn8uPZLr0hA",
        },
        // header
        {
          type: "header",
          value: "Java Logical Operators",
        },
        // context
        {
          type: "content-start",
          value: `
          Logical operators are used to performing logical “AND”, “OR” and “NOT” operations, i.e. 
          the function similar to AND gate and OR gate in digital electronics. They are used to 
          combine two or more conditions/constraints or to complement the evaluation of the original 
          condition under particular consideration. One thing to keep in mind is the second condition 
          is not evaluated if the first one is false, i.e. it has a short-circuiting effect. Used extensively 
          to test for several conditions for making a decision.
          `,
        },
        //list
        {
          type: "list",
          value: [
            "1. AND Operator ( && ) – if( a && b ) [if true execute else don’t]",
            "2. OR Operator ( || ) – if( a || b) [if one of them is true execute else don’t]",
            "3. NOT Operator ( ! ) – !(a<b) [returns false if a is smaller than b]",
          ],
        },
        // header
        {
          type: "header",
          value: "1. Logical ‘AND’ Operator (&&) ",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator returns true when both the conditions under consideration are 
          satisfied or are true. If even one of the two yields false, the operator results 
          false. In Simple terms, cond1 && cond2 returns true when both cond1 and cond2 are 
          true (i.e. non-zero).  
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Syntax:
          
          condition1 && condition2
          Illustration:
          
          a = 10, b = 20, c = 20
          
          condition1: a < b
          condition2: b == c
          
          if(condition1 && condition2)
          d = a + b + c
          
          // Since both the conditions are true
          d = 50.
          Example
          
          Java
          `,
        },
        //code
        {
          type: "code",
          value: `
          // Java code to illustrate
          // logical AND operator
          
          import java.io.*;
          
          class Logical {
            public static void main(String[] args)
            {
              // initializing variables
              int a = 10, b = 20, c = 20, d = 0;
              
              // Displaying a, b, c
              System.out.println("Var1 = " + a);
              System.out.println("Var2 = " + b);
              System.out.println("Var3 = " + c);
              
              // using logical AND to verify
              // two constraints
              if ((a < b) && (b == c)) {
                d = a + b + c;
                System.out.println("The sum is: " + d);
              }
              else
              System.out.println("False conditions");
            }
          }
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Output:
          Var1 = 10
          Var2 = 20
          Var3 = 20
          The sum is: 50
          
          `,
        },
        // header
        {
          type: "header",
          value: "2.  Logical ‘OR’ Operator (||)",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator returns true when one of the two conditions under consideration is 
          satisfied or is true. If even one of the two yields true, the operator results true. 
          To make the result false, both the constraints need to return false.   
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Syntax:
          
          condition1 || condition2
          Example:
          
          a = 10, b = 20, c = 20
          
          condition1: a < b
          condition2: b > c
          
          if(condition1 || condition2)
          d = a + b + c
          
          // Since one of the condition is true
          d = 50.
          Java
          
          `,
        },
        //code
        {
          type: "code",
          value: `
          // Java code to illustrate
          // logical OR operator
          
          import java.io.*;
          
          class Logical {
            public static void main(String[] args)
            {
              // initializing variables
              int a = 10, b = 1, c = 10, d = 30;
              
              // Displaying a, b, c
              System.out.println("Var1 = " + a);
              System.out.println("Var2 = " + b);
              System.out.println("Var3 = " + c);
              System.out.println("Var4 = " + d);
              
              // using logical OR to verify
              // two constraints
              if (a > b || c == d)
              System.out.println("One or both + the conditions are true");
              else
              System.out.println("Both the + conditions are false");
            }
          }
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Output:
          Var1 = 10
          Var2 = 1
          Var3 = 10
          Var4 = 30
          One or both the conditions are true
          
          
          `,
        },
        // header
        {
          type: "header",
          value: "3. Logical ‘NOT’ Operator (!)",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          Unlike the previous two, this is a unary operator and returns true when the condition 
          under consideration is not satisfied or is a false condition. Basically, if the condition 
          is false, the operation returns true and when the condition is true, the operation returns false.  
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Syntax:
          
          !(condition)
          Example:
          
          a = 10, b = 20
          
          !(a<b) // returns false
          !(a>b) // returns true
          Java
          
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          // Java code to illustrate
          // logical NOT operator
          import java.io.*;
          
          class Logical {
            public static void main(String[] args)
            {
              // initializing variables
              int a = 10, b = 1;
              
              // Displaying a, b, c
              System.out.println("Var1 = " + a);
              System.out.println("Var2 = " + b);
              
              // Using logical NOT operator
              System.out.println("!(a < b) = " + !(a < b));
              System.out.println("!(a > b) = " + !(a > b));
            }
          }
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Output:
          Var1 = 10
          Var2 = 1
          !(a < b) = true
          !(a > b) = false
          
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/p0UCTkqU2mg",
        },
        // header
        {
          type: "header",
          value: "Java Assignment Operators",
        },
        // context
        {
          type: "content-start",
          value: `
          These operators are used to assign values to a variable. The left side operand 
          of the assignment operator is a variable, and the right side operand of the assignment 
          operator is a value. The value on the right side must be of the same data type of the 
          operand on the left side. Otherwise, the compiler will raise an error. This means that 
          the assignment operators have right to left associativity, i.e., the value given on the 
          right-hand side of the operator is assigned to the variable on the left. Therefore, the 
          right-hand side value must be declared before using it or should be a constant.  
          `,
        },
        
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          The general format of the assignment operator is, 
          
          variable operator value;
          Types of Assignment Operators in Java
          The Assignment Operator is generally of two types. They are:
          
          `,
        },
        // header
        {
          type: "header",
          value: "1. Simple Assignment Operator:",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          The Simple Assignment Operator is used with the “=” sign where the 
          left side consists of the operand and the right side consists of a 
          value. The value of the right side must be of the same data type that 
          has been defined on the left side.
          `,
        },
        // header
        {
          type: "header",
          value: "2. Compound Assignment Operator:",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          The Compound Operator is used where +,-,*, and / is used along with the = operator.
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: `
          Let’s look at each of the assignment operators and how they operate: 
          
          `,
        },
        // header
        {
          type: "header",
          value: "1. (=) operator: ",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This is the most straightforward assignment operator, which is used to assign the 
          value on the right to the variable on the left. This is the basic definition of an 
          assignment operator and how it functions.
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Syntax: 
          
          num1 = num2;
          Example: 
          
          a = 10;
          ch = 'y';
          Java
          
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          // Java code to illustrate "=" operator
          
          import java.io.*;
          
          class Assignment {
            public static void main(String[] args)
            {
              // Declaring variables
              int num;
              String name;
              
              // Assigning values
              num = 10;
              name = "GeeksforGeeks";
              
              // Displaying the assigned values
              System.out.println("num is assigned: " + num);
              System.out.println("name is assigned: " + name);
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
          num is assigned: 10
          name is assigned: GeeksforGeeks
          
          `,
        },
        // header
        {
          type: "header",
          value: "2. (+=) operator: ",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator is a compound of ‘+’ and ‘=’ operators. It operates by adding the 
          current value of the variable on the left to the value on the right and then 
          assigning the result to the operand on the left. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Syntax: 
          
          num1 += num2;
          Example: 
          
          a += 10
          
          This means,
          a = a + 10
          Java
          
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          // Java code to illustrate "+="
          
          import java.io.*;
          
          class Assignment {
            public static void main(String[] args)
            {
              
              // Declaring variables
              int num1 = 10, num2 = 20;
              
              System.out.println("num1 = " + num1);
              System.out.println("num2 = " + num2);
              
              // Adding & Assigning values
              num1 += num2;
              
              // Displaying the assigned values
              System.out.println("num1 = " + num1);
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
          num1 = 10
          num2 = 20
          num1 = 30
          
          `,
        },
        // header
        {
          type: "header",
          value: "3. (-=) operator: ",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator is a compound of ‘-‘ and ‘=’ operators. It operates by subtracting 
          the variable’s value on the right from the current value of the variable on the 
          left and then assigning the result to the operand on the left. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Syntax: 
          
          num1 -= num2;
          Example: 
          
          a -= 10
          
          This means,
          a = a - 10
          Java
          
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          // Java code to illustrate "-="
          
          import java.io.*;
          
          class Assignment {
            public static void main(String[] args)
            {
              
              // Declaring variables
              int num1 = 10, num2 = 20;
              
              System.out.println("num1 = " + num1);
              System.out.println("num2 = " + num2);
              
              // Subtracting & Assigning values
              num1 -= num2;
              
              // Displaying the assigned values
              System.out.println("num1 = " + num1);
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
          num1 = 10
          num2 = 20
          num1 = -10
          
          `,
        },
        // header
        {
          type: "header",
          value: "4. (*=) operator:",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator is a compound of ‘*’ and ‘=’ operators. It operates by multiplying the 
          current value of the variable on the left to the value on the right and then assigning 
          the result to the operand on the left.
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Syntax: 
          
          num1 *= num2;
          Example: 
          
          a *= 10
          This means,
          a = a * 10 
          Java
          
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          // Java code to illustrate "*="
          
          import java.io.*;
          
          class Assignment {
            public static void main(String[] args)
            {
              
              // Declaring variables
              int num1 = 10, num2 = 20;
              
              System.out.println("num1 = " + num1);
              System.out.println("num2 = " + num2);
              
              // Multiplying & Assigning values
              num1 *= num2;
              
              // Displaying the assigned values
              System.out.println("num1 = " + num1);
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
          num1 = 10
          num2 = 20
          num1 = 200
          
          `,
        },
        // header
        {
          type: "header",
          value: "5. (/=) operator: ",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator is a compound of ‘/’ and ‘=’ operators. It operates by dividing the current 
          value of the variable on the left by the value on the right and then assigning the quotient 
          to the operand on the left. 
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Syntax: 
          
          num1 /= num2;
          Example: 
          
          a /= 10
          This means,
          a = a / 10
          Java
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          // Java code to illustrate "/="
          
          import java.io.*;
          
          class Assignment {
            public static void main(String[] args)
            {
              
              // Declaring variables
              int num1 = 20, num2 = 10;
              
              System.out.println("num1 = " + num1);
              System.out.println("num2 = " + num2);
              
              // Dividing & Assigning values
              num1 /= num2;
              
              // Displaying the assigned values
              System.out.println("num1 = " + num1);
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
          num1 = 20
          num2 = 10
          num1 = 2
          
          `,
        },
        // header
        {
          type: "header",
          value: "6. (%=) operator: ",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          This operator is a compound of ‘%’ and ‘=’ operators. It operates by 
          dividing the current value of the variable on the left by the value on 
          the right and then assigning the remainder to the operand on the left.  
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Syntax: 
          
          num1 %= num2;
          Example: 
          
          a %= 3
          
          This means,
          a = a % 3
          Java
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          // Java code to illustrate "%="
          
          import java.io.*;
          
          class Assignment {
            public static void main(String[] args)
            {
              
              // Declaring variables
              int num1 = 5, num2 = 3;
              
              System.out.println("num1 = " + num1);
              System.out.println("num2 = " + num2);
              
              // Moduling & Assigning values
              num1 %= num2;
              
              // Displaying the assigned values
              System.out.println("num1 = " + num1);
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
          num1 = 5
          num2 = 3
          num1 = 2
          
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/QSsjB1tMPhA",
        },
        // subtitle
        {
          type: "subtitle",
          value: "Miscellaneous Operators",
        },
        // header
        {
          type: "header",
          value: "Ternary Operators",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          A ternary operator can be seen as an alternative to the if-else statement. It works the 
          same as an if-else statement. It evaluates a test condition and executes the block of code accordingly.
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Here, the condition is evaluated and
          
          If the condition is true, expression1 is executed.
          If the condition is false, expression2 is executed.
          
          Syntax
          condition ? expression1 : expression2;
          Example
          
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          public class Main 
          {
            public static void main(String[] args) 
            {
              
              int marks = 56;
              String result = (marks > 50) ? "passed" : "failed";
              
              System.out.println("Hey Prepster You " + result + " the exam.");
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
          Hey, Prepster you passed the exam.
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/1V9bIqf6XfU",
        },
        // header
        {
          type: "header",
          value: "Unary Operators",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          Unary operators are the category of operators that require just a single operand to 
          perform operations on. These are as follows:
          `,
        },
        // content
        {
          type: "content",
          ignore: "true",
          value: ` 
          
          Operator	Functionality	Syntax
          +	Unary plus operator	+a
          –	Unary minus operator	-a
          ++	Increment	            a++
          /	Decrement	            a–
          Example
          
          `,
        },
        //code
        {
          type: "code",
          ignore: "true",
          value: `
          public class Main 
          {
            public static void main(String[] args) 
            {
              
              int num = +50;
              System.out.println(num); 
              
              num --; 
              System.out.println(num); 
              
              num ++; 
              System.out.println(num); 
              
              num = - num;
              System.out.println(num); 
              
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
          50
          
          49
          
          50
          
          -50
          `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/-h3tSiSJleI",
        },
        // header
        {
          type: "header",
          value: "Precedence of Java Operators",
        },
        // context
        {
          type: "content-start",
          ignore: "true",
          value: `
          Operator precedence determines the grouping of terms in an expression. This affects how an 
          expression is evaluated. Certain operators have higher precedence than others; for example, 
          the multiplication operator has higher precedence than the addition operator −
          
          For example, x = 7 + 3 * 2; here x is assigned 13, not 20 because operator * has higher 
          precedence than +, so it first gets multiplied with 3 * 2 and then adds into 7. Here, 
          operators with the highest precedence appear at the top of the table, those with the lowest 
          appear at the bottom. Within an expression, higher precedence operators will be evaluated first.
          
          `,
        },
        //image
        {
          type: "image",
          value: `chapter_1_image_1 `,
        },
        // link video
        {
          type: "video",
          value: "https://youtube.com/embed/lNb3-8eyv0o",
        },
      ];
    }
    