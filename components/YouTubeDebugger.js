const React=require('react')

class DigitalClicker extends React.Component {
  constructor(){
  super()
  this.state = {
    errors: [],
    user: null,
    settings: { bitrate: 8, video: {resolution: '1080p'} }
  }
  this.handleBitRate = this.handleBitRate.bind(this)
  this.handleResolution = this.handleResolution.bind(this)
}


  handleBitRate(){
    this.setState({
      settings: Object.assign({}, this.state.settings, { bitrate: 12 } )
  })
}

  handleResolution(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, { resolution: '720p' } )
    })
  })
}


  render(){
    return(
      <div className='DigitalClicker'>
        <button className='bitrate' onClick={this.handleBitRate}/>
        <button className='resolution' onClick={this.handleResolution}/>
        </div>
    )
  }
}

module.exports = DigitalClicker

// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
