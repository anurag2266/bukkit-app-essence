import { ScaledSheet, scale } from '../utils';
import { TextVariant, TextFontFamily } from '../components/Text/enums';

import colors from './colors';
import { capitalize } from 'lodash';

const styles = ScaledSheet.create({
    ItemCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderAllR6: {
        borderRadius: 6,
        borderWidth: 1,
    },
    borderTR6: {
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        borderWidth: 1,
    },
    borderBR6: {
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderWidth: 1,
    },
    // semiBold FONT
    font20Semi: {
        fontSize: 20,
        fontFamily: 'proximaNova-Semibold',
        fontWeight: '600',
        lineHeight: 19,
        letterSpacing: -0.333333
    },
    font18Semi: {
        fontSize: 18,
        fontFamily: 'proximaNova-Semibold',
        fontWeight: '600',
        lineHeight: 19,
        letterSpacing: -0.333333
    },
    font16Semi: {
        fontSize: 16,
        fontFamily: 'proximaNova-Bold',
        fontStyle: 'normal',
        fontWeight: "600",
        lineHeight: 19,
        letterSpacing: -0.333333
    },
    font14Semi: {
        fontSize: 14,
        fontFamily: 'proximaNova-Bold',
        fontWeight: '600',
        lineHeight: 19,
        letterSpacing: -0.333333
    },
    font12Semi: {
        fontSize: 12,
        fontFamily: 'proximaNova-Bold',
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 15,
        letterSpacing: -0.333333
    },
    font11Semi: {
        fontSize: 11,
        fontFamily: 'proximaNova-Bold',
        fontWeight: '600',
        lineHeight: 19,
        letterSpacing: -0.333333
    },
    font9Semi: {
        fontFamily: 'proximaNova-Semibold',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 9.5,
        lineHeight: 12,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: 0.04,
    },
    // REGULAR FONT
    font16Regular: {
        fontSize: 16,
        fontFamily: 'proximaNova',
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    font14Regular: {
        fontSize: 14,
        fontFamily: 'proximaNova',
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    font12Regular: {
        fontSize: 12,
        fontFamily: 'proximaNova',
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    font11Regular: {
        fontSize: 11,
        fontFamily: 'proximaNova',
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    font10Regular: {
        // fontSize: 10,
        // fontFamily:'proximaNova',
        // fontStyle: 'normal',
        // fontWeight: 'normal',
        // lineHeight: 10,
        // letterSpacing:-0.333333,

        fontSize: 10.5,
        fontFamily: 'proximaNova',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 10,
        display: "flex",
        alignItems: "center",
        letterSpacing: 0.04,
        textTransform: "capitalize",
    },
    font9Regular: {
        fontSize: 9.5,
        fontFamily: 'proximaNova',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 9,
        letterSpacing: 0.04
    },

    // SPACING === 
    //margin
    margin5: {
        margin: 5
    },
    margin10: {
        margin: 10
    },
    margin20: {
        margin: 20
    },
    margin30: {
        margin: 30
    },
    marginT: {
        marginTop: 10
    },
    marginT20: {
        marginTop: 20
    },
    marginLR5: {
        marginLeft: 5,
        marginRight: 5
    },
    marginTB5: {
        marginTop: 5,
        marginBottom: 5
    },
    marginLR10: {
        marginLeft: 10,
        marginRight: 10
    },
    marginLR15: {
        marginLeft: 15,
        marginRight: 15
    },
    marginTB10: {
        marginTop: 10,
        marginBottom: 10
    },
    marginLR20: {
        marginLeft: 20,
        marginRight: 20
    },
    marginTB15: {
        marginTop: 15,
        marginBottom: 15
    },
    marginTB20: {
        marginTop: 20,
        marginBottom: 20
    },

    //Padding
    padding5: {
        padding: 5
    },
    padding10: {
        padding: 10
    },
    padding20: {
        padding: 20
    },
    padding30: {
        padding: 30
    },
    paddingLR5: {
        paddingLeft: 5,
        paddingRight: 5
    },
    paddingTB5: {
        paddingTop: 5,
        paddingBottom: 5
    },
    paddingLR10: {
        paddingLeft: 10,
        paddingRight: 10
    },
    paddingTB10: {
        paddingTop: 10,
        paddingBottom: 10
    },
    paddingLR20: {
        paddingLeft: 20,
        paddingRight: 20
    },
    paddingTB20: {
        paddingTop: 20,
        paddingBottom: 20
    },
    paddingL22: {
        paddingLeft: 22
    },
    paddingR22: {
        paddingRight: 22
    },
    paddingL15: {
        paddingLeft: 15
    },
    paddingR15: {
        paddingRight: 15
    }


});

export default styles;
