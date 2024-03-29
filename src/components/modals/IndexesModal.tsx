import React from 'react';
import BottomSheet from './BottomSheet';
import {BottomSheetScrollView, TouchableOpacity} from '@gorhom/bottom-sheet';
import {Appbar, Divider, Text} from 'react-native-paper';
import {useAppContext} from '../../providers/AppProvider';
import {styles} from '../../utils/theme';
import {getAnthem, getIndexes} from '../../utils';
import {Indexes} from '../../utils/interfaces';
import {View} from 'react-native';

const IndexesModal = () => {
  const {dispatch} = useAppContext();

  const renderAnthems = (index: Indexes) => {
    return index.data.map((number: number, i: number) => {
      return (
        <View key={i}>
          <TouchableOpacity
            style={styles.anthemButton}
            onPress={() => {
              dispatch({
                type: 'SET_CURRENT_ANTHEM',
                payload: getAnthem(number),
              });
              dispatch({type: 'SET_CURRENT_MODAL', payload: null});
            }}>
            <Text variant="bodySmall">{number}</Text>
          </TouchableOpacity>
        </View>
      );
    });
  };

  return (
    <BottomSheet name="indexes">
      <Appbar.Header mode="center-aligned">
        <Appbar.Content title="Índice de Assuntos" />
      </Appbar.Header>
      <Divider />
      <BottomSheetScrollView>
        {getIndexes().map((item, index) => {
          return (
            <View key={index}>
              <Text variant="titleMedium" style={styles.padding}>
                {item.title}
              </Text>
              <Divider />
              <View
                style={[
                  styles.flexRow,
                  styles.padding,
                  styles.wrap,
                  styles.gap,
                ]}>
                {renderAnthems(item)}
              </View>
              <Divider />
            </View>
          );
        })}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default IndexesModal;
