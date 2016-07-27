var userSchema = new mongoose.Schema({
    active: Boolean,
    email: { type: String, trim: true, lowercase: true },
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    sp_api_key_id: { type: String, trim: true },
    sp_api_key_secret: { type: String, trim: true },
    subs: { type: [mongoose.Schema.Types.ObjectId], default: [] },
    created: { type: Date, default: Date.now },
    lastLogin: { type: Date, default: Date.now },
  },
  { collection: 'user' }
);

userSchema.index({email : 1}, {unique:true});
userSchema.index({sp_api_key_id : 1}, {unique:true});

var UserModel = mongoose.model( 'User', userSchema );

var leagueSchema = new mongoose.Schema({
    name = { type: String, trim:true },
    sport = { type: String, trim:true },
    description = { type: String, trim:true },
    frequency = { type: String, trim:true, lowercase:true, default:'annual' },
    leagueURL = { type: String, trim:true },
    country = { type: String, trim:true },
    state = { type: String, trim:true, lowercase:true, default:'in-play'},
    firstEdition = { type: Date }
    createdDate = { type: Date, default: Date.now },
    modifiedDate = { type: Date, default: Date.now }
  },
  { collection: 'league' }
);
