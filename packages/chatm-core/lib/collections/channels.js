Channels = new Mongo.Collection("channels");

Channels.schema = new SimpleSchema({
    label: {
        type: String,
        label: "Label",
        min: 1
    },
    user: {
        type: String,
        label: "Author"
    },
    timestamp: {
        type: Number,
        label: "Creation timestamp",
        min: 0
    }
});
