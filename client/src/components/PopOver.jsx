import React from 'react';
import { formatDate } from '../gameDataHelpers';

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
    const releaseDate = formatDate(this.props.content.release_date);

    const modalStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      height: '350px',
      width: '300px',
      padding: '15px',
      background: 'linear-gradient(to bottom, rgba(227,234,239,1) 0%,rgba(199,213,224,1) 100%)'
    };

    const nameStyle = {
      fontSize: '18px',
      fontFamily: '"Motiva Sans", Sans-serif',
      fontWeight: '500',
      color: '#222d3d',
      margin: '2px'
    };

    const releaseDateStyle = {
      fontSize: '10px',
      fontFamily: '"Motiva Sans", Sans-serif',
      fontWeight: '200',
      color: '#30455a',
      margin: '1px'
    };

    const imageStyle = {
      height: '200px',
      width: '100%',
      objectFit: 'cover'
    };

    const reviewsDivStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      height: '50px',
      width: '98%',
      background: '#556772',
      margin: '5px 0',
      borderRadius: '3px',
      padding: '3px'
    };

    const reviewsHeaderStyle = {
      fontSize: '14px',
      fontFamily: '"Motiva Sans", Sans-serif',
      fontWeight: '200',
      color: '#acb2b8',
      margin: '4px 0'
    };

    const reviewsDataDivStyle = {
      display: 'flex',
    };

    const reviewsRatingStyle = {
      fontSize: '14px',
      fontFamily: '"Motiva Sans", Sans-serif',
      fontWeight: '200',
      margin: '4px 0'
    };

    const numReviewsStyle = {
      fontSize: '14px',
      fontFamily: '"Motiva Sans", Sans-serif',
      fontWeight: '200',
      color: '#acb2b8',
      margin: '2px 5px'
    };

    const tagsDivStyle = {};

    const tagsHeaderStyle = {
      fontSize: '14px',
      fontFamily: '"Motiva Sans", Sans-serif',
      fontWeight: '100',
      color: '#30455a',
      margin: '2px 2px'
    };

    const userTagsStyle = {
    };

    return (
      <div style={modalStyle}>
        <h2 style={nameStyle}>{this.props.content.dlc_name}</h2>
        <h2 style={releaseDateStyle}>Released: {releaseDate}</h2>
        <img src={this.state.images[this.state.imageIndex]} alt='DLC image' style={imageStyle}></img>
        <div style={reviewsDivStyle}>
          <h3 style={reviewsHeaderStyle}>Overall user reviews</h3>
          <div style={reviewsDataDivStyle}>
            <h4 style={reviewsRatingStyle}>{this.props.content.user_reviews_overall}</h4>
            <h4 style={numReviewsStyle}>({this.props.content.user_reviews_num} reviews)</h4>
          </div>
        </div>
        <div style={tagsDivStyle}>
          <h3 style={tagsHeaderStyle}>User tags:</h3>
          <div style={userTagsStyle}>{this.props.content.user_tags}</div>
        </div>
      </div>
    );
  }
}

export default PopOver;

// TODO overall review color
// TODO user tags rendered boxes