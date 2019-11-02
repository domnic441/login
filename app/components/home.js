import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text, ActivityIndicator, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getData } from '../actions/data';
import * as actions from "../actions/data";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true} />
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20 }}>
                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()} />
                </View>
            );
        }
    }

    renderItem({ item, index }) {
        return (
            <View style={styles.row}>
                <Text style={styles.name}>
                 {item.name}
                </Text>
                <Text style={styles.common}>
                    {item.age}
                </Text>
                 <Text style={styles.common}>
                      {item.gender}
                      </Text>
              <Text style={styles.common}>
                    {item.email}
                    </Text>
              <Text style={styles.common}>
                  {item.phoneNo}
                  </Text>

            </View>
        )
    }
};

const mapStateToProps = (state, props) => {
    return {
        loading: state.data.loading,
        data: state.data.data
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(actions, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    name: {
        fontSize: 10,
        fontWeight: "bold"
    },

    common: {
        marginTop: 5,
        fontSize: 14,
    }
});