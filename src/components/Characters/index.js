import React, {Component} from 'react'

export default class Characters extends Component {
    constructor(props) {
        super(props)
        this.state = {
          items: []
        }
      }
    
      componentDidMount() {
        fetch(`http://gateway.marvel.com/v1/public/characters?ts=1588285346&apikey=42548bd64f2c8e0c4929095016eb0c30&hash=cb18717d860dc136d795b02572cec1ad&limit=30`)
        .then(response => response.json())
        .then(result  => {
            this.setState({
              items: result.data.results
            })
            console.log(this.state)
        })
      }

      render() {

        const {items} = this.state
    
        return (
          <>
                <h1>Persongens Marvel</h1> 
              <ul className="list-hero">
              {items.map(item => (
                <li key={item.id}>
                  <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </>
        )
        
      }
}