# TODO

## create mutation

mutation todosCreateMutation {
  todosCreateMutation(
    params: {title: "TODOD", description: "DESCT"}
  ) {
    id
    title
    description
  }
}


## update mutation

mutation todosUpdateMutation {
  todosUpdateMutation(
    params: {id: "6153899a1d690f780b96e831", description: "oldw"}
  ) {
    id
    title
    description
  }
}

## delete mutation

mutation todosDeleteMutation {
  todosDeleteMutation(
    params: {id: "61538462ec714457cd3258d2"}
  ) {
    id
    title
    description
  }
}


## list query

query todosListQuery {
  todosList {
    list {
      id
      title
      description
    }
  }
}


## get query

query todosGetQuery {
  todoGet(
    params: {id: "61538456ec714457cd3258c9"}
  ) {
    id
    title
    description
  }
}