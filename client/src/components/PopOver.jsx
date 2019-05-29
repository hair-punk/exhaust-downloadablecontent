import React from 'react';

class PopOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [this.props.content.images[0]],
      imageIndex: 0,
      isHover: this.props.isHover,
    }
  }

  componentDidMount() {
    this.setState({
      images: this.props.content.images
    });
    this.imageRender = setInterval(() => this.changeImage(), 1500);
  }

  changeImage () {
      if (this.state.imageIndex < this.state.images.length - 1) {
        const newIndex = ++this.state.imageIndex;
        this.setState({
          imageIndex: newIndex
        })
      } else {
        this.setState({
          imageIndex: 0
        })
      }
  }

  componentWillUnmount () {
    clearInterval(this.imageRender);
  }

  render() {
    const releaseDate = 'Mar 26, 2019';//formatDate(this.props.content.releaseDate); // TODO formatDate helper

    const imageStyle = {
      height: '300px',
      width: '280px'
    };

    return (
      <div>
        <h2>{this.props.content.dlc_name}</h2>
        <h3>Released: {releaseDate}</h3>
        <img src={this.state.images[this.state.imageIndex]} alt='DLC image' style={imageStyle}></img>
        <div>
          <h3>Overall user reviews</h3>
          <h4>{this.props.content.user_reviews_overall}</h4>
          <h4>({this.props.content.user_reviews_num})</h4>
        </div>
        <div>
          <h3>User tags:</h3>
          <div>{this.props.content.user_tags}</div>
        </div>
      </div>
    );
  }
}

export default PopOver;