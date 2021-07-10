const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    tech: async () => {
      return Tech.find();
    },

    matchups: async () => {
      return Matchup.find();
    },

    matchup: async (parent, { _id }) => {
      return Matchup.findOne({ _id });
    },
  },

  Mutation: {
    addMatchup: async (parent, matchupData) => {
      return await Matchup.create(matchupData);
    },

    addVote: async (parent, { _id, techNum }) => {
      return await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
