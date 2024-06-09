import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state = {
      page:[],
      articles:[]
    }
  }
  async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0fa2b2b8abbc44f2b3ecae6f41aa5263&page=1&pageSize=20`;
      let data= await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({articles: parseData.articles}
      )
  }
  handleNextClick= async()=>{
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0fa2b2b8abbc44f2b3ecae6f41aa5263&page=${this.state.page + 2}&pageSize=20`;
      let data= await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 2,
        articles: parseData.articles
      })
      }
  handlePreviousClick = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0fa2b2b8abbc44f2b3ecae6f41aa5263&page=${this.state.page - 2}&pageSize=20`;
    let data= await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 2,
      articles: parseData.articles
    })
  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>
        <div className='d-flex  justify-content-between'>
        <button /*disabled={this.state.page <=1}*/ type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
      
    )
  }
}

export default News
