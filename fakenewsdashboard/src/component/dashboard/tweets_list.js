import TweetBlock from './tweet_block'
export default function TweetsList(props){

    let tweets = props.tweets.map((tweet)=><TweetBlock tweetId={tweet.id} emotion={tweet.emotion} real={tweet.is_fake}/>)
    return(
        <div>
            {tweets}
        </div>
    )

}