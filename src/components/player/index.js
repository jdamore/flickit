import React from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton } from 'react-soundplayer/components';

import styles from './index.scss';

export default class Player extends React.Component {
    render() {
        return (
            <SoundPlayerContainer resolveUrl={this.props.streamUrl} clientId={this.props.clientId}>
                <PlayButton {...this.props} />
            </SoundPlayerContainer>
        );
    }
}