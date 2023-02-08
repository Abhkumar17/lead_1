import React,{ useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './Lead_update.css';
export default function Lead_update (){

   return (
        <div className="container-fluid">
   <div className="row mb-2 py-2 bg-white border-bottom">
        <div className="col-sm-6 d-flex justify-content-start align-items-center">
        <div className="buttons_btn d-flex justify-content-start align-items-center">

            <Link to="#"  className="" ><button type="button" className="btn btn-primary btnhide" data-toggle="modal" data-target="#myModalnewtask">
                    Create Task</button></Link>
            <Link to="#" className="" ><button type="button" className="btn btn-primary btnhide" data-toggle="modal" data-target="#myModalup">
                    Mass Update</button></Link>

            <Link to="#"  className="" ><button type="button" className="btn btn-danger btnhide" data-toggle="modal" data-target="#myModaldele">
                    Delete</button></Link>
            </div>
       </div>
    </div>
    </div>
   )

}