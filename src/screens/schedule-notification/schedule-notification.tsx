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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Api, ApiTypes } from 'api';
import { General } from 'helperes';
import { RouteProp } from '@react-navigation/native';

// type checking.
type PickerType = 'TIME' | 'DATE';
interface ScheduleNotificationScreenProps {
  navigation: StackNavigationProp<AllStackNavParams, 'ScheduleNotificationScreen'>;
  route: RouteProp<AllStackNavParams, 'ScheduleNotificationScreen'>;
}

/**
 * A function component that shows a schedule notification.
 */
function ScheduleNotificationScreen({ navigation, route }: ScheduleNotificationScreenProps) {
  // use nav param.
  const uId = route.params?.userId;

  // state.
  const [quote, setQuote] = useState<string>('');
  const [datePickerProps, setDatePickerProps] = useState({ visible: false, val: null });
  const [timePickerProps, setTimePickerProps] = useState({ visible: false, val: null });

  /**
   * Shows a date/time picker.
   */
  const showDatePicker = (t: PickerType) => {
    if (t === 'TIME') {
      setTimePickerProps(v => ({ ...v, visible: true }));
    } else {
      setDatePickerProps(v => ({ ...v, visible: true }));
    }
  };

  /**
   * Handles cancel date picker.
   */
  const handleCancelDatePicker = (t: PickerType) => {
    if (t === 'TIME') {
      setTimePickerProps(v => ({ ...v, visible: false }));
    } else {
      setDatePickerProps(v => ({ ...v, visible: false }));
    }
  };

  /**
   * Handles select date/time from picker.
   */
  const handleSelectDatePicker = (d: Date, t: PickerType) => {
    if (t === 'TIME') {
      setTimePickerProps(v => ({ ...v, val: d, visible: false }));
    } else {
      setDatePickerProps(v => ({ ...v, val: d, visible: false }));
    }
  };

  /**
   * Handles schedule notification.
   */
  const handleScheduleNotification = () => {
    // const timezoneOffset = new Date().getTimezoneOffset();
    // const handledDate1 = moment().subtract(120, 'minute').toDate().getHours();
    // const handledDate2 = moment().subtract(120, 'minute').toDate().getMinutes();
    // console.log('timezoneOffset', timezoneOffset, 'hs', handledDate1, 'h2', handledDate2);
    // return;
    const p: ApiTypes.ScheduleNotificationPayload = {
      date: '2021-12-30:2:18',
      user_id: uId,
      body: quote,
      title: 'for Ghaidaa',
      is_silent: true,
    };
    Api.scheduleNotification(p).then(r => {
      if (r.kind === ApiTypes.ResponseKind.ok) {
        General.showToast(translate('scheduleNotificationScreen.quoteSent'), 'success');
        setQuote('');
      } else {
        General.showToast(r.error, 'error');
      }
    });
  };

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
            handlePress={() => showDatePicker('DATE')}
            title={translate('scheduleNotificationScreen.quoteDate')}
          />
          <Button
            icon='clock-outline'
            style={[commonStyles.marginT16, { backgroundColor: 'rgba(0, 0, 0, 0.4)' }]}
            handlePress={() => showDatePicker('TIME')}
            title={translate('scheduleNotificationScreen.quoteTime')}
          />

          <Button
            style={commonStyles.marginT60}
            handlePress={handleScheduleNotification}
            title={translate('scheduleNotificationScreen.sendQuote')}
          />
        </View>
      </KeyboardAwareScrollView>

      <DateTimePickerModal
        isVisible={datePickerProps.visible}
        mode='date'
        onConfirm={d => handleSelectDatePicker(d, 'DATE')}
        onCancel={() => handleCancelDatePicker('DATE')}
      />

      <DateTimePickerModal
        isVisible={timePickerProps.visible}
        mode='time'
        onConfirm={d => handleSelectDatePicker(d, 'TIME')}
        onCancel={() => handleCancelDatePicker('TIME')}
      />
    </View>
  );
}

// export as default.
export default ScheduleNotificationScreen;
