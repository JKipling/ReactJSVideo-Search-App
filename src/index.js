import _ from 'lodash';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';    //if it is a file we created, we need to directly reference that file. 
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_Key = 'AIzaSyASHLZAwKanbUABmWDMJp2I5Gckl5wWmrg';

// Create a new component. This component should produce some HTML

//const is an ES6 syntax similar to declaring a variable but the value never changes of that variable.
//JSX looks like HTML but is actaully JavaScript and then is transpiled by Babel to work as HTML
//using an arrow function, new ES6 syntax. The only difference than using the "function" keyword is the value of "this" inside of the function.
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term){                                              //Took this method and passed it down to SearchBar under the property "onSearchTermChange".
        //Youtube search function utilizing our API_Key.
        YTSearch({key:API_Key, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });        
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }    //passing callbacks two levels deep to video_list and video_list_item. Allows you to click on a video and have it play. 
                videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);

//State- whenever we change our state the componenet instantly re-renders along with any children as well. 