import React from 'react';

class Header extends React.Component {

    render(){
        return (<h1 style={styles.header}>TO DO LIST</h1>);
    }

}

const styles = {
    header : {
        color: "pink",
        textDecoration: "underline",
    }
}

export default Header;  