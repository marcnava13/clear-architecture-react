# Clean architecture with React

I leave a repo for the presentation of an initial proof of concept for a clean architecture on the front end.

Starting from an application made with nextjs, the file structure is as follows:

```
|-- src
    |-- __mocks__
    |-- components # following the atomic design architecture
      |-- atoms
      |-- layouts
      |-- molecules
      |-- organisms
      |-- views # complete views of the application
    |-- core
      |-- application # in the example: TODO
        |-- [context]
          |-- useCase # in the example: createTodo, findAll
            |-- xxxx.interface.ts
            |-- useCaseXXXXXX.ts
      |-- domains
        |-- [context] # in the example: Todos
          |-- models # interfaces of entities and repositories
          |-- services # domain services
      |-- infrastructure
        |-- respositories
          |-- [context]
            |-- XXXXXXRespository.ts # implementation of domain interfaces
    |-- pages # nextjs file structure for router
      |-- api
      |-- _app.tsx
      |-- index.tsx
```

I hope you like it and have fun.