import React from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, Timer, Progress, Icons } from 'react-soundplayer/components';

import styles from './index.scss';

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
        let { track, currentTime, duration } = this.props;

        return (
            <PlayButton {...this.props} />
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