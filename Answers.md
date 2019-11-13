1. What problem does the context API help solve?

Context API solves the issue of data flow in large applications. It specifically creates a globally accessible 'state' by wrapping a provider around the app component. Essentially it is a way to share values between components without needing to prop drill.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that have a type - to describe the action, and an optional payload for passing data.

Reducers are pure functions that take in an action, and depending on the type of action, will preform some kind of operation and return a new state. Kind of like how a finite state machine works. It can only be in 1 state, and for every input there will be an output. Main takeaway is that a reduce cannot change anything outside it's environment (hence why it returns a new state object instead of mutating the passed in current state).

The store in Redux is simply a single place for holding application state. It can only be modified via reducers through the dispatch(action) function. The store is also the single point for state to be rendered through the UI.

All these pieces work together. You have a single location for application state (the store), and then you have defined actions with optional payloads that are used to describe to the reducer what is happening and what should take place. The reducer takes this action and preforms an operation, and then returns a new state (modifying the store). The store is then updated and causes the UI to render with the new data.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is literally state in the context of the application (global). Component state is any state that resides in a specific component.
For component state, think about a form component. You have inputs that will update their state based on the selected values. You don't need the entire application to maintain the state of a single form from a single component. For application state, think about user login validity, api data that is used in more than 1 component, etc. Realistically, you would want to use application state when you have many components that rely on a single point of data. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows for async redux actions. Normally redux actions are blocking / synchronous. With redux thunk, we use thunks (functions returned from functions) that are then identified by redux-thunk, and then executed and dispatched after the async code completes. Redux thunk is middleware that filters through dispatched actions. If its just a regular action then it passes it along. But like I said earlier if the signature is a function then it will execute that function, pass in a handle to dispatch, and then the function can call dispatch after its async operation is complete. 


5. What is your favorite state management system you've learned and this sprint? Please explain why!

I don't have a favorite. They both have different uses and pros/cons. Redux is heavier to setup and run but it is much easier to maintain applications at scale with it. It provides a single source of truth for application state. Context API on the other hand is for smaller applications but still applications that need to have access to a global store and when the compositional model wont suffice.