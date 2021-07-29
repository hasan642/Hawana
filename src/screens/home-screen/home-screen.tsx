/**
 * home-screen.tsx
 * developed by Hasan Alawneh.
 * A file that shows a home screen component.
 * created at: 29/07/2021
 */

import React, { useEffect, useLayoutEffect } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { AllStackNavParams } from 'navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import { Text } from 'components';
import {
    SafeAreaView,
} from 'react-native-safe-area-context';
import { COLOR } from 'theme';
import { changeLanguage } from 'i18n';

/**
 * type checking.
 */
interface HomeScreenProps {
    navigation: StackNavigationProp<AllStackNavParams, 'HomeScreen'>;
};

/**
 * A function component that shows a home screen.
 */
function HomeScreen({ navigation }: HomeScreenProps) {

    // navigate to home screen after some seconds.
    useEffect(() => {
        navigation.navigate('HomeScreen');
    }, []);

    // set layout effect.
    useLayoutEffect(
        () => {
            navigation.setOptions({
                headerLeft: () => (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={handleLeftHeaderPress}
                    >
                        <Image
                            source={require('assets/list.png')}
                            style={styles.menuIcon}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                )
            })
        },
        []
    );

    /**
     * Handles left header press.
     */
    const handleLeftHeaderPress = () => {
        changeLanguage('ar')
    };

    /**
     * Renderes quote item.
     */
    const renderQuoteItem = ({ item }: { item: any }) => {
        return (
            <View style={[styles.liHolder, { backgroundColor: COLOR.pampas }]}>
                <Text style={styles.liQuote}>
                    {`“ ${item.text} ”`}
                </Text>

                <Text style={styles.liTime}>
                    {item.time}
                </Text>
            </View>
        );
    };

    /**
     * Extractes key for list.
     */
    const getKeyExtractor = (it: any) => it.time;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={QUOTES}
                renderItem={renderQuoteItem}
                keyExtractor={getKeyExtractor}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};


// constants.
const QUOTES = [{
    text: 'إنَّ الله يقذف الحب في قلوبنا، فلا تسأل مُحبًا .. لماذا أحببت ❤️',
    time: '01:01',
    bg: 'blue'
}, {
    text: 'من غير المعقول أن يجد أحدنا شخصاً يحبه ويدعمه أكثر من والديه، حتى لو كانا قاسييْن عليه في بعض اللحظات، ومن المهم جداً البحث عن طريقة لإحياء العلاقة بينكم.',
    time: '02:02',
    bg: 'yellow'
}, {
    text: 'بعض الأشخاص لا يؤمنون بأنفسهم حتى يؤمن بهم شخص آخر.',
    time: '03:03',
    bg: 'green'
}, {
    text: '‏وحيثُما وجدتَ سَكِينةَ روحك، أقِم؛ فذاكَ موطِنُك',
    time: '04:04',
    bg: 'red'
}, {
    text: 'نحن في هذه الدنيا في امتحان، وفي أي لحظة قد يتم سحب ورقتك، وينتهي الوقت الذي خصصه الله لك، فضلاً ركز في ورقتك، واترك ورقة غيرك.',
    time: '05:05',
    bg: 'purple'
}, {
    text: 'لا تجعل طيبتك كتاب يتصفحه الجميع؛ فهناك أناس لا يستحقون منه حرفاً.',
    time: '06:06',
    bg: 'red'
}, {
    text: 'أعتقد أن أثمن ما يمكن أن تحاول الحصول عليه في خضم الحياة أن يبقى قلبك نقيًّا سليمًا أن تشعر بخفته نهاية كل ليلة مهما عاثت فيه الأيام وساءت إليه الأشياء.‏',
    time: '07:07',
    bg: 'green'
}, {
    text: 'يُمكن للإنسان أن يعيش بلا بَصر، ولكنه لا يمكن أن يعيش بلا أمل.',
    time: '08:08',
    bg: 'blue'
},
{
    text: 'الآمال العظيمة تصنع الأشخاص العظماء.',
    time: '09:09',
    bg: 'blue'
}, {
    text: 'جميع الناس يموتون، لكن ليس جميعهم يعيشون بشكل صحيح ويعدن أحياءً.',
    time: '10:10',
    bg: 'yellow'
}, {
    text: 'هُناك دائماً شخص مُختلف ، يمكنه أن يسرق ثقل هذا العالم عن كتفيك دُون أن تشعر.',
    time: '11:11',
    bg: 'green'
},
{
    text: 'الزهرة التي تزهر في الشدائد هي الأكثر جمالاً وندرة على الإطلاق.',
    time: '12:12',
    bg: 'red'
}];

/**
 * export as default.
 */
export default HomeScreen;