import React, {Component} from 'react';

class Searchbar extends Component {
  state = {search: ''}

  inputOnChange = event => this.setState({search: event.target.value});

  onSubmitSearchForm = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.search)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmitSearchForm}>
          <div className="field">
            <label htmlFor="input-search">Video Search</label>
            <input id="input-search" type="text"
                   value={this.state.search}
                   onChange={this.inputOnChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;