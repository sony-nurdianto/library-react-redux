import React from 'react';
import { connect } from 'react-redux';

import { showAdd } from './../../actioncreators/libraries'

import Main from './Main';

const Index = (props) => {

    const showAdd = () => {
        props.showAdd();
    }

    return (
        <div>
            <h2>Libraries</h2>
            <button onClick={showAdd}>Tambah</button>
            <Main/>
        </div>
    )
}

const mapDispatchToProps = {
    showAdd
}


export default connect(null, mapDispatchToProps)(Index);
