import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function TweetBlock(props) {
    
    return(
        <div >
            <TwitterTweetEmbed tweetId={props.tweetId} options={{height: 200,width:500}}/><h3> emotion:{props.emotion}, {props.real}</h3>
        </div>
    )

}