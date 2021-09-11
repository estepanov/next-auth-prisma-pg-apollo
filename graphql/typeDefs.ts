import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type User {
    id: String!
    email: String!
    emailVerified: String
    name: String
    image: String
  }

  type Author {
    id: String!
    name: String
  }

  type PublicMessage {
    id: String!
    message: String!
    author: Author
  }

  type Query {
    me: User
    publicMessages: [PublicMessage]!
    publicMessage(id: String!): PublicMessage
  }

  type Mutation {
    editPublicMessage(id: String!, message: String): PublicMessage
    createPublicMessage(message: String!): PublicMessage
    deletePublicMessage(id: String!): PublicMessage
  }
`;

export default typeDefs;