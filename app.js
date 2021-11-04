function data(){
            return {
                meId: 1,
                showMessageBox: false,

                newMessage: "",
                send(){
                    var _id = this.messages.length + 1;
                    this.messages.push(
                        {id: _id, userId: this.meId, text: this.newMessage, replies: 0, retweets: 0, hearts: 0,}
                    );
                    this.showMessageBox = false;
                    this.newMessage = "";
                },

                users: [
                    {id: 1, username: 'alice', name: 'Alice Atherton', dp: 'https://i.pravatar.cc/50'},
                    {id: 2, username: 'bob', name: 'Bob Billy', dp: 'https://i.pravatar.cc/51'},
                ],
                messages: [
                    {id: 1, userId: 1, text: "Hello world! My first tweet.", replies: 300, retweets: 200,},
                    {id: 2, userId: 2, text: "Hello world! I am a cat", replies: 100, retweets: 150,},
                ],
                likes: [
                    {userId: 1, messageId: 1},
                    {userId: 2, messageId: 1},
                    {userId: 3, messageId: 1},
                    {userId: 4, messageId: 1},
                    {userId: 5, messageId: 1},
                    {userId: 6, messageId: 1},
                    {userId: 7, messageId: 1},
                    {userId: 2, messageId: 2},
                    {userId: 3, messageId: 2},
                ],
                getUserInfo(_id){
                    return this.users.filter( user => user.id == _id )[0];
                },
                getLikeCount(_messageId){
                    return this.likes.filter( like => like.messageId == _messageId).length;
                },
                like(_userId, _messageId){
                    if( this.likes.filter( like => like.userId == this.meId && like.messageId == _messageId).length == 0){
                        this.likes.push({userId: _userId, messageId: _messageId});                  
                    } else {
                        // Pass
                    }
                }
            };
        }