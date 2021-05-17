import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeInfo } from 'actions/user'

const EditProfile = () => {
    const dispatch = useDispatch();
    const { account } = useSelector(state => state.auth);
    const fullnameRef = useRef();
    const mailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const bioRef = useRef();
    const expRef = useRef();
    const skillRef = useRef();

    const handleChangeInfo = () => {
      dispatch(changeInfo({
        fullname: fullnameRef.current.value,
        email: mailRef.current.value,
        phone: phoneRef.current.value,
        address: addressRef.current.value,
        bio: bioRef.current.value,
        experience: expRef.current.value,
        skill: skillRef.current.value,
      }))
    }

    return (
        <html lang="en">
            <head>
                <base href="../../../../"/>
                <meta charset="utf-8" />
                <meta name="description" content="User profile account information example" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="canonical" href="https://keenthemes.com/metronic" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
                <link href="/images/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
                <link href="/images/assets/plugins/custom/prismjs/prismjs.bundle.css" rel="stylesheet" type="text/css" />
                <link href="/images/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
                <link rel="shortcut icon" href="/images/assets/media/logos/favicon.ico" />
            </head>
            <body id="kt_body" class="quick-panel-right demo-panel-right offcanvas-right header-fixed subheader-enabled">
                <div class="d-flex flex-column flex-root">
                    <div class="d-flex flex-row flex-column-fluid page">
                        <div class="d-flex flex-column flex-row-fluid wrapper">
                            <div class="content d-flex flex-column flex-column-fluid">
                                <div class="d-flex flex-column-fluid">
                                    <div class="container">
                                        <div class="d-flex flex-row">
                                            <div class="flex-row-auto offcanvas-mobile w-250px w-xxl-350px">
                                                <div class="card card-custom card-stretch">
                                                    <div class="card-body pt-4">
                                                        <div class="d-flex align-items-center">
                                                            <div class="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
                                                                <div class="symbol-label" style={{ 'background-image': 'url("/images/assets/media/users/300_21.jpg")' }}></div>
                                                                <i class="symbol-badge bg-success"></i>
                                                            </div>
                                                            <div>
                                                                <Link to={`/users/${account.id}`} class="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary">{account.user_information.fullname}</Link>
                                                                <div class="text-muted">{account.user_information.bio}</div>
                                                                <div class="mt-2">
                                                                    <btn class="btn btn-sm btn-light-primary font-weight-bold mr-2 py-2 px-3 px-xxl-5 my-1">Chat</btn>
                                                                    <btn class="btn btn-sm btn-light-success font-weight-bold py-2 px-3 px-xxl-5 my-1">Follow</btn>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="py-9">
                                                            <div class="d-flex align-items-center justify-content-between mb-2">
                                                                <span class="font-weight-bold mr-2">Email:</span>
                                                                <a href={`mailto:${account.email}`} class="text-muted text-hover-primary">{account.email}</a>
                                                            </div>
                                                            <div class="d-flex align-items-center justify-content-between mb-2">
                                                                <span class="font-weight-bold mr-2">Phone:</span>
                                                                <span class="text-muted">{account.user_information.phone}</span>
                                                            </div>
                                                            <div class="d-flex align-items-center justify-content-between">
                                                                <span class="font-weight-bold mr-2">Location:</span>
                                                                <span class="text-muted">{account.user_information.address}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-row-fluid ml-lg-8">
                                                <div class="card card-custom">
                                                    <div class="card-header py-3">
                                                        <div class="card-title align-items-start flex-column">
                                                            <h3 class="card-label font-weight-bolder text-dark">Account Information</h3>
                                                            <span class="text-muted font-weight-bold font-size-sm mt-1">Change your account settings</span>
                                                        </div>
                                                        <div class="card-toolbar">
                                                            <button type="reset" class="btn btn-success mr-2" onClick={() => handleChangeInfo()}>Save Changes</button>
                                                            <Link to={`/profile`} class="btn btn-secondary">Cancel</Link>
                                                        </div>
                                                    </div>
                                                    <form class="form">
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <label class="col-xl-3"></label>
                                                                <div class="col-lg-9 col-xl-6">
                                                                    <h5 class="font-weight-bold mb-6">Account:</h5>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label class="col-xl-3 col-lg-3 col-form-label">Fullname</label>
                                                                <div class="col-lg-9 col-xl-6">
                                                                    <input class="form-control form-control-lg form-control-solid" type="text" defaultValue={account.user_information?.fullname}
                                                                    ref={fullnameRef} />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label class="col-xl-3 col-lg-3 col-form-label">Email Address</label>
                                                                <div class="col-lg-9 col-xl-6">
                                                                    <div class="input-group input-group-lg input-group-solid">
                                                                        <div class="input-group-prepend">
                                                                            <span class="input-group-text">
                                                                                <i class="la la-at"></i>
                                                                            </span>
                                                                        </div>
                                                                        <input type="text" class="form-control form-control-lg form-control-solid" defaultValue={account.email} ref={mailRef} placeholder="Email" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label class="col-xl-3 col-lg-3 col-form-label">Phone</label>
                                                                <div class="col-lg-9 col-xl-6">
                                                                    <input class="form-control form-control-lg form-control-solid" type="text" defaultValue={account.user_information?.phone} ref={phoneRef} />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label class="col-xl-3 col-lg-3 col-form-label">Address</label>
                                                                <div class="col-lg-9 col-xl-6">
                                                                    <input class="form-control form-control-lg form-control-solid" type="text" defaultValue={account.user_information?.address} ref={addressRef} />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label class="col-xl-3 col-lg-3 col-form-label">Bio</label>
                                                                <div class="col-lg-9 col-xl-6">
                                                                    <textarea class="form-control form-control-lg form-control-solid" defaultValue={account.user_information?.bio} ref={bioRef} row="4" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label class="col-xl-3 col-lg-3 col-form-label">Experience</label>
                                                                <div class="col-lg-9 col-xl-6">
                                                                    <textarea class="form-control form-control-lg form-control-solid" defaultValue={account.user_information?.experience} ref={expRef} />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label class="col-xl-3 col-lg-3 col-form-label">Skill</label>
                                                                <div class="col-lg-9 col-xl-6">
                                                                    <input class="form-control form-control-lg form-control-solid" type="text" defaultValue={account.user_information?.skill} ref={skillRef} />
                                                                </div>
                                                            </div>
                                                            <div class="form-group row align-items-center">
                                                                <label class="col-xl-3 col-lg-3 col-form-label">Communication</label>
                                                                <div class="col-lg-9 col-xl-6">
                                                                    <div class="checkbox-inline">
                                                                        <label class="checkbox">
                                                                            <input type="checkbox" checked="checked" />
                                                                            <span></span>Email</label>
                                                                        <label class="checkbox">
                                                                            <input type="checkbox" checked="checked" />
                                                                            <span></span>SMS</label>
                                                                        <label class="checkbox">
                                                                            <input type="checkbox" />
                                                                            <span></span>Phone</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                                <div class="text-dark order-2 order-md-1">
                                </div>
                                <div class="nav nav-dark order-1 order-md-2"> 
                                    <a href="/#" target="_blank" rel="noreferrer" class="nav-link pr-3 pl-0">About</a>
                                    <a href="/#" target="_blank" rel="noreferrer" class="nav-link px-3">Team</a>
                                    <a href="/#" target="_blank" rel="noreferrer" class="nav-link pl-3 pr-0">Contact</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default EditProfile;