const Twit = require('twit');
const config = require('./config.js');
const tweetBot = new Twit(config);

const favParams = {
    q: 'to:anecdoth since:2020-05-01',
    result_type: 'recent',
    count: 20,
}

tweetBot.get('search/tweets', favParams,  (err, data, res) => {
    if(!err){
        for(let i=0; i < data.statuses.length; i++){
            let tweetID = {id: data.statuses[i].id_str}
            tweetBot.post('favorites/create', tweetID, (err, res) => {
                if(!err){
                    console.log(`Favorite successful`)
                }else{
                    console.log(err.message)
                }
            })
        }
    }else{
        console.log(err)
    }
})