import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import type {CentralPaneNavigatorParamList} from '@navigation/types';
import ReportScreen from '@pages/home/ReportScreen';
import SCREENS from '@src/SCREENS';
import ReportScreenIDSetter from './ReportScreenIDSetter';

type ReportScreenWrapperProps = StackScreenProps<CentralPaneNavigatorParamList, typeof SCREENS.REPORT>;

function ReportScreenWrapper({route, navigation}: ReportScreenWrapperProps) {
    // The ReportScreen without the reportID set will display a skeleton
    // until the reportID is loaded and set in the route param
    return (
        <>
            {/* @ts-expect-error Error will be resolved after ReportScreen migration to TypeScript */}
            <ReportScreen route={route} />
            <ReportScreenIDSetter
                route={route}
                navigation={navigation}
            />
        </>
    );
}

ReportScreenWrapper.displayName = 'ReportScreenWrapper';

export default ReportScreenWrapper;
export type {ReportScreenWrapperProps};
