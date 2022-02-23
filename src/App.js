import React from "react";
import ModalPage from "./components/ModalPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      actors: [],
      isTheModalOn:false,
      selectedActor:[]
    };
    
    this.handalModal = this.handalModal.bind(this)
  }

  async componentDidMount() {
    const URL =
      "https://api.themoviedb.org/3/person/popular?api_key=99b7e54dffb135e088fc5567896050e7&language=en";
    try {
      const resp = await fetch(URL);
      const data = await resp.json();
      this.setState({ actors: data.results });
    } catch (err) {
      console.log(err);
    }
  }


  toggleModal(id){
    this.setState({isTheModalOn:true})
    const selectedActor =  this.state.actors.filter((actor)=> actor.id === id)
    this.setState({selectedActor})
  }

  handalModal(status){
    this.setState({isTheModalOn:status})
  }

  render() {
    const { actors } = this.state;

    return (
      <>
        <div className="app">
          <div className="movies">
            {actors.map((actor) => {  
              const { name, profile_path, known_for,id } = actor;
              const details = known_for.map((movie)=>movie.title)
              return (
                <div className="actor" onClick={()=>this.toggleModal(id)}>
                  <figure>
                  
                    <img
                      src={"https://image.tmdb.org/t/p/w500/"
                       + profile_path}
                      className="image-actor"
                    />
                  </figure>
                  <h2>{name}</h2>
                  <p>{details.join(",")}</p>
                </div>
              );
            })}
          </div>
          {this.state.isTheModalOn ? <ModalPage handalModal={this.handalModal} dataActor={this.state.selectedActor} /> : null}
        </div>
        
      </>
    );
  }
}

export default App;