export function Chapter_9(){
	return[
		// title
		{
			type: "title",
			value: "Chapter 9",
		},
		// subtitle
		{
			type: "subtitle",
			value: "Java - Data Structures",
		},
		// context
		{
			type: "content-start",
			value: `
			The data structures provided by the Java utility package are very powerful and perform a wide range of functions.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			These data structures consist of the following interface and classes −
			`,
		},
		// list
		{
			type: "list",
			ignore: "true",
			value: [
				"Enumeration",
				"BitSet",
				"Vector",
				"Stack",
				"Dictionary",
				"Hashtable",
				"Properties",
			],
		},
		// content
		{
			type: "content-start",
			value: `
			All these classes are now legacy and Java-2 has introduced a new framework called Collections Framework, which is discussed in the next chapter. −
			`,
		},
		// header
		{
			type: "header",
			value: "The Enumeration",
		},
		// content
		{
			type: "content-start",
			value: `
			The Enumeration interface isn't itself a data structure, but it is very important within the context of other data structures. The Enumeration interface defines a means to retrieve successive elements from a data structure.
			
			For example, Enumeration defines a method called nextElement that is used to get the next element in a data structure that contains multiple elements.
			`,
		},
		// header
		{
			type: "header",
			value: "The BitSet",
		},
		// content
		{
			type: "content-start",
			value: `
			The BitSet class implements a group of bits or flags that can be set and cleared individually.
			
			This class is very useful in cases where you need to keep up with a set of Boolean values; you just assign a bit to each value and set or clear it as appropriate.
			`,
		},
		// header
		{
			type: "header",
			value: "The Vector",
		},
		// content
		{
			type: "content-start",
			value: `
			The Vector class is similar to a traditional Java array, except that it can grow as necessary to accommodate new elements.
			
			Like an array, elements of a Vector object can be accessed via an index into the vector.
			
			The nice thing about using the Vector class is that you don't have to worry about setting it to a specific size upon creation; it shrinks and grows automatically when necessary.
			`,
		},
		// header
		{
			type: "header",
			value: "The Stack",
		},
		// content
		{
			type: "content-start",
			value: `
			The Stack class implements a last-in-first-out (LIFO) stack of elements.
			
			You can think of a stack literally as a vertical stack of objects; when you add a new element, it gets stacked on top of the others.
			
			When you pull an element off the stack, it comes off the top. In other words, the last element you added to the stack is the first one to come back off.
			`,
		},
		// header
		{
			type: "header",
			value: "The Dictionary",
		},
		// content
		{
			type: "content-start",
			value: `
			The Dictionary class is an abstract class that defines a data structure for mapping keys to values.
			
			This is useful in cases where you want to be able to access data via a particular key rather than an integer index.
			
			Since the Dictionary class is abstract, it provides only the framework for a key-mapped data structure rather than a specific implementation.
			`,
		},
		// header
		{
			type: "header",
			value: "The Hashtable",
		},
		// content
		{
			type: "content-start",
			value: `
			The Hashtable class provides a means of organizing data based on some user-defined key structure.
			
			For example, in an address list hash table you could store and sort data based on a key such as ZIP code rather than on a person's name.
			
			The specific meaning of keys with regard to hash tables is totally dependent on the usage of the hash table and the data it contains.
			`,
		},
		// header
		{
			type: "header",
			value: "The Properties",
		},
		// content
		{
			type: "content-start",
			value: `
			Properties is a subclass of Hashtable. It is used to maintain lists of values in which the key is a String and the value is also a String.
			
			The Properties class is used by many other Java classes. For example, it is the type of object returned by System.getProperties( ) when obtaining environmental values.z
			`,
		},
		// header
		{
			type: "header",
			value: "Java - Collections Framework",
		},
		// context
		{
			type: "content-start",
			value: `
			Prior to Java 2, Java provided ad hoc classes such as Dictionary, Vector, Stack, and Properties to store and manipulate groups of objects. Although these classes were quite useful, they lacked a central, unifying theme. Thus, the way that you used Vector was different from the way that you used Properties.
			`,
		},
		// list
		{
			type: "list",
			value: [
				"The collections framework was designed to meet several goals, such as −",
				"The framework had to be high-performance. The implementations for the fundamental collections (dynamic arrays, linked lists, trees, and hashtables) were to be highly efficient.",
				"The framework had to allow different types of collections to work in a similar manner and with a high degree of interoperability.",
				"The framework had to extend and/or adapt a collection easily.",
			],
		},
		// context
		{
			type: "content-start",
			ignore: "true",
			value: `
			Towards this end, the entire collections framework is designed around a set of standard interfaces. Several standard implementations such as LinkedList, HashSet, and TreeSet, of these interfaces are provided that you may use as-is and you may also implement your own collection, if you choose.
			
			A collections framework is a unified architecture for representing and manipulating collections. All collections frameworks contain the following −
			`,
		},
		// list
		{
			type: "list",
			value: [
				"Interfaces − These are abstract data types that represent collections. Interfaces allow collections to be manipulated independently of the details of their representation. In object-oriented languages, interfaces generally form a hierarchy.",
				"Implementations, i.e., Classes − These are the concrete implementations of the collection interfaces. In essence, they are reusable data structures.",
				"Algorithms − These are the methods that perform useful computations, such as searching and sorting, on objects that implement collection interfaces. The algorithms are said to be polymorphic: that is, the same method can be used on many different implementations of the appropriate collection interface.",
			],
		},
		// context
		{
			type: "content-start",
			ignore: "true",
			value: `
			In addition to collections, the framework defines several map interfaces and classes. Maps store key/value pairs. Although maps are not collections in the proper use of the term, but they are fully integrated with collections.
			`,
		},
		// header
		{
			type: "header",
			value: "The Collection Interfaces",
		},
		// context
		{
			type: "content-start",
			ignore: "true",
			value: `
			The collections framework defines several interfaces. This section provides an overview of each interface −
			`,
		},
		// table image
		{
			type: "image",
			value: "chapter_9_table_1.png",
		},
		// link video
		{
			type: "video",
			value: "https://youtube.com/embed/Nk6HwCfDaS8",
		},
		// header
		{
			type: "header",
			value: "The Collection Classes",
		},
		// context
		{
			type: "content-start",
			ignore: "true",
			value: `
			Java provides a set of standard collection classes that implement Collection interfaces. Some of the classes provide full implementations that can be used as-is and others are abstract class, providing skeletal implementations that are used as starting points for creating concrete collections.
			
			The standard collection classes are summarized in the following table −
			`,
		},
		// table image
		{
			type: "image",
			value: "chapter_9_table_2.png",
		},
		// table image
		{
			type: "image",
			value: "chapter_9_table_3.png",
		},
		// context
		{
			type: "content-start",
			ignore: "true",
			value: `
			The AbstractCollection, AbstractSet, AbstractList, AbstractSequentialList and AbstractMap classes provide skeletal implementations of the core collection interfaces, to minimize the effort required to implement them.
			
			The following legacy classes defined by java.util have been discussed in the previous chapter −
			`,
		},
		// table image
		{
			type: "image",
			value: "chapter_9_table_4.png",
		},
		// header
		{
			type: "header",
			value: "The Collection Algorithms",
		},
		// content
		{
			type: "content-start",
			value: `
			The collections framework defines several algorithms that can be applied to collections and maps. These algorithms are defined as static methods within the Collections class.
			
			Several of the methods can throw a ClassCastException, which occurs when an attempt is made to compare incompatible types, or an UnsupportedOperationException, which occurs when an attempt is made to modify an unmodifiable collection.
			`,
		},
		// context
		{
			type: "content",
			ignore: "true",
			value: `
			The methods defined in collection framework's algorithm are summarized in the following table −
			`,
		},
		// table image
		{
			type: "image",
			value: "chapter_9_table_5.png",
		},
		// table image
		{
			type: "image",
			value: "chapter_9_table_6.png",
		},
		// table image
		{
			type: "image",
			value: "chapter_9_table_7.png",
		},
		// table image
		{
			type: "image",
			value: "chapter_9_table_8.png",
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Example
			Following is an example, which demonstrates various algorithms.
			`,
		},
		// code
		{
			type: "code",
			value: `
			import java.util.*;
			public class AlgorithmsDemo {
				
				public static void main(String args[]) {
					
					// Create and initialize linked list
					LinkedList ll = new LinkedList();
					ll.add(new Integer(-8));
					ll.add(new Integer(20));
					ll.add(new Integer(-20));
					ll.add(new Integer(8));
					
					// Create a reverse order comparator
					Comparator r = Collections.reverseOrder();
					
					// Sort list by using the comparator
					Collections.sort(ll, r);
					
					// Get iterator
					Iterator li = ll.iterator();
					System.out.print("List sorted in reverse: ");
					
					while(li.hasNext()) {
						System.out.print(li.next() + " ");
					}
					System.out.println();
					Collections.shuffle(ll);
					
					// display randomized list
					li = ll.iterator();
					System.out.print("List shuffled: ");
					
					while(li.hasNext()) {
						System.out.print(li.next() + " ");
					}
					
					System.out.println();
					System.out.println("Minimum: " + Collections.min(ll));
					System.out.println("Maximum: " + Collections.max(ll));
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
			List sorted in reverse: 20 8 -8 -20
			List shuffled: 20 -20 8 -8
			Minimum: -20
			Maximum: 20
			`,
		},
		// header
		{
			type: "header",
			value: "How to Use an Iterator ?",
		},
		// context
		{
			type: "content",
			value: `
			Often, you will want to cycle through the elements in a collection. For example, you might want to display each element.
			
			The easiest way to do this is to employ an iterator, which is an object that implements either the Iterator or the ListIterator interface.
			
			Iterator enables you to cycle through a collection, obtaining or removing elements. ListIterator extends Iterator to allow bidirectional traversal of a list and the modification of elements.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			In general, to use an iterator to cycle through the contents of a collection, follow these steps −
			`,
		},
		// list
		{
			type: "list",
			value: [
				"Obtain an iterator to the start of the collection by calling the collection's iterator( ) method.",
				"Set up a loop that makes a call to hasNext( ). Have the loop iterate as long as hasNext( ) returns true.",
				"Within the loop, obtain each element by calling next( ).",
			],
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			For collections that implement List, you can also obtain an iterator by calling ListIterator.
			`,
		},
		// header
		{
			type: "header",
			value: "The Methods Declared by Iterator",
		},
		// table image
		{
			type: "image",
			value: "chapter_9_table_9.png",
		},
		// header
		{
			type: "header",
			value: "The Methods Declared by ListIterator",
		},
		// table image
		{
			type: "image",
			value: "chapter_9_table_10.png",
		},
		//  content
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
			public class IteratorDemo {
				
				public static void main(String args[]) {
					// Create an array list
					ArrayList al = new ArrayList();
					
					// add elements to the array list
					al.add("C");
					al.add("A");
					al.add("E");
					al.add("B");
					al.add("D");
					al.add("F");
					
					// Use iterator to display contents of al
					System.out.print("Original contents of al: ");
					Iterator itr = al.iterator();
					
					while(itr.hasNext()) {
						Object element = itr.next();
						System.out.print(element + " ");
					}
					System.out.println();
					
					// Modify objects being iterated
					ListIterator litr = al.listIterator();
					
					while(litr.hasNext()) {
						Object element = litr.next();
						litr.set(element + "+");
					}
					System.out.print("Modified contents of al: ");
					itr = al.iterator();
					
					while(itr.hasNext()) {
						Object element = itr.next();
						System.out.print(element + " ");
					}
					System.out.println();
					
					// Now, display the list backwards
					System.out.print("Modified list backwards: ");
					
					while(litr.hasPrevious()) {
						Object element = litr.previous();
						System.out.print(element + " ");
					}
					System.out.println();
				}
			}
			`,
		},
		//  content
		{
			type: "content",
			ignore: "true",
			value: `
			This will produce the following result −
			
			Output
			Original contents of al: C A E B D F
			Modified contents of al: C+ A+ E+ B+ D+ F+
			Modified list backwards: F+ D+ B+ E+ A+ C+
			`,
		},
		// link video
		{
			type: "video",
			value: "https://youtube.com/embed/f8vWVcsjRxE",
		},
		// header
		{
			type: "header",
			value: "Java - How to Use Comparator?",
		},
		// context
		{
			type: "content-start",
			value: `
			Both TreeSet and TreeMap store elements in sorted order. However, it is the comparator that defines precisely what sorted order means.
			
			The Comparator interface defines two methods: compare( ) and equals( ). The compare( ) method, shown here, compares two elements for order −
			`,
		},
		// header
		{
			type: "header",
			value: "The compare Method",
		},
		// code
		{
			type: "code",
			ignore: "true",
			value: `
			int compare(Object obj1, Object obj2)
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			obj1 and obj2 are the objects to be compared. This method returns zero if the objects are equal. It returns a positive value if obj1 is greater than obj2. Otherwise, a negative value is returned.
			
			By overriding compare( ), you can alter the way that objects are ordered. For example, to sort in a reverse order, you can create a comparator that reverses the outcome of a comparison.
			`,
		},
		// header
		{
			type: "header",
			value: "The equals Method",
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			The equals( ) method, shown here, tests whether an object equals the invoking comparator −
			`,
		},
		// code
		{
			type: "code",
			ignore: "true",
			value: `
			boolean equals(Object obj)
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			obj is the object to be tested for equality. The method returns true if obj and the invoking object are both Comparator objects and use the same ordering. Otherwise, it returns false.
			
			Overriding equals( ) is unnecessary, and most simple comparators will not do so.
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
			import java.util.*;
			
			class Dog implements Comparator<Dog>, Comparable<Dog> {
				private String name;
				private int age;
				Dog() {
				}
				
				Dog(String n, int a) {
					name = n;
					age = a;
				}
				
				public String getDogName() {
					return name;
				}
				
				public int getDogAge() {
					return age;
				}
				
				// Overriding the compareTo method
				public int compareTo(Dog d) {
					return (this.name).compareTo(d.name);
				}
				
				// Overriding the compare method to sort the age 
				public int compare(Dog d, Dog d1) {
					return d.age - d1.age;
				}
			}
			
			public class Example {
				
				public static void main(String args[]) {
					// Takes a list o Dog objects
					List<Dog> list = new ArrayList<Dog>();
					
					list.add(new Dog("Shaggy", 3));
					list.add(new Dog("Lacy", 2));
					list.add(new Dog("Roger", 10));
					list.add(new Dog("Tommy", 4));
					list.add(new Dog("Tammy", 1));
					Collections.sort(list);   // Sorts the array list
					
					for(Dog a: list)   // printing the sorted list of names
					System.out.print(a.getDogName() + ", ");
					
					// Sorts the array list using comparator
					Collections.sort(list, new Dog());
					System.out.println(" ");
					
					for(Dog a: list)   // printing the sorted list of ages
					System.out.print(a.getDogName() +"  : "+ a.getDogAge() + ", ");
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
			Lacy, Roger, Shaggy, Tammy, Tommy,
			Tammy  : 1, Lacy  : 2, Shaggy  : 3, Tommy  : 4, Roger  : 10,
			`,
		},
		// content
		{
			type: "content",
			value: `
			Note − Sorting of the Arrays class is as the same as the Collections.
			`,
		},
		// link video
		{
			type: "video",
			value: "https://youtube.com/embed/FAdE9aJEzDM",
		},
		// header
		{
			type: "header",
			value: "Java - Generics",
		},
		// content
		{
			type: "content-start",
			value: `
			It would be nice if we could write a single sort method that could sort the elements in an Integer array, a String array, or an array of any type that supports ordering.
			
			Java Generic methods and generic classes enable programmers to specify, with a single method declaration, a set of related methods, or with a single class declaration, a set of related types, respectively.
			
			Generics also provide compile-time type safety that allows programmers to catch invalid types at compile time.
			
			Using Java Generic concept, we might write a generic method for sorting an array of objects, then invoke the generic method with Integer arrays, Double arrays, String arrays and so on, to sort the array elements.
			`,
		},
		// header
		{
			type: "header",
			value: "Generic Methods",
		},
		// content
		{
			type: "content-start",
			value: `
			You can write a single generic method declaration that can be called with arguments of different types. Based on the types of the arguments passed to the generic method, the compiler handles each method call appropriately. Following are the rules to define Generic Methods −
			`,	
		},
		// list
		{
			type: "list",
			value: [
				"All generic method declarations have a type parameter section delimited by angle brackets (< and >) that precedes the method's return type ( < E > in the next example).",
				"Each type parameter section contains one or more type parameters separated by commas. A type parameter, also known as a type variable, is an identifier that specifies a generic type name.",
				"The type parameters can be used to declare the return type and act as placeholders for the types of the arguments passed to the generic method, which are known as actual type arguments.",
				"A generic method's body is declared like that of any other method. Note that type parameters can represent only reference types, not primitive types (like int, double and char).",
			],
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Example
			Following example illustrates how we can print an array of different type using a single Generic method −
			`,
		},
		// code
		{
			type: "code",
			value: `
			public class GenericMethodTest {
				// generic method printArray
				public static < E > void printArray( E[] inputArray ) {
					// Display array elements
					for(E element : inputArray) {
						System.out.printf("%s ", element);
					}
					System.out.println();
				}
				
				public static void main(String args[]) {
					// Create arrays of Integer, Double and Character
					Integer[] intArray = { 1, 2, 3, 4, 5 };
					Double[] doubleArray = { 1.1, 2.2, 3.3, 4.4 };
					Character[] charArray = { 'H', 'E', 'L', 'L', 'O' };
					
					System.out.println("Array integerArray contains:");
					printArray(intArray);   // pass an Integer array
					
					System.out.println("\nArray doubleArray contains:");
					printArray(doubleArray);   // pass a Double array
					
					System.out.println("\nArray characterArray contains:");
					printArray(charArray);   // pass a Character array
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
			Array integerArray contains:
			1 2 3 4 5 
			
			Array doubleArray contains:
			1.1 2.2 3.3 4.4 
			
			Array characterArray contains:
			H E L L O
			`,
		},
		// header
		{
			type: "header",
			value: "Bounded Type Parameters",
		},
		// context
		{
			type: "content-start",
			value: `
			There may be times when you'll want to restrict the kinds of types that are allowed to be passed to a type parameter. For example, a method that operates on numbers might only want to accept instances of Number or its subclasses. This is what bounded type parameters are for.
			
			To declare a bounded type parameter, list the type parameter's name, followed by the extends keyword, followed by its upper bound.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Example
			Following example illustrates how extends is used in a general sense to mean either "extends" (as in classes) or "implements" (as in interfaces). This example is Generic method to return the largest of three Comparable objects −
			`,
		},
		// code
		{
			type: "code",
			value: `
			public class MaximumTest {
				// determines the largest of three Comparable objects
				
				public static <T extends Comparable<T>> T maximum(T x, T y, T z) {
					T max = x;   // assume x is initially the largest
					
					if(y.compareTo(max) > 0) {
						max = y;   // y is the largest so far
					}
					
					if(z.compareTo(max) > 0) {
						max = z;   // z is the largest now                 
					}
					return max;   // returns the largest object   
				}
				
				public static void main(String args[]) {
					System.out.printf("Max of %d, %d and %d is %d\n\n", 
					3, 4, 5, maximum( 3, 4, 5 ));
					
					System.out.printf("Max of %.1f,%.1f and %.1f is %.1f\n\n",
					6.6, 8.8, 7.7, maximum( 6.6, 8.8, 7.7 ));
					
					System.out.printf("Max of %s, %s and %s is %s\n","pear",
					"apple", "orange", maximum("pear", "apple", "orange"));
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
			Max of 3, 4 and 5 is 5
			
			Max of 6.6,8.8 and 7.7 is 8.8
			
			Max of pear, apple and orange is pear
			`,
		},
		// header
		{
			type: "header",
			value: "Generic Classes",
		},
		// content
		{
			type: "content-start",
			value: `
			A generic class declaration looks like a non-generic class declaration, except that the class name is followed by a type parameter section.
			
			As with generic methods, the type parameter section of a generic class can have one or more type parameters separated by commas. These classes are known as parameterized classes or parameterized types because they accept one or more parameters.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Example
			Following example illustrates how we can define a generic class −
			`,
		},
		// code
		{
			type: "code",
			value: `
			public class Box<T> {
				private T t;
				
				public void add(T t) {
					this.t = t;
				}
				
				public T get() {
					return t;
				}
				
				public static void main(String[] args) {
					Box<Integer> integerBox = new Box<Integer>();
					Box<String> stringBox = new Box<String>();
					
					integerBox.add(new Integer(10));
					stringBox.add(new String("Hello World"));
					
					System.out.printf("Integer Value :%d\n\n", integerBox.get());
					System.out.printf("String Value :%s\n", stringBox.get());
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
			Integer Value :10
			String Value :Hello World
			`,
		},
		// link video
		{
			type: "video",
			value: "https://youtube.com/embed/22AUtQnTZkY",
		},
		// header
		{
			type: "header",
			value: "Java - Serialization",
		},
		// context
		{
			type: "content-start",
			value: `
			Java provides a mechanism, called object serialization where an object can be represented as a sequence of bytes that includes the object's data as well as information about the object's type and the types of data stored in the object.
			
			After a serialized object has been written into a file, it can be read from the file and deserialized that is, the type information and bytes that represent the object and its data can be used to recreate the object in memory.
			
			Most impressive is that the entire process is JVM independent, meaning an object can be serialized on one platform and deserialized on an entirely different platform.
			
			Classes ObjectInputStream and ObjectOutputStream are high-level streams that contain the methods for serializing and deserializing an object.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			The ObjectOutputStream class contains many write methods for writing various data types, but one method in particular stands out −
			`,
		},
		// code
		{
			type: "code",
			ignore: "true",
			value: `
			public final void writeObject(Object x) throws IOException
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			The above method serializes an Object and sends it to the output stream. Similarly, the ObjectInputStream class contains the following method for deserializing an object −
			`,
		},
		// code
		{
			type: "code",
			ignore: "true",
			value: `
			public final Object readObject() throws IOException, ClassNotFoundException
			`,
		},
		// context
		{
			type: "content-start",
			value: `
			This method retrieves the next Object out of the stream and deserializes it. The return value is Object, so you will need to cast it to its appropriate data type.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			To demonstrate how serialization works in Java, I am going to use the Employee class that we discussed early on in the book. Suppose that we have the following Employee class, which implements the Serializable interface −
			
			Example
			`,
		},
		// code
		{
			type: "code",
			value: `
			public class Employee implements java.io.Serializable {
				public String name;
				public String address;
				public transient int SSN;
				public int number;
				
				public void mailCheck() {
					System.out.println("Mailing a check to " + name + " " + address);
				}
			}
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Notice that for a class to be serialized successfully, two conditions must be met −
			`,
		},
		// list
		{
			type: "list",
			value: [
				"The class must implement the java.io.Serializable interface.",
				"All of the fields in the class must be serializable. If a field is not serializable, it must be marked transient.",
			],
		},
		// content
		{
			type: "content",
			value: `
			If you are curious to know if a Java Standard Class is serializable or not, check the documentation for the class. The test is simple: If the class implements java.io.Serializable, then it is serializable; otherwise, it's not.
			`,
		},
		// header
		{
			type: "header",
			value: "Serializing an Object",
		},
		// context
		{
			type: "content-start",
			value: `
			The ObjectOutputStream class is used to serialize an Object. The following SerializeDemo program instantiates an Employee object and serializes it to a file.
			
			When the program is done executing, a file named employee.ser is created. The program does not generate any output, but study the code and try to determine what the program is doing.
			
			Note − When serializing an object to a file, the standard convention in Java is to give the file a .ser extension.
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
			import java.io.*;
			public class SerializeDemo {
				
				public static void main(String [] args) {
					Employee e = new Employee();
					e.name = "Reyan Ali";
					e.address = "Phokka Kuan, Ambehta Peer";
					e.SSN = 11122333;
					e.number = 101;
					
					try {
						FileOutputStream fileOut =
						new FileOutputStream("/tmp/employee.ser");
						ObjectOutputStream out = new ObjectOutputStream(fileOut);
						out.writeObject(e);
						out.close();
						fileOut.close();
						System.out.printf("Serialized data is saved in /tmp/employee.ser");
					} catch (IOException i) {
						i.printStackTrace();
					}
				}
			}
			`,
		},
		// header
		{
			type: "header",
			value: "Deserializing an Object",
		},
		// content
		{
			type: "content-start",
			value: `
			The following DeserializeDemo program deserializes the Employee object created in the SerializeDemo program.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `	
			Study the program and try to determine its output −
			
			Example
			`,
		},
		// code
		{
			type: "code",
			value: `
			import java.io.*;
			public class DeserializeDemo {
				
				public static void main(String [] args) {
					Employee e = null;
					try {
						FileInputStream fileIn = new FileInputStream("/tmp/employee.ser");
						ObjectInputStream in = new ObjectInputStream(fileIn);
						e = (Employee) in.readObject();
						in.close();
						fileIn.close();
					} catch (IOException i) {
						i.printStackTrace();
						return;
					} catch (ClassNotFoundException c) {
						System.out.println("Employee class not found");
						c.printStackTrace();
						return;
					}
					
					System.out.println("Deserialized Employee...");
					System.out.println("Name: " + e.name);
					System.out.println("Address: " + e.address);
					System.out.println("SSN: " + e.SSN);
					System.out.println("Number: " + e.number);
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
			Deserialized Employee...
			Name: Reyan Ali
			Address:Phokka Kuan, Ambehta Peer
			SSN: 0
			Number:101
			`,
		},
		// header
		{
			type: "header",
			value: "Here are following important points to be noted −",
		},
		// list
		{
			type: "list",
			value: [
				"The try/catch block tries to catch a ClassNotFoundException, which is declared by the readObject() method. For a JVM to be able to deserialize an object, it must be able to find the bytecode for the class. If the JVM can't find a class during the deserialization of an object, it throws a ClassNotFoundException.",
				"Notice that the return value of readObject() is cast to an Employee reference.",
				"The value of the SSN field was 11122333 when the object was serialized, but because the field is transient, this value was not sent to the output stream. The SSN field of the deserialized Employee object is 0.",
			],
		},
		// link video
		{
			type: "video",
			value: "https://youtube.com/embed/7lHv_Dh2Hz4",
		},
	];
}