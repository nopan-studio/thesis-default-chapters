[
		// title
		{
			type: "title",
			value: "Chapter 10",
		},
		// subtitle
		{
			type: "subtitle",
			value: "Java - Networking",
		},
		// context
		{
			type: "content-start",
			value: `
			The term network programming refers to writing programs that execute across multiple devices (computers), in which the devices are all connected to each other using a network.
			
			The java.net package of the J2SE APIs contains a collection of classes and interfaces that provide the low-level communication details, allowing you to write programs that focus on solving the problem at hand.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			The java.net package provides support for the two common network protocols −
			`,
		},
		// content
		{
			type: "content",
			value: `
			TCP − TCP stands for Transmission Control Protocol, which allows for reliable communication between two applications. TCP is typically used over the Internet Protocol, which is referred to as TCP/IP.
			
			UDP − UDP stands for User Datagram Protocol, a connection-less protocol that allows for packets of data to be transmitted between applications.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			This chapter gives a good understanding on the following two subjects −
			`,
		},
		// content
		{
			type: "content",
			value: `
			Socket Programming − This is the most widely used concept in Networking and it has been explained in very detail.
			
			URL Processing − This would be covered separately. Click here to learn about URL Processing in Java language.
			`,
		},
		// header
		{
			type: "header",
			value: "Socket Programming",
		},
		// context
		{
			type: "content-start",
			value: `
			Sockets provide the communication mechanism between two computers using TCP. A client program creates a socket on its end of the communication and attempts to connect that socket to a server.
			
			When the connection is made, the server creates a socket object on its end of the communication. The client and the server can now communicate by writing to and reading from the socket.
			
			The java.net.Socket class represents a socket, and the java.net.ServerSocket class provides a mechanism for the server program to listen for clients and establish connections with them.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			The following steps occur when establishing a TCP connection between two computers using sockets −
			`,
		},
		// list
		{
			type: "list",
			value: [
				"The server instantiates a ServerSocket object, denoting which port number communication is to occur on.",
				"The server invokes the accept() method of the ServerSocket class. This method waits until a client connects to the server on the given port.",
				"After the server is waiting, a client instantiates a Socket object, specifying the server name and the port number to connect to.",
				"The constructor of the Socket class attempts to connect the client to the specified server and the port number. If communication is established, the client now has a Socket object capable of communicating with the server.",
				"On the server side, the accept() method returns a reference to a new socket on the server that is connected to the client's socket.",
			],
		},
		// content
		{
			type: "content",
			value: `
			After the connections are established, communication can occur using I/O streams. Each socket has both an OutputStream and an InputStream. The client's OutputStream is connected to the server's InputStream, and the client's InputStream is connected to the server's OutputStream.
			
			TCP is a two-way communication protocol, hence data can be sent across both streams at the same time. Following are the useful classes providing complete set of methods to implement sockets.
			`,
		},
		// header
		{
			type: "header",
			value: "ServerSocket Class Methods",
		},
		//context
		{
			type: "content-start",
			value: `
			The java.net.ServerSocket class is used by server applications to obtain a port and listen for client requests.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			The ServerSocket class has four constructors −
			`,
		},
		// table image
		{
			type: "image",
			value: "Chapter_10_table_1.png",
		},
		//content
		{
			type: "content",
			value: `
			If the ServerSocket constructor does not throw an exception, it means that your application has successfully bound to the specified port and is ready for client requests.
			`,
		},
		// content
		{
			type: "content",
			value: `
			Following are some of the common methods of the ServerSocket class −
			`,
		},
		// table image
		{
			type: "image",
			value: "Chapter_10_table_2.png",
		},
		//content
		{
			type: "content",
			value: `
			When the ServerSocket invokes accept(), the method does not return until a client connects. After a client does connect, the ServerSocket creates a new Socket on an unspecified port and returns a reference to this new Socket. A TCP connection now exists between the client and the server, and communication can begin.
			`,
		},
		// header
		{
			type: "header",
			value: "Socket Class Methods",
		},
		// context
		{
			type: "content-start",
			value: `
			The java.net.Socket class represents the socket that both the client and the server use to communicate with each other. The client obtains a Socket object by instantiating one, whereas the server obtains a Socket object from the return value of the accept() method.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			The Socket class has five constructors that a client uses to connect to a server −
			`,
		},
		// table image
		{
			type: "image",
			value: "Chapter_10_table_3.png",
		},
		// content
		{
			type: "content",
			value: `
			When the Socket constructor returns, it does not simply instantiate a Socket object but it actually attempts to connect to the specified server and port.
			
			Some methods of interest in the Socket class are listed here. Notice that both the client and the server have a Socket object, so these methods can be invoked by both the client and the server.
			`,
		},
		// table image
		{
			type: "image",
			value: "Chapter_10_table_4.png",
		},
		// header
		{
			type: "header",
			value: "InetAddress Class Methods",
		},
		// context
		{
			type: "content-start",
			value: `
			This class represents an Internet Protocol (IP) address.
			`,
		},
		// content
		{
			type: "content",
			value: `
			Here are following usefull methods which you would need while doing socket programming −
			`,
		},
		// table
		{
			type: "image",
			value: "Chapter_10_table_5.png",
		},
		// content
		{
			type: "content",
			value: `		
			Socket Client Example
			The following GreetingClient is a client program that connects to a server by using a socket and sends a greeting, and then waits for a response.
			
			Example
			`,
		},
		// code
		{
			type: "code",
			value: `
			// File Name GreetingClient.java
			import java.net.*;
			import java.io.*;
			
			public class GreetingClient {
				
				public static void main(String [] args) {
					String serverName = args[0];
					int port = Integer.parseInt(args[1]);
					try {
						System.out.println("Connecting to " + serverName + " on port " + port);
						Socket client = new Socket(serverName, port);
						
						System.out.println("Just connected to " + client.getRemoteSocketAddress());
						OutputStream outToServer = client.getOutputStream();
						DataOutputStream out = new DataOutputStream(outToServer);
						
						out.writeUTF("Hello from " + client.getLocalSocketAddress());
						InputStream inFromServer = client.getInputStream();
						DataInputStream in = new DataInputStream(inFromServer);
						
						System.out.println("Server says " + in.readUTF());
						client.close();
					} catch (IOException e) {
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
			Socket Server Example
			The following GreetingServer program is an example of a server application that uses the Socket class to listen for clients on a port number specified by a command-line argument −
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
			// File Name GreetingServer.java
			import java.net.*;
			import java.io.*;
			
			public class GreetingServer extends Thread {
				private ServerSocket serverSocket;
				
				public GreetingServer(int port) throws IOException {
					serverSocket = new ServerSocket(port);
					serverSocket.setSoTimeout(10000);
				}
				
				public void run() {
					while(true) {
						try {
							System.out.println("Waiting for client on port " + 
							serverSocket.getLocalPort() + "...");
							Socket server = serverSocket.accept();
							
							System.out.println("Just connected to " + server.getRemoteSocketAddress());
							DataInputStream in = new DataInputStream(server.getInputStream());
							
							System.out.println(in.readUTF());
							DataOutputStream out = new DataOutputStream(server.getOutputStream());
							out.writeUTF("Thank you for connecting to " + server.getLocalSocketAddress()
							+ "\nGoodbye!");
							server.close();
							
						} catch (SocketTimeoutException s) {
							System.out.println("Socket timed out!");
							break;
						} catch (IOException e) {
							e.printStackTrace();
							break;
						}
					}
				}
				
				public static void main(String [] args) {
					int port = Integer.parseInt(args[0]);
					try {
						Thread t = new GreetingServer(port);
						t.start();
					} catch (IOException e) {
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
			Compile the client and the server and then start the server as follows −
			
			$ java GreetingServer 6066
			Waiting for client on port 6066…
			
			Check the client program as follows −
			
			Output
			$ java GreetingClient localhost 6066
			Connecting to localhost on port 6066
			Just connected to localhost/127.0.0.1:6066
			Server says Thank you for connecting to /127.0.0.1:6066
			Goodbye!
			`,
		},
		// link video
		{
			type: "video",
			value: "https://youtube.com/embed/5Lm6nB3IsF8",
		},
		// header
		{
			type: "header",
			value: "Java - Sending Email",
		},
		// content
		{
			type: "content-start",
			value: `
			To send an e-mail using your Java Application is simple enough but to start with you should have JavaMail API and Java Activation Framework (JAF) installed on your machine.
			
			Download and unzip these files, in the newly created top level directories you will find a number of jar files for both the applications. You need to add mail.jar and activation.jar files in your CLASSPATH.
			`,
		},
		// header
		{
			type: "header",
			value: "Send a Simple E-mail",
		},
		// content
		{
			type: "content-start",
			value: `
			Here is an example to send a simple e-mail from your machine. It is assumed that your localhost is connected to the Internet and capable enough to send an e-mail.
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
			// File Name SendEmail.java
			
			import java.util.*;
			import javax.mail.*;
			import javax.mail.internet.*;
			import javax.activation.*;
			
			public class SendEmail {
				
				public static void main(String [] args) {    
					// Recipient's email ID needs to be mentioned.
					String to = "abcd@gmail.com";
					
					// Sender's email ID needs to be mentioned
					String from = "web@gmail.com";
					
					// Assuming you are sending email from localhost
					String host = "localhost";
					
					// Get system properties
					Properties properties = System.getProperties();
					
					// Setup mail server
					properties.setProperty("mail.smtp.host", host);
					
					// Get the default Session object.
					Session session = Session.getDefaultInstance(properties);
					
					try {
						// Create a default MimeMessage object.
						MimeMessage message = new MimeMessage(session);
						
						// Set From: header field of the header.
						message.setFrom(new InternetAddress(from));
						
						// Set To: header field of the header.
						message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
						
						// Set Subject: header field
						message.setSubject("This is the Subject Line!");
						
						// Now set the actual message
						message.setText("This is actual message");
						
						// Send message
						Transport.send(message);
						System.out.println("Sent message successfully....");
					} catch (MessagingException mex) {
						mex.printStackTrace();
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
			Compile and run this program to send a simple e-mail −
			
			Output
			$ java SendEmail
			Sent message successfully.…
			
			If you want to send an e-mail to multiple recipients then the following methods would be used to specify multiple e-mail IDs −
			
			void addRecipients(Message.RecipientType type, Address[] addresses)
			throws MessagingException
			`,
		},
		// context
		{
			type: "content",
			ignore: "true",
			value: `
			Here is the description of the parameters −
			`,
		},
		// context
		{
			type: "content",
			value: `
			type − This would be set to TO, CC or BCC. Here CC represents Carbon Copy and BCC represents Black Carbon Copy. Example: Message.RecipientType.TO
			
			addresses − This is an array of e-mail ID. You would need to use InternetAddress() method while specifying email IDs.
			`,
		},
		
		// header
		{
			type: "header",
			value: "Send an HTML E-mail",
		},
		// content
		{
			type: "content-start",
			value: `
			Here is an example to send an HTML e-mail from your machine. Here it is assumed that your localhost is connected to the Internet and capable enough to send an e-mail.
			
			This example is very similar to the previous one, except here we are using setContent() method to set content whose second argument is "text/html" to specify that the HTML content is included in the message.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Using this example, you can send as big as HTML content you like.
			
			Example
			`,
		},
		// code
		{
			type: "code",
			value: `
			// File Name SendHTMLEmail.java
			
			import java.util.*;
			import javax.mail.*;
			import javax.mail.internet.*;
			import javax.activation.*;
			
			public class SendHTMLEmail {
				
				public static void main(String [] args) {
					// Recipient's email ID needs to be mentioned.
					String to = "abcd@gmail.com";
					
					// Sender's email ID needs to be mentioned
					String from = "web@gmail.com";
					
					// Assuming you are sending email from localhost
					String host = "localhost";
					
					// Get system properties
					Properties properties = System.getProperties();
					
					// Setup mail server
					properties.setProperty("mail.smtp.host", host);
					
					// Get the default Session object.
					Session session = Session.getDefaultInstance(properties);
					
					try {
						// Create a default MimeMessage object.
						MimeMessage message = new MimeMessage(session);
						
						// Set From: header field of the header.
						message.setFrom(new InternetAddress(from));
						
						// Set To: header field of the header.
						message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
						
						// Set Subject: header field
						message.setSubject("This is the Subject Line!");
						
						// Send the actual HTML message, as big as you like
						message.setContent("<h1>This is actual message</h1>", "text/html");
						
						// Send message
						Transport.send(message);
						System.out.println("Sent message successfully....");
					} catch (MessagingException mex) {
						mex.printStackTrace();
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
			Compile and run this program to send an HTML e-mail −
			
			Output
			$ java SendHTMLEmail
			Sent message successfully.…
			`,
		},
		// header
		{
			type: "header",
			value: "Send Attachment in E-mail",
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Here is an example to send an e-mail with attachment from your machine. Here it is assumed that your localhost is connected to the internet and capable enough to send an e-mail.
			
			Example
			`,
		},
		// code
		{
			type: "code",
			value: `
			// File Name SendFileEmail.java
			
			import java.util.*;
			import javax.mail.*;
			import javax.mail.internet.*;
			import javax.activation.*;
			
			public class SendFileEmail {
				
				public static void main(String [] args) {     
					// Recipient's email ID needs to be mentioned.
					String to = "abcd@gmail.com";
					
					// Sender's email ID needs to be mentioned
					String from = "web@gmail.com";
					
					// Assuming you are sending email from localhost
					String host = "localhost";
					
					// Get system properties
					Properties properties = System.getProperties();
					
					// Setup mail server
					properties.setProperty("mail.smtp.host", host);
					
					// Get the default Session object.
					Session session = Session.getDefaultInstance(properties);
					
					try {
						// Create a default MimeMessage object.
						MimeMessage message = new MimeMessage(session);
						
						// Set From: header field of the header.
						message.setFrom(new InternetAddress(from));
						
						// Set To: header field of the header.
						message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
						
						// Set Subject: header field
						message.setSubject("This is the Subject Line!");
						
						// Create the message part 
						BodyPart messageBodyPart = new MimeBodyPart();
						
						// Fill the message
						messageBodyPart.setText("This is message body");
						
						// Create a multipar message
						Multipart multipart = new MimeMultipart();
						
						// Set text message part
						multipart.addBodyPart(messageBodyPart);
						
						// Part two is attachment
						messageBodyPart = new MimeBodyPart();
						String filename = "file.txt";
						DataSource source = new FileDataSource(filename);
						messageBodyPart.setDataHandler(new DataHandler(source));
						messageBodyPart.setFileName(filename);
						multipart.addBodyPart(messageBodyPart);
						
						// Send the complete message parts
						message.setContent(multipart );
						
						// Send message
						Transport.send(message);
						System.out.println("Sent message successfully....");
					} catch (MessagingException mex) {
						mex.printStackTrace();
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
			Compile and run this program to send an HTML e-mail −
			
			Output
			$ java SendFileEmail
			Sent message successfully.…
			`,
		},
		// header
		{
			type: "header",
			value: "User Authentication Part",
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			If it is required to provide user ID and Password to the e-mail server for authentication purpose, then you can set these properties as follows −
			`,
		},
		// code
		{
			type: "code",
			value: `
			props.setProperty("mail.user", "myuser");
			props.setProperty("mail.password", "mypwd");
			`,
		},
		// link video
		{
			type: "video",
			value: "https://youtube.com/embed/_wTXqDppu64",
		},
		// header
		{
			type: "header",
			value: "Java - Multithreading",
		},
		// content
		{
			type: "content-start",
			value: `
			Java is a multi-threaded programming language which means we can develop multi-threaded program using Java. A multi-threaded program contains two or more parts that can run concurrently and each part can handle a different task at the same time making optimal use of the available resources specially when your computer has multiple CPUs.
			
			By definition, multitasking is when multiple processes share common processing resources such as a CPU. Multi-threading extends the idea of multitasking into applications where you can subdivide specific operations within a single application into individual threads. Each of the threads can run in parallel. The OS divides processing time not only among different applications, but also among each thread within an application.
			
			Multi-threading enables you to write in a way where multiple activities can proceed concurrently in the same program.
			`,
		},
		// header
		{
			type: "header",
			value: "Life Cycle of a Thread",
		},
		// content
		{
			type: "content-start",
			value: `
			A thread goes through various stages in its life cycle. For example, a thread is born, started, runs, and then dies. The following diagram shows the complete life cycle of a thread.
			`,
		},
		// image
		{
			type: "image",
			value: "Chapter_10_image_1.png"
		},
		// context
		{
			type: "content",
			ignore: "true",
			value: `
			Following are the stages of the life cycle −
			`,
		},
		// content
		{
			type: "content",
			value: `
			New − A new thread begins its life cycle in the new state. It remains in this state until the program starts the thread. It is also referred to as a born thread.
			
			Runnable − After a newly born thread is started, the thread becomes runnable. A thread in this state is considered to be executing its task.
			
			Waiting − Sometimes, a thread transitions to the waiting state while the thread waits for another thread to perform a task. A thread transitions back to the runnable state only when another thread signals the waiting thread to continue executing.
			
			Timed Waiting − A runnable thread can enter the timed waiting state for a specified interval of time. A thread in this state transitions back to the runnable state when that time interval expires or when the event it is waiting for occurs.
			
			Terminated (Dead) − A runnable thread enters the terminated state when it completes its task or otherwise terminates.
			`,
		},
		// header
		{
			type: "header",
			value: "Thread Priorities",
		},
		// content
		{
			type: "content-start",
			value: `
			Every Java thread has a priority that helps the operating system determine the order in which threads are scheduled.
			
			Java thread priorities are in the range between MIN_PRIORITY (a constant of 1) and MAX_PRIORITY (a constant of 10). By default, every thread is given priority NORM_PRIORITY (a constant of 5).
			
			Threads with higher priority are more important to a program and should be allocated processor time before lower-priority threads. However, thread priorities cannot guarantee the order in which threads execute and are very much platform dependent.
			`,
		},
		// header
		{
			type: "header",
			value: "Create a Thread by Implementing a Runnable Interface",
		},
		// content
		{
			type: "content-start",
			value: `
			If your class is intended to be executed as a thread then you can achieve this by implementing a Runnable interface.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			You will need to follow three basic steps −
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Step 1
			As a first step, you need to implement a run() method provided by a Runnable interface. This method provides an entry point for the thread and you will put your complete business logic inside this method. Following is a simple syntax of the run() method −
			`,
		},
		// code
		{
			type: "code",
			ignore: "true",
			value: `
			public void run( )
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Step 2
			As a second step, you will instantiate a Thread object using the following constructor −
			`,
		},
		// code
		{
			type: "code",
			ignore: "true",
			value: `
			Thread(Runnable threadObj, String threadName);
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Step 2
			Where, threadObj is an instance of a class that implements the Runnable interface and threadName is the name given to the new thread.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Step 3
			Once a Thread object is created, you can start it by calling start() method, which executes a call to run( ) method. Following is a simple syntax of start() method −
			`,
		},
		// code
		{
			type: "code",
			ignore: "true",
			value: `
			void start();
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Example
			Here is an example that creates a new thread and starts running it −
			`,
		},
		// code
		{
			type: "code",
			value: `
			class RunnableDemo implements Runnable {
				private Thread t;
				private String threadName;
				
				RunnableDemo( String name) {
					threadName = name;
					System.out.println("Creating " +  threadName );
				}
				
				public void run() {
					System.out.println("Running " +  threadName );
					try {
						for(int i = 4; i > 0; i--) {
							System.out.println("Thread: " + threadName + ", " + i);
							// Let the thread sleep for a while.
							Thread.sleep(50);
						}
					} catch (InterruptedException e) {
						System.out.println("Thread " +  threadName + " interrupted.");
					}
					System.out.println("Thread " +  threadName + " exiting.");
				}
				
				public void start () {
					System.out.println("Starting " +  threadName );
					if (t == null) {
						t = new Thread (this, threadName);
						t.start ();
					}
				}
			}
			
			public class TestThread {
				
				public static void main(String args[]) {
					RunnableDemo R1 = new RunnableDemo( "Thread-1");
					R1.start();
					
					RunnableDemo R2 = new RunnableDemo( "Thread-2");
					R2.start();
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
			Creating Thread-1
			Starting Thread-1
			Creating Thread-2
			Starting Thread-2
			Running Thread-1
			Thread: Thread-1, 4
			Running Thread-2
			Thread: Thread-2, 4
			Thread: Thread-1, 3
			Thread: Thread-2, 3
			Thread: Thread-1, 2
			Thread: Thread-2, 2
			Thread: Thread-1, 1
			Thread: Thread-2, 1
			Thread Thread-1 exiting.
			Thread Thread-2 exiting.
			`,
		},
		// header
		{
			type: "header",
			value: "Thread Methods",
		},
		// content
		{
			type: "content-start",
			ignore: "true",
			value: `
			Following is the list of important methods available in the Thread class.
			`,
		},
		// table image
		{
			type: "image",
			value: "Chapter_10_table_6.png",
		},
		// content
		{
			type: "content-start",
			ignore: "true",
			value: `
			The previous methods are invoked on a particular Thread object. The following methods in the Thread class are static. Invoking one of the static methods performs the operation on the currently running thread.
			`,
		},
		// table image
		{
			type: "image",
			value: "Chapter_10_table_7.png",
		},
		// content
		{
			type: "content-start",
			ignore: "true",
			value: `
			Example
			The following ThreadClassDemo program demonstrates some of these methods of the Thread class. Consider a class DisplayMessage which implements Runnable −
			`,
		},
		// code
		{
			type: "code",
			value: `
			// File Name : DisplayMessage.java
			// Create a thread to implement Runnable
			
			public class DisplayMessage implements Runnable {
				private String message;
				
				public DisplayMessage(String message) {
					this.message = message;
				}
				
				public void run() {
					while(true) {
						System.out.println(message);
					}
				}
			}
			`,
		},
		// content
		{
			type: "content-start",
			ignore: "true",
			value: `
			Following is another class which extends the Thread class −
			`,
		},
		// code
		{
			type: "code",
			value: `
			// File Name : GuessANumber.java
			// Create a thread to extentd Thread
			
			public class GuessANumber extends Thread {
				private int number;
				public GuessANumber(int number) {
					this.number = number;
				}
				
				public void run() {
					int counter = 0;
					int guess = 0;
					do {
						guess = (int) (Math.random() * 100 + 1);
						System.out.println(this.getName() + " guesses " + guess);
						counter++;
					} while(guess != number);
					System.out.println("** Correct!" + this.getName() + "in" + counter + "guesses.**");
				}
			}
			`,
		},
		// content
		{
			type: "content-start",
			ignore: "true",
			value: `
			Following is the main program, which makes use of the above-defined classes −
			`,
		},
		// code
		{
			type: "code",
			value: `
			// File Name : ThreadClassDemo.java
			public class ThreadClassDemo {
				
				public static void main(String [] args) {
					Runnable hello = new DisplayMessage("Hello");
					Thread thread1 = new Thread(hello);
					thread1.setDaemon(true);
					thread1.setName("hello");
					System.out.println("Starting hello thread...");
					thread1.start();
					
					Runnable bye = new DisplayMessage("Goodbye");
					Thread thread2 = new Thread(bye);
					thread2.setPriority(Thread.MIN_PRIORITY);
					thread2.setDaemon(true);
					System.out.println("Starting goodbye thread...");
					thread2.start();
					
					System.out.println("Starting thread3...");
					Thread thread3 = new GuessANumber(27);
					thread3.start();
					try {
						thread3.join();
					} catch (InterruptedException e) {
						System.out.println("Thread interrupted.");
					}
					System.out.println("Starting thread4...");
					Thread thread4 = new GuessANumber(75);
					
					thread4.start();
					System.out.println("main() is ending...");
				}
			}
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			This will produce the following result. You can try this example again and again and you will get a different result every time.
			
			Output
			Starting hello thread...
			Starting goodbye thread...
			Hello
			Hello
			Hello
			Hello
			Hello
			Hello
			Goodbye
			Goodbye
			Goodbye
			Goodbye
			Goodbye
			....…
			`,
		},
		// header
		{
			type: "header",
			value: "Major Java Multithreading Concepts",
		},
		// content
		{
			type: "content-start",
			value: `
			While doing Multithreading programming in Java, you would need to have the following concepts very handy −
			`,
		},
		// header
		{
			type: "header",
			value: "Java - Thread Synchronization",
		},
		// content
		{
			type: "content-start",
			value: `
			When we start two or more threads within a program, there may be a situation when multiple threads try to access the same resource and finally they can produce unforeseen result due to concurrency issues. For example, if multiple threads try to write within a same file then they may corrupt the data because one of the threads can override data or while one thread is opening the same file at the same time another thread might be closing the same file.
			
			So there is a need to synchronize the action of multiple threads and make sure that only one thread can access the resource at a given point in time. This is implemented using a concept called monitors. Each object in Java is associated with a monitor, which a thread can lock or unlock. Only one thread at a time may hold a lock on a monitor.
			
			Java programming language provides a very handy way of creating threads and synchronizing their task by using synchronized blocks. You keep shared resources within this block.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Following is the general form of the synchronized statement −
			`,
		},
		// code
		{
			type: "code",
			ignore: "true",
			value: `
			Syntax
			
			synchronized(objectidentifier) {
				// Access shared variables and other shared resources
			}
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value:`
			Here, the objectidentifier is a reference to an object whose lock associates with the monitor that the synchronized statement represents. Now we are going to see two examples, where we will print a counter using two different threads. When threads are not synchronized, they print counter value which is not in sequence, but when we print counter by putting inside synchronized() block, then it prints counter very much in sequence for both the threads.
			`,
		},
		// header
		{
			type: "header",
			value: "Multithreading Example without Synchronization",
		},
		// content
		{
			type: "content-start",
			ignore: "true",
			value: `
			Here is a simple example which may or may not print counter value in sequence and every time we run it, it produces a different result based on CPU availability to a thread.
			
			Example
			`,
		},
		// code
		{
			type: "code",
			value: `
			class PrintDemo {
				public void printCount() {
					try {
						for(int i = 5; i > 0; i--) {
							System.out.println("Counter   ---   "  + i );
						}
					} catch (Exception e) {
						System.out.println("Thread  interrupted.");
					}
				}
			}
			
			class ThreadDemo extends Thread {
				private Thread t;
				private String threadName;
				PrintDemo  PD;
				
				ThreadDemo( String name,  PrintDemo pd) {
					threadName = name;
					PD = pd;
				}
				
				public void run() {
					PD.printCount();
					System.out.println("Thread " +  threadName + " exiting.");
				}
				
				public void start () {
					System.out.println("Starting " +  threadName );
					if (t == null) {
						t = new Thread (this, threadName);
						t.start ();
					}
				}
			}
			
			public class TestThread {
				public static void main(String args[]) {
					
					PrintDemo PD = new PrintDemo();
					
					ThreadDemo T1 = new ThreadDemo( "Thread - 1 ", PD );
					ThreadDemo T2 = new ThreadDemo( "Thread - 2 ", PD );
					
					T1.start();
					T2.start();
					
					// wait for threads to end
					try {
						T1.join();
						T2.join();
					} catch ( Exception e) {
						System.out.println("Interrupted");
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
			This produces a different result every time you run this program −
			
			Output
			Starting Thread - 1
			Starting Thread - 2
			Counter   ---   5
			Counter   ---   4
			Counter   ---   3
			Counter   ---   5
			Counter   ---   2
			Counter   ---   1
			Counter   ---   4
			Thread Thread - 1  exiting.
			Counter   ---   3
			Counter   ---   2
			Counter   ---   1
			Thread Thread - 2  exiting.
			`,
		},
		// header
		{
			type: "header",
			value: "Multithreading Example with Synchronization",
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Here is the same example which prints counter value in sequence and every time we run it, it produces the same result.
			
			Example
			`,
		},
		// code
		{
			type: "code",
			value: `
			class PrintDemo {
				public void printCount() {
					try {
						for(int i = 5; i > 0; i--) {
							System.out.println("Counter   ---   "  + i );
						}
					} catch (Exception e) {
						System.out.println("Thread  interrupted.");
					}
				}
			}
			
			class ThreadDemo extends Thread {
				private Thread t;
				private String threadName;
				PrintDemo  PD;
				
				ThreadDemo( String name,  PrintDemo pd) {
					threadName = name;
					PD = pd;
				}
				
				public void run() {
					synchronized(PD) {
						PD.printCount();
					}
					System.out.println("Thread " +  threadName + " exiting.");
				}
				
				public void start () {
					System.out.println("Starting " +  threadName );
					if (t == null) {
						t = new Thread (this, threadName);
						t.start ();
					}
				}
			}
			
			public class TestThread {
				
				public static void main(String args[]) {
					PrintDemo PD = new PrintDemo();
					
					ThreadDemo T1 = new ThreadDemo( "Thread - 1 ", PD );
					ThreadDemo T2 = new ThreadDemo( "Thread - 2 ", PD );
					
					T1.start();
					T2.start();
					
					// wait for threads to end
					try {
						T1.join();
						T2.join();
					} catch ( Exception e) {
						System.out.println("Interrupted");
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
			This produces the same result every time you run this program −
			
			Output
			Starting Thread - 1
			Starting Thread - 2
			Counter   ---   5
			Counter   ---   4
			Counter   ---   3
			Counter   ---   2
			Counter   ---   1
			Thread Thread - 1  exiting.
			Counter   ---   5
			Counter   ---   4
			Counter   ---   3
			Counter   ---   2
			Counter   ---   1
			Thread Thread - 2  exiting.
			`,
		},
		// header
		{
			type: "header",
			value: "Java - Interthread Communication",
		},
		// content
		{
			type: "content-start",
			value: `
			If you are aware of interprocess communication then it will be easy for you to understand interthread communication. Interthread communication is important when you develop an application where two or more threads exchange some information.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			There are three simple methods and a little trick which makes thread communication possible. All the three methods are listed below −
			`,
		},
		// table image
		{
			type: "image",
			value: "Chapter_10_table_8.png",
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			These methods have been implemented as final methods in Object, so they are available in all the classes. All three methods can be called only from within a synchronized context.
			
			Example
			This examples shows how two threads can communicate using wait() and notify() method. You can create a complex system using the same concept.
			`,
		},
		// code
		{
			type: "code",
			value: `
			class Chat {
				boolean flag = false;
				
				public synchronized void Question(String msg) {
					if (flag) {
						try {
							wait();
						} catch (InterruptedException e) {
							e.printStackTrace();
						}
					}
					System.out.println(msg);
					flag = true;
					notify();
				}
				
				public synchronized void Answer(String msg) {
					if (!flag) {
						try {
							wait();
						} catch (InterruptedException e) {
							e.printStackTrace();
						}
					}
					
					System.out.println(msg);
					flag = false;
					notify();
				}
			}
			
			class T1 implements Runnable {
				Chat m;
				String[] s1 = { "Hi", "How are you ?", "I am also doing fine!" };
				
				public T1(Chat m1) {
					this.m = m1;
					new Thread(this, "Question").start();
				}
				
				public void run() {
					for (int i = 0; i < s1.length; i++) {
						m.Question(s1[i]);
					}
				}
			}
			
			class T2 implements Runnable {
				Chat m;
				String[] s2 = { "Hi", "I am good, what about you?", "Great!" };
				
				public T2(Chat m2) {
					this.m = m2;
					new Thread(this, "Answer").start();
				}
				
				public void run() {
					for (int i = 0; i < s2.length; i++) {
						m.Answer(s2[i]);
					}
				}
			}
			public class TestThread {
				public static void main(String[] args) {
					Chat m = new Chat();
					new T1(m);
					new T2(m);
				}
			}
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			When the above program is complied and executed, it produces the following result −
			
			Hi
			Hi
			How are you ?
			I am good, what about you?
			I am also doing fine!
			Great!
			`,
		},
		// header
		{
			type: "header",
			value: "Java - Thread Deadlock",
		},
		// context
		{
			type: "content-start",
			value: `
			Deadlock describes a situation where two or more threads are blocked forever, waiting for each other. Deadlock occurs when multiple threads need the same locks but obtain them in different order. A Java multithreaded program may suffer from the deadlock condition because the synchronized keyword causes the executing thread to block while waiting for the lock, or monitor, associated with the specified object.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Here is an example.
			`,
		},
		// code
		{
			type: "code",
			value: `
			public class TestThread {
				public static Object Lock1 = new Object();
				public static Object Lock2 = new Object();
				
				public static void main(String args[]) {
					ThreadDemo1 T1 = new ThreadDemo1();
					ThreadDemo2 T2 = new ThreadDemo2();
					T1.start();
					T2.start();
				}
				
				private static class ThreadDemo1 extends Thread {
					public void run() {
						synchronized (Lock1) {
							System.out.println("Thread 1: Holding lock 1...");
							
							try { Thread.sleep(10); }
							catch (InterruptedException e) {}
							System.out.println("Thread 1: Waiting for lock 2...");
							
							synchronized (Lock2) {
								System.out.println("Thread 1: Holding lock 1 & 2...");
							}
						}
					}
				}
				private static class ThreadDemo2 extends Thread {
					public void run() {
						synchronized (Lock2) {
							System.out.println("Thread 2: Holding lock 2...");
							
							try { Thread.sleep(10); }
							catch (InterruptedException e) {}
							System.out.println("Thread 2: Waiting for lock 1...");
							
							synchronized (Lock1) {
								System.out.println("Thread 2: Holding lock 1 & 2...");
							}
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
			When you compile and execute the above program, you find a deadlock situation and following is the output produced by the program −
			
			Output
			Thread 1: Holding lock 1...
			Thread 2: Holding lock 2...
			Thread 1: Waiting for lock 2...
			Thread 2: Waiting for lock 1…
			
			The above program will hang forever because neither of the threads in position to proceed and waiting for each other to release the lock, so you can come out of the program by pressing CTRL+C.
			`,
		},
		// header
		{
			type: "header",
			value: "Deadlock Solution Example",
		},
		// content
		{
			type: "content-start",
			ignore: "true",
			value: `
			Let's change the order of the lock and run of the same program to see if both the threads still wait for each other −
			
			Example
			`
		},
		// code
		{
			type: "code",
			value: `
			public class TestThread {
				public static Object Lock1 = new Object();
				public static Object Lock2 = new Object();
				
				public static void main(String args[]) {
					ThreadDemo1 T1 = new ThreadDemo1();
					ThreadDemo2 T2 = new ThreadDemo2();
					T1.start();
					T2.start();
				}
				
				private static class ThreadDemo1 extends Thread {
					public void run() {
						synchronized (Lock1) {
							System.out.println("Thread 1: Holding lock 1...");
							
							try {
								Thread.sleep(10);
							} catch (InterruptedException e) {}
							System.out.println("Thread 1: Waiting for lock 2...");
							
							synchronized (Lock2) {
								System.out.println("Thread 1: Holding lock 1 & 2...");
							}
						}
					}
				}
				private static class ThreadDemo2 extends Thread {
					public void run() {
						synchronized (Lock1) {
							System.out.println("Thread 2: Holding lock 1...");
							
							try {
								Thread.sleep(10);
							} catch (InterruptedException e) {}
							System.out.println("Thread 2: Waiting for lock 2...");
							
							synchronized (Lock2) {
								System.out.println("Thread 2: Holding lock 1 & 2...");
							}
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
			So just changing the order of the locks prevent the program in going into a deadlock situation and completes with the following result −
			
			Output
			Thread 1: Holding lock 1...
			Thread 1: Waiting for lock 2...
			Thread 1: Holding lock 1 & 2...
			Thread 2: Holding lock 1...
			Thread 2: Waiting for lock 2…
			Thread 2: Holding lock 1 & 2…
			`,
		},
		// header
		{
			type: "header",
			value: "Java - Thread Control",
		},
		// context
		{
			type: "content-start",
			value: `
			Core Java provides complete control over multithreaded program. You can develop a multithreaded program which can be suspended, resumed, or stopped completely based on your requirements. There are various static methods which you can use on thread objects to control their behavior. Following table lists down those methods −
			`,
		},
		// table image
		{
			type: "image",
			value: "Chapter_10_table_9.png",
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Be aware that the latest versions of Java has deprecated the usage of suspend( ), resume( ), and stop( ) methods and so you need to use available alternatives.
			
			Example
			`,
		},
		// code
		{
			type: "code",
			value: `
			class RunnableDemo implements Runnable {
				public Thread t;
				private String threadName;
				boolean suspended = false;
				
				RunnableDemo( String name) {
					threadName = name;
					System.out.println("Creating " +  threadName );
				}
				
				public void run() {
					System.out.println("Running " +  threadName );
					try {
						for(int i = 10; i > 0; i--) {
							System.out.println("Thread: " + threadName + ", " + i);
							// Let the thread sleep for a while.
							Thread.sleep(300);
							synchronized(this) {
								while(suspended) {
									wait();
								}
							}
						}
					} catch (InterruptedException e) {
						System.out.println("Thread " +  threadName + " interrupted.");
					}
					System.out.println("Thread " +  threadName + " exiting.");
				}
				
				public void start () {
					System.out.println("Starting " +  threadName );
					if (t == null) {
						t = new Thread (this, threadName);
						t.start ();
					}
				}
				
				void suspend() {
					suspended = true;
				}
				
				synchronized void resume() {
					suspended = false;
					notify();
				}
			}
			
			public class TestThread {
				
				public static void main(String args[]) {
					
					RunnableDemo R1 = new RunnableDemo( "Thread-1");
					R1.start();
					
					RunnableDemo R2 = new RunnableDemo( "Thread-2");
					R2.start();
					
					try {
						Thread.sleep(1000);
						R1.suspend();
						System.out.println("Suspending First Thread");
						Thread.sleep(1000);
						R1.resume();
						System.out.println("Resuming First Thread");
						
						R2.suspend();
						System.out.println("Suspending thread Two");
						Thread.sleep(1000);
						R2.resume();
						System.out.println("Resuming thread Two");
					} catch (InterruptedException e) {
						System.out.println("Main thread Interrupted");
					}try {
						System.out.println("Waiting for threads to finish.");
						R1.t.join();
						R2.t.join();
					} catch (InterruptedException e) {
						System.out.println("Main thread Interrupted");
					}
					System.out.println("Main thread exiting.");
				}
			}
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			The above program produces the following output −
			
			Output
			Creating Thread-1
			Starting Thread-1
			Creating Thread-2
			Starting Thread-2
			Running Thread-1
			Thread: Thread-1, 10
			Running Thread-2
			Thread: Thread-2, 10
			Thread: Thread-1, 9
			Thread: Thread-2, 9
			Thread: Thread-1, 8
			Thread: Thread-2, 8
			Thread: Thread-1, 7
			Thread: Thread-2, 7
			Suspending First Thread
			Thread: Thread-2, 6
			Thread: Thread-2, 5
			Thread: Thread-2, 4
			Resuming First Thread
			Suspending thread Two
			Thread: Thread-1, 6
			Thread: Thread-1, 5
			Thread: Thread-1, 4
			Thread: Thread-1, 3
			Resuming thread Two
			Thread: Thread-2, 3
			Waiting for threads to finish.
			Thread: Thread-1, 2
			Thread: Thread-2, 2
			Thread: Thread-1, 1
			Thread: Thread-2, 1
			Thread Thread-1 exiting.
			Thread Thread-2 exiting.
			Main thread exiting.
			`,
		},
		// link video
		{
			type: "video",
			value: "https://youtube.com/embed/Yk7BXaotJ24",
		},
		// header
		{
			type: "header",
			value: "Java - Applet Basics",
		},
		// context
		{
			type: "content-start",
			value: `
			An applet is a Java program that runs in a Web browser. An applet can be a fully functional Java application because it has the entire Java API at its disposal.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			There are some important differences between an applet and a standalone Java application, including the following −
			`,
		},
		// list
		{
			type: "list",
			value: [
				"An applet is a Java class that extends the java.applet.Applet class.",
				"A main() method is not invoked on an applet, and an applet class will not define main().",
				"Applets are designed to be embedded within an HTML page.",
				"When a user views an HTML page that contains an applet, the code for the applet is downloaded to the user's machine.",
				"A JVM is required to view an applet. The JVM can be either a plug-in of the Web browser or a separate runtime environment.",
				"The JVM on the user's machine creates an instance of the applet class and invokes various methods during the applet's lifetime.",
				"Applets have strict security rules that are enforced by the Web browser. The security of an applet is often referred to as sandbox security, comparing the applet to a child playing in a sandbox with various rules that must be followed.",
				"Other classes that the applet needs can be downloaded in a single Java Archive (JAR) file.",
			],
		},
		// header
		{
			type: "header",
			value: "Life Cycle of an Applet",
		},
		// context
		{
			type: "content-start",
			ignore: "true",
			value: `
			Four methods in the Applet class gives you the framework on which you build any serious applet −
			`,
		},
		// list
		{
			type: "list",
			value: [
				"init − This method is intended for whatever initialization is needed for your applet. It is called after the param tags inside the applet tag have been processed.",
				"start − This method is automatically called after the browser calls the init method. It is also called whenever the user returns to the page containing the applet after having gone off to other pages.",
				"stop − This method is automatically called when the user moves off the page on which the applet sits. It can, therefore, be called repeatedly in the same applet.",
				"destroy − This method is only called when the browser shuts down normally. Because applets are meant to live on an HTML page, you should not normally leave resources behind after a user leaves the page that contains the applet.",
				"paint − Invoked immediately after the start() method, and also any time the applet needs to repaint itself in the browser. The paint() method is actually inherited from the java.awt.",
			],
		},
		// header
		{
			type: "header",
			value: `"A "Hello, World" Applet"`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Following is a simple applet named HelloWorldApplet.java −
			`,
		},
		// code
		{
			type: "code",
			value: `
			import java.applet.*;
			import java.awt.*;
			
			public class HelloWorldApplet extends Applet {
				public void paint (Graphics g) {
					g.drawString ("Hello World", 25, 50);
				}
			}
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Following is a simple applet named HelloWorldApplet.java −
			`,
		},
		// list
		{
			type: "list",
			value: [
				"java.applet.Applet",
				"java.awt.Graphics",
			],
		},
		// content
		{
			type: "content",
			value: `
			Without those import statements, the Java compiler would not recognize the classes Applet and Graphics, which the applet class refers to.
			`,
		},
		// header
		{
			type: "header",
			value: "The Applet Class",
		},
		// content
		{
			type: "content-start",
			value: `
			Every applet is an extension of the java.applet.Applet class. The base Applet class provides methods that a derived Applet class may call to obtain information and services from the browser context.
			`,
		},
		// context
		{
			type: "content",
			ignore: "true",
			value: `
			These include methods that do the following −
			`,
		},
		// list
		{
			type: "list",
			value: [
				"Get applet parameters",
				"Get the network location of the HTML file that contains the applet",
				"Get the network location of the applet class directory",
				"Print a status message in the browser",
				"Fetch an image",
				"Fetch an audio clip",
				"Play an audio clip",
				"Resize the applet",
			],
		},
		// context
		{
			type: "content",
			value: `
			Additionally, the Applet class provides an interface by which the viewer or browser obtains information about the applet and controls the applet's execution. The viewer may −
			`,
		},
		// list
		{
			type: "list",
			value: [
				"Request information about the author, version, and copyright of the applet",
				"Request a description of the parameters the applet recognizes",
				"Initialize the applet",
				"Destroy the applet",
				"Start the applet's execution",
				"Stop the applet's execution",
			],
		},
		// context
		{
			type: "content",
			value: `
			The Applet class provides default implementations of each of these methods. Those implementations may be overridden as necessary.
			
			The "Hello, World" applet is complete as it stands. The only method overridden is the paint method.
			`,
		},
		// header
		{
			type: "header",
			value: "Invoking an Applet",
		},
		// content
		{
			type: "content-start",
			value: `
			An applet may be invoked by embedding directives in an HTML file and viewing the file through an applet viewer or Java-enabled browser.
			
			The <applet> tag is the basis for embedding an applet in an HTML file. 
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Following is an example that invokes the "Hello, World" applet −
			`,
		},
		// code
		{
			type: "code",
			value: `
			<html>
			<title>The Hello, World Applet</title>
			<hr>
			<applet code = "HelloWorldApplet.class" width = "320" height = "120">
			If your browser was Java-enabled, a "Hello, World"
			message would appear here.
			</applet>
			<hr>
			</html>
			`,
		},
		// content
		{
			type: "content",
			value: `
			Note − You can refer to HTML Applet Tag to understand more about calling applet from HTML.
			
			The code attribute of the <applet> tag is required. It specifies the Applet class to run. Width and height are also required to specify the initial size of the panel in which an applet runs. The applet directive must be closed with an </applet> tag.
			
			If an applet takes parameters, values may be passed for the parameters by adding <param> tags between <applet> and </applet>. The browser ignores text and other tags between the applet tags.
			Non-Java-enabled browsers do not process <applet> and </applet>. Therefore, anything that appears between the tags, not related to the applet, is visible in non-Java-enabled browsers.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			The viewer or browser looks for the compiled Java code at the location of the document. To specify otherwise, use the codebase attribute of the <applet> tag as shown −
			`,
		},
		// code
		{
			type: "code",
			ignore: "true",
			value: `
			<applet codebase = "https://amrood.com/applets" code = "HelloWorldApplet.class"
			width = "320" height = "120">
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			If an applet resides in a package other than the default, the holding package must be specified in the code attribute using the period character (.) to separate package/class components. For example −
			`,
		},
		// code
		{
			type: "code",
			ignore: "true",
			value: `
			<applet  = "mypackage.subpackage.TestApplet.class" 
			width = "320" height = "120">
			`,
		},
		// header
		{
			type: "header",
			value: "Getting Applet Parameters",
		},
		// content
		{
			type: "content-start",
			value: `
			The following example demonstrates how to make an applet respond to setup parameters specified in the document. This applet displays a checkerboard pattern of black and a second color.
			
			The second color and the size of each square may be specified as parameters to the applet within the document.
			
			CheckerApplet gets its parameters in the init() method. It may also get its parameters in the paint() method. However, getting the values and saving the settings once at the start of the applet, instead of at every refresh, is convenient and efficient.
			
			The applet viewer or browser calls the init() method of each applet it runs. The viewer calls init() once, immediately after loading the applet. (Applet.init() is implemented to do nothing.) Override the default implementation to insert custom initialization code.
			
			The Applet.getParameter() method fetches a parameter given the parameter's name (the value of a parameter is always a string). If the value is numeric or other non-character data, the string must be parsed.
			`,
		},
		// content
		{
			type: "content",
			value: `
			The following is a skeleton of CheckerApplet.java −
			`,
		},
		// code
		{
			type: "code",
			value: `
			import java.applet.*;
			import java.awt.*;
			
			public class CheckerApplet extends Applet {
				int squareSize = 50;   // initialized to default size
				public void init() {}
				private void parseSquareSize (String param) {}
				private Color parseColor (String param) {}
				public void paint (Graphics g) {}
			}
			`,
		},
		// content
		{
			type: "content",
			value: `
			Here are CheckerApplet's init() and private parseSquareSize() methods −
			`,
		},
		// code
		{
			type: "code",
			value: `
			public void init () {
				String squareSizeParam = getParameter ("squareSize");
				parseSquareSize (squareSizeParam);
				
				String colorParam = getParameter ("color");
				Color fg = parseColor (colorParam);
				
				setBackground (Color.black);
				setForeground (fg);
			}
			
			private void parseSquareSize (String param) {
				if (param == null) return;
				try {
					squareSize = Integer.parseInt (param);
				} catch (Exception e) {
					// Let default value remain
				}
			}
			`,
		},
		// content
		{	
			type: "content",
			ignore: "true",
			value: `
			The applet calls parseSquareSize() to parse the squareSize parameter. parseSquareSize() calls the library method Integer.parseInt(), which parses a string and returns an integer. Integer.parseInt() throws an exception whenever its argument is invalid.
			
			Therefore, parseSquareSize() catches exceptions, rather than allowing the applet to fail on bad input.
			
			The applet calls parseColor() to parse the color parameter into a Color value. parseColor() does a series of string comparisons to match the parameter value to the name of a predefined color. You need to implement these methods to make this applet work.
			`,
		},
		// header
		{
			type: "header",
			value: "Specifying Applet Parameters",
		},
		// content
		{
			type: "content-start",
			value: `
			The following is an example of an HTML file with a CheckerApplet embedded in it. The HTML file specifies both parameters to the applet by means of the <param> tag.
			`,
		},
		// code
		{
			type: "code",
			value: `
			<html>
			<title>Checkerboard Applet</title>
			<hr>
			<applet code = "CheckerApplet.class" width = "480" height = "320">
			<param name = "color" value = "blue">
			<param name = "squaresize" value = "30">
			</applet>
			<hr>
			</html>
			`,
		},
		// content
		{
			type: "content-start",
			value: `
			Note − Parameter names are not case sensitive.
			`,
		},
		// header
		{
			type: "header",
			value: "Application Conversion to Applets",
		},
		// content
		{
			type: "content-start",
			value: `
			It is easy to convert a graphical Java application (that is, an application that uses the AWT and that you can start with the Java program launcher) into an applet that you can embed in a web page.
			`,
		},
		// content
		{
			type: "content",
			ignore: "true",
			value: `
			Following are the specific steps for converting an application to an applet.
			`,
		},
		// list
		{
			type: "list",
			value: [
				"Make an HTML page with the appropriate tag to load the applet code.",
				"Supply a subclass of the JApplet class. Make this class public. Otherwise, the applet cannot be loaded.",
				"Eliminate the main method in the application. Do not construct a frame window for the application. Your application will be displayed inside the browser.",
				"Move any initialization code from the frame window constructor to the init method of the applet. You don't need to explicitly construct the applet object. The browser instantiates it for you and calls the init method.",
				"Remove the call to setSize; for applets, sizing is done with the width and height parameters in the HTML file.",
				"Remove the call to setDefaultCloseOperation. An applet cannot be closed; it terminates when the browser exits.",
				"If the application calls setTitle, eliminate the call to the method. Applets cannot have title bars. (You can, of course, title the web page itself, using the HTML title tag.)",
				"Don't call setVisible(true). The applet is displayed automatically.",
			],
		},
		// header
		{
			type: "header",
			value: "Event Handling",
		},
		// content
		{
			type: "content-start",
			value: `
			Applets inherit a group of event-handling methods from the Container class. The Container class defines several methods, such as processKeyEvent and processMouseEvent, for handling particular types of events, and then one catch-all method called processEvent.
			
			In order to react to an event, an applet must override the appropriate event-specific method.
			`,
		},
		// code
		{
			type: "code",
			value: `
			import java.awt.event.MouseListener;
			import java.awt.event.MouseEvent;
			import java.applet.Applet;
			import java.awt.Graphics;
			
			public class ExampleEventHandling extends Applet implements MouseListener {
				StringBuffer strBuffer;
				
				public void init() {
					addMouseListener(this);
					strBuffer = new StringBuffer();
					addItem("initializing the apple ");
				}
				
				public void start() {
					addItem("starting the applet ");
				}
				
				public void stop() {
					addItem("stopping the applet ");
				}
				
				public void destroy() {
					addItem("unloading the applet");
				}
				
				void addItem(String word) {
					System.out.println(word);
					strBuffer.append(word);
					repaint();
				}
				
				public void paint(Graphics g) {
					// Draw a Rectangle around the applet's display area.
					g.drawRect(0, 0, 
						getWidth() - 1,
						getHeight() - 1);
						
						// display the string inside the rectangle.
						g.drawString(strBuffer.toString(), 10, 20);
					}
					
					
					public void mouseEntered(MouseEvent event) {
					}
					public void mouseExited(MouseEvent event) {
					}
					public void mousePressed(MouseEvent event) {
					}
					public void mouseReleased(MouseEvent event) {
					}
					public void mouseClicked(MouseEvent event) {
						addItem("mouse clicked! ");
					}
				}
				`,
			},
			// content
			{
				type: "content",
				ignore: "true",
				value: `
				Now, let us call this applet as follows −
				`,
			},
			// code
			{
				type: "code",
				value: `
				<html>
				<title>Event Handling</title>
				<hr>
				<applet code = "ExampleEventHandling.class" 
				width = "300" height = "300">
				</applet>
				<hr>
				</html>
				`,
			},
			// content
			{
				type: "content",
				value: `
				Initially, the applet will display "initializing the applet. Starting the applet." Then once you click inside the rectangle, "mouse clicked" will be displayed as well.
				`,
			},
			// header
			{
				type: "header",
				value: "Displaying Images",
			},
			// content
			{
				type: "content-start",
				value: `
				An applet can display images of the format GIF, JPEG, BMP, and others. To display an image within the applet, you use the drawImage() method found in the java.awt.Graphics class.
				`,
			},
			// content
			{
				type: "content",
				ignore: "true",
				value: `
				Following is an example illustrating all the steps to show images −
				`,
			},
			// code
			{
				type: "code",
				value: `
				import java.applet.*;
				import java.awt.*;
				import java.net.*;
				
				public class ImageDemo extends Applet {
					private Image image;
					private AppletContext context;
					
					public void init() {
						context = this.getAppletContext();
						String imageURL = this.getParameter("image");
						if(imageURL == null) {
							imageURL = "java.jpg";
						}
						try {
							URL url = new URL(this.getDocumentBase(), imageURL);
							image = context.getImage(url);
						} catch (MalformedURLException e) {
							e.printStackTrace();
							// Display in browser status bar
							context.showStatus("Could not load image!");
						}
					}
					
					public void paint(Graphics g) {
						context.showStatus("Displaying image");
						g.drawImage(image, 0, 0, 200, 84, null);
						g.drawString("www.javalicense.com", 35, 100);
					}  
				}
				`,
			},
			// content
			{
				type: "content",
				ignore: "true",
				value: `
				Now, let us call this applet as follows −
				`,
			},
			// code
			{
				type: "code",
				value: `
				<html>
				<title>The ImageDemo applet</title>
				<hr>
				<applet code = "ImageDemo.class" width = "300" height = "200">
				<param name = "image" value = "java.jpg">
				</applet>
				<hr>
				</html>
				`,
			},
			// header
			{
				type: "header",
				value: "Playing Audio",
			},
			// content
			{
				type: "content-start",
				value: `
				An applet can play an audio file represented by the AudioClip interface in the java.applet package. The AudioClip interface has three methods, including −
				`,
			},
			// list
			{
				type: "list",
				value: [
					"public void play() − Plays the audio clip one time, from the beginning.",
					"public void loop() − Causes the audio clip to replay continually.",
					"public void stop() − Stops playing the audio clip.",
				],
			},
			// content
			{
				type: "content",
				value: `
				To obtain an AudioClip object, you must invoke the getAudioClip() method of the Applet class. The getAudioClip() method returns immediately, whether or not the URL resolves to an actual audio file. The audio file is not downloaded until an attempt is made to play the audio clip.
				`,
			},
			// content
			{
				type: "content",
				ignore: "true",
				value: `
				Following is an example illustrating all the steps to play an audio −
				`,
			},
			// code
			{
				type: "code",
				value: `
				import java.applet.*;
				import java.awt.*;
				import java.net.*;
				
				public class AudioDemo extends Applet {
					private AudioClip clip;
					private AppletContext context;
					
					public void init() {
						context = this.getAppletContext();
						String audioURL = this.getParameter("audio");
						if(audioURL == null) {
							audioURL = "default.au";
						}
						try {
							URL url = new URL(this.getDocumentBase(), audioURL);
							clip = context.getAudioClip(url);
						} catch (MalformedURLException e) {
							e.printStackTrace();
							context.showStatus("Could not load audio file!");
						}
					}
					
					public void start() {
						if(clip != null) {
							clip.loop();
						}
					}
					
					public void stop() {
						if(clip != null) {
							clip.stop();
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
				Now, let us call this applet as follows −
				`,
			},
			// code
			{
				type: "code",
				value: `
				<html>
				<title>The ImageDemo applet</title>
				<hr>
				<applet code = "ImageDemo.class" width = "0" height = "0">
				<param name = "audio" value = "test.wav">
				</applet>
				<hr>
				</html>
				`,
			},
			// link video
			{
				type: "video",
				value: "https://youtube.com/embed/HOGgM9hGRsk",
			},
			// link video
			{
				type: "video",
				value: "https://youtube.com/embed/2owQOOuRX60",
			},
			// header
			{
				type: "header",
				value: "Java - Documentation Comments",
			},
			// content
			{
				type: "content",
				ignore: "true",
				value: `
				The Java language supports three types of comments −
				`,
			},
			// table image
			{
				type: "image",
				value: "Chapter_10_table_10.png",
			},
			// content
			{
				type: "content",
				ignore: "true",
				value: `
				This chapter is all about explaining Javadoc. We will see how we can make use of Javadoc to generate useful documentation for Java code.
				`,
			},
			// header
			{
				type: "header",
				value: "What is Javadoc?",
			},
			// content
			{
				type: "content-start",
				value: `
				Javadoc is a tool which comes with JDK and it is used for generating Java code documentation in HTML format from Java source code, which requires documentation in a predefined format.
				
				Following is a simple example where the lines inside /*….*/ are Java multi-line comments. Similarly, the line which preceeds // is Java single-line comment.
				`,
			},
			// content
			{
				type: "content-start",
				value: `
				Example
				`,
			},
			// code
			{
				type: "code",
				value: `
				/**
				* The HelloWorld program implements an application that
				* simply displays "Hello World!" to the standard output.
				*
				* @author  Zara Ali
				* @version 1.0
				* @since   2014-03-31 
				*/
				public class HelloWorld {
					
					public static void main(String[] args) {
						// Prints Hello, World! on standard output.
						System.out.println("Hello World!");
					}
				}
				`,
			},
			// content
			{
				type: "content",
				value: `
				You can include required HTML tags inside the description part. For instance, the following example makes use of <h1>....</h1> for heading and <p> has been used for creating paragraph break −
				`,
			},
			// content
			{
				type: "content-start",
				value: `
				Example
				`,
			},
			// code
			{
				type: "code",
				value: `
				/**
				* <h1>Hello, World!</h1>
				* The HelloWorld program implements an application that
				* simply displays "Hello World!" to the standard output.
				* <p>
				* Giving proper comments in your program makes it more
				* user friendly and it is assumed as a high quality code.
				* 
				*
				* @author  Zara Ali
				* @version 1.0
				* @since   2014-03-31 
				*/
				public class HelloWorld {
					
					public static void main(String[] args) {
						// Prints Hello, World! on standard output.
						System.out.println("Hello World!");
					}
				}
				`,
			},
			// header
			{
				type: "header",
				value: "The javadoc Tags",
			},
			// content
			{
				type: "content",
				ignore: "true",
				value: `
				The javadoc tool recognizes the following tags −
				`,
			},
			// table image
			{
				type: "image",
				value: "Chapter_10_table_11.png",
			},
			// table image
			{
				type: "image",
				value: "Chapter_10_table_12.png",
			},
			// content
			{
				type: "content",
				ignore: "true",
				value: `
				Example
				
				Following program uses few of the important tags available for documentation comments. You can make use of other tags based on your requirements.
				
				The documentation about the AddNum class will be produced in HTML file AddNum.html but at the same time a master file with a name index.html will also be created.
				`,
			},
			// code
			{
				type: "code",
				value: `
				import java.io.*;
				
				/**
				* <h1>Add Two Numbers!</h1>
				* The AddNum program implements an application that
				* simply adds two given integer numbers and Prints
				* the output on the screen.
				* <p>
				* <b>Note:</b> Giving proper comments in your program makes it more
				* user friendly and it is assumed as a high quality code.
				*
				* @author  Zara Ali
				* @version 1.0
				* @since   2014-03-31
				*/
				public class AddNum {
					/**
					* This method is used to add two integers. This is
					* a the simplest form of a class method, just to
					* show the usage of various javadoc Tags.
					* @param numA This is the first paramter to addNum method
					* @param numB  This is the second parameter to addNum method
					* @return int This returns sum of numA and numB.
					*/
					public int addNum(int numA, int numB) {
						return numA + numB;
					}
					
					/**
					* This is the main method which makes use of addNum method.
					* @param args Unused.
					* @return Nothing.
					* @exception IOException On input error.
					* @see IOException
					*/
					
					public static void main(String args[]) throws IOException {
						AddNum obj = new AddNum();
						int sum = obj.addNum(10, 20);
						
						System.out.println("Sum of 10 and 20 is :" + sum);
					}
				}
				`,
			},
			// content
			{
				type: "content",
				ignore: "true",
				value: `
				Now, process the above AddNum.java file using javadoc utility as follows −
				
				$ javadoc AddNum.java
				Loading source file AddNum.java...
				Constructing Javadoc information...
				Standard Doclet version 1.7.0_51
				Building tree for all the packages and classes...
				Generating /AddNum.html...
				AddNum.java:36: warning - @return tag cannot be used in method with void return type.
				Generating /package-frame.html...
				Generating /package-summary.html...
				Generating /package-tree.html...
				Generating /constant-values.html...
				Building index for all the packages and classes...
				Generating /overview-tree.html...
				Generating /index-all.html...
				Generating /deprecated-list.html...
				Building index for all classes...
				Generating /allclasses-frame.html...
				Generating /allclasses-noframe.html...
				Generating /index.html...
				Generating /help-doc.html...
				1 warning
				$
				`,
			},
			// link video
			{
				type: "video",
				value: "https://youtube.com/embed/1iZ2i1EBU6Q",
			},
		]