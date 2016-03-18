var FitbitApiClient = require("fitbit-node");
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

const currentUserType = new GraphQLObjectType({
  name: 'User',
  description: 'The logged in user',
  fields: {
    id: {
      type: GraphQLInt,
      resolve(user) {
        return user.id
      }
    },
    firstName: {
      type: GraphQLString,
      resolve(user) {
        return user.firstName
      }
    },
    lastName: {
      type: GraphQLString,
      resolve(user) {
        return user.lastName
      }
    },
    age: {
      type: GraphQLInt,
      resolve(user) {
        return user.age
      }
    },
    gender: {
      type: GraphQLString,
      resolve(user) {
        return user.gender
      }
    }
  }
});

const activitySummaryType = new GraphQLObjectType({
  name: 'ActivitySummary',
  description: 'Summary of activites for a given day for a user',
  fields: {
    data: {
      type: GraphQLString,
      resolve(data) {
        return data
      }
    },
  }
});


const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: {
    currentUser : {
      type: currentUserType,
      resolve: (parentValue, _, { rootValue: { user } }) => {
        return user
      }
    },
    activitySummary : {
      type: activitySummaryType,
      resolve: (parentValue, _, { rootValue: { user } }) => {
        const url = "https://api.fitbit.com/1/user/" + "-" + "/activites/date/" + "2016-03-17" + ".json"
        return axios({
                    method: 'get',
                    url: url,
                    data: {},
                    headers: {'Authorization': 'Bearer ' + user.fitbitAuthToken }
                  })
                    .then(function(response) {
                      console.log(response.data)
                      return response.data;
                    })
                    .catch(function(err) {
                      console.log(err.data.errors[0])
                    });
      }
    }
  }
});

const schema = new GraphQLSchema({
 query: query
});

export default schema;



