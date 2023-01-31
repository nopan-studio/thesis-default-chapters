export function Chapter_11() {
  return [
    // title
    {
      type: "title",
      value: "Chapter 11",
    },
    // subtitle
    {
      type: "subtitle",
      value: "Java DOM",
    },
    // context
    {
      type: "content-start",
      value: `
	 Java DOM tutorial shows how to use Java DOM API to read and write XML documents.n be declared as a class or interface type.
	 DOM is part of the Java API for XML processing (JAXP). Java DOM parser traverses the
	 XML file and creates the corresponding DOM objects. These DOM objects are linked
	 together in a tree structure. The parser reads the whole XML structure into the memory.
	 SAX is an alternative JAXP API to DOM. SAX parsers are event-based; they are faster and
	 require less memory. On the other hand, DOM is easier to use and there are tasks, such as
	 sorting elements, rearranging elements or looking up elements, that are faster with DOM.
	 A DOM parser comes with JDK, so there is no need to download a dependency.
	 DocumentBuilderFactory enables applications to obtain a parser that produces DOM
	 object trees from XML documents. DocumentBuilder defines the API to obtain DOM
	 Document instances from an XML document or to create a new DOM Document.
	 DocumentTraversal contains methods that create iterators to traverse a node and its
	 children. NodeFilter is used to filter out nodes. NodeIterator is used to go through a
	 set of nodes. TreeWalker is used to navigate a document tree or subtree using the view of
 	 the document defined by their whatToShow flags and filter of the document.      `,
    },
    // header
    {
      type: "header",
      value: "DOM",
    },
    // context
    {
      type: "content-start",
      value: `
	 Document Object Model (DOM) is a standard tree structure, where each node contains
	 one of the components from an XML structure. Element nodes and text nodes are the two
	 most common types of nodes. With DOM functions we can create nodes, remove nodes,
	 change their contents, and traverse the node hierarchy.
      `,
    },
    // header
    {
      type: "header",
      value: "Node types",
    },
    // context
    {
      type: "content-start",
	ignore:"true",
      value: `
	 The following is a list of some important Node types:
      `,
    },
    //image
    {
      type: "image",
      value: `chapter_11_image_1 `,
    },
//header
		{
			type: "header",
			value: "Document Object Model (DOM)",
		},
		// content
		{
			type: "content-start",
			value: `
				Document Object Model (DOM) is a standard tree structure, where each node contains one of the components from an XML structure. Element nodes and text nodes are the two most common types of nodes. With DOM functions we can create nodes, remove nodes, change their contents, and traverse the node hierarchy.
			`,
		},
		// header
		{
			type: "header",
			value: "Java DOM Parser",
		},
		// content
		{
			type: "content-start",
			value: `
				DOM is part of the Java API for XML Processing (JAXP). Java DOM parser traverses the XML file and creates the corresponding DOM objects. These DOM objects are linked together in a tree structure. The parser reads the whole XML structure into the memory.

				SAX is an alternative JAXP API to DOM. SAX parsers are event-based; they are faster and require less memory. On the other hand, DOM is easier to use and there are tasks, such as sorting elements, rearranging elements or looking up elements, that are faster with DOM. A DOM parser comes with JDK, so there is no need to download a dependency.
			`,
		},
		// header
		{
			type: "header",
			value: "XML Example Files",
		},
		//content
		{
			type: "content",
			ignore: "true",
			value: `
				Here is the XML file that we use in this tutorial examples:
			`,
		},
		// code
		{
			type: "code",
			value: `
				<?xml version="1.0" encoding="UTF-8"?>
				<Users>
				    <User>
				        <id>1</id>
				        <firstName>Ramesh</firstName>
				        <lastName>Fadatare</lastName>
				        <age>28</age>
				        <gender>Male</gender>
				    </User>
				    <User>
				        <id>2</id>
				        <firstName>John</firstName>
				        <lastName>Cena</lastName>
				        <age>45</age>
				        <gender>Male</gender>
				    </User>
				    <User>
				        <id>3</id>
				        <firstName>Tom</firstName>
				        <lastName>Cruise</lastName>
				        <age>40</age>
				        <gender>Male</gender>
				     </User>
				</Users>
			`,
		},
		// header
		{
			type: "header",
			value: "Create User class (populate XML data into User object)",
		},
		//content
		{
			type: "content",
			ignore: "true",
			value: `
				So this XML is the list of users, to read this XML file we will create a bean object User and then we will parse the XML to get the list of users.

				Here is the User bean object.
			`,
		},
		// code
		{
			type: "code",
			value: `
				package net.javaguides.javaxmlparser.dom;

				public class User {
				    private int id;
				    private String firstName;
				    private String lastName;
				    private int age;
				    private String gender;

				    public int getId() {
				        return id;
				    }

				    public void setId(int i) {
				        this.id = i;
				    }

				    public String getFirstName() {
				        return firstName;
				    }

				    public void setFirstName(String firstName) {
				        this.firstName = firstName;
				    }

				    public String getLastName() {
				        return lastName;
				    }

				    public void setLastName(String lastName) {
				        this.lastName = lastName;
				    }

				    public int getAge() {
				        return age;
				    }

				    public void setAge(int age) {
				        this.age = age;
				    }

				    public String getGender() {
				        return gender;
				    }

				    public void setGender(String gender) {
				        this.gender = gender;
				    }

				    @Override
				    public String toString() {
				        return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + ", gender=" +
				            gender + "]";
				    }
				}
			`,
		},
		// header
		{
			type: "header",
			value: "Java DOM Parser - Read XML File Example",
		},
		//content
		{
			type: "content",
			ignore: "true",
			value: `
				Here is the java program that uses DOM Parser to read and parse an XML file to get the list of User objects.
			`,
		},
		// code
		{
			type: "code",
			value: `
				package net.javaguides.javaxmlparser.dom;

				import java.io.File;

				import java.io.IOException;
				import java.util.ArrayList;
				import java.util.List;

				import javax.xml.parsers.DocumentBuilder;
				import javax.xml.parsers.DocumentBuilderFactory;
				import javax.xml.parsers.ParserConfigurationException;

				import org.w3c.dom.Document;
				import org.w3c.dom.Element;
				import org.w3c.dom.Node;
				import org.w3c.dom.NodeList;
				import org.xml.sax.SAXException;

				/**
				 * Java DOM Parser to Read XML File in Java 
				 * @author Ramesh Fadatare
				 *
				 */

				public class ReadXMLFileInJava {
				    public static void main(String[] args) {
				        String filePath = "users.xml";
				        File xmlFile = new File(filePath);
				        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
				        DocumentBuilder dBuilder;
				        try {
				            dBuilder = dbFactory.newDocumentBuilder();
				            Document doc = dBuilder.parse(xmlFile);
				            doc.getDocumentElement().normalize();
				            System.out.println("Root element :" + doc.getDocumentElement().getNodeName());
				            NodeList nodeList = doc.getElementsByTagName("User");
				            // now XML is loaded as Document in memory, lets convert it to Object List
				            List < User > userList = new ArrayList < User > ();

				            for (int i = 0; i < nodeList.getLength(); i++) {
				                userList.add(getUser(nodeList.item(i)));
				            }
				            // lets print User list information
				            for (User emp: userList) {
				                System.out.println(emp.toString());
				            }
				        } catch (SAXException | ParserConfigurationException | IOException e1) {
				            e1.printStackTrace();
				        }

				    }

				    private static User getUser(Node node) {
				        // XMLReaderDOM domReader = new XMLReaderDOM();
				        User user = new User();
				        if (node.getNodeType() == Node.ELEMENT_NODE) {
				            Element element = (Element) node;
				            user.setId(Integer.parseInt(getTagValue("id", element)));
				            user.setFirstName(getTagValue("firstName", element));
				            user.setLastName(getTagValue("lastName", element));
				            user.setGender(getTagValue("gender", element));
				            user.setAge(Integer.parseInt(getTagValue("age", element)));
				        }
				        return user;
				    }

				    private static String getTagValue(String tag, Element element) {
				        NodeList nodeList = element.getElementsByTagName(tag).item(0).getChildNodes();
				        Node node = (Node) nodeList.item(0);
				        return node.getNodeValue();
				    }

				}
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
				The output of the above program:

				Root element :Users
				User [id=1, firstName=Ramesh, lastName=Fadatare, age=28, gender=Male]
				User [id=2, firstName=John, lastName=Cena, age=45, gender=Male]
				User [id=3, firstName=Tom, lastName=Cruise, age=40, gender=Male]
			`,
		},
		// header
		{
			type: "header",
			value: "Java DOM Parser - Modify or Update XML File in Java",
		},
		// content
		{
			type: "content-start",
			ignore: "true",
			value: `
				In this example, we have a list of User elements in the XML file and we will modify these User elements in XML with Java program.
				We want to change the following for every User element in the XML.
			`,
		},
		// list
		{
			type: "list",
			value: [
				"1. Add a new element",
				"2. Update existing element value",
				"3. Delete existing element",
			],
		},
		//content
		{
			type: "content",
			ignore: "true",
			value: `
				Here is the java program that does all the above updates in users.xml file using DOM Parser.
			`,
		},
		// code
		{
			type: "code",
			ignore: "true",
			value: `
				package net.javaguides.javaxmlparser.dom;

				import java.io.File;
				import java.io.IOException;

				import javax.xml.parsers.DocumentBuilder;
				import javax.xml.parsers.DocumentBuilderFactory;
				import javax.xml.parsers.ParserConfigurationException;
				import javax.xml.transform.OutputKeys;
				import javax.xml.transform.Transformer;
				import javax.xml.transform.TransformerConfigurationException;
				import javax.xml.transform.TransformerException;
				import javax.xml.transform.TransformerFactory;
				import javax.xml.transform.TransformerFactoryConfigurationError;
				import javax.xml.transform.dom.DOMSource;
				import javax.xml.transform.stream.StreamResult;

				import org.w3c.dom.Document;
				import org.w3c.dom.Element;
				import org.w3c.dom.Node;
				import org.w3c.dom.NodeList;
				import org.xml.sax.SAXException;

				public class ModifyXMLFileInJava {
				    public static void main(String[] args) {
				        String filePath = "users.xml";
				        File xmlFile = new File(filePath);
				        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
				        DocumentBuilder dBuilder;
				        try {
				            dBuilder = dbFactory.newDocumentBuilder();

				            // parse xml file and load into document
				            Document doc = dBuilder.parse(xmlFile);

				            doc.getDocumentElement().normalize();

				            // update Element value
				            updateElementValue(doc);

				            // delete element
				            deleteElement(doc);

				            // add new element
				            addElement(doc);

				            // write the updated document to file or console
				            writeXMLFile(doc);

				        } catch (SAXException | ParserConfigurationException | IOException | TransformerException e1) {
				            e1.printStackTrace();
				        }
				    }

				    private static void writeXMLFile(Document doc)
				    throws TransformerFactoryConfigurationError, TransformerConfigurationException, TransformerException {
				        doc.getDocumentElement().normalize();
				        TransformerFactory transformerFactory = TransformerFactory.newInstance();
				        Transformer transformer = transformerFactory.newTransformer();
				        DOMSource source = new DOMSource(doc);
				        StreamResult result = new StreamResult(new File("users_updated.xml"));
				        transformer.setOutputProperty(OutputKeys.INDENT, "yes");
				        transformer.transform(source, result);
				        System.out.println("XML file updated successfully");
				    }

				    /**
				     * Add a new element salary to user element.
				     * @param doc
				     */
				    private static void addElement(Document doc) {
				        NodeList users = doc.getElementsByTagName("User");
				        Element emp = null;

				        // loop for each user
				        for (int i = 0; i < users.getLength(); i++) {
				            emp = (Element) users.item(i);
				            Element salaryElement = doc.createElement("salary");
				            salaryElement.appendChild(doc.createTextNode("10000"));
				            emp.appendChild(salaryElement);
				        }
				    }

				    /**
				     * Delete gender element from User element
				     * @param doc
				     */
				    private static void deleteElement(Document doc) {
				        NodeList users = doc.getElementsByTagName("User");
				        Element user = null;
				        // loop for each user
				        for (int i = 0; i < users.getLength(); i++) {
				            user = (Element) users.item(i);
				            Node genderNode = user.getElementsByTagName("gender").item(0);
				            user.removeChild(genderNode);
				        }

				    }

				    /**
				     * Update firstName element value to Upper case.
				     * @param doc
				     */
				    private static void updateElementValue(Document doc) {
				        NodeList users = doc.getElementsByTagName("User");
				        Element user = null;
				        // loop for each user
				        for (int i = 0; i < users.getLength(); i++) {
				            user = (Element) users.item(i);
				            Node name = user.getElementsByTagName("firstName").item(0).getFirstChild();
				            name.setNodeValue(name.getNodeValue().toUpperCase());
				        }
				    }
				}
			`,
		},
		// header
		{
			type: "header",
			value: "Updated users.xml File",
		},
		// code
		{
			type: "code",
			value: `
				<?xml version="1.0" encoding="UTF-8" standalone="no"?>
				<Users>
				    <User>
				        <id>1</id>
				        <firstName>RAMESH</firstName>
				        <lastName>Fadatare</lastName>
				        <age>28</age>
				        <salary>10000</salary>
				    </User>
				    <User>
				        <id>2</id>
				        <firstName>JOHN</firstName>
				        <lastName>Cena</lastName>
				        <age>45</age>
				        <salary>10000</salary>
				    </User>
				    <User>
				        <id>3</id>
				        <firstName>TOM</firstName>
				        <lastName>Cruise</lastName>
				        <age>40</age>
				        <salary>10000</salary>
				    </User>
				</Users>
			`,
		},
		// content
		{
			type: "content",
			value: `
				Note that we have added a new "salary" field to the User element, we have updated firstName from lower case to upper case and we deleted gender element from user tag.
			`,
		},
		// header
		{
			type: "header",
			value: "Java DOM Parser - Create an XML file Example",
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
				Let's create a program to create an XML file in Java using DOM Parser.
			`,
		},
		// code
		{
			type: "code",
			ignore: "true",
			value: `
				package net.javaguides.javaxmlparser.dom;

				import java.io.File;

				import javax.xml.parsers.DocumentBuilder;
				import javax.xml.parsers.DocumentBuilderFactory;
				import javax.xml.transform.OutputKeys;
				import javax.xml.transform.Transformer;
				import javax.xml.transform.TransformerFactory;
				import javax.xml.transform.dom.DOMSource;
				import javax.xml.transform.stream.StreamResult;

				import org.w3c.dom.Document;
				import org.w3c.dom.Element;
				import org.w3c.dom.Node;

				public class CreateXMLFileInJava {
				    public static void main(String[] args) {
				        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
				        DocumentBuilder dBuilder;
				        try {
				            dBuilder = dbFactory.newDocumentBuilder();
				            Document doc = dBuilder.newDocument();
				            // add elements to Document
				            Element rootElement = doc.createElement("Users");
				            // append root element to document
				            doc.appendChild(rootElement);

				            // append first child element to root element
				            rootElement.appendChild(createUserElement(doc, "1", "Ramesh", "Fadatare", "28", "Male"));

				            // append second child
				            rootElement.appendChild(createUserElement(doc, "2", "John", "Cena", "45", "Male"));

				            // append third child
				            rootElement.appendChild(createUserElement(doc, "3", "Tom", "Cruise", "40", "Male"));

				            // for output to file, console
				            TransformerFactory transformerFactory = TransformerFactory.newInstance();
				            Transformer transformer = transformerFactory.newTransformer();
				            // for pretty print
				            transformer.setOutputProperty(OutputKeys.INDENT, "yes");
				            DOMSource source = new DOMSource(doc);

				            // write to console or file
				            StreamResult console = new StreamResult(System.out);
				            StreamResult file = new StreamResult(new File("create_users.xml"));

				            // write data
				            transformer.transform(source, console);
				            transformer.transform(source, file);

				        } catch (Exception e) {
				            e.printStackTrace();
				        }
				    }

				    private static Node createUserElement(Document doc, String id, String firstName, String lastName, String age,
				        String gender) {
				        Element user = doc.createElement("User");

				        // set id attribute
				        user.setAttribute("id", id);

				        // create firstName element
				        user.appendChild(createUserElements(doc, user, "firstName", firstName));

				        // create lastName element
				        user.appendChild(createUserElements(doc, user, "lastName", lastName));

				        // create age element
				        user.appendChild(createUserElements(doc, user, "age", age));

				        // create gender element
				        user.appendChild(createUserElements(doc, user, "gender", gender));

				        return user;
				    }

				    // utility method to create text node
				    private static Node createUserElements(Document doc, Element element, String name, String value) {
				        Element node = doc.createElement(name);
				        node.appendChild(doc.createTextNode(value));
				        return node;
				    }
				}
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
				An output of the above program:

				<?xml version="1.0" encoding="UTF-8" standalone="no"?>
				<Users>
				<User id="1">
				<firstName>Ramesh</firstName>
				<lastName>Fadatare</lastName>
				<age>28</age>
				<gender>Male</gender>
				</User>
				<User id="2">
				<firstName>John</firstName>
				<lastName>Cena</lastName>
				<age>45</age>
				<gender>Male</gender>
				</User>
				<User id="3">
				<firstName>Tom</firstName>
				<lastName>Cruise</lastName>
				<age>40</age>
				<gender>Male</gender>
				</User>
				</Users>
			`,
		},
		// content
		{
			type: "content",
			value: `
				Note that for debugging, you can change the StreamResult to output the XML content to your console.
			`,
		},
		// header
		{
			type: "header",
			value: "Java DOM Reading Elements with NodeIterator",
		},
		// content
		{
			type: "content-start",
			value: `
				DocumentTraversal contains methods that create NodeIterators and TreeWalkers to traverse a node and its children in depth-first, pre-order document order. This order is equivalent to the order in which the start tags occur in the text representation of the document.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
				The example prints all the node elements of the users.xml file.
			`,
		},
		// code
		{
			type: "code",
			ignore: "true",
			value: `
				package net.javaguides.javaxmlparser.dom;

				import java.io.IOException;
				import javax.xml.parsers.DocumentBuilder;
				import javax.xml.parsers.DocumentBuilderFactory;
				import javax.xml.parsers.ParserConfigurationException;
				import org.w3c.dom.Document;
				import org.w3c.dom.Node;
				import org.w3c.dom.traversal.DocumentTraversal;
				import org.w3c.dom.traversal.NodeFilter;
				import org.w3c.dom.traversal.NodeIterator;
				import org.xml.sax.SAXException;

				public class JavaXmlDomReadElements {

				    public static void main(String[] args) throws ParserConfigurationException, SAXException, IOException {

				        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
				        DocumentBuilder loader = factory.newDocumentBuilder();
				        Document document = loader.parse("users.xml");

				        DocumentTraversal trav = (DocumentTraversal) document;

				        NodeIterator it = trav.createNodeIterator(document.getDocumentElement(), NodeFilter.SHOW_ELEMENT, null, true);

				        int c = 1;

				        for (Node node = it.nextNode(); node != null; node = it.nextNode()) {

				            String name = node.getNodeName();

				            System.out.printf("%d %s%n", c, name);
				            c++;
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
				Output:
				1 Users
				2 User
				3 id
				4 firstName
				5 lastName
				6 age
				7 gender
				8 User
				9 id
				10 firstName
				11 lastName
				12 age
				13 gender
				14 User
				15 id
				16 firstName
				17 lastName
				18 age
				19 gender
			`,
		},
		// header
		{
			type: "header",
			value: "Java DOM reading XML with TreeWalker",
		},
		// content
		{
			type: "content-start",
			value: `
				TreeWalker has more methods for traversing than NodeIterator. The example reads the elements and the text of a users.xml file with TreeWalker.
			`,
		},
		// code
		{
			type: "code",
			ignore: "true",
			value: `
				package net.javaguides.javaxmlparser.dom;

				import java.io.IOException;
				import javax.xml.parsers.DocumentBuilder;
				import javax.xml.parsers.DocumentBuilderFactory;
				import javax.xml.parsers.ParserConfigurationException;
				import org.w3c.dom.Document;
				import org.w3c.dom.Node;
				import org.w3c.dom.traversal.DocumentTraversal;
				import org.w3c.dom.traversal.NodeFilter;
				import org.w3c.dom.traversal.TreeWalker;
				import org.xml.sax.SAXException;

				public class JavaXmlDomTreeWalkerEx {

				    public static void main(String[] args) throws SAXException, IOException,
				        ParserConfigurationException {

				            DocumentBuilderFactory factory
				                = DocumentBuilderFactory.newInstance();
				            DocumentBuilder loader = factory.newDocumentBuilder();
				            Document document = loader.parse("users.xml");

				            DocumentTraversal traversal = (DocumentTraversal) document;

				            TreeWalker walker = traversal.createTreeWalker(
				                document.getDocumentElement(),
				                NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, true);

				            traverseLevel(walker, "");
				        }

				    private static void traverseLevel(TreeWalker walker,
				        String indent) {

				        Node node = walker.getCurrentNode();

				        if (node.getNodeType() == Node.ELEMENT_NODE) {
				            System.out.println(indent + node.getNodeName());
				        }

				        if (node.getNodeType() == Node.TEXT_NODE) {

				            String content_trimmed = node.getTextContent().trim();

				            if (content_trimmed.length() > 0) {
				                System.out.print(indent);
				                System.out.printf("%s%n", content_trimmed);
				            }
				        }

				        for (Node n = walker.firstChild(); n != null; n = walker.nextSibling()) {

				            traverseLevel(walker, indent + "  ");
				        }

				        walker.setCurrentNode(node);
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
				
				Users
				  User
				    id
				      1
				    firstName
				      Ramesh
				    lastName
				      Fadatare
				    age
				      28
				    gender
				      Male
				  User
				    id
				      2
				    firstName
				      John
				    lastName
				      Cena
				    age
				      45
				    gender
				      Male
				  User
				    id
				      3
				    firstName
				      Tom
				    lastName
				      Cruise
				    age
				      40
				    gender
				      Male
			`,
		},
    // header
    {
      type: "header",
      value: "XML example files",
    },
    // context
    {
      type: "content-start",
	ignore: "true",
      value: `
	 XML example files
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	 users.xml
      `,
    },
    //code
    {
      type: "code",
      value: `
<?xml version="1.0" encoding="UTF-8"?>
<users>
<user id="1">
<firstname>Peter</firstname>
<lastname>Brown</lastname>
<occupation>programmer</occupation>
</user>
<user id="2">
<firstname>Martin</firstname>
<lastname>Smith</lastname>
<occupation>accountant</occupation>
</user>
<user id="3">
<firstname>Lucy</firstname>
<lastname>Gordon</lastname>
<occupation>teacher</occupation>
</user>
</users>
      `,
    },
    //content
    {
      type: "content",
     ignore:"true",
      value: `
This is the users.xml file.

continents.xml
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
<?xml version="1.0" encoding="UTF-8"?>
<continents>
<europe>
<slovakia>
<capital>
Bratislava
</capital>
<population>
421000
</population>
</slovakia>
<hungary>
<capital>
Budapest
</capital>
<population>
1759000
</population>
</hungary>
<poland>
<capital>
Warsaw
</capital>
<population>
1735000
</population>
</poland>
</europe>
<asia>
<china>
<capital>
Beijing
</capital>
<population>
21700000
</population>
</china>
<vietnam>
<capital>
Hanoi
</capital>
<population>
7500000
</population>
</vietnam>
</asia>
</continents>
      `,
    },
   //content
    {
      type: "content",
	ignore: "true",
      value: `
	 This is the continents.xml file.
      `,
    },
    //code
    {
      type: "code",
      value: `
<build>
<plugins>
<plugin>
<groupId>org.codehaus.mojo</groupId>
<artifactId>exec-maven-plugin</artifactId>
<version>1.6.0</version>
<configuration>
<mainClass>com.zetcode.JavaReadXmlDomEx</mainClass>
</configuration>
</plugin>
</plugins>
</build>
      `,
    },
   //content
    {
      type: "content",
	ignore: "true",
      value: `
	 The examples use the exec-maven-plugin to execute the Java main class from Maven.
      `,
    },
    // header
    {
      type: "header",
      value: "Java DOM reading example",
    },
    // context
    {
      type: "content-start",
	ignore: "true",
      value: `
	 In the following example, we read an XML file with a DOM parser.
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	 JavaXmlDomReadEx.java
      `,
    },
    //code
    {
      type: "code",
	ignore:"true",
      value: `
package com.zetcode;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;
import org.w3c.dom.Element;
import java.io.File;
import java.io.IOException;
import javax.xml.parsers.ParserConfigurationException;
import org.xml.sax.SAXException;
public class JavaXmlDomReadEx {
public static void main(String argv[]) throws SAXException,
IOException, ParserConfigurationException {
File xmlFile = new File("src/main/resources/users.xml");
DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
DocumentBuilder dBuilder = factory.newDocumentBuilder();
Document doc = dBuilder.parse(xmlFile);
doc.getDocumentElement().normalize();
System.out.println("Root element: " + doc.getDocumentElement().getNodeName());
NodeList nList = doc.getElementsByTagName("user");
for (int i = 0; i < nList.getLength(); i++) {
Node nNode = nList.item(i);
System.out.println("\nCurrent Element: " + nNode.getNodeName());
if (nNode.getNodeType() == Node.ELEMENT_NODE) {
Element elem = (Element) nNode;
String uid = elem.getAttribute("id");
Node node1 = elem.getElementsByTagName("firstname").item(0);
String fname = node1.getTextContent();
Node node2 = elem.getElementsByTagName("lastname").item(0);
String lname = node2.getTextContent();
Node node3 = elem.getElementsByTagName("occupation").item(0);
String occup = node3.getTextContent();
System.out.printf("User id: %s%n", uid);
System.out.printf("First name: %s%n", fname);
System.out.printf("Last name: %s%n", lname);
System.out.printf("Occupation: %s%n", occup);
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
	 The example parses the users.xml file. It utilizes the names of the tags in the code; for
	 instance: elem.getElementsByTagName("lastname").
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
	DocumentBuilder dBuilder = factory.newDocumentBuilder();
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	 From the DocumentBuilderFactory, we get the DocumentBuilder. DocumentBuilder
	 contains the API to obtain DOM Document instances from an XML document.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	The parse method parses the XML file into a Document.
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	 The parse method parses the XML file into a Document.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	doc.getDocumentElement().normalize();
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	 Normalizing the document helps generate correct results.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	System.out.println("Root element:" + doc.getDocumentElement().getNodeName());
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	 We get the root element of the document.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	NodeList nList = doc.getElementsByTagName("user");
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	 We get a NodeList of user elements in the document with getElementsByTagName.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	for (int i = 0; i < nList.getLength(); i++) {
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	 We go through the list with a for loop.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	String uid = elem.getAttribute("id");
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	We get the element attribute with getAttribute.
      `,
    },
    //code
    {
      type: "code",
      value: `
	Node node1 = elem.getElementsByTagName("firstname").item(0);
	String fname = node1.getTextContent();
	Node node2 = elem.getElementsByTagName("lastname").item(0);
	String lname = node2.getTextContent();
	Node node3 = elem.getElementsByTagName("occupation").item(0);
	String occup = node3.getTextContent();
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	We get the text content of the three subelements of the user element.
      `,
    },
    //code
    {
      type: "code",
      value: `
	System.out.printf("User id: %s%n", uid);
	System.out.printf("First name: %s%n", fname);
	System.out.printf("Last name: %s%n", lname);
	System.out.printf("Occupation: %s%n", occup);
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	We print the text of the current user to the console.
	$ mvn -q exec:java
	Root element: users
	Current Element: user
	User id: 1
	First name: Peter
	Last name: Brown	
	Occupation: programmer
	Current Element: user
	User id: 2
	First name: Martin
	Last name: Smith
	Occupation: accountant
	Current Element: user
	User id: 3
	First name: Lucy
	Last name: Gordon
	Occupation: teacher
      `,
    },
   // header
    {
      type: "header",
      value: "Java DOM reading elements with NodeIterator",
    },
    // context
    {
      type: "content-start",
	ignore: "true",
      value: `
	 DocumentTraversal contains methods that create NodeIterators and TreeWalkers to
	traverse a node and its children in depth first, pre-order document order. This order is
	equivalent to the order in which the start tags occur in the text representation of the
	document.
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	 JavaXmlDomReadElements.java
      `,
    },
    //code
    {
      type: "code",
	ignore:"true",
      value: `
package com.zetcode;
import java.io.IOException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.traversal.DocumentTraversal;
import org.w3c.dom.traversal.NodeFilter;
import org.w3c.dom.traversal.NodeIterator;
import org.xml.sax.SAXException;
public class JavaXmlDomReadElements {
public static void main(String[] args) throws ParserConfigurationException,
SAXException, IOException {
DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
DocumentBuilder loader = factory.newDocumentBuilder();
Document document = loader.parse("src/main/resources/continents.xml");
DocumentTraversal trav = (DocumentTraversal) document;
NodeIterator it = trav.createNodeIterator(document.getDocumentElement(),
NodeFilter.SHOW_ELEMENT, null, true);
int c = 1;
for (Node node = it.nextNode(); node != null;
node = it.nextNode()) {
String name = node.getNodeName();
System.out.printf("%d %s%n", c, name);
c++;
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
	 The example prints all the node elements of the continents.xml file.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	DocumentTraversal trav = (DocumentTraversal) document;
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	From the document we get a DocumentTraversal object.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	NodeIterator it = trav.createNodeIterator(document.getDocumentElement(),
	NodeFilter.SHOW_ELEMENT, null, true);
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	We create a NodeIterator. With NodeFilter.SHOW_ELEMENT set, it is showing only
	node elements
      `,
    },
    //code
    {
      type: "code",
      value: `
	for (Node node = it.nextNode(); node != null;
node = it.nextNode()) {
String name = node.getNodeName();
System.out.printf("%d %s%n", c, name);
c++;
}
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	In a for loop, we traverse the nodes and print their names.

	$ mvn -q exec:java
	1 continents
	2 europe
	3 slovakia
	4 capital
	5 population	
	6 hungary
	7 capital
	8 population
	9 poland
	10 capital
	11 population
	12 asia
	13 china
	14 capital
	15 population
	16 vietnam
	17 capital
	18 population

	The continents.xml contains these eighteen elements.

      `,
    },
   // header
    {
      type: "header",
      value: "Java DOM reading text with NodeIterator",
    },
    // context
    {
      type: "content-start",
	ignore: "true",
      value: `
	In the following example, we read text data with NodeIterator.
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	 JavaXmlDomReadText.java
      `,
    },
    //code
    {
      type: "code",
	ignore:"true",
      value: `
package com.zetcode;
import java.io.IOException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.traversal.DocumentTraversal;
import org.w3c.dom.traversal.NodeFilter;
import org.w3c.dom.traversal.NodeIterator;
import org.xml.sax.SAXException;
public class JavaXmlDomReadText {
public static void main(String[] args) throws ParserConfigurationException,
SAXException, IOException {
DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
DocumentBuilder loader = factory.newDocumentBuilder();
Document document = loader.parse("src/main/resources/continents.xml");
DocumentTraversal traversal = (DocumentTraversal) document;
NodeIterator iterator = traversal.createNodeIterator(
document.getDocumentElement(), NodeFilter.SHOW_TEXT, null, true);
for (Node n = iterator.nextNode(); n != null; n = iterator.nextNode()) {
String text = n.getTextContent().trim();
if (!text.isEmpty()) {
System.out.println(text);
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
	 The example reads character data from the continents.xml file.
      `,
    },
    //code
    {
      type: "code",
      value: `
	NodeIterator iterator = traversal.createNodeIterator(
	document.getDocumentElement(), NodeFilter.SHOW_TEXT, null, true);
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	The node filter is set to NodeFilter.SHOW_TEXT.
      `,
    },
    //code
    {
      type: "code",
      value: `
	String text = n.getTextContent().trim();
	if (!text.isEmpty()) {
	System.out.println(text);
	}
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	We trim the white spaces and print the text if it is not empty.
	$ mvn -q exec:java
	Bratislava
	421000
	Budapest
	1759000
	Warsaw
	1735000
	Beijing
	21700000
	Hanoi
	7500000
      `,
    },
  // header
    {
      type: "header",
      value: "Java DOM custom NodeFilter",
    },
    // context
    {
      type: "content-start",
	ignore: "true",
      value: `
	The following example uses a custom DOM filter. A custom DOM filter must implement
	the NodeFilter interface.
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	JavaXmlCustomFilter.java
      `,
    },
    //code
    {
      type: "code",
	ignore:"true",
      value: `
package com.zetcode;
import java.io.IOException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.traversal.DocumentTraversal;
import org.w3c.dom.traversal.NodeFilter;
import org.w3c.dom.traversal.NodeIterator;
import org.xml.sax.SAXException;
public class JavaXmlCustomFilter {
public static void main(String[] args) throws ParserConfigurationException,
SAXException, IOException {
DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
DocumentBuilder loader = factory.newDocumentBuilder();
Document document = loader.parse("src/main/resources/continents.xml");
DocumentTraversal trav = (DocumentTraversal) document;
MyFilter filter = new MyFilter();
NodeIterator it = trav.createNodeIterator(document.getDocumentElement(),
NodeFilter.SHOW_ELEMENT, filter, true);
for (Node node = it.nextNode(); node != null;
node = it.nextNode()) {
String name = node.getNodeName();
String text = node.getTextContent().trim().replaceAll("\\s+", " ");
System.out.printf("%s: %s%n", name, text);
}
}
static class MyFilter implements NodeFilter {
@Override
public short acceptNode(Node thisNode) {
if (thisNode.getNodeType() == Node.ELEMENT_NODE) {
Element e = (Element) thisNode;
String nodeName = e.getNodeName();
if ("slovakia".equals(nodeName) || "poland".equals(nodeName)) {
return NodeFilter.FILTER_ACCEPT;
}
}
return NodeFilter.FILTER_REJECT;
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
	 The example shows only slovakia and poland nodes from the XML file.
      `,
    },
    //code
    {
      type: "code",
      value: `
	MyFilter filter = new MyFilter();
	NodeIterator it = trav.createNodeIterator(document.getDocumentElement(),
	NodeFilter.SHOW_ELEMENT, filter, true);
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	We create the MyFilter and set it to the createNodeIterator method.
      `,
    },
    //code
    {
      type: "code",
      value: `
	MyFilter filter = new MyFilter();
NodeIterator it = trav.createNodeIterator(document.getDocumentElement(),
NodeFilter.SHOW_ELEMENT, filter, true);
We create the MyFilter and set it to the createNodeIterator method.
String text = node.getTextContent().trim().replaceAll("\\s+", " ");
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	The text content contains spaces and new line characters; therefore, we remove the
	unnecessary spaces with a regular expression.
      `,
    },
    //code
    {
      type: "code",
      value: `
	static class MyFilter implements NodeFilter {
@Override
public short acceptNode(Node thisNode) {
if (thisNode.getNodeType() == Node.ELEMENT_NODE) {
Element e = (Element) thisNode;
String nodeName = e.getNodeName();
if ("slovakia".equals(nodeName) || "poland".equals(nodeName)) {
return NodeFilter.FILTER_ACCEPT;
}
}
return NodeFilter.FILTER_REJECT;
}
}
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	In the acceptNode method, we control which nodes to use by returning
	
	NodeFilter.FILTER_ACCEPT and NodeFilter.FILTER_REJECT.
	$ mvn -q exec:java
	slovakia: Bratislava 421000
	poland: Warsaw 1735000
      `,
    },
 // header
    {
      type: "header",
      value: "Java DOM reading XML with TreeWalker",
    },
    // context
    {
      type: "content-start",
	ignore: "true",
      value: `
	TreeWalker has more methods for traversing than NodeIterator.
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	JavaXmlDomTreeWalkerEx.java
      `,
    },
    //code
    {
      type: "code",
	ignore:"true",
      value: `
package com.zetcode;
import java.io.IOException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.traversal.DocumentTraversal;
import org.w3c.dom.traversal.NodeFilter;
import org.w3c.dom.traversal.TreeWalker;
import org.xml.sax.SAXException;
public class JavaXmlDomTreeWalkerEx {
public static void main(String[] args) throws SAXException, IOException,
ParserConfigurationException {
DocumentBuilderFactory factory
= DocumentBuilderFactory.newInstance();
DocumentBuilder loader = factory.newDocumentBuilder();
Document document = loader.parse("src/main/resources/continents.xml");
DocumentTraversal traversal = (DocumentTraversal) document;
TreeWalker walker = traversal.createTreeWalker(
document.getDocumentElement(),
NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, true);
traverseLevel(walker, "");
}
private static void traverseLevel(TreeWalker walker,
String indent) {
Node node = walker.getCurrentNode();
if (node.getNodeType() == Node.ELEMENT_NODE) {
System.out.println(indent + node.getNodeName());
}
if (node.getNodeType() == Node.TEXT_NODE) {
String content_trimmed = node.getTextContent().trim();
if (content_trimmed.length() > 0) {
System.out.print(indent);
System.out.printf("%s%n", content_trimmed);
}
}
for (Node n = walker.firstChild(); n != null;
n = walker.nextSibling()) {
traverseLevel(walker, indent + " ");
}
walker.setCurrentNode(node);
}
}
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	The example reads the elements and the text of a continents.xml file with TreeWalker.
      `,
    },
    //code
    {
      type: "code",
      value: `
	TreeWalker walker = traversal.createTreeWalker(
document.getDocumentElement(),
NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, true);

      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	A TreeWalker is created with createTreeWalker from a DocumentTraversal. We will
	process elements and text nodes. Note that empty text such as indentation is considered
	text too.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	traverseLevel(walker, "");
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	The processing is delegated to the traverseLevel method, which is called recursively.
      `,
    },
    //code
    {
      type: "code",
      value: `
	if (node.getNodeType() == Node.ELEMENT_NODE) {
System.out.println(indent + node.getNodeName());
}

      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	 We print the name of the element with some indentation.
      `,
    },
    //code
    {
      type: "code",
      value: `
	if (node.getNodeType() == Node.TEXT_NODE) {
String content_trimmed = node.getTextContent().trim();
if (content_trimmed.length() > 0) {
System.out.print(indent);
System.out.printf("%s%n", content_trimmed);
}
}
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	We print the text data. Since we are interested only in the capital and population data, we
	skip all empty strings.
      `,
    },
    //code
    {
      type: "code",
      value: `
	for (Node n = walker.firstChild(); n != null;
n = walker.nextSibling()) {
traverseLevel(walker, indent + " ");
}
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	In this for loop, we recursively go deeply into a branch of a tree.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	walker.setCurrentNode(node);
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	After we have finished processing a branch, we go to the same level with setCurrentNode
	so that we can continue with another tree branch.
	
	$ mvn -q exec:java
	continents
	europe
	slovakia
	capital
	Bratislava
	population
	421000
	hungary
	capital
	Budapest
	population
	1759000
	poland
	capital
	Warsaw
	population
	1735000
	asia
	china
	capital
	Beijing
	population
	21700000
	vietnam
	capital
	Hanoi
	population
	7500000

      `,
    },
// header
    {
      type: "header",
      value: "Java DOM writing example",
    },
    // context
    {
      type: "content-start",
	ignore: "true",
      value: `
	In the following example, we create an XML file.
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	JavaXmlDomWrite.java
      `,
    },
    //code
    {
      type: "code",
	ignore:"true",
      value: `
package com.zetcode;
import java.io.File;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
public class JavaXmlDomWrite {
public static void main(String[] args) throws ParserConfigurationException,
TransformerException {
DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
DocumentBuilder builder = factory.newDocumentBuilder();
Document doc = builder.newDocument();
Element root = doc.createElementNS("zetcode.com", "users");
doc.appendChild(root);
root.appendChild(createUser(doc, "1", "Robert", "Brown", "programmer"));
root.appendChild(createUser(doc, "2", "Pamela", "Kyle", "writer"));
root.appendChild(createUser(doc, "3", "Peter", "Smith", "teacher"));
TransformerFactory transformerFactory = TransformerFactory.newInstance();
Transformer transf = transformerFactory.newTransformer();
transf.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
transf.setOutputProperty(OutputKeys.INDENT, "yes");
transf.setOutputProperty("{http://xml.apache.org/xslt}indent-amount", "2");
DOMSource source = new DOMSource(doc);
File myFile = new File("src/main/resources/users.xml");
StreamResult console = new StreamResult(System.out);
StreamResult file = new StreamResult(myFile);
transf.transform(source, console);
transf.transform(source, file);
}
private static Node createUser(Document doc, String id, String firstName,
String lastName, String occupation) {
Element user = doc.createElement("user");
user.setAttribute("id", id);
user.appendChild(createUserElement(doc, "firstname", firstName));
user.appendChild(createUserElement(doc, "lastname", lastName));
user.appendChild(createUserElement(doc, "occupation", occupation));
return user;
}
private static Node createUserElement(Document doc, String name,
String value) {
Element node = doc.createElement(name);
node.appendChild(doc.createTextNode(value));
return node;
}
}
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	The example creates a new users.xml file in the src/main/resources directory.
      `,
    },
    //code
    {
      type: "code",
      value: `
	DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
	DocumentBuilder builder = factory.newDocumentBuilder();
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	A new document builder is created from a document builder factory.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	Document doc = builder.newDocument();
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	From the document builder, we create a new document with newDocument.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	Element root = doc.createElementNS("zetcode.com", "users");
	doc.appendChild(root);
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	 We create a root element and add it to the document with appendChild.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	root.appendChild(createUser(doc, "1", "Robert", "Brown", "programmer"));
	root.appendChild(createUser(doc, "2", "Pamela", "Kyle", "writer"));
	root.appendChild(createUser(doc, "3", "Peter", "Smith", "teacher"));
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	We append three child elements to the root element.
      `,
    },
    //code
    {
      type: "code",
      value: `
	TransformerFactory transformerFactory = TransformerFactory.newInstance();
	Transformer transf = transformerFactory.newTransformer();
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	Java DOM uses a Transformer to generate the XML file. It is called transformer, because
	it can also transform the document with XSLT language. In our case, we only write to the
	XML file.
      `,
    },
    //code
    {
      type: "code",
      value: `
	transf.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
	transf.setOutputProperty(OutputKeys.INDENT, "yes");
	transf.setOutputProperty("{http://xml.apache.org/xslt}indent-amount", "2");
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	We set the encoding and indentation of the document.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	DOMSource source = new DOMSource(doc);
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	The DOMSource holds the DOM tree.
      `,
    },
    //code
    {
      type: "code",
      value: `
	StreamResult console = new StreamResult(System.out);
	StreamResult file = new StreamResult(myFile);
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	 We are going to write to a console and to a file. StreamResult is a holder of a
	transformation result.
      `,
    },
    //code
    {
      type: "code",
	ignore: "true",
      value: `
	transf.transform(source, console);
transf.transform(source, file);
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	We write the XML sources to the stream results.
      `,
    },
    //code
    {
      type: "code",
      value: `
	private static Node createUser(Document doc, String id, String firstName,
String lastName, String occupation) {
Element user = doc.createElement("user");
user.setAttribute("id", id);
user.appendChild(createUserElement(doc, "firstname", firstName));
user.appendChild(createUserElement(doc, "lastname", lastName));
user.appendChild(createUserElement(doc, "occupation", occupation));
return user;
}
      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	A new user element is created in the createUser method with createElement. An
	attribute of the element is set with setAttribute.
      `,
    },
    //code
    {
      type: "code",
      value: `
	private static Node createUserElement(Document doc, String name,
String value) {
Element node = doc.createElement(name);
node.appendChild(doc.createTextNode(value));
return node;
}

      `,
    },
    //content
    {
      type: "content",
	ignore: "true",
      value: `
	An element is added to its parent with appendChild and a text node is created with
	createTextNode.
      `,
    },
  ];
}
