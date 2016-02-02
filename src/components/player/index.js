import React from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

// const clientId = 'YOUR CLIENT ID';
// const resolveUrl = 'https://soundcloud.com/stepan-i-meduza-official/dolgo-obyasnyat';

class CustomPlayer extends React.Component {

    play() {
        let { soundCloudAudio, playing } = this.props;
        if (playing) {
            soundCloudAudio.pause();
        } else {
            soundCloudAudio.play();
        }
    }

    render() {

        let { track, playing } = this.props;

        if (!track) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <button onClick={this.play.bind(this)}>
                    {playing ? 'Pause' : 'Play'}
                </button>
            </div>
        );
    }
}


export default class Player extends React.Component {
    render() {
        return (
            <SoundPlayerContainer resolveUrl={this.props.streamUrl} clientId={this.props.clientId}>
                <CustomPlayer />
            </SoundPlayerContainer>
        );
    }
}