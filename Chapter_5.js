[
// title
{
 type: "title",
 value: "Chapter 5",
},
// subtitle
{
 type: "subtitle",
 value: "Java String Class",
},
// context
{
 type: "content-start",
 value: `
   Strings, which are widely used in Java programming, are a sequence of characters. In Java programming language, strings are treated as objects.

   The Java platform provides the String class to create and manipulate strings.

 `,
},
// header
{
 type: "header",
 value: "Creating Strings",
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   The most direct way to create a string is to write −

   String greeting = "Hello world!";

   Whenever it encounters a string literal in your code, the compiler creates a String object with its value in this case, "Hello world!'.
 `,
},
// content
{
 type: "content",
 value: `
   As with any other object, you can create String objects by using the new keyword and a constructor. The String class has 11 constructors that allow you to provide the initial value of the string using different sources, such as an array of characters.
 `,
},
// header
{	
 type: "header",
 value: "Example",
},
// code
{
 type: "code",
 value: `
   public class StringDemo {

    public static void main(String args[]) {
       char[] helloArray = { 'h', 'e', 'l', 'l', 'o', '.' };
       String helloString = new String(helloArray);  
       System.out.println( helloString );
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
   hello.
 `,
},
// content
{
 type: "content",
 value: `
   Note − The String class is immutable, so that once it is created a String object cannot be changed. If there is a necessity to make a lot of modifications to Strings of characters, then you should use String Buffer & String Builder Classes.
 `,
},
// 	header
{
 type: "header",
 value: "String Length",
},
// content
{
 type: "content-start",
 value: `
   Methods used to obtain information about an object are known as accessor methods. One accessor method that you can use with strings is the length() method, which returns the number of characters contained in the string object.
 `,
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   The following program is an example of length(), method String class.

   Example
 `,
},
// code
{
 type: "code",
 value: `
   public class StringDemo {

   public static void main(String args[]) {
       String palindrome = "Dot saw I was Tod";
       int len = palindrome.length();
       System.out.println( "String Length is : " + len );
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
   String Length is : 17
 `,
},
// header
{
 type: "header",
 value: "Concatenating Strings",
},
// content
{
 type: "content-start",
 value: `
   The String class includes a method for concatenating two strings −

   string1.concat(string2);

   This returns a new string that is string1 with string2 added to it at the end. You can also use the concat() method with string literals, as in −

   "My name is ".concat("Zara");

   Strings are more commonly concatenated with the + operator, as in −

   "Hello," + " world" + "!"

   which results in −

   "Hello, world!"
 `,
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   Let us look at the following example −
 `,
},
// header
{
 type: "header",
 value: "Example",
},
// code
{
 type: "Code",
 value: `
   public class StringDemo {

    public static void main(String args[]) {
       String string1 = "saw I was ";
       System.out.println("Dot " + string1 + "Tod");
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
   Dot saw I was Tod
 `,
},
// header
{
 type: "header",
 value: "Creating Format Strings",
},
// content
{
 type: "content-start",
 value: `
   You have printf() and format() methods to print output with formatted numbers. The String class has an equivalent class method, format(), that returns a String object rather than a PrintStream object.

   Using String's static format() method allows you to create a formatted string that you can reuse, as opposed to a one-time print statement. For example, instead of −
 `,
},
// header
{	
 type: "header",
 value: "Example",
},
// code
{
 type: "code",
 value: `
   System.out.printf("The value of the float variable is " +
               "%f, while the value of the integer " +
               "variable is %d, and the string " +
               "is %s", floatVar, intVar, stringVar);
 `,
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   You can write −
 `,
},
// code
{
 type: "code",
 value: `
   String fs;
     fs = String.format("The value of the float variable is " +
                "%f, while the value of the integer " +
                "variable is %d, and the string " +
                "is %s", floatVar, intVar, stringVar);
       System.out.println(fs);
 `,
},
// header
{
 type: "header",
 value: "String Methods",
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   Here is the list of methods supported by String class −
 `,
},
// table image
{
 type: "image",
 value: "Chapter_5_table_1.png",
},
{
 type: "image",
 value: "Chapter_5_table_2.png",
},
{
 type: "image",
 value: "Chapter_5_table_3.png",
},
{
 type: "image",
 value: "Chapter_5_table_4.png",
},
{
 type: "image",
 value: "Chapter_5_table_5.png",
},
// link video
{
 type: "video",
 value: "https://youtube.com/embed/8mwYr2I1zeM",
},
// header
{
 type: "header",
 value: "Java - Arrays",
},
// content
{
 type: "content-start",
 value: `
   Java provides a data structure, the array, which stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.

   Instead of declaring individual variables, such as number0, number1, ..., and number99, you declare one array variable such as numbers and use numbers[0], numbers[1], and ..., numbers[99] to represent individual variables.

   This tutorial introduces how to declare array variables, create arrays, and process arrays using indexed variables.
 `,
},
// header
{
 type: "header",
 value: "Declaring Array Variables",
},
// content
{
 type: "content-start",
 value: `
   To use an array in a program, you must declare a variable to reference the array, and you must specify the type of array the variable can reference. Here is the syntax for declaring an array variable −
 `,
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   dataType[] arrayRefVar;   // preferred way.
   or
   dataType arrayRefVar[];  // works but not preferred way.
 `,
},
// content
{
 type: "content",
 value: `
   Note − The style dataType[] arrayRefVar is preferred. The style dataType arrayRefVar[] comes from the C/C++ language and was adopted in Java to accommodate C/C++ programmers.
 `,
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   Example
 The following code snippets are examples of this syntax −

 double[] myList;   // preferred way.
 or
 double myList[];   // works but not preferred way.
 `,
},
// header
{
 type: "header",
 value: "Creating Arrays",
},
// content
{
 type: "content-start",
 ignore: "true",
 value: `
   You can create an array by using the new operator with the following syntax 

   Syntax
   arrayRefVar = new dataType[arraySize];
 `,
},
// context
{
 type: "content",
 ignore: "true",
 value: `
   The above statement does two things −
 `,
},
// list
{
 type: "list",
 value: [
   "It creates an array using new dataType[arraySize]",
   "It assigns the reference of the newly created array to the variable arrayRefVar.",
 ],
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   Declaring an array variable, creating an array, and assigning the reference of the array to the variable can be combined in one statement, as shown below −

   dataType[] arrayRefVar = new dataType[arraySize];

   Alternatively you can create arrays as follows −

   dataType[] arrayRefVar = {value0, value1, ..., valuek};

   The array elements are accessed through the index. Array indices are 0-based; that is, they start from 0 to arrayRefVar.length-1.
 `,
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   Example

   Following statement declares an array variable, myList, creates an array of 10 elements of double type and assigns its reference to myList −

   double[] myList = new double[10];

   Following picture represents array myList. Here, myList holds ten double values and the indices are from 0 to 9.
 `,
},
// image
{
 type: "image",
 value: "Chapter_5_image_1.png",
},
// header
{
 type: "header",
 value: "Processing Arrays",
},
// content
{
 type: "content-start",
 value: `
   When processing array elements, we often use either for loop or foreach loop because all of the elements in an array are of the same type and the size of the array is known.
 `,
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   Example
   Here is a complete example showing how to create, initialize, and process arrays −x
 `,
},
// code
{
 type: "code",
 value: `
   public class TestArray {

    public static void main(String[] args) {
   double[] myList = {1.9, 2.9, 3.4, 3.5};

   // Print all the array elements
   for (int i = 0; i < myList.length; i++) {
      System.out.println(myList[i] + " ");
   }
  
   // Summing all elements
   double total = 0;
   for (int i = 0; i < myList.length; i++) {
      total += myList[i];
   }
   System.out.println("Total is " + total);
   
   // Finding the largest element
   double max = myList[0];
   for (int i = 1; i < myList.length; i++) {
      if (myList[i] > max) max = myList[i];
   }
   System.out.println("Max is " + max);  
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
   1.9
   2.9
   3.4
   3.5
   Total is 11.7
   Max is 3.5
 `,
},
// header
{
 type: "header",
 value: "The foreach Loops",
},
// content
{
 type: "content-start",
 value: `
   JDK 1.5 introduced a new for loop known as foreach loop or enhanced for loop, which enables you to traverse the complete array sequentially without using an index variable.
 `,
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   Example
   The following code displays all the elements in the array myList −
 `,
},
// code
{
 type: "code",
 value: `
   public class TestArray {

 public static void main(String[] args) {
   double[] myList = {1.9, 2.9, 3.4, 3.5};

   // Print all the array elements
   for (double element: myList) {
      System.out.println(element);
   }
}
}
 `,
},
// content
{
 type: "content",
 value: `
   This will produce the following result −

   Output
   1.9
   2.9
   3.4
   3.5
 `,
},
// link video
{
 type: "video",
 value: "https://youtube.com/embed/UcsoLgBaGmg",
},
// header
{
 type: "header",
 value: "Passing Arrays to Methods",
},
// content
{
 type: "content-start",
 value: `
   Just as you can pass primitive type values to methods, you can also pass arrays to methods. For example, the following method displays the elements in an int array −
 `,
},
// header
{
 type: "header",
 value: "Example",
},
// code
{
 type: "code",
 value: `
   public static void printArray(int[] array) {
     for (int i = 0; i < array.length; i++) {
       System.out.print(array[i] + " ");
     }
 }
 `,
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   You can invoke it by passing an array. For example, the following statement invokes the printArray method to display 3, 1, 2, 6, 4, and 2 −

   Example
   printArray(new int[]{3, 1, 2, 6, 4, 2});
 `,
},
// link video
{
 type: "video",
 value: "https://youtube.com/embed/t90WLRTS3hI",
},
// header
{
 type: "header",
 value: "Returning an Array from a Method",
},
// content
{
 type: "content-start",
 value: `
   A method may also return an array.
 `,
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   For example, the following method returns an array that is the reversal of another array −

   Example
 `,
},
// code
{
 type: "code",
 value: `
   public static int[] reverse(int[] list) {
      int[] result = new int[list.length];
    
      for (int i = 0, j = result.length - 1; i < list.length; i++, j--) {
         result[j] = list[i];
      }
      return result;
   }
 `,
},
// link video
{
 type: "video",
 value: "https://youtube.com/embed/IlQYpv6Ze90",
},
// header
{
 type: "header",
 value: "The Arrays Class",
},
// content
{
 type: "content-start",
 value : `
   The java.util.Arrays class contains various static methods for sorting and searching arrays, comparing arrays, and filling array elements. These methods are overloaded for all primitive types.
 `,
},
// table image
{ 
 type: "image",
 value: "Chapter_5_table_6.png",
},
// link video
{
 type: "video",
 value: "https://youtube.com/embed/hhScibE9dJw",
},
// header
{
 type: "header",
 value: "Java - Date and Time",
},
// content
{
 type: "content-start",
 value: `
   Java provides the Date class available in java.util package, this class encapsulates the current date and time.
 `,
},
// context
{
 type: "content",
 ignore: "true",
 value: `
   The Date class supports two constructors as shown in the following table.
 `,
},
// table image
{
 type: "image",
 value: "Chapter_5_table_7.png",
},
// context
{
 type: "content",
 ignore: "true",
 value: `
   Following are the methods of the date class.
 `,
},
// table image 
{
 type: "image",
 value: "Chapter_5_table_8.png",
},
// table image 
{
 type: "image",
 value: "Chapter_5_table_9.png",
},
// header
{
 type: "header",
 value: "Getting Current Date and Time",
},
// content
{
 type: "content-start",
 value: `
   This is a very easy method to get current date and time in Java. You can use a simple Date object with toString() method to print the current date and time as follows −
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
 import java.util.Date;
 public class DateDemo {

   public static void main(String args[]) {
     // Instantiate a Date object
     Date date = new Date();

     // display time and date using toString()
     System.out.println(date.toString());
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
   on May 04 09:51:52 CDT 2009
 `,
},
// header
{
 type: "header",
 value: "Date Comparison",
},
// content
{
 type: "content-start",
 ignore: "true",
 value: `
   Following are the three ways to compare two dates −
 `,
},
// list
{
 type: "list",
 value: [
   "You can use getTime( ) to obtain the number of milliseconds that have elapsed since midnight, January 1, 1970, for both objects and then compare these two values.",
   "You can use the methods before( ), after( ), and equals( ). Because the 12th of the month comes before the 18th, for example, new Date(99, 2, 12).before(new Date (99, 2, 18)) returns true.",
   "You can use the compareTo( ) method, which is defined by the Comparable interface and implemented by Date.",
 ],
},
// link video
{
 type: "video",
 value: "https://youtube.com/embed/9IMatdwhjLE",
},
// header
{
 type: "header",
 value: "Date Formatting Using SimpleDateFormat",
},
// content
{
 type: "content-start",
 value: `
   SimpleDateFormat is a concrete class for formatting and parsing dates in a locale-sensitive manner. SimpleDateFormat allows you to start by choosing any user-defined patterns for date-time formatting.
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
   import java.util.*;
   import java.text.*;
    
   public class DateDemo {
    
      public static void main(String args[]) {
         Date dNow = new Date( );
         SimpleDateFormat ft = 
         new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
    
         System.out.println("Current Date: " + ft.format(dNow));
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
   Current Date: Sun 2004.07.18 at 04:14:09 PM PDT
 `,
},
// link video
{
 type: "video",
 value: "https://youtube.com/embed/fX09hPNylwU",
},
// header
{
 type: "header",
 value: "Simple DateFormat Format Codes",
},
// context
{
 type: "content-start",
 value: `
   To specify the time format, use a time pattern string. In this pattern, all ASCII letters are reserved as pattern letters, which are defined as the following −
 `,
},
// table image
{
 type: "image",
 value: "Chapter_5_table_10.png",
},
// header
{
 type: "header",
 value: "Date Formatting Using printf",
},
// content
{
 type: "contemt-start",
 value: `
   Date and time formatting can be done very easily using printf method. You use a two-letter format, starting with t and ending in one of the letters of the table as shown in the following code.
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
   import java.util.Date;
   public class DateDemo {
    
      public static void main(String args[]) {
         // Instantiate a Date object
         Date date = new Date();
    
         // display time and date
         String str = String.format("Current Date/Time : %tc", date );
    
         System.out.printf(str);
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
   Current Date/Time : Sat Dec 15 16:37:57 MST 2012

   It would be a bit silly if you had to supply the date multiple times to format each part. For that reason, a format string can indicate the index of the argument to be formatted.

   The index must immediately follow the % and it must be terminated by a $.
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
   import java.util.Date;
   public class DateDemo {
    
      public static void main(String args[]) {
         // Instantiate a Date object
         Date date = new Date();
     
         // display time and date
         System.out.printf("%1$s %2$tB %2$td, %2$tY", "Due date:", date);
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
   Due date: February 09, 2004

   Alternatively, you can use the < flag. It indicates that the same argument as in the preceding format specification should be used again.
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
   import java.util.Date;
   public class DateDemo {
    
      public static void main(String args[]) {
         // Instantiate a Date object
         Date date = new Date();
     
         // display formatted date
         System.out.printf("%s %tB %<te, %<tY", "Due date:", date);
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
   Due date: February 09, 2004
 `,
},
// header
{
 type: "header",
 value: "Date and Time Conversion Characters",
},
// image
{
 type: "image",
 value: "Chapter_5_table_11.png",
},
// image
{
 type: "image",
 value: "Chapter_5_table_12.png",
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   There are other useful classes related to Date and time. For more details, you can refer to Java Standard documentation.
 `,
},
// header
{
 type: "header",
 value: "Parsing Strings into Dates",
},
// content
{
 type: "content-start",
 value: `
   The SimpleDateFormat class has some additional methods, notably parse( ), which tries to parse a string according to the format stored in the given SimpleDateFormat object.
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
   import java.util.*;
   import java.text.*;
     
   public class DateDemo {
    
      public static void main(String args[]) {
         SimpleDateFormat ft = new SimpleDateFormat ("yyyy-MM-dd"); 
         String input = args.length == 0 ? "1818-11-11" : args[0]; 
    
         System.out.print(input + " Parses as "); 
         Date t;
         try {
            t = ft.parse(input); 
            System.out.println(t); 
         } catch (ParseException e) { 
            System.out.println("Unparseable using " + ft); 
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
   A sample run of the above program would produce the following result −

   Output
   1818-11-11 Parses as Wed Nov 11 00:00:00 EST 1818
 `,
},
// header
{
 type: "header",
 value: "Sleeping for a While",
},
// content
{
 type: "content-start",
 value: `
   You can sleep for any period of time from one millisecond up to the lifetime of your computer. For example, the following program would sleep for 3 seconds −
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
   import java.util.*;
   public class SleepDemo {
    
      public static void main(String args[]) {
         try { 
            System.out.println(new Date( ) + "\n"); 
            Thread.sleep(5*60*10); 
            System.out.println(new Date( ) + "\n"); 
         } catch (Exception e) {
            System.out.println("Got an exception!"); 
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
   Sun May 03 18:04:41 GMT 2009
   Sun May 03 18:04:51 GMT 2009
 `,
},
// link video
{
 type: "video",
 value: "https://youtube.com/embed/eJdR5xpaAHA",
},
// header
{
 type: "header",
 value: "Measuring Elapsed Time",
},
// content
{
 type: "content-start",
 ignore: "true",
 value: `
   Sometimes, you may need to measure point in time in milliseconds. So let's re-write the above example once again −
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
   import java.util.*;
   public class DiffDemo {
    
      public static void main(String args[]) {
         try {
            long start = System.currentTimeMillis( );
            System.out.println(new Date( ) + "\n");
            
            Thread.sleep(5*60*10);
            System.out.println(new Date( ) + "\n");
            
            long end = System.currentTimeMillis( );
            long diff = end - start;
            System.out.println("Difference is : " + diff);
         } catch (Exception e) {
            System.out.println("Got an exception!");
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
   Sun May 03 18:16:51 GMT 2009
   Sun May 03 18:16:57 GMT 2009
   Difference is : 5993
 `,
},
// link video
{
 type: "video",
 value: "https://youtube.com/embed/2gmwSXXqFmI",
},
// header
{
 type: "header",
 value: "GregorianCalendar Class",
},
// 	content
{
 type: "content-start",
 value: `
   GregorianCalendar is a concrete implementation of a Calendar class that implements the normal Gregorian calendar with which you are familiar. We did not discuss Calendar class in this tutorial, you can look up standard Java documentation for this.

   The getInstance( ) method of Calendar returns a GregorianCalendar initialized with the current date and time in the default locale and time zone. GregorianCalendar defines two fields: AD and BC. These represent the two eras defined by the Gregorian calendar.
 `,
},
// content
{
 type: "content",
 value: `
   There are also several constructors for GregorianCalendar objects −
 `,
},
// table image
{
 type: "image",
 value: "Chapter_5_table_13.png",
},
// content
{
 type: "content",
 ignore: "true",
 value: `
   Here is the list of few useful support methods provided by GregorianCalendar class −
 `,
},
// table image
{
 type: "image",
 value: "Chapter_5_table_14.png",
},
// table image
{
 type: "image",
 value: "Chapter_5_table_15.png",
},
// table image
{
 type: "image",
 value: "Chapter_5_table_16.png",
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
   import java.util.*;
   public class GregorianCalendarDemo {
    
      public static void main(String args[]) {
         String months[] = {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
            "Oct", "Nov", "Dec"};
         
         int year;
         // Create a Gregorian calendar initialized
         // with the current date and time in the
         // default locale and timezone.
         
         GregorianCalendar gcalendar = new GregorianCalendar();
         
         // Display current time and date information.
         System.out.print("Date: ");
         System.out.print(months[gcalendar.get(Calendar.MONTH)]);
         System.out.print(" " + gcalendar.get(Calendar.DATE) + " ");
         System.out.println(year = gcalendar.get(Calendar.YEAR));
         System.out.print("Time: ");
         System.out.print(gcalendar.get(Calendar.HOUR) + ":");
         System.out.print(gcalendar.get(Calendar.MINUTE) + ":");
         System.out.println(gcalendar.get(Calendar.SECOND));
    
         // Test if the current year is a leap year
         if(gcalendar.isLeapYear(year)) {
            System.out.println("The current year is a leap year");
         }else {
            System.out.println("The current year is not a leap year");
         }
      }
   }
 `,
},
// content
{
 type: "content",
 value: `
   This will produce the following result −

   Output
   Date: Apr 22 2009
   Time: 11:25:27
   The current year is not a leap year
 `,
},
]