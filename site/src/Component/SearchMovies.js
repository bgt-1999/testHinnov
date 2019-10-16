import React, {Component} from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Movie from './Movie'

class SearchMovies extends Component{
    constructor(props){
        super(props);

        this.state = {
            search: '',
            loading: false,
            message: '',
            results: {}
        }
        this.cancel = '';
    }

    fetchSearchResults(search){
        const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=436e6bfd5d0bbb3d113fb2a1da388291&language=fr-FR&query=' + search + '&page=1&include_adult=false';

        if(this.cancel){
            this.cancel.cancel();
        }
        this.cancel= axios.CancelToken.source();

        axios.get(searchUrl, {
            CancelToken: this.cancel.token
        }).then(res => {
            const resultNotFoundMsg = ! res.data.results.length
                                    ? 'There are not more search results. PLease try a new search'
                                    : '';
            this.setState({
                results: res.data.results,
                message: resultNotFoundMsg,
                loading: false
            })
            console.log(res.data.results);
        }).catch(error => {
            if(axios.isCancel(error) || error){
                this.setState({
                    loading: false,
                    message: "Fled to fetch the data. PLease check network"
                });
            }
        });
    }

    renderSearchResults(){
        const { results } = this.state;
        if(Object.keys(results).length && results.length){
            return(
                <div className="row">
                    {results.map(result => {
                        return(
                            <div key = {result.id} className="col-md-4 card-body">
                                <Link to={{pathname: '/movie', state: {id: result.id}}}><h6 className="card-title text-primary">{result.original_title}</h6></Link>
                                <p className ="card-text">
                                    note moyenne: {result.vote_average}/10 <br></br>
                                    nombre de votes: {result.vote_count} <br></br>
                                    popularity: {result.popularity} <br></br>
                                    date de sortie: {result.release_date} <br></br>
                                </p>
                            </div>
                        )
                    })}

                </div>
            );
        }
    }

    onSearch(e){
        const search = e.target.value;
        this.setState({
            search: e.target.value,
            loading: true,
            message: ''
        }, () => {
            this.fetchSearchResults(search);
        });
    }

    render(){
        return (
            <Router>
                <div className="container card">
                    <label>Taper le titre d'un film</label>
                    <input type="text"
                    value={this.state.search}
                    onChange={this.onSearch.bind(this)}></input>
                    {this.renderSearchResults()}
                </div> 
                <Switch>
                    <Route path="/movie" exact component={Movie}></Route>
                </Switch>
            </Router> 
        );
    }
}

export default SearchMovies;