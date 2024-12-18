// @flow
import * as React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import { getGravatarUrl } from '../GravatarUrl';

const styles = {
  avatar: {
    width: 20,
    height: 20,
  },
  premiumAvatar: {
    width: 16,
    height: 16,
  },
};

type Props = {| iconUrl: string, isPremium: boolean |};

export default function UserAvatar({ iconUrl, isPremium }: Props) {
  const classes = makeStyles(theme => ({
    premiumContainer: {
      position: 'relative',
      overflow: 'hidden',
      padding: '2px',
      borderRadius: '16px',
      display: 'flex',
      '&::before': {
        content: "''",
        display: 'block',
        background: `linear-gradient(90deg, #3BF7F4 0%, #FFBC57 100%)`,
        width: '100%',
        paddingBottom: '100%',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  }))();

  return isPremium ? (
    <div className={classes.premiumContainer}>
      <Avatar src={getGravatarUrl(iconUrl)} style={styles.premiumAvatar} />
    </div>
  ) : (
    <Avatar src={getGravatarUrl(iconUrl)} style={styles.avatar} />
  );
}
