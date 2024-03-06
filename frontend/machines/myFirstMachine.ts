import { createMachine, assign } from "xstate";

const authMachine = createMachine({
  id: "authentication",
  initial: "idle",
  context: {
    userData: null,
    error: null,
  },
  states: {
    idle: {
      on: {
        LOGIN: "loggingIn",
        REGISTER: "registering",
      },
    },
    loggingIn: {
      invoke: {
        src: (context, event) => {
          // This function would handle calling your login API
          // and return a Promise that resolves or rejects based on the API response
        },
        onDone: {
          target: "loggedIn",
          actions: assign({
            userData: (_, event) => event.data,
          }),
        },
        onError: {
          target: "loginError",
          actions: assign({
            error: (_, event) => event.data,
          }),
        },
      },
    },
    loggedIn: {
      on: {
        LOGOUT: "idle",
      },
    },
    loginError: {
      on: {
        LOGIN: "loggingIn",
      },
    },
    registering: {
      invoke: {
        src: (context, event) => {
          // This function would handle calling your registration API
          // and return a Promise that resolves or rejects based on the API response
        },
        onDone: {
          target: "registered",
          actions: assign({
            userData: (_, event) => event.data,
          }),
        },
        onError: {
          target: "registrationError",
          actions: assign({
            error: (_, event) => event.data,
          }),
        },
      },
    },
    registered: {
      on: {
        LOGIN: "loggingIn",
      },
    },
    registrationError: {
      on: {
        REGISTER: "registering",
      },
    },
  },
});
