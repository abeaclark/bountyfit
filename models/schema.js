import axios from 'axios'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';


const UserInfoType = new GraphQLObjectType({
 name: 'UserInfo',
 description: 'Basic information on a GitHub user',
 fields: () => ({
   'login': { type: GraphQLString },
   'id': { type: GraphQLInt },
   'avatar_url': { type: GraphQLString },
   "site_admin": { type: GraphQLBoolean }
  })
});

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'First GraphQL Server Config — Yay!',
  fields: () => ({
    gitHubUser: {
      type: UserInfoType,
      description: 'GitHub user API data with enhanced and additional data',
      args: {
        username: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'The GitHub user login you want information on',
        },
      },
      resolve: (_,{username}) => {
        const url = `https://api.github.com/users/${username}`;
        return axios.get(url)
                    .then(function(response) {
                      return response.data;
                    });
      }
    },
  })
});

const schema = new GraphQLSchema({
 query
});

export default schema;



