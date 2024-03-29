#   https://www.coursera.org/learn/react-basics/supplement/QjCEc/setting-up-a-react-project-in-vs-code-optional
#   https://create-react-app.dev/
#   https://react.dev/
#   https://github.com/facebook/create-react-app




#   Setting up a React project in VS Code (Optional)
To complete the exercises in this course you have been provided with a dedicated lab environment set up specifically for you to apply the skills that you have learned. You can find out more about Working with Labs in this course by accessing the link below:

Working with Labs in this course

You can also use VS Code to practice these exercises on your local machine as an alternative option.

To follow along in this reading, you need to have Node.js and VS Code already installed on your computer. If you don’t have this setup, please refer to the Programming with JavaScript course:

Setting up VS Code
 

Installing Node and NPM
 

In VS Code, you're ready to start a brand new React project.

You can do it using npm.

What is npm?
When Node.js is installed on a computer, npm comes bundled with it.

With npm, you can:

Author your own Node.js modules ("packages"), and publish them on the npm website so that other people can download and use them 

Use other people's authored modules ("packages") 

So, ultimately, npm is all about code sharing and reuse. You can use other people's code in your own projects, and you can also publish your own Node.js modules so that other people can use them.

An example npm module that can be useful for a new React developer is 
create-react-app
. While this npm module comes with its own website, you can also find some info on the 
create-react-app project on GitHub
. 

Whenever you run the npm command to add other people's code, that code, and all other Node modules that depend on it, get downloaded to your machine.

However, although it's possible do to so, this is not really necessary, at least in the case of the create-react-app Node module.

In other words, you can avoid installing the create-react-app package but still use it.

You can do that by running the following command: npm init react-app example, where “example” is the actual name of your app. You can use any name you’d like, but it’s always good to have a name that is descriptive and short.

In the next section, you'll learn how to build a brand new app that you can name: firstapp.

Opening the built-in VS Code terminal and running npm init react-app command
In VS Code, click on View, Terminal to open the built-in terminal.

How to access the Terminal in Visual Studio Code
Now run the command to add a brand new React app to the machine:

1
npm init react-app firstapp
The installation and setup might take a few minutes.

Here's the output of executing the above command:

12345678910111213141516171819202122232425262728293031323334353637383940
Creating a new React app in /home/pc/Desktop/firstapp.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

added 1383 packages in 56s

190 packages are looking for funding
                       run `npm fund` for details



If you follow the suggestions from the above output, you'll run: cd firstapp, and then npm start.

This will end up with the following output in the built-in terminal:

                  Compiled successfully!

                  You can now view firstapp in the browser.

                  Local:            
http://localhost:3000

                  On Your Network:  
http://192.168.1.167:3000


                  Note that the development build is not optimized.
                  To create a production build, use npm run build.

                  webpack compiled successfully

Again, following the instructions, opening a browser with the address bar pointing to 
http://localhost:3000
, will show the following page in your browser:

React logo displayed on the browser
This means that you've successfully:

Set up your local development environment 

Run the create-react-app npm package (without installing it!) 

Built a starter React app on your local machine 

Served that starter React app in your browser 

After you've built your starting setup, in Module 2 you'll start working with the basic building blocks of React: components.