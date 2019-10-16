import React, {Component} from 'react';
import axios from 'axios';

class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            original_title: '',
            overview: '',
            popularity: '',
            budget: '',
            release_date: '',
            revenue: '',
            vote_overage: '',
            vote_count: ''
        }
    }

    componentDidMount(){
        const {id} = this.props.location.state;
        this.setState({
            id: id
        });
        axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=436e6bfd5d0bbb3d113fb2a1da388291&language=fr-FR')
        .then(res => {
            this.setState({
                original_title: res.data.original_title,
                overview: res.data.overview,
                popularity: res.data.popularity,
                budget: res.data.budget,
                release_date: res.data.release_date,
                revenue: res.data.revenue,
                vote_overage: res.data.vote_overage,
                vote_count: res.data.vote_count
            });
        });
    }
    render(){
        const { original_title, overview, popularity, budget, release_date, revenue, vote_count, vote_overage } = this.state
        return (
            <div className="container card card-body" style={{textAlign: 'center'}}>
                <h1 className="card-title text-primary">{original_title}</h1>
                <p className="card-text">
                    description: {overview} <br></br>
                    popularité: {popularity} <br></br>
                    budget: {budget} <br></br>
                    date de sortie: {release_date} <br></br>
                    revenue: {revenue} <br></br>
                    nombre de votes: {vote_count} <br></br>
                    moyenne: {vote_count}/10
                </p>
            </div>
        );
    }
}

export default Movies;