var userA = {};
var userB = {};
var userC = {};

var youtube = {
	videoURL: "http://xxxx.com",
	title: "mozart",
	user: {
		username:"xx",
		userprofileimageURL:"http://xxx", // userProfileImageURL
		numberSubscriber: 15256, // since plural, numberSubscribers
		subscription: function(){} // if it's an action, use action word - subscribe
	},
	subscribe: function(){}, // You can be specific and DISTINCT e.g. subscribeChannel and followUser
	numberViews: 3982196 + "views", // Think about this as a number not full message string - we'll want to ADD numbers. Datatypes and use of.
	numberLike: 16866,
	Like: function(){}, // Lowercase like()
	numberDislike: 645, // plural
	dislike: function(){},
	videodecription: "xxxxxxxxx", // camelCase

	relatedVideos: { // For lists that will continue to grow - use Arrays ... relatedVideos: []
		videoA: {
			videoURL: "http://xxx",
			description: "xxx",
		},
		videoB: {
			videoURL: "http://xxx",
			description: "xxx",
		},
		videoC: {
			videoURL: "http://xxx",
			description: "xxx",
		}
	},

	comment: {
		numbercomment: 1766,
		lastComment: new Date(),

		commentList: [ // Try to think in terms of lists (arrays) of similar objects
			{
				userprofile: userA,
				comment: "xxxx",
				like: function(){},
				dislike:function(){},
				report:function(){},
				reply: function(){}, // action to reply
				user: {
					replycomment: "xxx",
					reply: function(){}
				}
			},
			{
				userprofile: userB,
				comment: "xxxx",
				like: function(){},
				dislike:function(){},
				report:function(){},
				reply: function(){}, // action to reply
				user: {
					replycomment: "xxx",
					rely: function(){}
				}
			},
			{
				userprofile: userC,
				comment: "xxxx",
				like: function(){},
				dislike:function(){},
				report:function(){},
				reply: function(){}, // action to reply
				user: {
					replycomment: "xxx",
					rely: function(){}
				}
			}
		]
	}
}


var x = [{a:"xxx"}, function(){ console.log("Hola!"); }];
