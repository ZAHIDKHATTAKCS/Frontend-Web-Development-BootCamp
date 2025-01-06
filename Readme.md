<img src="Xounity Logo.jpg"><br><br>

# Frontend Web Development BootCamp by Xounity

## <p align='center'>My Details</p>

### My Name &nbsp; &nbsp;  : Muhammad Zahid

### My Class ID &nbsp; :  1044

### My Image &nbsp; &nbsp; &nbsp;:

<img src="My pic.JPG">

# 






### <p align='center'>HTML (HyperText Markup Language)</p>

## <p align="center">Day 1</p>


- `<!DocType html>` which tells what is the type of the document like !DocType html which means the document type is HTML

- `<head>` 

- `<metadata>` in meta data you can describe the 

### <p align="center">Text Formatting</p>

- `<p></p>` paragraph element, where we can write the content , that will look like a paragraph

- `<h1></h1>` heading element , and this is main heading, these are from h1 to h6 , h1 is the big heading and h2,h3,h4 are smaller than one another, h2 is we can say the sub heading for the main heading

- `comments` comments are used for understanding of the code that is not readable by the browser,
1. single line comment <! -- -->
2. double line comment // content //

- `<b></b>` used for bold the content

- `<i></i>` used for make the content italic

- `<br>` this is break tag this tag is not having closing tag , some tags having close tag but br tag is not having closing tag , and this br tag is used to break the line and start from new line

- `<em></em>` em tag is just like italic tag 

### <p align="center">Lists</p>

- `<ol></ol>` this tag is used to define order List

- `<ul></ul>` this tag is used to define unordered List

- `<li></li>` this tag is used to define the list inside the ordered or unordered list

- `type="a/A/1"` this is an attribute that define the type of list like it will start the list from small alphabets capital alphabets or numbers

## <p align="center">Day 2</p>


### <p align="center">Links and Images</p>

- `<a></a>` Hyperlink is the type of a link that redirect to a new page

    1. `href=""` href stands for hyper reference. it's the place where we should giving the link of the page where we would like to redirect the user when click on it

    2. `target=""` target is the attribute that specifies where to open the document, here are some options values of target attribute.<br>
        - _blank ( link will be open in a new page )
        - _parent ( link will be open on the same page ) 
        - _self ( same to parent )
        - _top (  )
    <br>


- `<img></img>` img tag is used to insert the image in the Web Page

    1. `src=""` src stands for source, this is where we should giving the path of the image so that the image is shown correctly in the web page.

### <p align="center">Tables</p>

- `<table></table>` table tag defines a table

- `<tr></tr>` tr means table row , that defines a table row

- `<th></th>` th means table headings, that defines headings for table

- `<td></td>` td means table data, that inserts the data in the table rows and columns

### <p align="center">Forms</p>

- `<form></form>` Defines an HTML Form for collecting user input/data

- `<label></label>` tag is used to create a label for an input field, making it easier for users to understand the purpose of the input field.

- `<input></input>` Defines an input field for different types of data.

- `type` is the attribute of the input tag that defines the type of the input field, there are multiple types of input field for example
    1. text
    2. checkbox
    3. radio
    4. color

- `value` is the attribute of the input field that assign an initial value to the input field in the form

- `placeholder` placeholder is the attribute for input that show the text inside the input field to make the user easier to use like this input is used for what

- `required` this is the value of the input field, if we set an input field to required so the user must have to fill out that specific input.


- `<button></button>` tag is used to create a button that can be clicked to submit or rest the form <br><br>

## <p align="center">Day 3</p>

### <p align='center'>CSS (Cascading Style Sheet)</p>

- `CSS` CasCading stylesheet, CSS is used to define styles for your web pages, including the design, in CSS we have property and it's value

### <p align="center">Types of CSS</p>
1. Inline Css ( styling in the element )
2. Internal Css ( styling in the head of the document )
3. External Css ( styling in separate document )


- `Element Selector` The element selector selects HTML elements based on the element name

- `Universal Selector`

- `grouping` if we are using same property to multiple elements so that is called grouping

### <p align="center">Id and Classes</p>
- `id=""` id is always unique , call by `#`

- `class=""` class can be multiple in a single element , call by `.` , classes can be repeat on different elements


### <p align="center">Comments in CSS</p>

- `single line comment` /* */

- `Double line` /* */ single line comment and double line comments in css are same for both cases.


### <p align="center">Formatting</p>

- `width` is used to define width to elements 20% \ 20px \ 20rem

- `height` is used to define height to elements, 20% \ 20px \ 20rem

- `background-color` red \ green \ blue \ etc

- `text-alignment` left \ center \ right

- `font-weight` bold , bolder etc

- `font-family` sans-serif , timeNewRoman etc

- `font-size` 20px , 20% , 20rem etc


## <p align="center">Day 4</p>

### <p align='center'>Git & GitHub</p>

1. Git <b>[Download](https://git-scm.com/download/win)</b>

2. Create a Repository in GitHub

3. Initialize Git

    * git config --global user.name "your user name"

    * git config --global user.email "your email"

4. Create a remote connection with GitHub repository and push code to GitHub

    + git init

    + git remote add origin (repo Url)

    +  git add . 

    + git commit -m "add a message"

    + git push origin master / main

    These are the most important commands

5. Extra Commands optional

    + git status (display which file you changed)

    + git log ( show you the history of your commits )

    + git remote -v ( show your remote repository )

- `Version Control` Version control is like a history book for your files. It helps you keep track of changes you make to your files over time, so you can go back to earlier versions if needed.


### <p align='center'>How to deploy Static Projects for free</p>

1. Deploy on <b>[Vercel.com](https://vercel.com)</b>

2. Deploy on <b>[Netlify.com](https://Netlify.com)</b>


## <p align="center">Day 5</p>

### <p align='center'>CSS Part 2</p>

- `background-img` to set an image in the background of the content or to the whole body you can set the background image to the body and applied it on different elements

- `background-repeat` is the property to set the background repeat no repeat which means your background image will not repeat again and again

- `background-size` is the property to set the background size of the body image to either cover or contain

- `background-position` is used for set the background image on left, right, top, bottom

- `background-attachment` is used to set the background image position to fixed means background image will not move with scrolling or move with scrolling ,

    + background-attachment: fixed;
    + background-attachment: scroll;


### <p align='center'>Borders</p>

- `border-style`
    + solid
    + dotted
    + dashed
    + double

- `border-width`
    + 20px etc


- `border-color`
    + red
    + green
    + blue
    + any color

- `border-radius`
    + 20px

## <p align="center">Day 6</p>

### <p align='center'>CSS Part 3</p>

<br>

### <p align='center'>Display Properties</p>

- `Block` block level elements takes all the width  

- `inline-Block` taking all the contents in one line

### <p align='center'>Flex Properties</p>


- `Flex` flex property takes all the contents in one line

- `Inline-Flex` same as flex property

- `flex-direction`
    + column

    + row
    + flex-wrap
    + flex-flow
    + justify-content -> start / center / end / space-around / space-between / space-evenly
    + align-items -> start / center / end / space-around / space-between / space-evenly
    + align-content -> start / center / end / space-around / space-between / space-evenly
    + order -> order:2 ;  change the positing of the dives or content

- `flex-grow` will grow the div when a screen size is to change to the big

    + flex-grow : 1 ;

- `flex-shrink` will shrink the div to which you applied when the screen size is come to small

    + flex-shrink : 1 ;

### <p align='center'>Animation Properties</p>

- `Transition`
    + transition: ease - in - out ;

    + transition-duration: 4s;



- `padding` this property is giving inner space to the content

- `Margin` this property is giving outer space to the content



### <p align='center'>HTML & CSS Project Assignment01</p>
- `transform` this property is used to make the content 2d mean x-axis and y-axis to which you applied. and we can center the content on the screen now by putting 50% right and 50% from left 

- `text-transform` is the css property to change the text style to
    + capitalize 
    + uppercase
    + lowercase

- `Google fonts` to take a google fonts and apply on your website so you have go to [Google Fonts](https://fonts.google.com/)

    1. look for a font

    2. click on get font

    3. click on get embed code

    4. @import is used for external css file just copy the @import code and paste it into your external css file

    5. you can use links in the html file to import the font by clicking on the link option

- `object-position` this is the css property to apply on images to set its position whenever you define a height and width for a div the background image of the that div sometimes show only the middle image or left or right image so for that we have to use this property to align the image to 
    + top
    + bottom
    + right
    + left 
    + top , right or top , center // etc

- `object-fit` is the css property to cover the div width and height whenever you applied a picture to a div
    + cover
    + contain



<br>
<br>

## <p align="center">Day 7</p>

### <p align='center'>JavaScript</p>

- `JavaScript` JavaScript is the programming language used for gaming and adding functionality to HTML elements.


### <p align='center'>JavaScript Variables Declaration</p>

- `variables` is used to store data


#### <p align='center'>Types of Variables </p>


- `Var` var is the type of JavaScript variable. Variable is used to store the data. Var allow you to store any type of data , like numbers and strings.

- `let` let is the type of JavScript, let is used to assign value only once you can't declare it again.

- `const` const is the type of JavaScript, in const you can't reinitialized the new value once it is initialized.

    + let a = 'zahid'; string variable
    + let b = 5; number variable
    + let c = 5.4; float variable 
    + let d = false/true; Boolean variable

- `typeof()` is the keyword used to show the type of the variables.

- `console.log` this keyword is used to show the output like print the value 


## <p align="center">Day 8</p>
### <p align='center'>JavaScript Arrays</p>
- `array` array is used to store multiple values of the same type. for example
    + string array
    
    <p align="center">let Names = ["Zahid","Khattak","Farhan","Khan"];<br>
    console.log ( Names ) ;
    </p>


    + numbers array
    <p align="center">let numbers = [2,3,4,5,6];<br>
    console.log ( numbers ) ;
    </p>

- `mixed array` in JavaScript we can store multiple values of multiple types in a single array. That is called heterogeneous array or we can say mixed array.

- `.push` .push method is used to append or adding a new value to the end of an array. You can push number, string, boolean etc.

- `.pop` .pop method in javascript is used for deleting the last value from an array , no matter it is number, string or boolean.

- `.length` is the property to show the length of the array, like if there are three items inside the array it will return 3.


## <p align="center">Day 9</p>

### <p align='center'>JavaScript Conditional Statements If-Else</p>

- `Concatenation` Concatenation means to Concat or to link two things or get Together two different things.

- `if-else` if-else statement is used to execute different blocks of code based on whether a condition is true or false, if a condition true than run this code, if not true than run else part of the code.

- `nested-if-else` nested-if-else is the if-else condition inside the other if-else called nested-if-else condition


## <p align="center">Day 10</p>

### <p align='center'>JavaScript Loops</p>

- `Loops` are used to execute the block of code to the specific number of iterations.

    + `For Loop` for loop is used when the number of iterations is known in advance.

    + `While Loop` while loop is only used when you don't know about the number of iterations in advance.

    + `Do while Loop` do while loop is run the code once even if the condition is wrong, than it will look to the condition

- `Prefix ++i` prefix is used to increase the value of the loop counter before each iteration.

- `postfix i++` postfix is used to increase the value of the loop counter after each iteration.


## <p align="center">Day 11</p>

### <p align='center'>JavaScript Functions</p>

- `Function` A function is block of code that will be executed when it is called, a block of code that can be reused in program. first we have to create a function and we will call it for run it.

- `Parameters` The parameters of the function are passed to the function while creating the function,

- `Arguments` The Arguments of the function are passed to the function whenever we call the function,

- `void function` the function that returns nothing

- `return function` the function that returns something


## <p align="center">Day 12</p>

### <p align='center'>JavaScript DOM</p>

- `DOM` DOM stands for Document Object Module, 

- `getElementById` is the function in JavaScript used for accessing the element by ID property.

- `getElementByClassName` is the function in JavaScript used for accessing the element by class name property

- `GetElementByTagName` is the function in JavaScript used for accessing the element by their class name property.

#### <p align='center'>Task # 3</p>

Create a logic for a coffee shop that has an default value for the customer's age and displays: using JavaScript
- " You get a 10% discount " if you are 65 or older

- " you get a 5% discount " if you are a student (18-25)

- " No discount " otherwise


## <p align="center">Day 13</p>

### <p align='center'>JavaScript DOM Event listener</p>

<p align='center'>Done assignment of Event listener</p><br><br>



## <p align="center">Day 14</p>

### <p align='center'>Start React</p>
- `npm` stands for node package manager.


### <p align='center'>Create React Project</p>

- `npm create vite@latest`

- Press `y`

- Select a framework Go to `react` and hit `Enter`

- Select a variant go to `JavaScrip` and hit `Enter`

- after this you have to install npm for that just run the command `npm install`

- after this in order to run the project you have to type command `npm run dev`

### <p align='center'>Folder Structure</p>
- `Public folder`

    1. `Vite.svg` all the pictures are placed here that is visible to all the other People, public files like images and icons can be downloaded from inspect of the website and sources tab.

- `src folder`

    1. `assets folder` assets is the folder where we can store static files like images and icons of the website.

    2. `App.css` is the file where we can add our style like as we adding in style.css file

    3. `App.jsx` jsx (Javascript XML) this is the route file from where our all things are loaded.

    4. `App.jsx` is the file where we define the HTML code 

    5. `index.css` is the global styling file

`Note :` if you want to change the default directory , if your project folder is inside the other folder you have to provide path like this `cd "Day 14/React-1"`


## <p align="center">Day 16</p>
### <p align='center'>Start Tailwindcss with React</p>
- go to Tailwindcss website and copy the CDN and placed into the head of index.html file [CDN Link](https://tailwindcss.com/docs/installation/play-cdn)

- `Note` remember that CDN is only used for practice its used for production mean don't deploy your website with CDN


## <p align="center">Day 17</p>
- `Ternary Operator` Ternary Operator is the shortcut form of if else statement here is the example <br>
<p align="center">username == "zahid" ? zahid : error &nbsp; ? this means if the username == zahid so run the code after ? , and : means else runs this code</p>

- learn about if else statements in react

- learn about local and global variables in react



## <p align="center">Day 18</p>
### <p align='center'>Learn about React Props and Objects</p>

- `Props` props (short for "properties") in React are like arguments that you pass to a function. They are used to pass data from one component (usually a parent component) to another (usually a child component). we can a complete function and objects as a props. props means send values trough parent to the child

`Note` as many props you using in code you have to pass these to the functions.

    For example, if you have a parent component and you want to pass some information (like a number or a piece of text) to a child component, you can send that data using props.

    Props help make React components reusable and dynamic because you can pass different values each time. However, props are read-only, meaning the child component can't modify them, only use them.


## <p align="center">Day 19</p>
### <p align='center'>Learn about Route, props and Objects</p>

- `Routing` Routing is used for redirect the link when a user clicks on a link so it will change only the body of the content when we want to make a multiple pages website so must have to use routes.

`Note` there is no build-in route in react

## <p align="center">Day 20</p>
### <p align='center'>Learn about hooks</p>
- `Hooks` Hooks are introduced in React 

## <p align="center">Day 21</p>
### <p align='center'>Resumption of React</p>
### <p align='center'>Integrating React with Tailwindcss</p>
- `Integrate React & TailwindCSS` to integrate React with TailwindCSS all you have to do is go to Tailwindcss website and follow the below instructions.

    1. Click on `"Framework Guides"` than
    2. Click on `"Vite"` than run all the following commands
    ```
    npm create vite@latest my-project -- --template react
    cd my-project
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ``` 
    3. now replace this content with the tailwindcss.config.js content <br>
    
    ```
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  ```

    8. go to `index.css` file that is placed in the `"src"` folder and remove all the content from the file and replace all the below content <br>

    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

    9. run this command in terminal 
    ```
    npm run dev
    ```

    after run this command your project will will be run


    `Note` You can explore the documentation of the Tailwindcss Website at [Tailwindcss](https://tailwindcss.com/)

<br><br>

### <p align='center'>Creating React Components</p>

<hr>

<br>

- In React, components are like building blocks that make up your user interface. They are reusable pieces of code that define how a part of your app should look and behave. <br>Think of them as functions or templates that return HTML-like code (called JSX) and some logic. For example:<br>
A button could be a component.
A navbar or footer could be components.
Even a single text box could be a component.

- `Two Types of Components:`
    1. `Functional Components` Functional components are just JavaScript functions. They take input (called props) and return what the UI should look like (JSX).
    2. `Class Components` Class components in React are like blueprints for creating parts of your app, written using a class instead of a function.

    `Note` name of the each component should be start with capital letter like `Navbar` or `Footer` etc.

    `Note` after create a component you have to import it first in the `App.jsx` file and than call it by self closing tag like `<Navbar />` or `<Footer />` etc

<br><br>

### <p align='center'>Implement Javascript in React</p>

<hr>

<br>

- `Variable` we can store headings paragraphs in a variable for using later on in the code like if we want to display greetings so we can store it in the variable greetings

    ```
    const Greetings = "Hi how are you";
    ```

    `Note` if you are using variable and want to call it on react components or in react file so you have to enclosed the variable name in curly brackets like

    ```
    <h1> {Greetings} Zahid Khattak </h1>
    ```

<br><br>

### <p align='center'>Javascript Functions in React</p>


<hr>

<br>

- if you are going to use functions in React you have to create it first and you must have to use return keyword inside the function else it will not display anything defined in the function.

    ```
    Name = "Zahid Khattak";

    function CheckingName (){
    if (Name === "Zahid Khattak"){
      return <h1>hello Zahid Khattak</h1>
    }else{
      return <h1>hello someone else</h1>
         }
  }
    ```


    `Note` you can't use if else directly in the react. you have to create a function first and use it in react code remember it only if else, yes but you can use ternary operator as an if else statement directly in the react.

<br><br>

### <p align='center'>Objects and Props in React JS</p>


<hr>

<br>

- `Props`  props (short for "properties") are like arguments you pass to a function. They are used to send data from a parent component to a child component. Yes you can send the variable values from parent to the child components.

<h3 align="center">Parent Component</h3>

```
<Navbar LogoName="Zk Store" />
```


<h3 align="center">Child Component</h3>

```
const Navbar = ({LogoName}) => { // here the LogoName is the React Props that is called from the parent component and
  return (
    <div className="d-flex justify-center items-center bg-slate-400 py-4">
        <ul className="flex items-center justify-between text-white text-2xl">
            <div className="ms-4">
                <li>{LogoName}</li>
            </div>
            <div className="flex justify-between flex-1 mx-96">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact US</li>
            </div>
        </ul>
    </div>
  )
}
```

`Note` in order to send data from parent to child component you must have to call it as parameter in the child function as shown in the upper code.

`Note` you can pass a functions, objects and single value from parent to child components in react but the thing is you have to define in the parent component and than pass it to the child function as a parameter than you can use in your child component code.

- `Object` Object is the blueprint to store multiple values , object is the combination of key value pairs, in object there is a key and for each key there is a value. you can access the object value by using the object key. In object the key value pairs are enclose in the curly braces { } .

<br>

<h3 align="center">Creating Objects in JavaScript & in React</h3>

<br>

- `Object creation in JavaScript` we can create object in javascript like 

```
const Profile =  {
  id:2,
  Name:"Zahid Khattak",
  Age:32,
  Country:"Pakistan",
  Hobby:"Learning React"
  }

// accessing value from object using keys 

console.log(Profile.id);
console.log(Profile.Name);
console.log(Profile.Country);
```

- `Object creation in React` note that we have to create the object in the Parent Component in React and than pass it as a parameter to the child component and access the value through the keys like

<br>

<h3 align="center">Object Creation in Parent Component in React</h3>

<br>

```
<Portfolio Profile =  {
{
  id:2,
  Name:"Zahid Khattak",
  Age:32,
  Country:"Pakistan",
  Hobby:"Learning React"
}
    }
 />

 - Note => Portfolio : child component call in parent component 

- Note  => Profile : is the object that is created in the parent component it will be call in child component and accessing its value by keys

- Note => id, Name, Age .. are the keys while 2, "Zahid Khattak".. are the values.
```



<br>

<h3 align="center">Object Calling in Child Component in React</h3>

<br>

```

const Profile = ({Profile}) => {
  return (
    <div>
        <div className="flex justify-center items-center border border-red-500 rounded-md p-3 gap-12">
            <div>
                <img src="../Images/Zahid_Khattak.JPG" alt="pic" className="w-52 border rounded-md" />
            </div>
        <ul className="border p-2 border-red-500 rounded-md">
            <li> Name :  {Profile.Name} </li>
            <li> Age : {Profile.Age} </li>
            <li> Country : {Profile.Country} </li>
        </ul>
        </div>
    </div>
  )
}

export default Profile

```



<br>

<h3 align="center">Create Multiple Props and access Multiple Props in child Component</h3>

<br>

```

<Profile Profile={{
        id: 2,
        Name: "Zahid Khattak",
        Age: 32,
        Country: "Pakistan",
        Hobby: "Learning React"
      }} Source = "../public/Images/Zahid_Khattak.JPG"  />


// Now accessing it in child component

const Profile = ({Profile,Source}) => {
  return (
    <div>
        <div className="flex justify-center items-center border border-red-500 rounded-md p-3 gap-12">
            <div>
                <img src="../Images/Zahid_Khattak.JPG" alt="pic" className="w-52 border rounded-md" />
            </div>
        <ul className="border p-2 border-red-500 rounded-md">
            <li> Name :  {Profile.Name} </li>
            <li> Age : {Profile.Age} </li>
            <li> Country : {Profile.Country} </li>

            <li> User Image : <img src={Source} alt="user image" className="w-52 border border-green-900 rounded-md mt-2" /> </li>
        </ul>
        </div>
    </div>
  )
}

export default Profile

```


<br>

<h3 align="center">Routing in React</h3>


<h3 align="center">npm (Javascript Package Manager)</h3>

<br>

- `npm`  npm (Javascript Package Manager) is a tool that helps developers manage and share code packages (called "modules") for their JavaScript projects.
These packages are often small programs or APIs that solve specific problems, and you can easily use them in your own projects.
npm packages are created and shared by other developers, not just by React or official teams. Many developers upload their useful code to npm to help others, and anyone can download and use them.

- `react routes` as per we don't have the built-in routes in react so we can take it from the npm.

- you can download animations package and many more from npm 


<br>

<h3 align="center">Now how we can install the react routes in our project </h3>

<br>

- Go to  [React Router Dom](https://www.npmjs.com/package/@types/react-router-dom) for routing


-  just copy [Npm Install Router](https://www.npmjs.com/package/@types/react-router-dom#:~:text=npm%20i%20%40types/react%2Drouter%2Ddom)

- in order to check is that installed or not just go to package.json file you will see react-router-dom in "DevDependencies"

<br>

<h3 align="center">How We can use it in our project </h3>

- firstly you have to import the react-router-dom package to the main file of react project like App.jsx its because we want to redirect users from main file <br>
so in order to import the react-router dom packages you need to import the react-router in the main file like given below 

```
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
```

- `import:` This is used to include specific modules or features in your file from another library or file.

- `BrowserRouter:` This is a component provided by react-router-dom that enables routing in a React app. It manages the URL and allows switching between different components based on the URL. 

- `as Router:` This renames BrowserRouter to Router so it's easier to use in the code.
Instead of writing BrowserRouter everywhere, you can just use Router.

- `Route:` This component defines a specific route or URL path and specifies which component should be displayed for that path.
Example: For the path /about, you can show the "About" component.

- `Routes:` This is a wrapper component used to group multiple Route components. It ensures only the matching route is displayed when the URL changes.

<p align="center"> In siple words</p>

- `Router:` Wraps everything and keeps track of the current URL. Working as a manger for all the routes

- `Routes:` Groups all the Route definitions.

- `Route:` Specifies the URL (path) and the component (element) to display for that URL.

- now in order to use the routes in project you have to placed `Forward slash / ` to each of your anchor tags in navbar component like this

```
<a href="/">Home</a> // here the only forward slash means it will redirect to the home page
<a href="/about">About Us</a>
<a href="/contact">Contact Us</a>

```

- Now how can we create Router, Routes, and Route in main jsx file

```

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

- `Note` Route is self closing tag which takes two arguments one is path that is like the path of the element that should be shown when clicks on <Home />

- `Note` if you didn't create the home page as a separate component so you can directly pass the whole code in the element attribute in the route of home but the thing is you must have to pass all the content in the div mean you have to create a div first inside the element attribute like 

```
<>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <main className="mt-5">
                <h1 className="text-3xl font-bold underline text-center">
                  Hello world!
                </h1>

                <Car />
              </main>
            </div>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />


    </>
```

- `Note` you have to create page as a component means the component is also use as a page





## Extension for Tailwindcss and React 

1. [```Tailwindcss intellisense```](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

2. [```ES7+ React/Redux/React-Native snippets```](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

    `Note` this extension can allow to create components function automatically while you have to write only 
    `Rafce` when you hit enter after that this will create your component function automatically.




<br><br><br>

## Teacher

### [Mirza Zain](https://www.linkedin.com/in/mirza-zain269/)

## Notes

### [Lectures Notes](https://drive.google.com/drive/folders/1eSNtY5uxcaw2xzH2DKsTfUzVbPggbbE4?usp=sharing)

## Lectures Youtube Videos

### [Lectures](https://www.youtube.com/@xounity1/streams)