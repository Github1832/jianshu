import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, AddItion, Button, SearchWrapper } from './style'

const Header = (props) => {

    const { focused, handleFocus,  hanldeBlur } = props;

    return (
        <HeaderWrapper>
            <Logo></Logo>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                    >
                    <NavSearch
                        className = {focused ? 'focused' : ''}
                        onFocus = {handleFocus}
                        onBlur = {hanldeBlur}
                    ></NavSearch>
                </CSSTransition>
                    <span className={focused ? 'focused iconfont' : "iconfont"}>&#xe62b;</span>
                </SearchWrapper>
            </Nav>
            <AddItion>
                <Button className='writting'>
                    <span className="iconfont">&#xe603;</span> 写文章
                </Button>
                <Button className='reg'>注册</Button>
            </AddItion>
            
         </HeaderWrapper>
    )

}

const mapStateToProps = (state) => {
    return{
        focused: state.focused
    };
}


const mapDispatchToProps = (dispatch) => {
    return{
        handleFocus(){
            const action = {
                type: 'search_focus',
            };
            dispatch(action);
        },
        hanldeBlur(){
            const action = {
                type: 'search_blue',
            };
            dispatch(action);
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);