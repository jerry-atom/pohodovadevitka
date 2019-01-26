import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap";
import Img from "gatsby-image";

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (!this.animating) {
      this.setState({
        activeIndex:
          this.state.activeIndex === this.props.items.length - 1
            ? 0
            : this.state.activeIndex + 1
      });
    }
  }

  previous() {
    if (!this.animating) {
      this.setState({
        activeIndex:
          this.state.activeIndex === 0
            ? this.props.items.length - 1
            : this.state.activeIndex - 1
      });
    }
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.items.map(item => (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.node.id}
        >
          <Img fluid={item.node.childImageSharp.fluid} />
        </CarouselItem>
    ));

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={this.props.items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Předchozí"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Následující"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

HomeCarousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      edges: PropTypes.array
    }))
};

export default HomeCarousel;