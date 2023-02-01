[
    // title
    {
      type: "title",
      value: "Chapter 1",
    },
    // subtitle
    {
      type: "subtitle",
      value: "Java Overview",
    },
    // context
    {
      type: "content-start",
      value: `
        Java is an object-oriented programming language developed by James Gosling
        and colleagues at Sun Microsystems in the early 1990s. Unlike conventional
        languages which are generally designed either to be compiled to native
        (machine) code, or to be interpreted from source code at runtime, Java is
        intended to be compiled to a bytecode, which is then run (generally using
        JIT compilation) by a Java Virtual Machine. The language itself borrows
        much syntax from C and C++ but has a simpler object model and fewer
        low-level facilities. Java is only distantly related to JavaScript, though
        they have similar names and share a C-like syntax.
      `,
    },
    // header
    {
      type: "header",
      value: "History",
    },
    // context
    {
      type: "content-start",
      value: `
        Java was started as a project called "Oak" by James Gosling in June 1991.
        Gosling's goals were to implement a virtual machine and a language that
        had a familiar C-like notation but with greater uniformity and simplicity
        than C/C++. The first public implementation was Java 1.0 in 1995. It made
        the promise of "Write Once, Run Anywhere", with free runtimes on popular
        platforms. It was fairly secure and its security was configurable,
        allowing for network and file access to be limited. The major web browsers
        soon incorporated it into their standard configurations in a secure
        "applet" configuration. popular quickly. New versions for large and small
        platforms (J2EE and J2ME) soon were designed with the advent of "Java 2".
        Sun has not announced any plans for a "Java 3".
      `,
    },
    // header
    {
      type: "header",
      value: "Philosophy",
    },
    // context
    {
      type: "content-start",
      value: `
        There were five primary goals in the creation of the Java language:
      `,
    },
    //list
    {
      type: "list",
      value: [
        "1. It should use the object-oriented programming methodology.",
        "2. It should allow the same program to be executed on multiple operating systems.",
        "3. It should contain built-in support for using computer networks.",
        "4. It should be designed to execute code from remote sources securely.",
        "5. It should be easy to use by selecting what was considered the good parts of other object-oriented languages.",
      ],
    },
    //content
    {
      type: "content",
      value: `
        To achieve the goals of networking support and remote code execution, Java
        programmers sometimes find it necessary to use extensions such as CORBA,
        Internet Communications Engine, or OSGi.
      `,
    },
    //content
    {
      type: "content",
      value: `
        Popular Java Editors Java is one of the most popular languages for
        developing highly secured desktop or web applications. For writing java
        programs, most developers prefer an integrated development environment aka
        IDE.
      `,
    },
    //header
    {
      type: "header",
      value: "Java Basic Syntax",
    },
    //content
    {
      type: "content-start",
      ignore: "true",
      value: `
        When we consider a Java program, it can be defined as a collection of
        objects that communicate via invoking each other's methods. Let us now
        briefly look into what do class, object, methods, and instance variables
        mean.
      `,
    },
    // header
    {
      type: "header",
      value: "Object",
    },
    // content
    {
      type: "content-start",
      ignore: "true",
      value: `
        Objects have states and behaviors. Example: A dog has states - color,
        name, breed as well as behavior such as wagging their tail, barking,
        eating. An object is an instance of a class.
      `,
    },
    // header
    {
      type: "header",
      value: "Class",
    },
    //content
    {
      type: "content-start",
      ignore: "true",
      value: `
        A class can be defined as a template/blueprint that describes the
        behavior/state that the object of its type supports.
      `,
    },
    //header
    {
      type: "header",
      value: "Methods",
    },
    //content
    {
      type: "content-start",
      value: `
        A method is basically a behavior. A class can contain many methods. It is
        in methods where the logics are written, data is manipulated and all the
        actions are executed.
      `,
    },
  ]

