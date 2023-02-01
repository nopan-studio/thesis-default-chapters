[
  // title
  {
    type: "title",
    value: "Chapter 7",
  },
  // subtitle
  {
    type: "subtitle",
    value: "Java - Exceptions",
  },
  // context
  {
    type: "content-start",
    value: `
      An exception (or exceptional event) is a problem that arises during the execution of a program. When an Exception occurs the normal flow of the program is disrupted and the program/Application terminates abnormally, which is not recommended, therefore, these exceptions are to be handled.
    `,
  },
  // list
  {
    type: "list",
    value: [
      "An exception can occur for many different reasons. Following are some scenarios where an exception occurs.",
      "A user has entered an invalid data.",
      "A file that needs to be opened cannot be found.",
    ],
  },
  // content
  {
    type: "content",
    value: `
      A network connection has been lost in the middle of communications or the JVM has run out of memory.

      Some of these exceptions are caused by user error, others by programmer error, and others by physical resources that have failed in some manner.
    `,
  },
  // context
  {
    type: "content",
    ignore: "true",
    value: `
      Based on these, we have three categories of Exceptions. You need to understand them to know how exception handling works in Java.
    `,
  },
  // content
  {
    type: "content",
    value: `
      Checked exceptions − A checked exception is an exception that is checked (notified) by the compiler at compilation-time, these are also called as compile time exceptions. These exceptions cannot simply be ignored, the programmer should take care of (handle) these exceptions.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      For example, if you use FileReader class in your program to read data from a file, if the file specified in its constructor doesn't exist, then a FileNotFoundException occurs, and the compiler prompts the programmer to handle the exception.

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      import java.io.File;
      import java.io.FileReader;
       
      public class FilenotFound_Demo {
       
         public static void main(String args[]) {		
            File file = new File("E://file.txt");
            FileReader fr = new FileReader(file); 
         }
      }
    `,
  },
  // content
  {
    type: "content",
    value: `
      If you try to compile the above program, you will get the following exceptions.

      Output
      C:\\>javac FilenotFound_Demo.java
      FilenotFound_Demo.java:8: error: unreported exception FileNotFoundException; must be caught or declared to be thrown
            FileReader fr = new FileReader(file);
                            ^
      1 error
    `,
  },
  // content
  {
    type: "content",
    value: `
      Note − Since the methods read() and close() of FileReader class throws IOException, you can observe that the compiler notifies to handle IOException, along with FileNotFoundException.
    `,
  },
  // content
  {
    type: "content",
    value: `
      Unchecked exceptions − An unchecked exception is an exception that occurs at the time of execution. These are also called as Runtime Exceptions. These include programming bugs, such as logic errors or improper use of an API. Runtime exceptions are ignored at the time of compilation
    `
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      For example, if you have declared an array of size 5 in your program, and trying to call the 6th element of the array then an ArrayIndexOutOfBoundsExceptionexception occurs.

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      public class Unchecked_Demo {
 
         public static void main(String args[]) {
            int num[] = {1, 2, 3, 4};
            System.out.println(num[5]);
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      If you compile and execute the above program, you will get the following exception.

      Output
      Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 5
        at Exceptions.Unchecked_Demo.main(Unchecked_Demo.java:8)
    `,
  },
  // context
  {
    type: "content",
    value: `
      Errors − These are not exceptions at all, but problems that arise beyond the control of the user or the programmer. Errors are typically ignored in your code because you can rarely do anything about an error. For example, if a stack overflow occurs, an error will arise. They are also ignored at the time of compilation.
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/xNVlq9IEBEg",
  },
  // header
  {
    type: "header",
    value: "Exception Hierarchy",
  },
  // content
  {
    type: "content-start",
    value: `
      All exception classes are subtypes of the java.lang.Exception class. The exception class is a subclass of the Throwable class. Other than the exception class there is another subclass called Error which is derived from the Throwable class.

      Errors are abnormal conditions that happen in case of severe failures, these are not handled by the Java programs. Errors are generated to indicate errors generated by the runtime environment. Example: JVM is out of memory. Normally, programs cannot recover from errors.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      The Exception class has two main subclasses: IOException class and RuntimeException Class.
    `,
  },
  // image
  {
    type: "image",
    value: "Chapter_7_image_1.png",
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Following is a list of most common checked and unchecked Java's Built-in Exceptions.
    `,
  },
  // header
  {
    type: "header",
    value: "Exceptions Methods",
  },
  // context
  {
    type: "content-start",
    ignore: "true",
    value: `
      Following is the list of important methods available in the Throwable class.
    `,
  },
  // table image
  {
    type: "image",
    value: "Chapter_7_image_1",
  },
  // header
  {
    type: "header",
    value: "Catching Exceptions",
  },
  // content
  {
    type: "content-start",
    value: `
      A method catches an exception using a combination of the try and catch keywords. A try/catch block is placed around the code that might generate an exception. Code within a try/catch block is referred to as protected code, and the syntax for using try/catch looks like the following −

      Syntax
    `,
  },
  // code
  {
    type: "code",
    value: `
      try {
         // Protected code
      } catch (ExceptionName e1) {
         // Catch block
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      The code which is prone to exceptions is placed in the try block. When an exception occurs, that exception occurred is handled by catch block associated with it. Every try block should be immediately followed either by a catch block or finally block.

      A catch statement involves declaring the type of exception you are trying to catch. If an exception occurs in protected code, the catch block (or blocks) that follows the try is checked. If the type of exception that occurred is listed in a catch block, the exception is passed to the catch block much as an argument is passed into a method parameter.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Example
      The following is an array declared with 2 elements. Then the code tries to access the 3rd element of the array which throws an exception.
    `,
  },
  // code
  {
    type: "code",
    value: `
      // File Name : ExcepTest.java
      import java.io.*;
       
      public class ExcepTest {
       
         public static void main(String args[]) {
            try {
               int a[] = new int[2];
               System.out.println("Access element three :" + a[3]);
            } catch (ArrayIndexOutOfBoundsException e) {
               System.out.println("Exception thrown  :" + e);
            }
            System.out.println("Out of the block");
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      This will produce the following result −

      Output
      Exception thrown  :java.lang.ArrayIndexOutOfBoundsException: 3
      Out of the block
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/ceGnVDrMy1A",
  },
  // header
  {
    type: "header",
    value: "Multiple Catch Blocks",
  },
  // content
  {
    type: "content-start",
    value: `
      A try block can be followed by multiple catch blocks. The syntax for multiple catch blocks looks like the following −

      Syntax
    `,
  },
  // code
  {
    type: "code",
    value: `
      try {
         // Protected code
      } catch (ExceptionType1 e1) {
         // Catch block
      } catch (ExceptionType2 e2) {
         // Catch block
      } catch (ExceptionType3 e3) {
         // Catch block
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      The previous statements demonstrate three catch blocks, but you can have any number of them after a single try. If an exception occurs in the protected code, the exception is thrown to the first catch block in the list. If the data type of the exception thrown matches ExceptionType1, it gets caught there. If not, the exception passes down to the second catch statement. This continues until the exception either is caught or falls through all catches, in which case the current method stops execution and the exception is thrown down to the previous method on the call stack.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Example
      Here is code segment showing how to use multiple try/catch statements.
    `,
  },
  // code
  {
    type: "content",
    value: `
      try {
         file = new FileInputStream(fileName);
         x = (byte) file.read();
      } catch (IOException i) {
         i.printStackTrace();
         return -1;
      } catch (FileNotFoundException f) // Not valid! {
         f.printStackTrace();
         return -1;
      }
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/VSGft4ppr3U",
  },
  // header
  {
    type: "header",
    value: "Catching Multiple Type of Exceptions",
  },
  // content
  {
    type: "content-start",
    value: `
      Since Java 7, you can handle more than one exception using a single catch block, this feature simplifies the code. Here is how you would do it −
    `,
  },
  // code
  {
    type: "code",
    ignore: "true",
    value: `
      catch (IOException|FileNotFoundException ex) {
       logger.log(ex);
        throw ex;

    `,
  },
  // header
  {
    type: "header",
    value: "The Throws/Throw Keywords",
  },
  // content
  {
    type: "content-start",
    value: `
      If a method does not handle a checked exception, the method must declare it using the throws keyword. The throws keyword appears at the end of a method's signature.

      You can throw an exception, either a newly instantiated one or an exception that you just caught, by using the throw keyword.

      Try to understand the difference between throws and throw keywords, throws is used to postpone the handling of a checked exception and throw is used to invoke an exception explicitly.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      The following method declares that it throws a RemoteException −Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      import java.io.*;
      public class className {
       
         public void deposit(double amount) throws RemoteException {
            // Method implementation
            throw new RemoteException();
         }
         // Remainder of class definition
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      A method can declare that it throws more than one exception, in which case the exceptions are declared in a list separated by commas. For example, the following method declares that it throws a RemoteException and an InsufficientFundsException −
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
    value: `
      import java.io.*;
      public class className {
       
         public void withdraw(double amount) throws RemoteException, 
            InsufficientFundsException {
            // Method implementation
         }
         // Remainder of class definition
      }
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/0N-DhLQ5pxs",
  },
  // header
  {
    type: "header",
    value: "The Finally Block",
  },
  // content
  {
    type: "content-start",
    value: `
      The finally block follows a try block or a catch block. A finally block of code always executes, irrespective of occurrence of an Exception.

      Using a finally block allows you to run any cleanup-type statements that you want to execute, no matter what happens in the protected code.

    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      A finally block appears at the end of the catch blocks and has the following syntax −

      Syntax
    `,
  },
  // code
  {
    type: "code",
    value: `
      try {
       // Protected code
    } catch (ExceptionType1 e1) {
       // Catch block
    } catch (ExceptionType2 e2) {
       // Catch block
    } catch (ExceptionType3 e3) {
       // Catch block
    }finally {
       // The finally block always executes.
    }
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
    value: `
      public class ExcepTest {

       public static void main(String args[]) {
          int a[] = new int[2];
          try {
             System.out.println("Access element three :" + a[3]);
          } catch (ArrayIndexOutOfBoundsException e) {
             System.out.println("Exception thrown  :" + e);
          }finally {
             a[0] = 6;
             System.out.println("First element value: " + a[0]);
             System.out.println("The finally statement is executed");
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
      This will produce the following result −

      Output
      Exception thrown  :java.lang.ArrayIndexOutOfBoundsException: 3
      First element value: 6
      The finally statement is executed
    `,
  },
  // content
  {
    type: "content",
    value: `
      Note the following −
    `, 
  },
  // list
  {
    type: "list",
    value: [
      "A catch clause cannot exist without a try statement.",
      "It is not compulsory to have finally clauses whenever a try/catch block is present.",
      "The try block cannot be present without either catch clause or finally clause.",
      "Any code cannot be present in between the try, catch, finally blocks.",
    ],
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/bLGzEqd-ELM",
  },
  // header
  {
    type: "header",
    value: "The try-with-resources",
  },
  // content
  {
    type: "content-start",
    value: `
      Generally, when we use any resources like streams, connections, etc. we have to close them explicitly using finally block. In the following program, we are reading data from a file using FileReader and we are closing it using finally block.
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
    value: `
      import java.io.File;
      import java.io.FileReader;
      import java.io.IOException;
       
      public class ReadData_Demo {
       
         public static void main(String args[]) {
            FileReader fr = null;		
            try {
               File file = new File("file.txt");
               fr = new FileReader(file); char [] a = new char[50];
               fr.read(a);   // reads the content to the array
               for(char c : a)
               System.out.print(c);   // prints the characters one by one
            } catch (IOException e) {
               e.printStackTrace();
            }finally {
               try {
                  fr.close();
               } catch (IOException ex) {		
                  ex.printStackTrace();
               }
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
      try-with-resources, also referred as automatic resource management, is a new exception handling mechanism that was introduced in Java 7, which automatically closes the resources used within the try catch block.

      To use this statement, you simply need to declare the required resources within the parenthesis, and the created resource will be closed automatically at the end of the block. Following is the syntax of try-with-resources statement.

      Syntax
    `,
  },
  // code
  {
    type: "code",
    ignore: "true",
    value: `
      try(FileReader fr = new FileReader("file path")) {
         // use the resource
         } catch () {
            // body of catch 
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Following is the program that reads the data in a file using try-with-resources statement.

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      import java.io.FileReader;
      import java.io.IOException;
       
      public class Try_withDemo {
       
         public static void main(String args[]) {
            try(FileReader fr = new FileReader("E://file.txt")) {
               char [] a = new char[50];
               fr.read(a);   // reads the contentto the array
               for(char c : a)
               System.out.print(c);   // prints the characters one by one
            } catch (IOException e) {
               e.printStackTrace();
            }
         }
      }
    `,
  },
  // context
  {
    type: "content",
    ignore: "true",
    value: `
      Following points are to be kept in mind while working with try-with-resources statement.
    `,
  },
  // list
  {
    type: "list",
    value: [
      "To use a class with try-with-resources statement it should implement AutoCloseable interface and the close() method of it gets invoked automatically at runtime.",
      "You can declare more than one class in try-with-resources statement.",
      "While you declare multiple classes in the try block of try-with-resources statement these classes are closed in reverse order.",
      "Except the declaration of resources within the parenthesis everything is the same as normal try/catch block of a try block.",
      "The resource declared in try gets instantiated just before the start of the try-block.",
      "The resource declared at the try block is implicitly declared as final.",
    ],
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/iVdTCqhTUFA",
  },
  // header
  {
    type: "header",
    value: "User-defined Exceptions",
  },
  //content
  {
    type: "content",
    ignore: "true",
    value: `
      You can create your own exceptions in Java. Keep the following points in mind when writing your own exception classes −
    `,
  },
  // list
  {
    type: "list",
    value: [
      "All exceptions must be a child of Throwable.",
      "If you want to write a checked exception that is automatically enforced by the Handle or Declare Rule, you need to extend the Exception class.",
      "If you want to write a runtime exception, you need to extend the RuntimeException class.",
    ],
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      We can define our own Exception class as below −
    `,
  },
  // code
  {
    type: "code",
    ignore: "true",
    value: `
      class MyException extends Exception {
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      You just need to extend the predefined Exception class to create your own Exception. These are considered to be checked exceptions. The following InsufficientFundsException class is a user-defined exception that extends the Exception class, making it a checked exception. An exception class is like any other class, containing useful fields and methods.

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      // File Name InsufficientFundsException.java
      import java.io.*;
       
      public class InsufficientFundsException extends Exception {
         private double amount;
         
         public InsufficientFundsException(double amount) {
            this.amount = amount;
         }
         
         public double getAmount() {
            return amount;
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      To demonstrate using our user-defined exception, the following CheckingAccount class contains a withdraw() method that throws an InsufficientFundsException.
    `,
  },
  // code
  {
    type: "code",
    value: `
      // File Name CheckingAccount.java
      import java.io.*;
       
      public class CheckingAccount {
         private double balance;
         private int number;
         
         public CheckingAccount(int number) {
            this.number = number;
         }
         
         public void deposit(double amount) {
            balance += amount;
         }
         
         public void withdraw(double amount) throws InsufficientFundsException {
            if(amount <= balance) {
               balance -= amount;
            }else {
               double needs = amount - balance;
               throw new InsufficientFundsException(needs);
            }
         }
         
         public double getBalance() {
            return balance;
         }
         
         public int getNumber() {
            return number;
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      The following BankDemo program demonstrates invoking the deposit() and withdraw() methods of CheckingAccount.
    `,
  },
  // code
  {
    type: "code",
    value: `
      // File Name BankDemo.java
      public class BankDemo {
       
         public static void main(String [] args) {
            CheckingAccount c = new CheckingAccount(101);
            System.out.println("Depositing $500...");
            c.deposit(500.00);
            
            try {
               System.out.println("\nWithdrawing $100...");
               c.withdraw(100.00);
               System.out.println("\nWithdrawing $600...");
               c.withdraw(600.00);
            } catch (InsufficientFundsException e) {
               System.out.println("Sorry, but you are short $" + e.getAmount());
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
      Compile all the above three files and run BankDemo. This will produce the following result −

      Output
      Depositing $500...

      Withdrawing $100...

      Withdrawing $600...
      Sorry, but you are short $200.0
      InsufficientFundsException
               at CheckingAccount.withdraw(CheckingAccount.java:25)
               at BankDemo.main(BankDemo.java:13)
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/EaNlSWOnOjE",
  },
  // header
  {
    type: "header",
    value: "Common Exceptions",
  },
  // context
  {
    type: "content-start",
    ignore: "true",
    value: `
      In Java, it is possible to define two catergories of Exceptions and Errors.
    `,
  },
  // list
  {
    type: "list",
    value: [
      "JVM Exceptions − These are exceptions/errors that are exclusively or logically thrown by the JVM. Examples: NullPointerException, ArrayIndexOutOfBoundsException, ClassCastException.",
      "Programmatic Exceptions − These exceptions are thrown explicitly by the application or the API programmers. Examples: IllegalArgumentException, IllegalStateException.",
    ],
  },
  // header
  {
    type: "header",
    value: "Java - Inner classes",
  },
  // context
  {
    type: "content-start",
    value: `
      In this chapter, we will discuss inner classes of Java.
    `,
  },
  // header
  {
    type: "header",
    value: "Nested Classes",
  },
  // context
  {
    type: "content-start",
    ignore: "true",
    value: `
      In Java, just like methods, variables of a class too can have another class as its member. Writing a class within another is allowed in Java. The class written within is called the nested class, and the class that holds the inner class is called the outer class.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Syntax

      Following is the syntax to write a nested class. Here, the class Outer_Demo is the outer class and the class Inner_Demo is the nested class.
    `,
  },
  // code
  {
    type: "code",
    value: `
      class Outer_Demo {
         class Inner_Demo {
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Nested classes are divided into two types −
    `,
  },
  // list
  {
    type: "list",
    value: [
      "Non-static nested classes − These are the non-static members of a class.",
      "Static nested classes − These are the static members of a class.",
    ],
  },
  // image
  {
    type: "image",
    value: "Chapter_7_image_1.png",
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/nwOw04IaPVI",
  },
  // header
  {
    type: "header",
    value: "Inner Classes (Non-static Nested Classes)",
  },
  // context
  {
    type: "content-start",
    value: `
      Inner classes are a security mechanism in Java. We know a class cannot be associated with the access modifier private, but if we have the class as a member of other class, then the inner class can be made private. And this is also used to access the private members of a class.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Inner classes are of three types depending on how and where you define them. They are −
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/pUNyPyPrMgU",
  },
  // list
  {
    type: "list",
    value: [
      "Inner Class",
      "Method-local Inner Class",
      "Anonymous Inner Class",
    ],
  },
  // header
  {
    type: "header",
    value: "Inner Class",
  },
  // content
  {
    type: "content-start",
    value: `
      Creating an inner class is quite simple. You just need to write a class within a class. Unlike a class, an inner class can be private and once you declare an inner class private, it cannot be accessed from an object outside the class.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Following is the program to create an inner class and access it. In the given example, we make the inner class private and access the class through a method.

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      class Outer_Demo {
         int num;
         
         // inner class
         private class Inner_Demo {
            public void print() {
               System.out.println("This is an inner class");
            }
         }
         
         // Accessing he inner class from the method within
         void display_Inner() {
            Inner_Demo inner = new Inner_Demo();
            inner.print();
         }
      }
         
      public class My_class {

         public static void main(String args[]) {
            // Instantiating the outer class 
            Outer_Demo outer = new Outer_Demo();
            
            // Accessing the display_Inner() method.
            outer.display_Inner();
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Here you can observe that Outer_Demo is the outer class, Inner_Demo is the inner class, display_Inner() is the method inside which we are instantiating the inner class, and this method is invoked from the main method.

      If you compile and execute the above program, you will get the following result −

      Output
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      This is an inner class.
    `,
  },
  // link video
  {	
    type: "video",
    value: "https://www.youtube.com/embed/BwkmIXjWWJc",
  },
  // header
  {
    type: "header",
    value: "Accessing the Private Members",
  },
  // content
  {
    type: "content-start",
    value: `
      As mentioned earlier, inner classes are also used to access the private members of a class. Suppose, a class is having private members to access them. Write an inner class in it, return the private members from a method within the inner class, say, getValue(), and finally from another class (from which you want to access the private members) call the getValue() method of the inner class.

      To instantiate the inner class, initially you have to instantiate the outer class. Thereafter, using the object of the outer class, following is the way in which you can instantiate the inner class.
    `,
  },
  // code
  {
    type: "code",
    ignore: "true",
    value: `
      Outer_Demo outer = new Outer_Demo();
      Outer_Demo.Inner_Demo inner = outer.new Inner_Demo();
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      The following program shows how to access the private members of a class using inner class.

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      class Outer_Demo {
         // private variable of the outer class
         private int num = 175;  
         
         // inner class
         public class Inner_Demo {
            public int getNum() {
               System.out.println("This is the getnum method of the inner class");
               return num;
            }
         }
      }

      public class My_class2 {

         public static void main(String args[]) {
            // Instantiating the outer class
            Outer_Demo outer = new Outer_Demo();
            
            // Instantiating the inner class
            Outer_Demo.Inner_Demo inner = outer.new Inner_Demo();
            System.out.println(inner.getNum());
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      If you compile and execute the above program, you will get the following result −

      Output

      This is the getnum method of the inner class: 175
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/ph8JSDwLn-M",
  },
  // header
  {
    type: "header",
    value: "Method-local Inner Class",
  },
  // content
  {
    type: "content-start",
    value: `
      In Java, we can write a class within a method and this will be a local type. Like local variables, the scope of the inner class is restricted within the method.

      A method-local inner class can be instantiated only within the method where the inner class is defined. The following program shows how to use a method-local inner class.
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
    value: `
      public class Outerclass {
         // instance method of the outer class 
         void my_Method() {
            int num = 23;

            // method-local inner class
            class MethodInner_Demo {
               public void print() {
                  System.out.println("This is method inner class "+num);	   
               }   
            } // end of inner class
           
            // Accessing the inner class
            MethodInner_Demo inner = new MethodInner_Demo();
            inner.print();
         }
         
         public static void main(String args[]) {
            Outerclass outer = new Outerclass();
            outer.my_Method();	   	   
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      If you compile and execute the above program, you will get the following result −

      Output

      This is method inner class 23
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/iSh3ZrEYE8Y",
  },
  // header
  {
    type: "header",
    value: "Anonymous Inner Class",
  },
  // content
  {
    type: "content-start",
    value: `
      An inner class declared without a class name is known as an anonymous inner class. In case of anonymous inner classes, we declare and instantiate them at the same time. Generally, they are used whenever you need to override the method of a class or an interface. 

      Syntax
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      The syntax of an anonymous inner class is as follows −

      Syntax
    `,
  },
  // code
  {
    type: "code",
    value: `
      AnonymousInner an_inner = new AnonymousInner() {
         public void my_method() {
            ........
            ........
         }   
      };
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      The following program shows how to override the method of a class using anonymous inner class.

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      abstract class AnonymousInner {
         public abstract void mymethod();
      }

      public class Outer_class {

         public static void main(String args[]) {
            AnonymousInner inner = new AnonymousInner() {
               public void mymethod() {
                  System.out.println("This is an example of anonymous inner class");
               }
            };
            inner.mymethod();	
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      If you compile and execute the above program, you will get the following result −

      Output

      This is an example of anonymous inner class
      In the same way, you can override the methods of the concrete class as well as the interface using an anonymous inner class.
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/IA8XbdnIEtg",
  },
  // header
  {
    type: "header",
    value: "Anonymous Inner Class as Argument",
  },
  // content
  {
    type: "content-start",
    value: `
      Generally, if a method accepts an object of an interface, an abstract class, or a concrete class, then we can implement the interface, extend the abstract class, and pass the object to the method. If it is a class, then we can directly pass it to the method.

      But in all the three cases, you can pass an anonymous inner class to the method. Here is the syntax of passing an anonymous inner class as a method argument −
    `,
  },
  // code
  {
    type: "code",
    ignore: "true",
    value: `
      obj.my_Method(new My_Class() {
         public void Do() {
            .....
            .....
         }
      });
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      The following program shows how to pass an anonymous inner class as a method argument.

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      // interface
      interface Message {
         String greet();
      }

      public class My_class {
         // method which accepts the object of interface Message
         public void displayMessage(Message m) {
            System.out.println(m.greet() +
               ", This is an example of anonymous inner class as an argument");  
         }

         public static void main(String args[]) {
            // Instantiating the class
            My_class obj = new My_class();

            // Passing an anonymous inner class as an argument
            obj.displayMessage(new Message() {
               public String greet() {
                  return "Hello";
               }
            });
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      If you compile and execute the above program, it gives you the following result −

      Output

      Hello, This is an example of anonymous inner class as an argument
    `,
  },
  // header
  {
    type: "header",
    value: "Static Nested Class",
  },
  // content
  {
    type: "content-start",
    value: `
      A static inner class is a nested class which is a static member of the outer class. It can be accessed without instantiating the outer class, using other static members. Just like static members, a static nested class does not have access to the instance variables and methods of the outer class. The syntax of static nested class is as follows −
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Syntax
    `,
  },
  // code
  {
    type: "code",
    value: `
      class MyOuter {
         static class Nested_Demo {
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Instantiating a static nested class is a bit different from instantiating an inner class. The following program shows how to use a static nested class.

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      public class Outer {
         static class Nested_Demo {
            public void my_method() {
               System.out.println("This is my nested class");
            }
         }
         
         public static void main(String args[]) {
            Outer.Nested_Demo nested = new Outer.Nested_Demo();	 
            nested.my_method();
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      If you compile and execute the above program, you will get the following result −

      Output

      This is my nested class
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/x5GXFHUr5dg",
  },
  // header
  {
    type: "header",
    value: "Java - Inheritance",
  },
  // content
  {
    type: "content-start",
    value: `
      Inheritance can be defined as the process where one class acquires the properties (methods and fields) of another. With the use of inheritance the information is made manageable in a hierarchical order.

      The class which inherits the properties of other is known as subclass (derived class, child class) and the class whose properties are inherited is known as superclass (base class, parent class).
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/Zs342ePFvRI",
  },
  // header
  {
    type: "header",
    value: "extends Keyword",
  },
  // content
  {
    type: "content-start",
    value: `
      extends is the keyword used to inherit the properties of a class. Following is the syntax of extends keyword.
    `,
  },
  // content
  {
    type: "content-start",
    ignore: "true",
    value: `
      Syntax
    `,
  },
  // code
  {
    type: "code",
    ignore: "true",
    value: `
      class Super {
         .....
         .....
      }
      class Sub extends Super {
         .....
         .....
      }
    `,
  },
  // header
  {
    type: "header",
    value: "Sample Code",
  },
  // content
  {
    type: "content-start",
    value: `
      Following is an example demonstrating Java inheritance. In this example, you can observe two classes namely Calculation and My_Calculation.

      Using extends keyword, the My_Calculation inherits the methods addition() and Subtraction() of Calculation class.
    `,
  },
  // content
  {
    type: "content-start",
    ignore: "true",
    value: `
      Copy and paste the following program in a file with name My_Calculation.java

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      class Calculation {
         int z;
        
         public void addition(int x, int y) {
            z = x + y;
            System.out.println("The sum of the given numbers:"+z);
         }
        
         public void Subtraction(int x, int y) {
            z = x - y;
            System.out.println("The difference between the given numbers:"+z);
         }
      }

      public class My_Calculation extends Calculation {
         public void multiplication(int x, int y) {
            z = x * y;
            System.out.println("The product of the given numbers:"+z);
         }
        
         public static void main(String args[]) {
            int a = 20, b = 10;
            My_Calculation demo = new My_Calculation();
            demo.addition(a, b);
            demo.Subtraction(a, b);
            demo.multiplication(a, b);
         }
      }
    `,
  },
  // content
  {
    type: "content-start",
    ignore: "true",
    value: `
      Compile and execute the above code as shown below.

      javac My_Calculation.java
      java My_Calculation
      After executing the program, it will produce the following result −

      Output

      The sum of the given numbers:30
      The difference between the given numbers:10
      The product of the given numbers:200
    `,
  },
  // content
  {
    type: "content",
    value: `
      In the given program, when an object to My_Calculation class is created, a copy of the contents of the superclass is made within it. That is why, using the object of the subclass you can access the members of a superclass.
    `,
  },
  // image
  {
    type: "image",
    value: "Chapter_7_image_2.png",
  },
  // content
  {
    type: "content",
    value: `
      The Superclass reference variable can hold the subclass object, but using that variable you can access only the members of the superclass, so to access the members of both classes it is recommended to always create reference variable to the subclass.

      If you consider the above program, you can instantiate the class as given below. But using the superclass reference variable ( cal in this case) you cannot call the method multiplication(), which belongs to the subclass My_Calculation.
    `,
  },
  // code
  {
    type: "code",
    ignore: "true",
    value: `
      Calculation demo = new My_Calculation();
      demo.addition(a, b);
      demo.Subtraction(a, b);
    `,
  },
  // content
  {
    type: "content",
    value: `
      Note − A subclass inherits all the members (fields, methods, and nested classes) from its superclass. Constructors are not members, so they are not inherited by subclasses, but the constructor of the superclass can be invoked from the subclass.
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/vhkRGhx7zJs",
  },
  // header
  {
    type: "header",
    value: "The super keyword",
  },
  // content
  {
    type: "content-start",
    value: `
      The super keyword is similar to this keyword. Following are the scenarios where the super keyword is used.
    `,
  },
  // list
  {
    type: "list",
    value: [
      "It is used to differentiate the members of superclass from the members of subclass, if they have same names.",
      "It is used to invoke the superclass constructor from subclass.",
    ],
  },
  // header
  {
    type: "header",
    value: "Differentiating the Members",
  },
  // content
  {
    type: "content",
    value: `
      If a class is inheriting the properties of another class. And if the members of the superclass have the names same as the sub class, to differentiate these variables we use super keyword as shown below.
    `,
  },
  // code
  {
    type: "code",
    ignore: "true",
    value: `
      super.variable
      super.method();
    `,
  },
  // header
  {
    type: "header",
    value: "Sample Code",
  },
  // content
  {
    type: "content-start",
    ignore: "true",
    value: `
      This section provides you a program that demonstrates the usage of the super keyword.

      In the given program, you have two classes namely Sub_class and Super_class, both have a method named display() with different implementations, and a variable named num with different values. We are invoking display() method of both classes and printing the value of the variable num of both classes. Here you can observe that we have used super keyword to differentiate the members of superclass from subclass.

      Copy and paste the program in a file with name Sub_class.java.

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      class Super_class {
         int num = 20;

         // display method of superclass
         public void display() {
            System.out.println("This is the display method of superclass");
         }
      }

      public class Sub_class extends Super_class {
         int num = 10;

         // display method of sub class
         public void display() {
            System.out.println("This is the display method of subclass");
         }

         public void my_method() {
            // Instantiating subclass
            Sub_class sub = new Sub_class();

            // Invoking the display() method of sub class
            sub.display();

            // Invoking the display() method of superclass
            super.display();

            // printing the value of variable num of subclass
            System.out.println("value of the variable named num in sub class:"+ sub.num);

            // printing the value of variable num of superclass
            System.out.println("value of the variable named num in super class:"+ super.num);
         }

         public static void main(String args[]) {
            Sub_class obj = new Sub_class();
            obj.my_method();
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Compile and execute the above code using the following syntax.

      javac Super_Demo
      java Super
      On executing the program, you will get the following result −

      Output

      This is the display method of subclass
      This is the display method of superclass
      value of the variable named num in sub class:10
      value of the variable named num in super class:20
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/Qb_NUn0TSAU",
  },
  // header
  {
    type: "header",
    value: "Invoking Superclass Constructor",
  },
  // content
  {
    type: "content-start",
    value: `
      If a class is inheriting the properties of another class, the subclass automatically acquires the default constructor of the superclass. But if you want to call a parameterized constructor of the superclass, you need to use the super keyword as shown below.
    `,
  },
  // code
  {
    type: "code",
    ignore: "true",
    value: `
      super(values);
    `,
  },
  // header
  {
    type: "header",
    value: "Sample Code",
  },
  // content
  {
    type: "content-start",
    ignore: "true",
    value: `
      The program given in this section demonstrates how to use the super keyword to invoke the parametrized constructor of the superclass. This program contains a superclass and a subclass, where the superclass contains a parameterized constructor which accepts a integer value, and we used the super keyword to invoke the parameterized constructor of the superclass.

      Copy and paste the following program in a file with the name Subclass.java

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      class Superclass {
         int age;

         Superclass(int age) {
            this.age = age; 		 
         }

         public void getAge() {
            System.out.println("The value of the variable named age in super class is: " +age);
         }
      }

      public class Subclass extends Superclass {
         Subclass(int age) {
            super(age);
         }

         public static void main(String args[]) {
            Subclass s = new Subclass(24);
            s.getAge();
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Compile and execute the above code using the following syntax.

      javac Subclass
      java Subclass
      On executing the program, you will get the following result −

      Output

      The value of the variable named age in super class is: 24
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/7mRgcgAhM6A",
  },
  // header
  {
    type: "header",
    value: "IS-A Relationship",
  },
  // content
  {
    type: "content-start",
    value: `
      IS-A is a way of saying: This object is a type of that object. Let us see how the extends keyword is used to achieve inheritance.
    `,
  },
  // code
  {
    type: "code",
    value: `
      public class Animal {
      }

      public class Mammal extends Animal {
      }

      public class Reptile extends Animal {
      }

      public class Dog extends Mammal {
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Now, based on the above example, in Object-Oriented terms, the following are true −
    `,
  },
  // list
  {
    type: "list",
    ignore: "true",
    value: [
      "Animal is the superclass of Mammal class.",
      "Animal is the superclass of Reptile class.",
      "Mammal and Reptile are subclasses of Animal class.",
      "Dog is the subclass of both Mammal and Animal classes.",
    ],
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Now, if we consider the IS-A relationship, we can say −
    `,
  },
  // list
  {
    type: "list",
    ignore: "true",
    value: [
      "Mammal IS-A Animal",
      "Reptile IS-A Animal",
      "Dog IS-A Mammal",
      "Hence: Dog IS-A Animal as well",
    ],
  },
  // content
  {
    type: "content", 
    value: `
      With the use of the extends keyword, the subclasses will be able to inherit all the properties of the superclass except for the private properties of the superclass.

      We can assure that Mammal is actually an Animal with the use of the instance operator.
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
    value: `
      class Animal {
      }

      class Mammal extends Animal {
      }

      class Reptile extends Animal {
      }

      public class Dog extends Mammal {

         public static void main(String args[]) {
            Animal a = new Animal();
            Mammal m = new Mammal();
            Dog d = new Dog();

            System.out.println(m instanceof Animal);
            System.out.println(d instanceof Mammal);
            System.out.println(d instanceof Animal);
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      This will produce the following result −

      Output

      true
      true
      true
    `,
  },
  // content
  {
    type: "content",
    value: `
      Since we have a good understanding of the extends keyword, let us look into how the implements keyword is used to get the IS-A relationship.

      Generally, the implements keyword is used with classes to inherit the properties of an interface. Interfaces can never be extended by a class.
    `,
  },
  // content
  {
    type: "content",
    value: `
      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      public interface Animal {
      }

      public class Mammal implements Animal {
      }

      public class Dog extends Mammal {
      }
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/We9twJBiRj0",
  },
  // header
  {
    type: "header",
    value: "The instanceof Keyword",
  },
  // content
  {
    type: "content-start",
    value: `
      Let us use the instanceof operator to check determine whether Mammal is actually an Animal, and dog is actually an Animal.
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
      interface Animal{}
      class Mammal implements Animal{}

      public class Dog extends Mammal {

         public static void main(String args[]) {
            Mammal m = new Mammal();
            Dog d = new Dog();

            System.out.println(m instanceof Animal);
            System.out.println(d instanceof Mammal);
            System.out.println(d instanceof Animal);
         }
      }
    `,
  },
  // content
  {
    type: "content-start",
    ignore: "true",
    value: `
      This will produce the following result −

      Output

      true
      true
      true
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/wIvDgsUHQVo",
  },
  // header
  {
    type: "header",
    value: "HAS-A relationship",
  },
  // content
  {
    type: "content-start",
    value: `
      These relationships are mainly based on the usage. This determines whether a certain class HAS-A certain thing. This relationship helps to reduce duplication of code as well as bugs.
    `,
  },
  // content
  {
    type: "content-start",
    ignore: "true",
    value: `
      Lets look into an example −

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      public class Vehicle{}
      public class Speed{}

      public class Van extends Vehicle {
         private Speed sp;
         ` 
  },
  // content
  {
    type: "content",
    value: `
      This shows that class Van HAS-A Speed. By having a separate class for Speed, we do not have to put the entire code that belongs to speed inside the Van class, which makes it possible to reuse the Speed class in multiple applications.

      In Object-Oriented feature, the users do not need to bother about which object is doing the real work. To achieve this, the Van class hides the implementation details from the users of the Van class. So, basically what happens is the users would ask the Van class to do a certain action and the Van class will either do the work by itself or ask another class to perform the action.
    `,
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/qkq_pPsSWII",
  },
  // header
  {
    type: "header",
    value: "Types of Inheritance",
  },
  // content
  {
    type: "content-start",
    ignore: "true",
    value: `
      There are various types of inheritance as demonstrated below.
    `,
  },
  // image
  {
    type: "image",
    value: "Chapter_7_image_3.png",
  },
  // content
  {
    type: "content",
    value: `
      A very important fact to remember is that Java does not support multiple inheritance. This means that a class cannot extend more than one class. Therefore following is illegal −
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Example

      public class extends Animal, Mammal{} 
      However, a class can implement one or more interfaces, which has helped Java get rid of the impossibility of multiple inheritance.
    `,
  },
  // header
  {
    type: "header",
    value: "Java - Overriding",
  },
  // content
  {
    type: "content-start",
    value: `
      In the previous chapter, we talked about superclasses and subclasses. If a class inherits a method from its superclass, then there is a chance to override the method provided that it is not marked final.

      The benefit of overriding is: ability to define a behavior that's specific to the subclass type, which means a subclass can implement a parent class method based on its requirement.

      In object-oriented terms, overriding means to override the functionality of an existing method.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Example
      Let us look at an example.
    `,
  },
  // code
  {
    type: "code",
    value: `
      class Animal {
         public void move() {
            System.out.println("Animals can move");
         }
      }

      class Dog extends Animal {
         public void move() {
            System.out.println("Dogs can walk and run");
         }
      }

      public class TestDog {

         public static void main(String args[]) {
            Animal a = new Animal();   // Animal reference and object
            Animal b = new Dog();   // Animal reference but Dog object

            a.move();   // runs the method in Animal class
            b.move();   // runs the method in Dog class
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      This will produce the following result −

      Output
      Animals can move
      Dogs can walk and run
      In the above example, you can see that even though b is a type of Animal it runs the move method in the Dog class. The reason for this is: In compile time, the check is made on the reference type. However, in the runtime, JVM figures out the object type and would run the method that belongs to that particular object.

      Therefore, in the above example, the program will compile properly since Animal class has the method move. Then, at the runtime, it runs the method specific for that object.

      Consider the following example −

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      class Animal {
         public void move() {
            System.out.println("Animals can move");
         }
      }

      class Dog extends Animal {
         public void move() {
            System.out.println("Dogs can walk and run");
         }
         public void bark() {
            System.out.println("Dogs can bark");
         }
      }

      public class TestDog {

         public static void main(String args[]) {
            Animal a = new Animal();   // Animal reference and object
            Animal b = new Dog();   // Animal reference but Dog object

            a.move();   // runs the method in Animal class
            b.move();   // runs the method in Dog class
            b.bark();
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      This will produce the following result −

      Output
      TestDog.java:26: error: cannot find symbol
            b.bark();
             ^
        symbol:   method bark()
        location: variable b of type Animal
      1 error
      This program will throw a compile time error since b's reference type Animal doesn't have a method by the name of bark.
    `,
  },
  // header
  {
    type: "header",
    value: "Rules for Method Overriding",
  },
  // list
  {
    type: "list",
    value: [
      "The argument list should be exactly the same as that of the overridden method.",
      "The return type should be the same or a subtype of the return type declared in the original overridden method in the superclass.",
      "The access level cannot be more restrictive than the overridden method's access level. For example: If the superclass method is declared public then the overridding method in the sub class cannot be either private or protected.",
      "Instance methods can be overridden only if they are inherited by the subclass.",
      "A method declared final cannot be overridden.",
      "A method declared static cannot be overridden but can be re-declared.",
      "If a method cannot be inherited, then it cannot be overridden.",
      "A subclass within the same package as the instance's superclass can override any superclass method that is not declared private or final.",
      "A subclass in a different package can only override the non-final methods declared public or protected.",
      "An overriding method can throw any uncheck exceptions, regardless of whether the overridden method throws exceptions or not. However, the overriding method should not throw checked exceptions that are new or broader than the ones declared by the overridden method. The overriding method can throw narrower or fewer exceptions than the overridden method.",
      "Constructors cannot be overridden.",
    ],
  },
  // link video
  {
    type: "video",
    value: "https://www.youtube.com/embed/l5hh1DCyrwM",
  },
  // header
  {
    type: "header",
    value: "Using the super Keyword",
  },
  // content
  {
    type: "content-start",
    value: `
      When invoking a superclass version of an overridden method the super keyword is used.
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
    value: `
      class Animal {
         public void move() {
            System.out.println("Animals can move");
         }
      }

      class Dog extends Animal {
         public void move() {
            super.move();   // invokes the super class method
            System.out.println("Dogs can walk and run");
         }
      }

      public class TestDog {

         public static void main(String args[]) {
            Animal b = new Dog();   // Animal reference but Dog object
            b.move();   // runs the method in Dog class
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      This will produce the following result −

      Output
      Animals can move
      Dogs can walk and run
    `,
  },
  // link video
  {
    type: "video",
    vallue: "https://www.youtube.com/embed/neOvVLpy918",
  },
]