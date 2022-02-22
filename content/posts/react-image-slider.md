---
title: 🎥 react image slider
slug: react-image-slider
date: "2018-12-15"
topic: coding
---

When building my wife's photography website, [photogarropy][photogarropy], I knew I wanted the home page to prominently feature her work, so I made an image slider and placed it on the landing page of the site. I'll walk you through how to build it below.

First thing's first, our component will accept a list of images as props, and track the currently displayed image as state. If the snippet below looks a little odd to you, note that I'm using [class properties][codeburst], which I highly recommend.

```javascript
class Carousel extends React.Component {
    static propTypes = {
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    state = {index: 0}
}
```

Next we need to actually render an image in the slider. Use a CSS `background-image` property so you can render the image. You should also create a reference to this element to use later when we modify what image is displayed.

```javascript {11}
carousel = React.createRef()

render = () => {
    const index = this.state.index
    const image = this.props.images[index]

    return (
        <div
            ref={this.carousel}
            className="carousel"
            style={{backgroundImage: `url(${image})`}}
        />
    )
}
```

In order to actually trigger the image change, use the `componentDidMount` lifecycle method to set an interval. In the code below, I'm calling the `changeImage` method every five seconds. Don't forget to clear the interval when the component unmounts!

```javascript
componentDidMount = () => {
    this.id = setInterval(this.changeImage, 5000)
}

componentWillUnmount = () => {
    clearInterval(this.id)
}
```

Now it's time to write the core method for our slider component. Create a `changeImage` method that grabs the carousel reference, increments the index, and sets the new image. Be sure to take into account wrapping after the last image!

```javascript
changeImage = () => {
    const carousel = this.carousel.current

    const index =
        this.state.index === this.props.images.length - 1
            ? 0
            : this.state.index + 1

    const image = this.props.images[index]
    carousel.style.backgroundImage = `url(${image})`

    this.setState({index})
}
```

In my use case, I had one final thing to consider. The website was meant to showcase my wife's photography, so I expected the images to be high quality. To ensure smooth carousel transitions, I preloaded the images when the component mounted.

```javascript {3}
componentDidMount = () => {
    this.id = setInterval(this.changeImage, 5000)
    this.preloadImages()
}

preloadImages = () => {
    this.props.images.forEach(image => {
        let img = document.createElement("img")
        img.src = image
    })
}
```

And that's it! Check out the full slider [source code][slider] and see it in action on the [photogarropy][photogarropy] site.

Tweet me your sliders [@bradgarropy][twitter]!

[photogarropy]: https://photogarropy.netlify.app
[codeburst]: https://codeburst.io/use-class-properties-to-clean-up-your-classes-and-react-components-93185879f688
[slider]: https://github.com/bradgarropy/photogarropy.com/blob/master/src/components/Carousel.js
[twitter]: https://twitter.com/bradgarropy
