// @flow
import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { MaxProjectCountAlertMessage } from '../../../../MainFrame/EditorContainers/HomePage/CreateSection/MaxProjectCountAlertMessage';
import paperDecorator from '../../../PaperDecorator';
import {
  limitsForSilverUser,
  limitsForGoldUser,
} from '../../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'HomePage/CreateSection/MaxProjectCountAlertMessage',
  component: MaxProjectCountAlertMessage,
  decorators: [paperDecorator],
};

export const ForIndieUser = () => (
  <MaxProjectCountAlertMessage
    limits={limitsForSilverUser}
    onUpgrade={() => action('onUpgrade')()}
  />
);

export const ForProUser = () => (
  <MaxProjectCountAlertMessage
    limits={limitsForGoldUser}
    onUpgrade={() => action('onUpgrade')()}
  />
);
