import UserService from 'services/user';
import {useState, useEffect } from 'react';
import { group } from 'utils/array'
import { Link } from 'react-router-dom'

const ListFreelancer = () =>{
	const [freelancers, setFreelancers] = useState([]);

	useEffect(() => {
		UserService.get().then(data => setFreelancers(data?.data)).catch(err => console.error(err));
	}, []);

	const messageTo = (freelancer_id) => {
		console.log(`Message to freelancer_id: ${freelancer_id}`);
	}

    return (
<html lang="en">
	<head>
        <base href="../../../"/>
		<meta charset="utf-8" />
		<title>List - Columns | Keenthemes</title>
		<meta name="description" content="Contacts columns listing" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<link rel="canonical" href="https://keenthemes.com/metronic" />
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
		<link href="/images/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
		<link href="/images/assets/plugins/custom/prismjs/prismjs.bundle.css" rel="stylesheet" type="text/css" />
		<link href="/images/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
		<link rel="shortcut icon" href="/images/assets/media/logos/favicon.ico" />
	</head>
	<body id="kt_body" class="header-mobile-fixed subheader-enabled aside-enabled aside-fixed aside-secondary-enabled page-loading">
		<div class="d-flex flex-column flex-root">
			<div class="d-flex flex-row flex-column-fluid page">
				<div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<div class="d-flex flex-column-fluid">
							<div class="container">
								<div class="d-flex flex-row">
									<div class="flex-row-lg-fluid ml-lg-8">
										{
											group(freelancers, 3).map((gr, iGr) => (
												<div className="row" key={iGr}>
													{
														gr.map((freelancer, iFreelancer) =>
														(
															<div class="col-xl-4" key={iFreelancer}>
																
																<div class="card card-custom gutter-b card-stretch">
																	
																	<div class="card-body pt-4 d-flex flex-column justify-content-between">
																		
																		<div class="d-flex justify-content-end">
																			<div class="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
																				<a href="/#" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown"  aria-expanded="false">
																					<i class="ki ki-bold-more-hor"></i>
																				</a>
																				<div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
																					
																					<ul class="navi navi-hover">
																						<li class="navi-header font-weight-bold py-4">
																							<span class="font-size-lg">Choose Label:</span>
																							<i class="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
																						</li>
																						<li class="navi-separator mb-3 opacity-70"></li>
																						<li class="navi-item">
																							<a href="/#" class="navi-link">
																								<span class="navi-text">
																									<span class="label label-xl label-inline label-light-success">Customer</span>
																								</span>
																							</a>
																						</li>
																						<li class="navi-item">
																							<a href="/#" class="navi-link">
																								<span class="navi-text">
																									<span class="label label-xl label-inline label-light-danger">Partner</span>
																								</span>
																							</a>
																						</li>
																						<li class="navi-item">
																							<a href="/#" class="navi-link">
																								<span class="navi-text">
																									<span class="label label-xl label-inline label-light-warning">Suplier</span>
																								</span>
																							</a>
																						</li>
																						<li class="navi-item">
																							<a href="/#" class="navi-link">
																								<span class="navi-text">
																									<span class="label label-xl label-inline label-light-primary">Member</span>
																								</span>
																							</a>
																						</li>
																						<li class="navi-item">
																							<a href="/#" class="navi-link">
																								<span class="navi-text">
																									<span class="label label-xl label-inline label-light-dark">Staff</span>
																								</span>
																							</a>
																						</li>
																						<li class="navi-separator mt-3 opacity-70"></li>
																						<li class="navi-footer py-4">
																							<a class="btn btn-clean font-weight-bold btn-sm" href="/#">
																							<i class="ki ki-plus icon-sm"></i>Add new</a>
																						</li>
																					</ul>
																					
																				</div>
																			</div>
																		</div>
																		
																		
																		<div class="d-flex align-items-center mb-7">
																			
																			<div class="flex-shrink-0 mr-4 mt-lg-0 mt-3">
																				<div class="symbol symbol-lg-75">
																					<img alt="Pic" src="/images/assets/media/users/300_2.jpg" />
																				</div>
																				<div class="symbol symbol-lg-75 symbol-primary d-none">
																					<span class="font-size-h3 font-weight-boldest">JM</span>
																				</div>
																			</div>
																			
																			
																			<div class="d-flex flex-column">
																				<Link to={`/users/${freelancer.id}`} class="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{freelancer.user_information?.fullname}</Link>
																				<span class="text-muted font-weight-bold">{freelancer.user_information?.bio}</span>
																			</div>
																			
																		</div>
																		
																		
																		<p class="mb-7">{freelancer.user_information?.experience}</p>
																		
																		
																		<div class="mb-7">
																			<div class="d-flex justify-content-between align-items-center">
																				<span class="text-dark-75 font-weight-bolder mr-2">Email:</span>
																				<a href="/#" class="text-muted text-hover-primary">{freelancer.email}</a>
																			</div>
																			<div class="d-flex justify-content-between align-items-cente my-1">
																				<span class="text-dark-75 font-weight-bolder mr-2">Phone:</span>
																				<a href="/#" class="text-muted text-hover-primary">{freelancer.user_information?.phone}</a>
																			</div>
																			<div class="d-flex justify-content-between align-items-center">
																				<span class="text-dark-75 font-weight-bolder mr-2">Location:</span>
																				<span class="text-muted font-weight-bold">{freelancer.user_information?.address}</span>
																			</div>
																		</div>
																		
																		<btn class="btn btn-block btn-sm btn-light-success font-weight-bolder text-uppercase py-4" onClick={() => messageTo(freelancer.id)}>Contact</btn>
																	</div>
																	
																</div>
																
															</div>
														)
														)
													}
												</div>
											))
										}
										<div class="card card-custom">
											<div class="card-body py-7">
												<div class="d-flex justify-content-between align-items-center flex-wrap">
													<div class="d-flex flex-wrap mr-3">
														<a href="/#" class="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
															<i class="ki ki-bold-double-arrow-back icon-xs"></i>
														</a>
														<a href="/#" class="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
															<i class="ki ki-bold-arrow-back icon-xs"></i>
														</a>
														<a href="/#" class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">...</a>
														<a href="/#" class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">23</a>
														<a href="/#" class="btn btn-icon btn-sm border-0 btn-hover-primary active mr-2 my-1">24</a>
														<a href="/#" class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">25</a>
														<a href="/#" class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">26</a>
														<a href="/#" class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">27</a>
														<a href="/#" class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">28</a>
														<a href="/#" class="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">...</a>
														<a href="/#" class="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
															<i class="ki ki-bold-arrow-next icon-xs"></i>
														</a>
														<a href="/#" class="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
															<i class="ki ki-bold-double-arrow-next icon-xs"></i>
														</a>
													</div>
													<div class="d-flex align-items-center">
														<select class="form-control form-control-sm text-primary font-weight-bold mr-4 border-0 bg-light-primary" style={{width: "75px;"}}>
															<option value="10">10</option>
															<option value="20">20</option>
															<option value="30">30</option>
															<option value="50">50</option>
															<option value="100">100</option>
														</select>
														<span class="text-muted">Displaying 10 of 230 records</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
						<div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
							<div class="text-dark order-2 order-md-1">
								<span class="text-muted font-weight-bold mr-2">2021©</span>
							</div>
							<div class="nav nav-dark order-1 order-md-2">
								<a href="/#"  class="nav-link pr-3 pl-0">About</a>
								<a href="/#"  class="nav-link px-3">Team</a>
								<a href="/#"  class="nav-link pl-3 pr-0">Contact</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
	
</html>
    )
}

export default ListFreelancer