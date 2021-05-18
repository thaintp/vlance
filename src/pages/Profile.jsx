import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Redirect, useParams, Link } from 'react-router-dom'
import JobService from "services/job";
import UserService from "services/user";
import ReviewService from "services/review";
import { map_status } from "utils/status";
import { toVND } from 'utils/number';
import Badge from "react-bootstrap/Badge";
import { Review } from 'components'

const Profile = () => {
    const { id } = useParams();
    const [ account, setAccount ] = useState({});
    const [eJobs, setEJobs] = useState([]);
    const [fJobs, setFJobs] = useState([]);
    const [reviews, setReviews] = useState([]);
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        if (id) {
            UserService.getByID(id).then(data => setAccount(data.data));
        } else {
            setAccount(auth.account);
        }
    }, [])
    useEffect(() => {
        JobService.get({ employer_id: account.id }).then((data) => setEJobs(data?.data));
        JobService.get({ freelancer_id: account.id }).then((data) => setFJobs(data?.data));
        account.id && ReviewService.get({user_id: account.id}).then((data) => setReviews(data?.data));
    }, [account])
    return ((id || auth.account) ?
        <html lang="en">
            <head>
                <base href="../../../" />
                <meta charSet="utf-8" />
                <title>Profile 3 | Keenthemes</title>
                <meta name="description" content="User profile block example" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="canonical" href="https://keenthemes.com/metronic" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
                <link href="/images/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
                <link href="/images/assets/plugins/custom/prismjs/prismjs.bundle.css" rel="stylesheet" type="text/css" />
                <link href="/images/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
                <link rel="shortcut icon" href="/images/assets/media/logos/favicon.ico" />
            </head>
            <body id="kt_body" class="header-mobile-fixed subheader-enabled aside-enabled aside-fixed aside-secondary-enabled aside-minimize">
                <div class="d-flex flex-column flex-root">
                    <div class="d-flex flex-row flex-column-fluid page">
                        <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                            <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                                <div class="py-3 py-lg-8 d-flex flex-column-fluid">
                                    <div class="container">
                                        <div class="card card-custom gutter-b">
                                            <div class="card-body">
                                                <div class="d-flex mb-9">
                                                    <div class="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                                                        <div class="symbol symbol-50 symbol-lg-120">
                                                            <img src="/images/assets/media/users/300_1.jpg" alt="avatar" />
                                                        </div>
                                                        <div class="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
                                                            <span class="font-size-h3 symbol-label font-weight-boldest">JM</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <div class="d-flex justify-content-between flex-wrap mt-1">
                                                            <div class="d-flex mr-3">
                                                                <a href="/#" class="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3">{account.user_information?.fullname}</a>
                                                                <a href="/#"><i class="flaticon2-correct text-success font-size-h5"></i></a>
                                                            </div>
                                                            <div class="my-lg-0 my-3">
                                                                <a href="/#" class="btn btn-sm btn-light-success font-weight-bolder text-uppercase mr-3">chat</a>
                                                                <a href="/#" class="btn btn-sm btn-light-info font-weight-bolder text-uppercase">hire</a>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex flex-wrap justify-content-between mt-1">
                                                            <div class="d-flex flex-column flex-grow-1 pr-8">
                                                                <div class="d-flex flex-wrap mb-4">
                                                                    <a href="/#" class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <i class="flaticon2-new-email mr-2 font-size-lg"></i>{account.email}</a>
                                                                    <a href="/#" class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <i class="flaticon2-calendar-3 mr-2 font-size-lg"></i>PR Manager</a>
                                                                    <a href="/#"
                                                                        class="text-dark-50 text-hover-primary font-weight-bold">
                                                                        <i class="flaticon2-placeholder mr-2 font-size-lg"></i>Melbourne</a>
                                                                </div>
                                                                <span class="font-weight-bold text-dark-50">{account.user_information?.bio}</span>
                                                                <span class="font-weight-bold text-dark-50">{account.user_information?.experience}</span>
                                                                <div>
                                                                    <span className="font-weight-bold text-dark-50">Kỹ năng:&nbsp;&nbsp;</span>
                                                                    <span className="offer-item__field-value">
                                                                    {account.user_information?.skill
                                                                        .split("|")
                                                                        .map((skill, index) => (
                                                                        <Link to="#/" key={index}>
                                                                            <Badge pill variant="secondary">
                                                                            {skill}
                                                                            </Badge>
                                                                            <span> </span>
                                                                        </Link>
                                                                        ))}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="separator separator-solid"></div>
                                                <div class="d-flex align-items-center flex-wrap mt-8">
                                                    <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                                                        <span class="mr-4">
                                                            <i class="flaticon-piggy-bank display-4 text-muted font-weight-bold"></i>
                                                        </span>
                                                        <div class="d-flex flex-column text-dark-75">
                                                            <span class="font-weight-bolder font-size-sm">Balance</span>
                                                            <span class="font-weight-bolder font-size-h5">
                                                                <span class="text-dark-50 font-weight-bold"></span>{toVND(account.user_information?.balance)}</span>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                                                        <span class="mr-4">
                                                            <i class="flaticon-confetti display-4 text-muted font-weight-bold"></i>
                                                        </span>
                                                        <div class="d-flex flex-column text-dark-75">
                                                            <span class="font-weight-bolder font-size-sm">Hold balance</span>
                                                            <span class="font-weight-bolder font-size-h5">
                                                                <span class="text-dark-50 font-weight-bold"></span>{toVND(account.user_information?.hold_balance)}</span>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                                                        <span class="mr-4">
                                                            <i class="flaticon-pie-chart display-4 text-muted font-weight-bold"></i>
                                                        </span>
                                                        <div class="d-flex flex-column text-dark-75">
                                                            <span class="font-weight-bolder font-size-sm">Earn balance</span>
                                                            <span class="font-weight-bolder font-size-h5">
                                                                <span class="text-dark-50 font-weight-bold"></span>{toVND(account.user_information?.earn_balance)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Review reviews={reviews} />
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="card card-custom card-stretch gutter-b">
                                                    <div class="card-header border-0 pt-5">
                                                        <h3 class="card-title align-items-start flex-column">
                                                            <span class="card-label font-weight-bolder text-dark">Dự án của tôi</span>
                                                        </h3>
                                                        <div class="card-toolbar">
                                                            <ul class="nav nav-pills nav-pills-sm nav-dark-75">
                                                                <li class="nav-item">
                                                                    <a class="nav-link py-2 px-4" data-toggle="tab"
                                                                        href="/#kt_tab_pane_11_1">Month</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link py-2 px-4" data-toggle="tab"
                                                                        href="/#kt_tab_pane_11_2">Week</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="btn py-2 px-4 btn-light-primary" data-toggle="tab" href="/#kt_tab_pane_11_3" style={{color: 'blue'}}>Day</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="card-body pt-2 pb-0 mt-n3">
                                                        <div class="tab-content mt-5" id="myTabTables11">
                                                            <div class="tab-pane fade" id="kt_tab_pane_11_1" role="tabpanel"
                                                                aria-labelledby="kt_tab_pane_11_1">
                                                                <div class="table-responsive">
                                                                    <table class="table table-borderless table-vertical-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th class="p-0 w-40px"></th>
                                                                                <th class="p-0 min-w-200px"></th>
                                                                                <th class="p-0 min-w-100px"></th>
                                                                                <th class="p-0 min-w-125px"></th>
                                                                                <th class="p-0 min-w-110px"></th>
                                                                                <th class="p-0 min-w-150px"></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="pl-0 py-4">
                                                                                    <div class="symbol symbol-50 symbol-light">
                                                                                        <span class="symbol-label">
                                                                                            <img src="/images/assets/media/svg/misc/003-puzzle.svg" class="h-50 align-self-center"
                                                                                                alt="" />
                                                                                        </span>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="pl-0">
                                                                                    <a href="/#"
                                                                                        class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Payrol
                                                                                Application</a>
                                                                                    <div>
                                                                                        <span
                                                                                            class="font-weight-bolder">Email:</span>
                                                                                        <a class="text-muted font-weight-bold text-hover-primary"
                                                                                            href="/#">company@dev.com</a>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="text-right">
                                                                                    <span
                                                                                        class="text-dark-75 font-weight-bolder d-block font-size-lg">$560,000</span>
                                                                                    <span
                                                                                        class="text-muted font-weight-bold">Paid</span>
                                                                                </td>
                                                                                <td class="text-right">
                                                                                    <span
                                                                                        class="text-muted font-weight-500">Laravel,
                                                                                Metronic</span>
                                                                                </td>
                                                                                <td class="text-right">
                                                                                    <span
                                                                                        class="label label-lg label-light-success label-inline">Success</span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane fade" id="kt_tab_pane_11_2" role="tabpanel"
                                                                aria-labelledby="kt_tab_pane_11_2">
                                                                <div class="table-responsive">
                                                                    <table class="table table-borderless table-vertical-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th class="p-0 w-40px"></th>
                                                                                <th class="p-0 min-w-200px"></th>
                                                                                <th class="p-0 min-w-100px"></th>
                                                                                <th class="p-0 min-w-125px"></th>
                                                                                <th class="p-0 min-w-110px"></th>
                                                                                <th class="p-0 min-w-150px"></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>

                                                                            <tr>
                                                                                <td class="pl-0 py-4">
                                                                                    <div class="symbol symbol-50 symbol-light">
                                                                                        <span class="symbol-label">
                                                                                            <img src="/images/assets/media/svg/misc/003-puzzle.svg"
                                                                                                class="h-50 align-self-center"
                                                                                                alt="" />
                                                                                        </span>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="pl-0">
                                                                                    <a href="/#"
                                                                                        class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Payrol
                                                                                Application</a>
                                                                                    <div>
                                                                                        <span
                                                                                            class="font-weight-bolder">Email:</span>
                                                                                        <a class="text-muted font-weight-bold text-hover-primary"
                                                                                            href="/#">company@dev.com</a>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="text-right">
                                                                                    <span
                                                                                        class="text-dark-75 font-weight-bolder d-block font-size-lg">$560,000</span>
                                                                                    <span
                                                                                        class="text-muted font-weight-bold">Paid</span>
                                                                                </td>
                                                                                <td class="text-right">
                                                                                    <span
                                                                                        class="text-muted font-weight-500">Laravel,
                                                                                Metronic</span>
                                                                                </td>
                                                                                <td class="text-right">
                                                                                    <span
                                                                                        class="label label-lg label-light-success label-inline">Success</span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane fade show active" id="kt_tab_pane_11_3"
                                                                role="tabpanel" aria-labelledby="kt_tab_pane_11_3">
                                                                <div class="table-responsive">
                                                                    <table class="table table-borderless table-vertical-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th class="p-0 w-40px"></th>
                                                                                <th class="p-0 min-w-200px"></th>
                                                                                <th class="p-0 min-w-100px"></th>
                                                                                <th class="p-0 min-w-125px"></th>
                                                                                <th class="p-0 min-w-110px"></th>
                                                                                <th class="p-0 min-w-150px"></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {/* List jobs here */}
                                                                            {
                                                                                [...eJobs, ...fJobs].map(job => (
                                                                            <tr key={job.id}>
                                                                                <td class="pl-0 py-4">
                                                                                    <div class="symbol symbol-50 symbol-light mr-1">
                                                                                        <span class="symbol-label">
                                                                                            <img src="/images/assets/media/svg/misc/006-plurk.svg"
                                                                                                class="h-50 align-self-center"
                                                                                                alt="" />
                                                                                        </span>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="pl-0">
                                                                                    <a href="/#"
                                                                                        class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">{job.title}</a>
                                                                                    <div>
                                                                                        <span
                                                                                            class="font-weight-bolder">Email:</span>
                                                                                        <a class="text-muted font-weight-bold text-hover-primary"
                                                                                            href="/#">{" " + job.employer_detail?.email}</a>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="text-right">
                                                                                    <span
                                                                                        class="text-dark-75 font-weight-bolder d-block font-size-lg">{job.expect_balance}</span>
                                                                                    <span
                                                                                        class="text-muted font-weight-bold">Paid</span>
                                                                                </td>
                                                                                <td class="text-right">
                                                                                    <span
                                                                                        class="text-muted font-weight-500">ReactJs,
                                                                                HTML</span>
                                                                                </td>
                                                                                <td class="text-right">
                                                                                    <span
                                                                                        class="label label-lg label-light-primary label-inline">{map_status[job.status]}</span>
                                                                                </td>
                                                                            </tr>
                                                                        ))
                                                                    }
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
                                <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                                    <div class="text-dark order-2 order-md-1"></div>
                                    <div class="nav nav-dark order-1 order-md-2">
                                        <a href="http://keenthemes.com/metronic" target="_blank" rel="noreferrer" class="nav-link pr-3 pl-0">About</a>
                                        <a href="http://keenthemes.com/metronic" target="_blank" rel="noreferrer" class="nav-link px-3">Team</a>
                                        <a href="http://keenthemes.com/metronic" target="_blank" rel="noreferrer" class="nav-link pl-3 pr-0">Contact</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div> 
            </body>
        </html> : <Redirect to="/" />
    );
};

export default Profile;