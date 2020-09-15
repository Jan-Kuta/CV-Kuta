import React, { useState } from 'react';
import { connect } from 'react-redux';

import { loadData, loadEngData, toggleLanguage } from '../actions';

const LanguageButton = ({ loadData, loadEngData, isCzech, toggleLanguage }) => {
    const toggleLang = () => {
        if (isCzech) {
            loadEngData()
        } else {
            loadData()
        }

        toggleLanguage()
    }

    return <i title={isCzech ? 'Show english version' : 'Ukaž českou verzi'} className={`no-print fa fa-flag${isCzech ? '-o' : ''} fa-3x w3-margin-left`} aria-hidden="true" width={50} onClick={toggleLang}></i>
}

const mapStateToProps = (state) => {
    const { isEnglish } = state
    
    return { isCzech: !isEnglish }
}

export default connect(
    mapStateToProps,
    { loadData, loadEngData, toggleLanguage }
)(LanguageButton);