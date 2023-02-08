import React from "react";
import { Link } from "react-router-dom";
import Header from "../include/header";
import Footer from "../include/footer";

export default function dashbord() {

    return (
        <div>
            <Header />
            <div className="container-fluid  bg-img p-0">
                <Dashbord_Lavel1 />
                <Dashbord_Lavel2 />
                <Dashbord_Lavel3 />

            </div>
            <Footer />

        </div>
    )

}

function Dashbord_Lavel1() {

    return (

        <div className="row  mt-4 ml-left">
            <div className="dashboard-header">
                <div className="v-avatar is-large"><img className="avatar" src="../images/icon/vuero-1.svg" alt="" /></div>
                <div className="start">
                    <h3>Welcome back, Vert-Age </h3>
                    <p>We're very happy to see you again on your personal dashboard.</p>
                </div>
              
            </div>       </div>

    )
}

function Dashbord_Lavel2() {

    return (

        <div className="row  mt-4 ml-left">

            <div className="col-md">
                <div className="ecommerce-card">
                    <div className="card">

                        <div className="card-body">
                            <div className="card-heading">
                                <div className="d-flex justify-content-between">
                                    <p className="card-title mg-b-15">My Open Deals</p>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4 col col-sm-4 col-xs-4">
                                    <div className="ht-50 wd-50 bg-pink-transparent brround text-center">
                                        <Link href="#" data-toggle="modal" data-target="#status" className="status_total" id="total">
                                            <img src="http://helpdesk.letchats.com/css/assets/img/svgicons/offer.png" className="ht-45 ht-45" alt="revenue" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-md-8 col col-sm-8 col-xs-8 my-auto">
                                    <div className="float-right text-right tx-20 font-weight-bold">
                                        <span className="totalticket"><a href="#" data-toggle="modal"
                                            data-target="#status" id="total" className="status_total">1</a></span>

                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            <div className="col-md">
                <div className="ecommerce-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-heading">
                                <div className="d-flex justify-content-between">
                                    <p className="card-title mg-b-15">My Untouched Deals</p>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4 col col-sm-4 col-xs-4">
                                    <div className="ht-50 wd-50 bg-warning-transparent brround text-center">
                                        <span className="Holdticketimg">
                                            <Link href="#" data-toggle="modal" data-target="#status" className="status_total" id="total">
                                                <img src="http://helpdesk.letchats.com/css/assets/img/svgicons/price.png" className="ht-45 ht-45" alt="revenue" />
                                            </Link></span>

                                    </div>
                                </div>

                                <div className="col-md-8 col col-sm-8 col-xs-8 my-auto">
                                    <div className="float-right text-right tx-20 font-weight-bold">
                                        <span className="Holdticket"><a href="#" data-toggle="modal"
                                            data-target="#Holdticket" className="status_hold" id="New">2</a></span>


                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md">
                <div className="ecommerce-card">
                    <div className="card">

                        <div className="card-body">
                            <div className="card-heading">
                                <div className="d-flex justify-content-between">
                                    <p className="card-title mg-b-15">My Calls Today</p>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4 col col-sm-4 col-xs-4">
                                    <div className="ht-50 wd-50 bg-pink-transparent brround text-center">
                                        <span className="openticketimg">
                                            <Link href="#" data-toggle="modal" data-target="#status" className="status_total" id="total">
                                                <img src="http://helpdesk.letchats.com/css/assets/img/svgicons/sales.png" className="ht-45 ht-45" alt="revenue" />
                                            </Link>

                                        </span>

                                    </div>
                                </div>

                                <div className="col-md-8 col col-sm-8 col-xs-8 my-auto ">
                                    <div className="float-right text-right tx-20 font-weight-bold">
                                        <span className="openticket"><a href="#" data-toggle="modal"
                                            data-target="#openticket" className="status_open" id="Open">3</a></span>

                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            <div className="col-md">
                <div className="ecommerce-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-heading">
                                <div className="d-flex justify-content-between">
                                    <p className="card-title mg-b-15">My Leads</p>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4 col col-sm-4 col-xs-4">
                                    <div className="ht-50 wd-50 bg-warning-transparent brround text-center">
                                        <span className="Workingticketimg">
                                            <Link href="#" data-toggle="modal" data-target="#status" className="status_total" id="total">
                                                <img src="http://helpdesk.letchats.com/css/assets/img/svgicons/working_ticket.png" className="ht-45 ht-45" alt="revenue" />
                                            </Link> </span>

                                    </div>
                                </div>

                                <div className="col-md-8 col col-sm-8 col-xs-8 my-auto ">
                                    <div className="float-right text-right tx-20 font-weight-bold">
                                        <span className="openticket"><a href="#" data-toggle="modal"
                                            data-target="#openticket" className="status_open" id="Open">4</a></span>

                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}



function Dashbord_Lavel3() {

    return (



        <div className="row mt-4 ml-left">
            <div className="col-lg-6 col-md-6 margin-30px-bottom xs-margin-20px-bottom">
                <div className="services-block-four">
                    <p>My Open Tasks</p>
                    <div className="box">
                        <span className="noDataImg"></span>
                        <p>No Content</p>
                    </div>

                </div>
            </div>
            <div className="col-lg-6 col-md-6 margin-30px-bottom xs-margin-20px-bottom">
                <div className="services-block-four">
                    <p>My Meetings</p>
                    <div className="box">
                        <span className="noDataImg"></span>
                        <p>No Content</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 margin-30px-bottom xs-margin-20px-bottom">
                <div className="services-block-four">
                    <p>Today's Leads</p>
                    <div className="box">
                        <span className="noDataImg"></span>
                        <p>No Content</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 sm-margin-30px-bottom xs-margin-20px-bottom">
                <div className="services-block-four">
                    <p>My Deal's Closing This Month</p>
                    <div className="box">
                        <span className="noDataImg"></span>
                        <p>No Content</p>
                    </div>
                </div>
            </div>
        </div>
    )


}