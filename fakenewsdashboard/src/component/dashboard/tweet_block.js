import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function TweetBlock(props) {
    
    return(
        <div >
            <TwitterTweetEmbed tweetId={props.tweetId} options={{height: 200,width:200}}/><h3> emotion:{props.emotion}</h3>
        </div>
    )

}