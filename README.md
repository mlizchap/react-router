# React Router

**React Router**: a library to manage routing in your single page app (SPA)
  - **history**: library used to parse changed URLs and pass to react-router 
  - **browserRouter**: looks at the url to decide which components to show on the screen 
// CHART FOR REACT ROUTER 

## TOC
- [setup](#setup)
- [Rending Components Conditionally](#switch)
- [Linking Routes](#link)
- [Linking the Navbar](#nav-link)
- [Route Props](#route-props)
- [Dynamic Routes](#url-parameters)
- [history.push](#withrouter)
- [Route](#route)

## setup
  - `$ npm install --save react-router-dom`
  - in `index.js`:
    ```javascript
      import { BrowserRouter as Router } from 'react-router-dom';
      ReactDOM.render(
          <Router>
              <App />
          </Router>, 
          document.getElementById('root')
      );
    ```
## switch
- conditionally renders based on the URL 

  ```javascript
  import { Switch, Route } from 'react-router-dom';

    <div className="App">
      <Route path='/' component={Navbar} />
      <Switch>
        /* routes will go here */
      </Switch>
    </div>
  ```

## Route
- a component that provides config for showing certain components depending on the URL path 
- `path` - specifies the url path 
- can use `component`, `render` or `children` to specify the component 
  - using `component` - specifies a react component to be rendered depending on the `path`
    ```javascript
    <Route path='/' component={Home} />
    ```
  - using `render` - similar to component, but the value is a function that can pass down extra props
    ```javascript
    const projects = ["project 1", "project 2", "project 3"];

    <Route path='/portfolio' render={() => (
      <Portfolio projects={projects} />
    )} />
    ```

## link 
- an anchor tag, when you click on it, it uses the history object to change the url 
  ```javascript
  import {Link} from 'react-router-dom';

  <Link className="btn" to="/">home</Link>
  ```

## nav link
- similar to link, but for navigation
  ```javascript
  <NavLink className="home" exact style={defaultStyle} activeStyle={active} to='/'>
      <li >Home</li>
  </NavLink>
  ```
## Route Props
1. **match**:   info about how the url matches the router
2. **location**: location where you are now (similar to window.location)
3. **history**: allows explicit changes to the url (similar to HTML5 history object)

## url parameters
- allows you to make dynamic routes
- to make the param optional - add a `?`
  ```javascript
    // app.js
    <Route exact path='/:name?/' component={Home} />

    // home.js
    <div>Welcome {this.props.match.params.name}</div>
  ```

## withRouter
- if a component is not rendered inside of a Route component, you can use withRouter to get route props
  ```javascript
  import {withRouter} from 'react-router-dom'

  <button onClick={() => history.push('/')}>
  ```

## Route
- to pass custom props: use `render`, else use `component`
  - with `component`
  ```javascript
  import { Route } from 'react-router-dom';
  <Route path='/about' component={About} />
  ```
  - with `render` you can add custom props 
  ```javascript
      // props arg: passes the match, location, and history props to the component
    <Route path='/portfolio' render={props => (
      <Portfolio {...props} projects={projects} />
    )} />
    ```
