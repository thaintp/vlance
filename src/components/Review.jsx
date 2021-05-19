import jobType from 'utils/jobType'
import { toVND } from 'utils/number'
import Rating from 'react-rating';
import { Link } from 'react-router-dom'
const Review = ({ reviews }) => {
    return (
        <div class="row">
            <div class="col-lg-12 col-xxl-12">
                <div class="card card-custom card-stretch gutter-b">
                    <div class="card-header border-0 py-5">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label font-weight-bolder text-dark">Reviews</span>
                            <span class="text-muted mt-3 font-weight-bold font-size-sm">More than {reviews.length}+ reviews</span>
                        </h3>
                        <div class="card-toolbar">
                            <Link to="/job-manager/employer" class="btn btn-light-info font-weight-bolder font-size-sm">New Review</Link>
                            {/* <a href="/#" class="btn btn-light-danger font-weight-bolder font-size-sm">New Review</a> */}
                        </div>
                    </div>
                    <div class="card-body pt-0 pb-3">
                        <div class="tab-content">
                            <div class="table-responsive">
                                <table class="table table-head-custom table-vertical-center table-head-bg table-borderless">
                                    <thead>
                                        <tr class="text-left">
                                            <th style={{"min-width": "250px"}} class="pl-7">
                                                <span class="text-dark-75">job</span>
                                            </th>
                                            <th style={{"min-width": "120px"}}>user</th>
                                            <th style={{"min-width": "100px"}}>balance</th>
                                            <th style={{"min-width": "100px"}}>message</th>
                                            <th style={{"min-width": "100px"}}>rating</th>
                                            <th style={{"min-width": "100px"}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reviews?.map(review => (

                                        <tr key={review.id}>
                                            <td class="pl-7 py-8">
                                                <div class="d-flex align-items-center">
                                                    {/* <div class="symbol symbol-50 symbol-light mr-4">
                                                        <span class="symbol-label">
                                                            <img src="/images/assets/media/svg/avatars/001-boy.svg" class="h-75 align-self-end" alt="img" />
                                                        </span>
                                                    </div> */}
                                                    <div>
                                                        <a href="/#" class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">{review.job_detail?.title}</a>
                                                        <span class="text-muted font-weight-bold d-block">{jobType[review.job_detail?.job_type]}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span class="text-dark-75 font-weight-bolder d-block font-size-lg">{review.job_detail?.employer_id === review.user_id ? review.job_detail?.freelancer_detail?.user_information?.fullname : review.job_detail?.employer_detail?.user_information?.fullname}</span>
                                                <span class="text-muted font-weight-bold">{review.job_detail?.employer_id === review.user_id ? "Self post" : "Freelancer"}</span>
                                            </td>
                                            <td>
                                                <span class="text-dark-75 font-weight-bolder d-block font-size-lg">{toVND(review.job_detail?.freelancer_applicant?.balance)}</span>
                                                <span class="text-muted font-weight-bold">Paid</span>
                                            </td>
                                            <td>
                                                {/* <span class="text-dark-75 font-weight-bolder d-block font-size-lg">{review.message}</span> */}
                                                <span class="text-muted font-weight-bold">{review.message}</span>
                                            </td>
                                            <td>
                                                {/* <img src="/images/assets/media/logos/stars.png" alt="img" style={{"width": "5rem"}} /> */}
                                                <Rating
                                                    emptySymbol={
                                                    <img
                                                        src="/images/star-empty.png"
                                                        className="offer-item__rating-icon"
                                                        alt=""
                                                    />
                                                    }
                                                    fullSymbol={
                                                    <img
                                                        src="/images/star-full.png"
                                                        className="offer-item__rating-icon"
                                                        alt=""
                                                    />
                                                    }
                                                    readonly
                                                    initialRating={review.rate}
                                                />
                                                {/* <span class="text-muted font-weight-bold d-block">Best Rated</span> */}
                                            </td>
                                            <td class="pr-0 text-right">
                                                <Link to="#/" class="btn btn-light-success font-weight-bolder font-size-sm">View Review</Link>
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
    )
}

export default Review