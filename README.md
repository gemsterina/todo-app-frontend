This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How the App Works

This is a to do list to keep track of tasks. 

### [App.js](./src/App.js)

* This component tracks the state of the task list using the addTask() and deleteTask() functions. 

* It also holds a completedTask() function to change the true/false status of each individual task.

* The addTask() function is fed down as a prop to TaskEntry.js.

* The deleteTask() and completeTask() functions are fed down as props to TaskList.js.

* A totalTasks prop is fed down to TotalCounter.js to keep track of the number of active tasks.

### [TaskEntry.js](./src/components/TaskEntry.js)

* This uses an onClick event handler to create a new task object as it is added to the text field (via the onTaskTextFieldUpdated() function). 

* It calls the onSaveTaskHandler prop, which pulls down the updated list of tasks which is held in state in App.js and adds the new task. It then sets the new list back in state.

### [TaskList.js](./src/components/TaskList.js)

* TaskList.js maps over the list of tasks (passed down as a prop from App.js) and calls the Task.js component
 for each task in the list.

### [Task.js](./src/components/Task.js)

* This displays the task description and displays buttons for marking the task complete and for deleting the task.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
