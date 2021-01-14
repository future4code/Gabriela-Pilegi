import React from 'react'

import GetActivity from './components/GetActivity'

class App extends React.Component {
    state = {
        activity: '',
        accessibility: '',
        type: '',
        participants: '1',
        price: '',
        link: '',
        key: ''
    }

    render() {
        console.log(this.state)
        return(
          <div>
            <GetActivity />
              
          </div>
        )
    }
}

export default App;
