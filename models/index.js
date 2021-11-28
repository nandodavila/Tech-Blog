const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

User.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Painting };
