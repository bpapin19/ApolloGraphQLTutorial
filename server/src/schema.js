const { gql } = require('apollo-server');
const typeDefs = gql `
"A Track is a group of Modules athat teaches about a specific topic"
type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String!
    length: Int
    modulesCount: Int
}

"Author of a complete Track"
type Author {
    id: ID!
    name: String!
    photo: String
}

type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
}
`;




module.exports = typeDefs;