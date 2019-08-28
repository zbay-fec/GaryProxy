import React from 'react'

export default class Proxy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false
    }
  };

  componentDidMount() {
    window.addEventListener('showCart', event => {
      this.setState({showCart: event.detail.showCart})
    })
  };

  render() {
    return (
      <div>
        <Search />
        <Cart showCart={this.state.showCart} />
        <ItemDetail showCart={this.state.showCart} />
        <Carousel showCart={this.state.showCart} />
        <ReviewsList showCart={this.state.showCart} />
      </div>
    );
}
