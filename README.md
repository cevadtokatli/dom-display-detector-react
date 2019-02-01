# DOM Display Detector React
React integration for [DOM Display Detector.](https://github.com/cevadtokatli/dom-display-detector)

## NPM
```
npm install --save-dev dom-display-detector-react
```

## Yarn
```
yarn add dom-display-detector-react --dev
```

## Installation
```
import React from 'react';
import DOMDisplayDetector from 'dom-display-detector-react';

class Hood extends React.Component {
    render() {
        return <h1>Lorem Ipsum</h1>
    }
}

class App extends React.Component {
    seen(el) {
        // ..
    }

    render() {
        return(
            <div>
                <DOMDisplayDetector seen={this.seen}>
                    <Hood />
                </DOMDisplayDetector>
            </div>
        );
    }
}
```

## Configuration
### Once
If you want to run `seen` method for once, you can pass `once` property as `true`.
```
	render() {
        return(
            <div>
                <DOMDisplayDetector once={true}>
                    // ..
                </DOMDisplayDetector>
            </div>
        );
    }
```

### Callbacks
`seen(el:HTMLElement): void` \
Runs when the element starts to be seen on the screen.

`unseen(el:HTMLElement): void` \
Runs when the element starts to be unseen on the screen.

You can also define the callbacks in the child component instead of passing them as props.
```
class Hood extends React.Component {
    seen(el) {
        // ...
    }

    unseen(el) {
        // ...
    } 

    render() {
        return <h1>Lorem Ipsum</h1>
    }
}

class App extends React.Component {
    render() {
        return(
            <div>
                <DOMDisplayDetector>
                    <Hood />
                </DOMDisplayDetector>
            </div>
        );
    }
}
```

## IE Support
IE 10 is not supported and patches to fix problems will not be accepted.

## License
DOM Display Detector React is provided under the [MIT License.](https://opensource.org/licenses/MIT)