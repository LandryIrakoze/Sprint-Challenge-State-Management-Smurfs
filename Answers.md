1. What problem does the context API help solve?

Context API helps us access state that lives up the component tree without having to go through the process of prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are actions that make changes to our state. Our store is what contains our global state. Reducers are instructions to update our store based on case, and actions given.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

The difference between application state and component state, is applicaiton state is the global state, and component state is the state of just a single component. When you just want to display simple data its best to use component state, whereas when you want to change data you should use application state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is redux middleware that intercepts our action creators, in order to allow us to handle async actions.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system I learned so far is redux. I feel like redux makes the most sense intuitively because of how it allows us to update our state from within any component, and how it works in a loop.