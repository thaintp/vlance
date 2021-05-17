const Review = ({ reviews }) => {
    return (
        <div class="row">
            <div class="col-lg-12 col-xxl-12">
                <div class="card card-custom card-stretch gutter-b">
                    <div class="card-header border-0 py-5">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label font-weight-bolder text-dark">Agents Stats</span>
                            <span class="text-muted mt-3 font-weight-bold font-size-sm">More than 400+ new members</span>
                        </h3>
                        <div class="card-toolbar">
                            <a href="/#" class="btn btn-light-info font-weight-bolder font-size-sm mr-3">New Arrivals</a>
                            <a href="/#" class="btn btn-light-danger font-weight-bolder font-size-sm">Create</a>
                        </div>
                    </div>
                    <div class="card-body pt-0 pb-3">
                        <div class="tab-content">
                            <div class="table-responsive">
                                <table class="table table-head-custom table-vertical-center table-head-bg table-borderless">
                                    <thead>
                                        <tr class="text-left">
                                            <th style={{"min-width": "250px"}} class="pl-7">
                                                <span class="text-dark-75">products</span>
                                            </th>
                                            <th style={{"min-width": "120px"}}>earnings</th>
                                            <th style={{"min-width": "100px"}}>comission</th>
                                            <th style={{"min-width": "100px"}}>company</th>
                                            <th style={{"min-width": "100px"}}>rating</th>
                                            <th style={{"min-width": "100px"}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reviews?.map(review => {

                                        <tr key={review.id}>
                                            <td class="pl-0 py-8">
                                                <div class="d-flex align-items-center">
                                                    <div class="symbol symbol-50 symbol-light mr-4">
                                                        <span class="symbol-label">
                                                            <img src="/images/assets/media/svg/avatars/001-boy.svg" class="h-75 align-self-end" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <a href="/#" class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Brad Simmons</a>
                                                        <span class="text-muted font-weight-bold d-block">HTML, JS, ReactJS</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span class="text-dark-75 font-weight-bolder d-block font-size-lg">$8,000,000</span>
                                                <span class="text-muted font-weight-bold">In Proccess</span>
                                            </td>
                                            <td>
                                                <span class="text-dark-75 font-weight-bolder d-block font-size-lg">$520</span>
                                                <span class="text-muted font-weight-bold">Paid</span>
                                            </td>
                                            <td>
                                                <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Intertico</span>
                                                <span class="text-muted font-weight-bold">Web, UI/UX Design</span>
                                            </td>
                                            <td>
                                                <img src="/images/assets/media/logos/stars.png" alt="img" style={{"width": "5rem"}} />
                                                <span class="text-muted font-weight-bold d-block">Best Rated</span>
                                            </td>
                                            <td class="pr-0 text-right">
                                                <a href="/#" class="btn btn-light-success font-weight-bolder font-size-sm">View Offer</a>
                                            </td>
                                        </tr>
                                                                                    })
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