/**
 * schedule-notification.tsx
 * developed by Hasan Alawneh.
 * A file that shows a notification scheduler screen.
 * created at: 24/12/2021
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AllStackNavParams } from 'navigation';
import styles from './styles';
import { Button, Header } from 'components';
import { translate } from 'i18n';
import RNTextArea from '@freakycoder/react-native-text-area';
import commonStyles, { getCrossElevation } from 'theme/common-styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLOR } from 'theme';

// type checking.
interface ScheduleNotificationScreenProps {
  navigation: StackNavigationProp<AllStackNavParams, 'ScheduleNotificationScreen'>;
}

/**
 * A function component that shows a schedule notification.
 */
function ScheduleNotificationScreen({ navigation }: ScheduleNotificationScreenProps) {
  // state.
  const [quote, setQuote] = useState<string>('');

  /**
   * Handles quote date press.
   */
  const handleQuoteDatePress = () => {};

  /**
   * Handles quote time press.
   */
  const handleQuoteTimePress = () => {};

  return (
    <View style={styles.container}>
      <Header
        title={translate('scheduleNotificationScreen.scheduleNotification')}
        handleGoBack={navigation.goBack}
      />

      <KeyboardAwareScrollView>
        <View style={styles.internalContainer}>
          <View style={getCrossElevation()}>
            <RNTextArea
              placeholder={translate('scheduleNotificationScreen.writeQuote')}
              onChangeText={setQuote}
              style={styles.textArea}
            />
          </View>

          <Button
            icon='calendar'
            style={commonStyles.marginT16}
            handlePress={handleQuoteDatePress}
            title={translate('scheduleNotificationScreen.quoteDate')}
          />
          <Button
            icon='clock-outline'
            style={[commonStyles.marginT16, { backgroundColor: 'rgba(0, 0, 0, 0.4)' }]}
            handlePress={handleQuoteTimePress}
            title={translate('scheduleNotificationScreen.quoteTime')}
          />

          <Button
            style={commonStyles.marginT60}
            handlePress={handleQuoteTimePress}
            title={translate('scheduleNotificationScreen.sendQuote')}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

// export as default.
export default ScheduleNotificationScreen;
