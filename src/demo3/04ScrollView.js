import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl, Dimensions} from 'react-native';

export default class ScrollViewExample extends Component{
    constructor(){
        super();
        this.state = {
            rowDataArr : Array.from(new Array(30)).map((value, index) => ({
                title: 'init:'+ index
            })),
            //控制是否显示下拉刷新
            isRefresh: false,
            newIndex: 0
        }
    }

    render(){
        const rowsArr = this.state.rowDataArr.map((row, index) => (<Row data={row} key={index}/>))

        return (
            <View>
                <ScrollView refreshControl={
                    <RefreshControl refreshing={this.state.isRefresh} onRefresh={() => {
                        this._onRefresh()    
                    }}/>
                }>
                    {rowsArr}
                </ScrollView>
            </View>
        )
    }

    _onRefresh(){
        this.setState({
            isRefresh:true
        });

        setTimeout(() => {
            let newRowsArr = Array.from(new Array(5)).map((value, index) => ({
                title: 'add' + (this.state.newIndex + index)
            })).concat(this.state.rowDataArr);

            this.setState({
                rowDataArr: newRowsArr,
                isRefresh:false,
                newIndex:this.state.newIndex + 5
            });
        }, 2000);
    }
}

class Row extends Component{
    static defaultProps = {
        data: {}
    };

    render(){
        return (
            <View style={{
                width: Dimensions.get('window').width,
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: 'red',
                alignItems: 'center'
            }}>
                <Text>{this.props.data.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});