# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming is a philosophy of programming that focuses on dividing data into different classes of objects, and defining methods that are specific to those classes. Functional programming is more focused on the creation of strictly defined functions to perform specific tasks. Object-oriented programming is typically more relevant for application where you have knowledge about the data types that you will be working with, such as data processing or manipulation. As you already know the types of data you need to manage, these can be broken into different classes, and given methods based on what needs to be done with that data. It also allows for a more compartmentalized approach to your code, if there is an issue with a method inside of your classes, for example, it will primarily affect objects that are a member of that class, and it is more straightforward to locate the issue and neutralize it. 

Researched answer:

Object-oriented programming is a method of code development characterized by 4 core pillars: 
- Ecapsulation - related variables and functions are grouped into an 'object'. Objects are created based on a 'blueprint' called a class. Classes contain the variables and functions (referred to as methods) that are available to objects inside it's class. By grouping variables and methods into objects, and objects into classes, it becomes possible to remove many arguments from a function call, as the data is often already part of the object, or part of the class.
- Abstraction - the methods and data that objects use are built into the class to which they belong, which means that you often aren't working directly with those functional pieces of code, but instead working on the methods that have been defined for your object. For example, you may have a method that reports on whether an object is at, above, or below the melting point. Inside the class, there is likely the functional building blocks of that process (the different melting points for an object) that you aren't directly working on, instead you would just call the .melting_point method, and it would do that work for you.
- Inheritance - Objects often need to use values or methods from other objects. This is where inheritance comes in. An object is an instance of a Class, which contains a blueprint for objects in terms of what values and methods it has access to. In this way, an object inherits methods from it's class. An object may also be a member of more than one class, inheriting different methods from each. Organization of objects into different classes is one of the important challenges or object oriented programming. 
- Polymorphism - because objects can be members of more than one class, it is possible that they may behave differently depending on how the object and.or method is called. 

Many of these features of object oriented programmind are almost directly counter to functional programming, which focuses on direct, straightforward, immutible code. These means that creating and changing program states is not desired or often possible, as true functional programming languages don't allow the reassignemtn of variables and functions. Important to note, most languages include both object oriented programming concepts into their syntax. 

1. What is the difference between a Float and an Integer in Ruby?

Your answer:
An integer is a whole number, such as 1, 4, 3, or -3. A float, on the other hand, is a non-integer representation of a number. This does not neccesarily mean that all floats are whole numbers, as 2.0 is a float, but 2 is not.

Researched answer: 
An integer is a whole number, where a float is a floating point numer, a number with the potential for a decimal. This means that an integer can only used to represent whole numbers, where a float can represent both whole numbers and the numbers in between them. 

1. Ruby has an implicit return. What does that mean?

Your answer:
In Ruby, when building a method, if a return is not included in the method, ruby will return the result of the last line of code in a method. This can be useful when putting code together, as typically that's what you want to do, but there are edge cases where you may want to return something that ISN'T the last line of your method. For example, you may have a method to track whether a particular movie was watched. When a user takes an action, you run this method. However, if the last line of your code is to set the @watched variable to true, you don't want to just return 'true' to the user. You may want to return a different line of code, such as a string or other report. In those times, you will want to manually enter a return 

Researched answer:
In Ruby, the last line of code in a code block is implicitly returned. This means that it will return the last line whether you have a return or not. This allows for neater code, but can become VERY important to keep an eye on when modifying code. Because methods have an implicit return, other methods may call on those methods. If the code is changed in some way, it can cause errors on any other methods that are dependant on it. It is much easier to miss this as there is not an explicit return statement that is letting you know that it is returned. That means it is important to make sure if you are ever changing the last line of code in a method or code block, that you are also aware that what you return will change as well. 

1. What is a block in Ruby?

Your answer:
In Rubya block is an anonymous function that holds code. These are used primarily when setting up methods that perform an action on an iterable (such as an array). Map, for, etc all require a block to contain the code that will be used in the iteration. The syntax for creating a block is:
do |arguments|
    code goes here
end

or, you can place it on one line by using { |arguments| code } if it makes sense to do so. 

Researched answer:
Blocks are anonymous functions in Ruby that are used to contain small pieces of code. They are most often used when logic is needed to be passed into a method as an argument, but can also be assigned to a variable. One way of doing this is creating a lambda. A lambda is a block of code with parameters that is assigned to a variable. The process of assigning it does not run the code, but the code can be called on later using the .call method. 


1. How do you extract a value in a Ruby hash?

Your answer:
Ruby hashes are accessed using bracket notation. If I had a hash such as pets = { dog1: sam, dog2: roger} and wanted to access the 'roger' value, I would use pets[:dog2]. 

Researched answer:
When accessing values inside your hash, there are two methods of accessing them, depending on the key that was used to create the value. If the value was created using a symbol, for example dogs = {dog1: sam} you would access it using bracket notation and the symbol, dogs[:dog1]. If however, a string was used, such as dogs = { :dog1 => sam, "dog2" => charles}, you would still use bracket notation, but you would pass in the string: dogs["dog2"].

## Looking Ahead: Terms for Next Week

1. Class Inheritance:
Class inheritance is when a class inherits, or gains behavior from another class. The class that gets the behavior is called the subclass, and the class that provides the behavior is the superclass. Inheritance is a way that we can take common methods across different classes and move them into a superclass, where the subclasses can now inherit those behaviors. 

2. RSpec:
RSpec is a testing framework for Ruby. It is different from traditional testing frameworks because it focuses on the 'behavior' of the application, versus how it works. In test driven development, inputs and outputs are compared to ensure that functions are working as expected. In behavior driven development, the goal is to ensure that the code behaves for the end user as expected. While similar in many ways, the key focus is the scope, test driven development looks to make sure a function performs correctly, while behavior driven development ensures the app as a whole works as expected. 

3. CRUD:
This acronym is used as a mnemonic for the four key things a developer wants to do with code, Create, Read, Update, and delete. Knowledge on how to do these four key tasks is critical for a developer to be familar with methods and functions within any specific language. 

4. Test-driven development:
Like behavior driven development, test driven development seeks to create a final code base that behaves as expected. In test driven development, a function is built in order to pass a test. This ensures that a developer has given though to the input they expect to receive, and what output they want. When developing in this way, the test is created first, and then the function is created in order to pass the test. This typically allows for code that require fewer rewrites, and allows for easier refactoring as the test enviornment is already built to handle the checking of function post-refactor to ensure it is still behabing as expected. 

5. HTTP:
Stands for Hypertext Transfer Protocol. It is a protocol designed to manage the transmitting of 'hypermedia' documents such as HTML. HTTP is part of the OSI (open systems interconnection) model which describes 7 different layers of communication between two entities through a network. The breakdown of the entire model is not neccessary, but what is important is to understand that HTTP lives in the Application layer, which is at the very top of the model. There are many important layers underneath it, but the application layer is where a human actually interacts with services. HTTP is a protocol which manages the delivery of the information in a webpage to be read by the users web browser. HTML, Javascript, CSS, and more all are transferred to the user through http. 