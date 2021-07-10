const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    allTech: async () => {
      return Tech.find();
    },

    matchups: async () => {
      return Matchup.find();
    },

    matchup: async (parent, { matchupID }) => {
      return Matchup.findOne({ _id: matchupID });
    },
  },

  Mutation: {
    addMatchup: async (parent, { matchupData }) => {
      return Matchup.create({ matchupData });
    },

    addVote: async (parent, { matchupID, techNum }) => {
      return Matchup.findOneAndUpdate(
        { _id: matchupID },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
