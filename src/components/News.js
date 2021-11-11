import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    static defaultProps = {
        country:"in",
        pageSize: 5 ,
        category:"general",
       
    }

    static propTypes = { 
        country : PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    constructor(props){
        super(props);
        console.log("Hello i am a constructor");
        this.state = {
          articles:[],
          loading:false,
          page:1,
          totalResults: 0
        }
        document.title =` ${this.capitalizeFirstLetter(this.props.category)} - TheNewsBoy`;
      }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=916f90d068594743a102da36473552b3&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
    }

    handlePrevClick = async() =>{
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=916f90d068594743a102da36473552b3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState(
            {
                page: this.state.page - 1,
                articles: parsedData.articles,
                loading:false
            }
        )   
    }

     fetchMoreData = async () => {
       this.setState({page: this.state.page +1})
       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=916f90d068594743a102da36473552b3&page=1&pageSize=${this.props.pageSize}`;
       this.setState({loading: true});
       let data = await fetch(url);
       let parsedData = await data.json()
       console.log(parsedData);
       this.setState({articles: this.state.articles.concat(parsedData.articles),
         totalResults: parsedData.totalResults, 
         loading: false})
      };

    handleNextClick = async () =>{
        if(this.state.page + 1> Math.ceil (this.state.totalResults/this.props.pageSize))
        {

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=916f90d068594743a102da36473552b3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState(
                {
                    page: this.state.page + 1,
                    articles: parsedData.articles,
                    loading: false,
                    totalResults: parsedData.totalResults
                    
                }
            )
            this.props.setProgress(100);
        }   
    }

    render() { 
        return (
            <div className="container my-3">
                <h2 className="text-center" >Top {this.capitalizeFirstLetter(this.props.category)} Headlines - By TheNewsBoy</h2> 
                <h5 className="text-center"> Developed by Parag Coimbatore</h5>
                {/* {this.state.loading && <Spinner/>} */}     
                <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length!== this.state.totalResults}
                loader={<Spinner/>}
                >
                <div className="container">

             
                <div className="row"> 
                { this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}
                        author={element.author} date={element.publishedAt}/>
                    </div> 
                })} 
                </div>  
                </div>
                </InfiniteScroll>
                
            </div>
        )
    }
}

export default News
