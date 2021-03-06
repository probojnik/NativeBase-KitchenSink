
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';


const {
    popRoute,
  } = actions;

class Outline extends Component {  // eslint-disable-line


  static propTypes = {
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name="arrow-back" />
          </Button>
          </Left>
          <Body>
            <Title>Outline</Title>
          </Body>
          <Right />

        </Header>

        <Content padder style={{ backgroundColor: '#fff', padding: 20 }}>
          <Button bordered light style={styles.mb15}><Text>Light</Text></Button>
          <Button bordered info style={styles.mb15}><Text>Info</Text></Button>
          <Button bordered danger style={styles.mb15}><Text>Danger</Text></Button>
          <Button bordered primary style={styles.mb15}><Text>Primary</Text></Button>
          <Button bordered warning style={styles.mb15}><Text>Warning</Text></Button>
          <Button bordered success style={styles.mb15}><Text>Success</Text></Button>
          <Button bordered dark style={styles.mb15}><Text>Dark</Text></Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(Outline);
