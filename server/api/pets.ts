import protectRoute from "../utils/protectRoute";

export default defineEventHandler((event) => {
  protectRoute(event);
  return {
    pets: [
      {
        id: 1,
        name: "Bella",
        species: "Dog",
        breed: "Labrador Retriever",
        age: 3,
        owner: {
          name: "Alice",
          phone: "123-456-7890",
          email: "alice@example.com",
        },
      },
      {
        id: 2,
        name: "Max",
        species: "Cat",
        breed: "Siamese",
        age: 2,
        owner: {
          name: "Bob",
          phone: "234-567-8901",
          email: "bob@example.com",
        },
      },
      {
        id: 3,
        name: "Charlie",
        species: "Bird",
        breed: "Parakeet",
        age: 1,
        owner: {
          name: "Carol",
          phone: "345-678-9012",
          email: "carol@example.com",
        },
      },
      {
        id: 4,
        name: "Lucy",
        species: "Rabbit",
        breed: "Dutch",
        age: 4,
        owner: {
          name: "David",
          phone: "456-789-0123",
          email: "david@example.com",
        },
      },
    ],
  };
});
