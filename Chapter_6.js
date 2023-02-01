[
  // title
  {
    type: "title",
    value: "Chapter 6",
  },
  // subtitle
  {
    type: "subtitle",
    value: "Java - Regular Expressions",
  },
  // content
  {
    type: "content-start",
    value: `
      Java provides the java.util.regex package for pattern matching with regular expressions. Java regular expressions are very similar to the Perl programming language and very easy to learn.

      A regular expression is a special sequence of characters that helps you match or find other strings or sets of strings, using a specialized syntax held in a pattern. They can be used to search, edit, or manipulate text and data.
    `,
  },
  // context
  {
    type: "content",
    ignore: "true",
    value: `
      The java.util.regex package primarily consists of the following three classes −
    `,
  },
  // content
  {
    type: "content",
    value: `
      Pattern Class − A Pattern object is a compiled representation of a regular expression. The Pattern class provides no public constructors. To create a pattern, you must first invoke one of its public static compile() methods, which will then return a Pattern object. These methods accept a regular expression as the first argument.
    `,
  },
  // content
  {
    type: "content",
    value: `
      Matcher Class − A Matcher object is the engine that interprets the pattern and performs match operations against an input string. Like the Pattern class, Matcher defines no public constructors. You obtain a Matcher object by invoking the matcher() method on a Pattern object.
    `,
  },
  // content
  {
    type: "content",
    value: `
      PatternSyntaxException − A PatternSyntaxException object is an unchecked exception that indicates a syntax error in a regular expression pattern.
    `,
  },
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/juqhgW0SVb4",
  },
  // header
  {
    type: "header",
    value: "Capturing Groups",
  },
  // content
  {
    type: "content-start",
    value: `		
      Capturing groups are a way to treat multiple characters as a single unit. They are created by placing the characters to be grouped inside a set of parentheses. For example, the regular expression (dog) creates a single group containing the letters "d", "o", and "g".
    `,
  },
  // context
  {
    type: "content",
    value: `
      Capturing groups are numbered by counting their opening parentheses from the left to the right. In the expression ((A)(B(C))), for example, there are four such groups −
    `,
  },
  // list
  {
    type: "list",
    ignore: "true",
    value: [
      "((A)(B(C)))",
      "(A)",
      "(B(C))",
      "(C)",
    ],
  },
  // content
  {
    type: "content",
    value: `
      To find out how many groups are present in the expression, call the groupCount method on a matcher object. The groupCount method returns an int showing the number of capturing groups present in the matcher's pattern.

      There is also a special group, group 0, which always represents the entire expression. This group is not included in the total reported by groupCount.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Example

      Following example illustrates how to find a digit string from the given alphanumeric string
    `,
  },
  // code
  {
    type: "code",
    value: `
      import java.util.regex.Matcher;
      import java.util.regex.Pattern;
       
      public class RegexMatches {
       
         public static void main( String args[] ) {
            // String to be scanned to find the pattern.
            String line = "This order was placed for QT3000! OK?";
            String pattern = "(.*)(\\d+)(.*)";
       
            // Create a Pattern object
            Pattern r = Pattern.compile(pattern);
       
            // Now create matcher object.
            Matcher m = r.matcher(line);
            if (m.find( )) {
               System.out.println("Found value: " + m.group(0) );
               System.out.println("Found value: " + m.group(1) );
               System.out.println("Found value: " + m.group(2) );
            }else {
               System.out.println("NO MATCH");
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

      Found value: This order was placed for QT3000! OK?
      Found value: This order was placed for QT300
      Found value: 0
    `,
  },
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/AZDitBkj7kA",
  },
  // header
  {
    type: "header",
    value: "Regular Expression Syntax",
  },
  // context
  {
    type: "content-start",
    value: `
      Here is the table listing down all the regular expression metacharacter syntax available in Java −
    `,
  },
  // table image
  {
    type: "image",
    value: "Chapter_6_table_1.png",
  },
  // table image
  {
    type: "image",
    value: "Chapter_6_table_2.png",
  },
  // header
  {
    type: "header",
    value: "Methods of the Matcher Class",
  },
  // context
  {
    type: "content-start",
    value: `
      Index Methods

      Index methods provide useful index values that show precisely where the match was found in the input string −
    `,
  },
  // header
  {
    type: "header",
    value: "Study Methods",
  },
  // context
  {
    type: "content-start",
    value: `
      Study methods review the input string and return a Boolean indicating whether or not the pattern is found −
    `,
  },
  // table image
  {
    type: "image",
    value: "Chapter_6_table_3.png",
  },
  // header
  {
    type: "header",
    value: "Replacement Methods",
  },
  // context
  {
    type: "content-start",
    value: `
      Replacement methods are useful methods for replacing text in an input string −
    `,
  },
  // table image
  {
    type: "image",
    value: "Chapter_6_table_4.png",
  },
  // header
  {
    type: "header",
    value: "The start and end Methods",
  },
  // context
  {
    type:"content-start",
    value: `
      Following is the example that counts the number of times the word "cat" appears in the input string −
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
      import java.util.regex.Matcher;
      import java.util.regex.Pattern;
       
      public class RegexMatches {
       
         private static final String REGEX = "\\bcat\\b";
         private static final String INPUT = "cat cat cat cattie cat";
       
         public static void main( String args[] ) {
            Pattern p = Pattern.compile(REGEX);
            Matcher m = p.matcher(INPUT);   // get a matcher object
            int count = 0;
       
            while(m.find()) {
               count++;
               System.out.println("Match number "+count);
               System.out.println("start(): "+m.start());
               System.out.println("end(): "+m.end());
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

      Match number 1
      start(): 0
      end(): 3
      Match number 2
      start(): 4
      end(): 7
      Match number 3
      start(): 8
      end(): 11
      Match number 4
      start(): 19
      end(): 22
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      You can see that this example uses word boundaries to ensure that the letters "c" "a" "t" are not merely a substring in a longer word. It also gives some useful information about where in the input string the match has occurred.

      The start method returns the start index of the subsequence captured by the given group during the previous match operation, and the end returns the index of the last character matched, plus one.
    `,
  },
  // header
  {
    type: "header",
    value: "The matches and lookingAt Methods",
  },
  // context
  {
    type: "content-start",
    value: `
      The matches and lookingAt methods both attempt to match an input sequence against a pattern. The difference, however, is that matches requires the entire input sequence to be matched, while lookingAt does not.
    `,
  },
  // content
  {	
    type: "content",
    ignore: "true",
    value: `
      Both methods always start at the beginning of the input string. Here is the example explaining the functionality −

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      import java.util.regex.Matcher;
      import java.util.regex.Pattern;
       
      public class RegexMatches {
       
         private static final String REGEX = "foo";
         private static final String INPUT = "fooooooooooooooooo";
         private static Pattern pattern;
         private static Matcher matcher;
       
         public static void main( String args[] ) {
            pattern = Pattern.compile(REGEX);
            matcher = pattern.matcher(INPUT);
       
            System.out.println("Current REGEX is: "+REGEX);
            System.out.println("Current INPUT is: "+INPUT);
       
            System.out.println("lookingAt(): "+matcher.lookingAt());
            System.out.println("matches(): "+matcher.matches());
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

      Current REGEX is: foo
      Current INPUT is: fooooooooooooooooo
      lookingAt(): true
      matches(): false
    `,
  },
  // header
  {	
    type: "header",
    value: "The replaceFirst and replaceAll Methods",
  },
  // context
  {
    type: "content-start",
    value: `
      The replaceFirst and replaceAll methods replace the text that matches a given regular expression. As their names indicate, replaceFirst replaces the first occurrence, and replaceAll replaces all occurrences
    `
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Here is the example explaining the functionality −

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      import java.util.regex.Matcher;
      import java.util.regex.Pattern;
       
      public class RegexMatches {
       
         private static String REGEX = "dog";
         private static String INPUT = "The dog says meow. " + "All dogs say meow.";
         private static String REPLACE = "cat";
       
         public static void main(String[] args) {
            Pattern p = Pattern.compile(REGEX);
            
            // get a matcher object
            Matcher m = p.matcher(INPUT); 
            INPUT = m.replaceAll(REPLACE);
            System.out.println(INPUT);
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

      The cat says meow. All cats say meow.
    `,
  },
  // header
  {
    type: "header",
    value: "The appendReplacement and appendTail Methods",
  },
  // context
  {
    type: "content-start",
    value: `
      The Matcher class also provides appendReplacement and appendTail methods for text replacement.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Here is the example explaining the functionality −

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      import java.util.regex.Matcher;
      import java.util.regex.Pattern;
       
      public class RegexMatches {
       
         private static String REGEX = "a*b";
         private static String INPUT = "aabfooaabfooabfoob";
         private static String REPLACE = "-";
         public static void main(String[] args) {
       
            Pattern p = Pattern.compile(REGEX);
            
            // get a matcher object
            Matcher m = p.matcher(INPUT);
            StringBuffer sb = new StringBuffer();
            while(m.find()) {
               m.appendReplacement(sb, REPLACE);
            }
            m.appendTail(sb);
            System.out.println(sb.toString());
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

      -foo-foo-foo-
    `,
  },
  // header
  {
    type: "header",
    value: "PatternSyntaxException Class Methods",
  },
  // context
  {
    type: "content-start",
    value: `
      A PatternSyntaxException is an unchecked exception that indicates a syntax error in a regular expression pattern.
    `,
  },
  // content
  {
    type: "content-start",
    ignore: "true",
    value: `
      The PatternSyntaxException class provides the following methods to help you determine what went wrong −
    `,
  },
  // table image
  {
    type: "image",
    value: "Chapter_6_table_5.png",
  },
  // header
  {
    type: "header",
    value: "Java Methods",
  },
  // context
  {
    type: "content-start",
    value: `
      A Java method is a collection of statements that are grouped together to perform an operation. When you call the System.out.println() method, for example, the system actually executes several statements in order to display a message on the console.

      Now you will learn how to create your own methods with or without return values, invoke a method with or without parameters, and apply method abstraction in the program design.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Creating Method
      Considering the following example to explain the syntax of a method −

      Syntax
    `,
  },
  // code
  {
    type: "code",
    ignore: "true",
    value: `
      public static int methodName(int a, int b) {
       // body
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Here,
    `,
  },
  // list
  {
    type: "list",
    ignore: "true",
    value: [
      "public static − modifier",
      "int − return type",
      "methodName − name of the method",
      "a, b − formal parameters",
      "int a, int b − list of parameters",
    ],
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Method definition consists of a method header and a method body. The same is shown in the following syntax −

      Syntax
    `,
  },
  // code
  { 
    type: "code",
    ignore: "true",
    value: `
      modifier returnType nameOfMethod (Parameter List) {
         // method body
         }
         `,
  },
  // context
  {
    type: "content",
    ignore: "true",
    value: `
      The syntax shown above includes −
    `,
  },
  // list
  {
    type: "list",
    value: [
      "modifier − It defines the access type of the method and it is optional to use.",
      "returnType − Method may return a value.",
      "nameOfMethod − This is the method name. The method signature consists of the method name and the parameter list.",
      "Parameter List − The list of parameters, it is the type, order, and number of parameters of a method. These are optional, method may contain zero parameters.",
      "method body − The method body defines what the method does with the statements.",
    ],
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Example

      Here is the source code of the above defined method called min(). This method takes two parameters num1 and num2 and returns the maximum between the two −

      /** the snippet returns the minimum between two numbers */

    `,
  },
  // code
  {
    type: "code",
    ignore: "true",
    value: `
      public static int minFunction(int n1, int n2) {
         int min;
         if (n1 > n2)
            min = n2;
         else
            min = n1;
       
         return min; 
      }
    `,
  },
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/1cWAcMdEXiQ",
  },
  // header
  {
    type: "header",
    value: "Method Calling",
  },
  // context
  {
    type: "content-start",
    value: `

    For using a method, it should be called. There are two ways in which a method is called i.e., method returns a value or returning nothing (no return value).

    The process of method calling is simple. When a program invokes a method, the program control gets transferred to the called method.
    `,
  },
  // context
  {
    type: "content",
    ignore: "true",
    value: `
      This called method then returns control to the caller in two conditions, when −
    `,
  },
  // list
  {
    type: "list",
    value: [
      "the return statement is executed.",
      "it reaches the method ending closing brace.",
    ],
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      The methods returning void is considered as call to a statement. Lets consider an example −
    `,
  },
  // code
  {
    type: "code",
    ignore: "true",
    value: `
      System.out.println("This is tutorialspoint.com!");
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      The method returning value can be understood by the following example −
    `,
  },
  // code
  {
    type: "code",
    ignore: "true",
    value:`
      int result = sum(6, 9);
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Following is the example to demonstrate how to define a method and how to call it −

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      public class ExampleMinNumber {
         
         public static void main(String[] args) {
            int a = 11;
            int b = 6;
            int c = minFunction(a, b);
            System.out.println("Minimum Value = " + c);
         }
       
         /** returns the minimum of two numbers */
         public static int minFunction(int n1, int n2) {
            int min;
            if (n1 > n2)
               min = n2;
            else
               min = n1;
       
            return min; 
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

      Minimum value = 6
    `,
  },
  // header
  {
    type: "header",
    value: "The void Keyword",
  },
  // content
  {
    type: "content-start",
    value: `
      The void keyword allows us to create methods which do not return a value. Here, in the following example we're considering a void method methodRankPoints. This method is a void method, which does not return any value. Call to a void method must be a statement i.e. methodRankPoints(255.7);. It is a Java statement which ends with a semicolon as shown in the following example.
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
      public class ExampleVoid {

         public static void main(String[] args) {
            methodRankPoints(255.7);
         }
       
         public static void methodRankPoints(double points) {
            if (points >= 202.5) {
               System.out.println("Rank:A1");
            }else if (points >= 122.4) {
               System.out.println("Rank:A2");
            }else {
               System.out.println("Rank:A3");
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

      Rank:A1
    `,
  },
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/ybtJE9IHLak",
  },
  // header
  {
    type: "header",
    value: "Passing Parameters by Value",
  },
  // context
  {
    type: "content-start",
    value: `
      While working under calling process, arguments is to be passed. These should be in the same order as their	 respective parameters in the method specification. Parameters can be passed by value or by reference.

      Passing Parameters by Value means calling a method with a parameter. Through this, the argument value is passed to the parameter.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Example

      The following program shows an example of passing parameter by value. The values of the arguments remains the same even after the method invocation.
    `,
  },
  // code
  {
    type: "code",
    value: `
      public class swappingExample {

         public static void main(String[] args) {
            int a = 30;
            int b = 45;
            System.out.println("Before swapping, a = " + a + " and b = " + b);
       
            // Invoke the swap method
            swapFunction(a, b);
            System.out.println("\n**Now, Before and After swapping values will be same here**:");
            System.out.println("After swapping, a = " + a + " and b is " + b);
         }
       
         public static void swapFunction(int a, int b) {
            System.out.println("Before swapping(Inside), a = " + a + " b = " + b);
            
            // Swap n1 with n2
            int c = a;
            a = b;
            b = c;
            System.out.println("After swapping(Inside), a = " + a + " b = " + b);
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

      Before swapping, a = 30 and b = 45
      Before swapping(Inside), a = 30 b = 45
      After swapping(Inside), a = 45 b = 30

      **Now, Before and After swapping values will be same here**:
      After swapping, a = 30 and b is 45
    `,
  },
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/M64H5gYIto8",
  },
  // header
  {
    type: "header",
    value: "Method Overloading",
  },
  // context
  {
    type: "content-start",
    value: `
      When a class has two or more methods by the same name but different parameters, it is known as method overloading. It is different from overriding. In overriding, a method has the same method name, type, number of parameters, etc.

      Let’s consider the example discussed earlier for finding minimum numbers of integer type. If, let’s say we want to find the minimum number of double type. Then the concept of overloading will be introduced to create two or more methods with the same name but different parameters.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      The following example explains the same −

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      public class ExampleOverloading {

       public static void main(String[] args) {
          int a = 11;
          int b = 6;
          double c = 7.3;
          double d = 9.4;
          int result1 = minFunction(a, b);
          
          // same function name with different parameters
          double result2 = minFunction(c, d);
          System.out.println("Minimum Value = " + result1);
          System.out.println("Minimum Value = " + result2);
       }
     
       // for integer
       public static int minFunction(int n1, int n2) {
          int min;
          if (n1 > n2)
             min = n2;
          else
             min = n1;
     
          return min; 
       }
       
       // for double
       public static double minFunction(double n1, double n2) {
         double min;
          if (n1 > n2)
             min = n2;
          else
             min = n1;
     
          return min; 
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

      Minimum Value = 6
      Minimum Value = 7.3

      Overloading methods makes program readable. Here, two methods are given by the same name but with different parameters. The minimum number from integer and double types is the result.
    `,
  },
  // header
  {
    type: "header",
    value: "Using Command-Line Arguments",
  },
  // context
  {
    type: "content-start",
    value: `
      Sometimes you will want to pass some information into a program when you run it. This is accomplished by passing command-line arguments to main( ).

      A command-line argument is the information that directly follows the program's name on the command line when it is executed. To access the command-line arguments inside a Java program is quite easy. They are stored as strings in the String array passed to main( ).
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
      The following program displays all of the command-line arguments that it is called with −

      public class CommandLine {
       
         public static void main(String args[]) { 
            for(int i = 0; i<args.length; i++) {
               System.out.println("args[" + i + "]: " +  args[i]);
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
      Try executing this program as shown here −

      $java CommandLine this is a command line 200 -100

      This will produce the following result −

      Output

      args[0]: this
      args[1]: is
      args[2]: a
      args[3]: command
      args[4]: line
      args[5]: 200
      args[6]: -100
    `,
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
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/Bh5qETmJgJM",
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
    value: "https://youtube.com/embed/HnQs4K1NRmU",
  },
  // header
  {
    type: "header",
    value: "The this keyword",
  },
  // context
  {
    type: "content-start",
    value: `
      this is a keyword in Java which is used as a reference to the object of the current class, with in an instance method or a constructor. Using this you can refer the members of a class such as constructors, variables and methods.

      Note − The keyword this is used only within instance methods or constructors
    `,
  },
  // content
  {
    type: "content",
    value: `
      In general, the keyword this is used to −

      Differentiate the instance variables from local variables if they have same names, within a constructor or a method.
    `,
  },
  // code
  {
    type: "code",
    value: `
      class Student {
         int age;   
         Student(int age) {
            this.age = age;	
         }
      }
    `,
  },
  // content
  {
    type: "content",
    value: `
      Call one type of constructor (parametrized constructor or default) from other in a class. It is known as explicit constructor invocation.
    `,
  },
  // code
  {
    type: "code",
    value: `
      class Student {
         int age
         Student() {
            this(20);
         }
         
         Student(int age) {
            this.age = age;	
         }
      }
    `,
  },
  // content
  {
    type: "content",
    value: `
      Example

      Here is an example that uses this keyword to access the members of a class. Copy and paste the following program in a file with the name, This_Example.java.
    `,
  },
  // code
  {
    type: "code",
    value: `
      public class This_Example {
       // Instance variable num
       int num = 10;
      
       This_Example() {
          System.out.println("This is an example program on keyword this");	
       }
     
       This_Example(int num) {
          // Invoking the default constructor
          this();
          
          // Assigning the local variable num to the instance variable num
          this.num = num;	   
       }
       
       public void greet() {
          System.out.println("Hi Welcome to Tutorialspoint");
       }
          
       public void print() {
          // Local variable num
          int num = 20;
          
          // Printing the local variable
          System.out.println("value of local variable num is : "+num);
          
          // Printing the instance variable
          System.out.println("value of instance variable num is : "+this.num);
          
          // Invoking the greet method of a class
          this.greet();     
       }
       
       public static void main(String[] args) {
          // Instantiating the class
          This_Example obj1 = new This_Example();
          
          // Invoking the print method
          obj1.print();
        
          // Passing a new value to the num variable through parametrized constructor
          This_Example obj2 = new This_Example(30);
          
          // Invoking the print method again
          obj2.print(); 
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

      This is an example program on keyword this 
      value of local variable num is : 20
      value of instance variable num is : 10
      Hi Welcome to Tutorialspoint
      This is an example program on keyword this 
      value of local variable num is : 20
      value of instance variable num is : 30
      Hi Welcome to Tutorialspoint
    `,
  },
  // header
  {
    type: "header",
    value: "Variable Arguments(var-args)",
  },
  // context
  {
    type: "content-start",
    value: `
      JDK 1.5 enables you to pass a variable number of arguments of the same type to a method. The parameter in the method is declared as follows −

      typeName... parameterName
      In the method declaration, you specify the type followed by an ellipsis (...). Only one variable-length parameter may be specified in a method, and this parameter must be the last parameter. Any regular parameters must precede it.
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
      public class VarargsDemo {

         public static void main(String args[]) {
            // Call method with variable args  
           printMax(34, 3, 3, 2, 56.5);
            printMax(new double[]{1, 2, 3});
         }
       
         public static void printMax( double... numbers) {
            if (numbers.length == 0) {
               System.out.println("No argument passed");
               return;
            }
       
            double result = numbers[0];
       
            for (int i = 1; i <  numbers.length; i++)
            if (numbers[i] >  result)
            result = numbers[i];
            System.out.println("The max value is " + result);
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

      The max value is 56.5
      The max value is 3.0
    `,
  },
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/OhR5ZIlcpaw",
  },
  // header
  {
    type: "header",
    value: "The finalize( ) Method",
  },
  // context
  {
    type: "content-start",
    value: `
      It is possible to define a method that will be called just before an object's final destruction by the garbage collector. This method is called finalize( ), and it can be used to ensure that an object terminates cleanly.

      For example, you might use finalize( ) to make sure that an open file owned by that object is closed.

      To add a finalizer to a class, you simply define the finalize( ) method. The Java runtime calls that method whenever it is about to recycle an object of that class.
    `,
  },
  // content
  {
    type: "content-start",
    ignore: "true",
    value: `
      Inside the finalize( ) method, you will specify those actions that must be performed before an object is destroyed.

      The finalize( ) method has this general form −
    `,
  },
  // code
  {
    type: "code",
    ignore: "true",
    value: `
      protected void finalize( ) {
         // finalization code here
        }
    `,
  },
  // content
  {
    type: "content-start",
    ignore: "true",
    value: `
      Here, the keyword protected is a specifier that prevents access to finalize( ) by code defined outside its class.

      This means that you cannot know when or even if finalize( ) will be executed. For example, if your program ends before garbage collection occurs, finalize( ) will not execute.
    `,
  },
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/frOMAW-Ynvg",
  },
  // header
  {
    type: "header",
    value: "Java - Files and I/O",
  },
  // content
  {
    type: "content-start",
    value: `
      The java.io package contains nearly every class you might ever need to perform input and output (I/O) in Java. All these streams represent an input source and an output destination. The stream in the java.io package supports many data such as primitives, object, localized characters, etc.
    `,
  },
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/s1zzr89XlYA",
  },
  // header
  {
    type: "header",
    value: "Stream",
  },
  // content
  {
    type: "content-start",
    value: `
      A stream can be defined as a sequence of data. There are two kinds of Streams −

      InPutStream − The InputStream is used to read data from a source.

      OutPutStream − The OutputStream is used for writing data to a destination.
    `,
  },
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/QfGVi89AV4c",
  },
  // image
  {
    type: "image",
    value: "Chapter_6_image_1.png",
  },
  // content
  {
    type: "content-start",
    value: `
      Java provides strong but flexible support for I/O related to files and networks but this tutorial covers very basic functionality related to streams and I/O. We will see the most commonly used examples one by one −
    `,
  },
  // header
  {
    type: "header",
    value: "Byte Streams",
  },
  // content
  {
    type: "content-start",
    value: `
      Java byte streams are used to perform input and output of 8-bit bytes. Though there are many classes related to byte streams but the most frequently used classes are, FileInputStream and FileOutputStream.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Following is an example which makes use of these two classes to copy an input file into an output file −

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      import java.io.*;
      public class CopyFile {
       
         public static void main(String args[]) throws IOException {  
            FileInputStream in = null;
            FileOutputStream out = null;
       
            try {
               in = new FileInputStream("input.txt");
               out = new FileOutputStream("output.txt");
               
               int c;
               while ((c = in.read()) != -1) {
                  out.write(c);
               }
            }finally {
               if (in != null) {
                  in.close();
               }
               if (out != null) {
                  out.close();
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
      Now let's have a file input.txt with the following content −

      This is test for copy file.

      As a next step, compile the above program and execute it, which will result in creating output.txt file with the same content as we have in input.txt. So let's put the above code in CopyFile.java file and do the following −

      $javac CopyFile.java
      $java CopyFile
    `,
  },
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/j6W7cnV7Vc0",
  },
  // header
  {
    type: "header",
    value: "Character Streams",
  },
  // context
  {
    type: "content-start",
    value: `
      Java Byte streams are used to perform input and output of 8-bit bytes, whereas Java Character streams are used to perform input and output for 16-bit unicode. Though there are many classes related to character streams but the most frequently used classes are, FileReader and FileWriter. Though internally FileReader uses FileInputStream and FileWriter uses FileOutputStream but here the major difference is that FileReader reads two bytes at a time and FileWriter writes two bytes at a time.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      We can re-write the above example, which makes the use of these two classes to copy an input file (having unicode characters) into an output file −

      Example
    `,
  },
  // code 
  {
    type: "code",
    value: `
      import java.io.*;
      public class CopyFile {
       
         public static void main(String args[]) throws IOException {
            FileReader in = null;
            FileWriter out = null;
       
            try {
               in = new FileReader("input.txt");
               out = new FileWriter("output.txt");
               
               int c;
               while ((c = in.read()) != -1) {
                  out.write(c);
               }
            }finally {
               if (in != null) {
                  in.close();
               }
               if (out != null) {
                  out.close();
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
      Now let's have a file input.txt with the following content −

      This is test for copy file.

      As a next step, compile the above program and execute it, which will result in creating output.txt file with the same content as we have in input.txt. So let's put the above code in CopyFile.java file and do the following −

      $javac CopyFile.java
      $java CopyFile
    `,
  },
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/OioUUNlJ8Ng",
  },
  // header
  {
    type: "header",
    value: "Standard Streams",
  },
  // context
  {
    type: "content-start",
    value: `
      All the programming languages provide support for standard I/O where the user's program can take input from a keyboard and then produce an output on the computer screen. If you are aware of C or C++ programming languages, then you must be aware of three standard devices STDIN, STDOUT and STDERR
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Similarly, Java provides the following three standard streams −
    `,
  },
  // list
  {
    type: "list",
    value: [
      "Standard Input − This is used to feed the data to user's program and usually a keyboard is used as standard input stream and represented as System.in.",
      "Standard Output − This is used to output the data produced by the user's program and usually a computer screen is used for standard output stream and represented as System.out.",
      "Standard Error − This is used to output the error data produced by the user's program and usually a computer screen is used for standard error stream and represented as System.err.",
    ],
  },
  //content
  {
    type: "content",
    ignore: "true",
    value: `
      Following is a simple program, which creates InputStreamReader to read standard input stream until the user types a "q" −

      Example
    `,
  },
  // code 
  {
    type: "code",
    value: `
      import java.io.*;
      public class ReadConsole {
       
         public static void main(String args[]) throws IOException {
            InputStreamReader cin = null;
       
            try {
               cin = new InputStreamReader(System.in);
               System.out.println("Enter characters, 'q' to quit.");
               char c;
               do {
                  c = (char) cin.read();
                  System.out.print(c);
               } while(c != 'q');
            }finally {
               if (cin != null) {
                  cin.close();
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
      Let's keep the above code in ReadConsole.java file and try to compile and execute it as shown in the following program. This program continues to read and output the same character until we press 'q' −

      $javac ReadConsole.java
      $java ReadConsole
      Enter characters, 'q' to quit.
      1
      1
      e
      e
      q
      Q
    `,
  },
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/Pau1zfJ-_1o",
  },
  // header
  {
    type: "header",
    value: "Reading and Writing Files",
  },
  // content
  {
    type: "content-start",
    value: `
      A stream can be defined as a sequence of data. The InputStream is used to read data from a source and the OutputStream is used for writing data to a destination.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Here is a hierarchy of classes to deal with Input and Output streams.
    `,
  },
  // image
  {
    type: "image",
    value: "Chapter_6_image_2.png",
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      The two important streams are FileInputStream and FileOutputStream, which would be discussed in this tutorial.
    `,
  },
  // header
  {	
    type: "header",
    value: "FileInputStream",
  },
  // context
  {
    type: "content",
    value: `
      This stream is used for reading data from the files. Objects can be created using the keyword new and there are several types of constructors available.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Following constructor takes a file name as a string to create an input stream object to read the file −

      InputStream f = new FileInputStream("C:/java/hello");

      Following constructor takes a file object to create an input stream object to read the file. First we create a file object using File() method as follows −

      File f = new File("C:/java/hello");
      InputStream f = new FileInputStream(f);

      Once you have InputStream object in hand, then there is a list of helper methods which can be used to read to stream or to do other operations on the stream.
    `,
  },
  // table image
  {
    type: "image",
    value: "Chapter_6_table_6.png",
  },
  // header
  {	
    type: "header",
    value: "FileOutputStream",
  },
  // context
  {
    type: "content",
    value: `
      FileOutputStream is used to create a file and write data into it. The stream would create a file, if it doesn't already exist, before opening it for output.
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Here are two constructors which can be used to create a FileOutputStream object.

      Following constructor takes a file name as a string to create an input stream object to write the file −

      OutputStream f = new FileOutputStream("C:/java/hello")

      Following constructor takes a file object to create an output stream object to write the file. First, we create a file object using File() method as follows −

      File f = new File("C:/java/hello");
      OutputStream f = new FileOutputStream(f);

      Once you have OutputStream object in hand, then there is a list of helper methods, which can be used to write to stream or to do other operations on the stream.
    `,
  },
  // table image
  {
    type: "image",
    value: "Chapter_6_table_7.png",
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      There are other important output streams available, for more detail you can refer to the following links −
    `,
  },
  // list
  {
    type: "list",
    ignore: "true",
    value: [
      "ByteArrayOutputStream",
      "DataOutputStream",
    ],
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Following is the example to demonstrate InputStream and OutputStream −
    `,
  },
  // code
  {
    type: "code",
    value: `
      import java.io.*;
      public class fileStreamTest {
       
         public static void main(String args[]) {
         
            try {
               byte bWrite [] = {11,21,3,40,5};
               OutputStream os = new FileOutputStream("test.txt");
               for(int x = 0; x < bWrite.length ; x++) {
                  os.write( bWrite[x] );   // writes the bytes
               }
               os.close();
           
               InputStream is = new FileInputStream("test.txt");
               int size = is.available();
       
               for(int i = 0; i < size; i++) {
                  System.out.print((char)is.read() + "  ");
               }
               is.close();
            } catch (IOException e) {
               System.out.print("Exception");
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
      The above code would create file test.txt and would write given numbers in binary format. Same would be the output on the stdout screen.
    `,
  },
  // header
  {
    type: "header",
    value: "File Navigation and I/O",
  },
  // context
  {
    type: "content-start",
    value: `
      There are several other classes that we would be going through to get to know the basics of File Navigation and I/O.
    `,
  },
  // list
  {
    type: "list",
    value: [
      "File Class",
      "FileReader Class",
      "FileWriter Class",
    ],
  },
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/coKufdNKEnY",
  },
  // header
  {
    type: "header",
    value: "Directories in Java",
  },
  // context
  {
    type: "content-start",
    value: `
      A directory is a File which can contain a list of other files and directories. You use File object to create directories, to list down files available in a directory. For complete detail, check a list of all the methods which you can call on File object and what are related to directories.
    `,
  },
  // header
  {
    type: "header",
    value: "Creating Directories",
  },
  // context
  {
    type: "content-start",
    ignore: "true",
    value: `
      There are two useful File utility methods, which can be used to create directories −

      The mkdir( ) method creates a directory, returning true on success and false on failure. Failure indicates that the path specified in the File object already exists, or that the directory cannot be created because the entire path does not exist yet.

      The mkdirs() method creates both a directory and all the parents of the directory.

    Following example creates "/tmp/user/java/bin" directory −
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
      public class CreateDir {
       
         public static void main(String args[]) {
            String dirname = "/tmp/user/java/bin";
            File d = new File(dirname);
            
            // Create directory now.
            d.mkdirs();
         }
      }
    `,
  },
  // content
  {
    type: "content",
    ignore: "true",
    value: `
      Compile and execute the above code to create "/tmp/user/java/bin".
    `,
  },
  // content
  {
    type: "content",
    value: `
      Note − Java automatically takes care of path separators on UNIX and Windows as per conventions. If you use a forward slash (/) on a Windows version of Java, the path will still resolve correctly.
    `,
  },
  // header
  {
    type: "header",
    value: "Listing Directories",
  },
  // context
  {
    type: "content-start",
    ignore: "true",
    value: `
      You can use list( ) method provided by File object to list down all the files and directories available in a directory as follows −

      Example
    `,
  },
  // code
  {
    type: "code",
    value: `
      import java.io.File;
      public class ReadDir {
       
         public static void main(String[] args) {
            File file = null;
            String[] paths;
        
            try {      
               // create new file object
               file = new File("/tmp");
       
               // array of files and directory
               paths = file.list();
       
               // for each name in the path array
               for(String path:paths) {
                  // prints filename and directory name
                  System.out.println(path);
               }
            } catch (Exception e) {
               // if any error occurs
               e.printStackTrace();
            }
         }
    `,
  },
  // context
  {
    type: "content-start",
    ignore: "true",
    value: `
      This will produce the following result based on the directories and files available in your /tmp directory −

      Output

      test1.txt
      test2.txt
      ReadDir.java
      ReadDir.class
    `,
  },
  // link video
  {
    type: "video",
    value: "https://youtube.com/embed/JOQ2AErgDBE",
  },
]