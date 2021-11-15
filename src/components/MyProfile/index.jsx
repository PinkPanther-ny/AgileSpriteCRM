import React from "react";
import cookie from "react-cookies";
import {displayLoading, hideLoading, postDataToBackend, validateCookie} from "../../helper";
import {ACCOUNT_GET_SUCCESS, ACCOUNT_UPDATE_SUCCESS} from "../../backendReturnCodeHandling";

export default class MyProfile extends React.Component  {

    constructor(props) {
        super(props);

        this.state = {
            token: cookie.load('userToken'),
            first_name: '',
            last_name: '',
            birthday: '',

            ori: {
                first_name: '',
                last_name: '',
                birthday: '',
            },

            editing_detail : false
        };
        this.renderMyData();
        this.handleClickOnAccountDetail= this.handleClickOnAccountDetail.bind(this);
    }

    handleClickOnAccountDetail(){
        this.setState({editing_detail : true})
    }

    renderMyData(){
        validateCookie()
        const token = {'token': cookie.load('userToken')}
        postDataToBackend("account/get", token)
            .then((responseJson) => {
                if(responseJson['code']===ACCOUNT_GET_SUCCESS){
                    this.setState({...responseJson['details']})
                    this.setState({ori : {...responseJson['details']}})
                }else {
                    // token error
                    alert(responseJson['code'])
                    window.location.href = "/login";
                }
            });
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value });
    };

    render(){
        return(
            <React.Fragment>
                <article>
                    <h1 className={"tahoma-bold-ebony-clay-35px"}>Hello{this.state.ori.first_name===''?'':','} {this.state.ori.first_name + ' ' + this.state.ori.last_name}{this.state.ori.first_name===''?'':'.'}</h1>
                    <img src="https://i.pravatar.cc/300" alt="" className="center"/>
                    <div className="line"/>

                    <form className="reset-form animate-enter2 screen" >

                        <div className="detail-txt tahoma-regular-normal-blueberry-22px">{'Account details'}</div>

                        <div className="name">
                            <span className="tahoma-regular-normal-scarpa-flow-16px">{'Name'}</span>
                            <div className="name-fn overlap-group2-2-name border-1-5px-iron"
                                 onSelect={this.handleClickOnAccountDetail}>
                                <input
                                    className=" name-input tahoma-regular-normal-dove-gray-16px"
                                    name="first_name"
                                    placeholder={'First name'}
                                    type={'text'}
                                    value={this.state.first_name}
                                    onChange={this.handleChange}
                                    required
                                />
                                <input
                                    className="name-input tahoma-regular-normal-dove-gray-16px"
                                    name="last_name"
                                    placeholder={'Last name'}
                                    type={'text'}
                                    value={this.state.last_name}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="dob">
                            <span className="tahoma-regular-normal-scarpa-flow-16px">{'Birthday'}</span>
                            <div className="name-fn overlap-group2-2-name border-1-5px-iron"
                                 onClick={this.handleClickOnAccountDetail}>
                                <input
                                    className=" birthday-input tahoma-regular-normal-dove-gray-16px"
                                    name="birthday"
                                    placeholder={'Birthday'}
                                    type={'date'}
                                    value={this.state.birthday.split('T')[0]}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="login_loading profile-loading" id="login_loading"/>

                        {this.state.editing_detail?<React.Fragment>
                            <button className={"btn-save"} onClick={event => {
                                event.preventDefault()
                                const loader = document.querySelector("#login_loading");
                                displayLoading(loader);
                                console.log(this.state)
                                postDataToBackend('account/update', this.state)
                                    .then((response) => {
                                        hideLoading(loader);

                                        const ret_code = response['code'];
                                        if (ret_code === ACCOUNT_UPDATE_SUCCESS) {

                                            // alert(response['msg']);
                                            this.renderMyData()

                                            this.setState({editing_detail : false})
                                        } else {
                                            alert(response['msg']);
                                        }
                                    });
                            }}>Save</button>
                            <button className={"btn-cancel"} onClick={event => {
                                event.preventDefault()
                                this.setState({...this.state.ori})
                                this.setState({editing_detail : false})
                            }}>Cancel</button>
                        </React.Fragment>:''}

                        <div>
                            <button className={"btn-reset"} onClick={e=>{
                                e.preventDefault()
                                window.location.href = "/reset/" + cookie.load('userToken')
                            }}>Reset password</button>
                        </div>

                    </form>
                </article>

            </React.Fragment>
        )
    }

};