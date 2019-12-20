/* eslint-disable react/jsx-fragments */
import React, {Fragment} from 'react';

import cx from 'classnames';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSearch: false
        };
    }
    

    render() {
        const {activeSearch} = this.state;
        return (
            <Fragment>
                <div className={cx("search-wrapper", {
                    'active': activeSearch
                })}>
                    <div className="input-holder">
                        <input type="text" className="search-input"/>
                        <button type="button" onClick={() => this.setState({activeSearch: !activeSearch})}
                                className="search-icon" aria-label="search"><span/></button>
                    </div>
                    <button type="button" onClick={() => this.setState({activeSearch: !activeSearch})} className="close" aria-label="search"/>
                </div>
            </Fragment>
        )
    }
}

export default SearchBox;