export function Chapter_4() {
  return [
    // title
    {
      type: "title",
      value: "Chapter 4",
    },
    // subtitle
    {
      type: "subtitle",
      value: "If statement",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      If statement consists a condition, followed by statement or a set 
      of statements as shown below:
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      value: `
      if(condition){
        Statement(s);
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Example of if statement
      
      `,
    },
    //code
    {
      type: "code",
      value: `
      public class IfStatementExample {
        
        public static void main(String args[]){
          int num=70;
          if( num < 100 ){
            /* This println statement will only execute,
            * if the above condition is true
            */
            System.out.println("number is less than 100");
          }
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Output:
      
      number is less than 100
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/DOlg2dBrErc",
    },
    // header
    {
      type: "header",
      value: "If else statement in Java",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      This is how an if-else statement looks:
      `,
    },
    //code
    {
      type: "code",
      value: `
      if(condition) {
        Statement(s);
      }
      else {
        Statement(s);
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Example of if-else statement
      
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      value: `
      public class IfElseExample {
        
        public static void main(String args[]){
          int num=120;
          if( num < 50 ){
            System.out.println("num is less than 50");
          }
          else {
            System.out.println("num is greater than or equal 50");
          }
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Output:
      
      num is greater than or equal 50
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/-VeUElwL27I",
    },
    // header
    {
      type: "header",
      value: "if-else-if Statement",
    },
    // context
    {
      type: "content-start",
      value: `
      if-else-if statement is used when we need to check multiple conditions. In this 
      statement we have only one “if” and one “else”, however we can have multiple 
      “else if”. It is also known as if else if ladder. 
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      value: `
      if(condition_1) {
        /*if condition_1 is true execute this*/
        statement(s);
      }
      else if(condition_2) {
        /* execute this if condition_1 is not met and
        * condition_2 is met
        */
        statement(s);
      }
      else if(condition_3) {
        /* execute this if condition_1 & condition_2 are
        * not met and condition_3 is met
        */
        statement(s);
      }
      .
      .
      .
      else {
        /* if none of the condition is true
        * then these statements gets executed
        */
        statement(s);
      }
      `,
    },
    {
      type: "content",
      value: `
      Note: The most important point to note here is that in if-else-if statement, as soon as the 
      condition is met, the corresponding set of statements get executed, rest gets ignored. 
      If none of the condition is met then the statements inside “else” gets executed.
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Example of if-else-if
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      value: `
      public class IfElseIfExample {
        
        public static void main(String args[]){
          int num=1234;
          if(num <100 && num>=1) {
            System.out.println("Its a two digit number");
          }
          else if(num <1000 && num>=100) {
            System.out.println("Its a three digit number");
          }
          else if(num <10000 && num>=1000) {
            System.out.println("Its a four digit number");
          }
          else if(num <100000 && num>=10000) {
            System.out.println("Its a five digit number");			
          }
          else {
            System.out.println("number is not between 1 & 99999");			
          }
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Output:
      
      Its a four digit number
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/yvWnj_HfG6s",
    },
    // header
    {
      type: "header",
      value: "Nested if statement",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      When there is an if statement inside another if statement then it is called the nested if statement.
      The structure of nested if looks like this:
      
      `,
    },
    //code
    {
      type: "code",
      value: `
      if(condition_1) {
        Statement1(s);
        
        if(condition_2) {
          Statement2(s);
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Statement1 would execute if the condition_1 is true. Statement2 would only execute if both the 
      conditions( condition_1 and condition_2) are true.
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Example of Nested if statement
      public class NestedIfExample {
        
        `,
      },
      //code
      {
        type: "code",
        ignore: "true",
        value: `
        public static void main(String args[]){
          int num=70;
          if( num < 100 ){ 
            System.out.println("number is less than 100"); 
            if(num > 50){
              System.out.println("number is greater than 50");
            }
          }
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Output:
      number is less than 100
      number is greater than 50
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/6sYZDA8JPhk",
    },
    // header
    {
      type: "header",
      value: "switch statement",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      A switch statement allows a variable to be tested for equality against a list of values.
      The syntax of the switch statement in Java is:
      `,
    },
    //code
    {
      type: "code",
      value: `
      switch (expression) {
        
        case value1:
        // code
        break;
        
        case value2:
        // code
        break;
        
        ...
        ...
        
        default:
        // default statements
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Example of switch statement
      `,
    },
    //code
    {
      type: "code",
      value: `
      // Java Program to check the size
      // using the switch...case statement
      
      class Main {
        public static void main(String[] args) {
          
          int number = 44;
          String size;
          
          // switch statement to check size
          switch (number) {
            
            case 29:
            size = "Small";
            break;
            
            case 42:
            size = "Medium";
            break;
            
            // match the value of week
            case 44:
            size = "Large";
            break;
            
            case 48:
            size = "Extra Large";
            break;
            
            default:
            size = "Unknown";
            break;
            
          }
          System.out.println("Size: " + size);
        }
      }
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Output:
      
      Size: Large
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/O4KGYGQvHmw",
    },
    // header
    {
      type: "header",
      value: "The ? : Operator",
    },
    // context
    {
      type: "content-start",
      value: `
      We have covered conditional operator ? : in the previous chapter which can be used to replace 
      if else statements. It has the following general form Where Exp1, Exp2, and Exp3 are expressions. 
      Notice the use and placement of the colon. To determine the value of the whole expression, 
      initially exp1 is evaluated.
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      Exp1 ? Exp2 : Exp3;
      
      Where Exp1, Exp2, and Exp3 are expressions. Notice the use and placement of the colon.
      To determine the value of the whole expression, initially exp1 is evaluated.
      `,
    },
    //list
    {
      type: "list",
      value: [
        "If the value of exp1 is true, then the value of Exp2 will be the value of the whole expression.",
        "If the value of exp1 is false, then Exp3 is evaluated and its value becomes the value of the entire expression.",
      ],
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/ln_vMXXXeDI",
    },
    // header
    {
      type: "header",
      value: "xxxValue()method",
    },
    // context
    {
      type: "content-start",
      value: `
      The method converts the value of the Number Object that invokes the method to 
      the primitive data type that is returned from the method. The wrapper classes 
      provide constructors, constants, and conversion methods for manipulating various data types.
      `,
    },
    // header
    {
      type: "content-start",
      ignore: "true",
      value: `
      method is used to convert an object to the valuexxx Number data type and return.
      `,
    },
    //list
    {
      type: "list",
      value: [
        "byte byteValue()",
        "short shortValue()",
        "int intValue()",
        "long longValue()",
        "float floatValue()",
        "double doubleValue()",
      ],
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
      Related methods and it's Description:
      `,
    },
    //table-image
    {
      type: "image",
      value: `chapter_4_image_1.png`,
    },
    //table-image
    {
      type: "image",
      value: `chapter_4_image_2.png`,
    },
    // content
    {
      type: "content",
      ignore: "true",
      value: `
      Float and Double define the following constants:
      `,
    },
    //table-image
    {
      type: "image",
      value: `chapter_4_image_3.png`,
    },
    // content
    {
      type: "content",
      value: `
      Number instance methods:
      `,
    },
    //table-image
    {
      type: "image",
      value: `chapter_4_image_4.png`,
    },
    //table-image
    {
      type: "image",
      value: `chapter_4_image_5.png`,
    },
    //table-image
    {
      type: "image",
      value: `chapter_4_image_6.png`,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/S85SkopShJo",
    },
    // header
    {
      type: "header",
      value: "Java Character Class",
    },
    // context
    {
      type: "content-start",
      ignore: "true",
      value: `
      Normally, when we work with characters, we use primitive data types char.
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
      char ch = 'a';
      
      // Unicode for uppercase Greek omega character
      char uniChar = '\\u039A'; 
      
      // an array of chars
      char[] charArray ={ 'a', 'b', 'c', 'd', 'e' };
      `,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      However in development, we come across situations where we need to use objects instead of primitive 
      data types. In order to achieve this, Java provides wrapper class Character for primitive data type char.
      The Character class offers a number of useful class (i.e., static) methods for manipulating characters. 
      You can create a Character object with the Character constructor −
      
      Character ch = new Character('a');
      
      The Java compiler will also create a Character object for you under some circumstances. For example, 
      if you pass a primitive char into a method that expects an object, the compiler automatically converts 
      the char to a Character for you. This feature is called autoboxing or unboxing, if the conversion goes the other way.
      
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
      // Here following primitive char 'a'
      // is boxed into the Character object ch
      Character ch = 'a';
      
      // Here primitive 'x' is boxed for method test,
      // return is unboxed to char 'c'
      char c = test('x');
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/vYEpVHi9_b8",
    },
    // header
    {
      type: "header",
      value: "Escape Sequences",
    },
    // context
    {
      type: "content-start",
      value: `
      A character preceded by a backslash (\\) is an escape sequence and has a special meaning to the compiler.
      The newline character (\\n) has been used frequently in this tutorial in System.out.println() statements 
      to advance to the next line after the string is printed.
      Following table shows the Java escape sequences:
      `,
    },
    //table-image
    {
      type: "image",
      value: `chapter_4_image_7.png`,
    },
    //content
    {
      type: "content",
      ignore: "true",
      value: `
      When an escape sequence is encountered in a print statement, the compiler interprets it accordingly.
      Example
      If you want to put quotes within quotes, you must use the escape sequence, \\", on the interior quotes −
      `,
    },
    //code
    {
      type: "code",
      ignore: "true",
      value: `
      public class Test {
        
        public static void main(String args[]) {
          System.out.println("She said \\"Hello!\\" to me.");
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
      
      She said "Hello!" to me.
      `,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/LsvVdx2IE4c",
    },
    // header
    {
      type: "header",
      value: "Character Methods",
    },
    // context
    {
      type: "content-start",
      value: `
      Following is the list of the important instance methods that all the subclasses of the Character class implement:
      `,
    },
    //table-image
    {
      type: "image",
      value: `chapter_4_image_8.png`,
    },
    // link video
    {
      type: "video",
      value: "https://youtube.com/embed/0tDMZFyfNpY",
    },
  ];
}
