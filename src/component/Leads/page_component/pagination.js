import React,{ useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './pagination.css';

export default function Pagination (){

   return (
    <div className="container-fluid">
    <div className="row mb-2">
    <div className="col-sm-12 d-flex justify-content-between align-items-center">
        <span className="mb-0 pl-3">Total records 2</span>
        <span className="radiusCircle fL mT8Imp"></span>
        <div className="tablepagination">
            <label className="pagination-s1">
            <select className="form-control" id="exampleFormControlSelect1">
                <option>10 Records Per Page</option>
                <option>20 Records Per Page</option>
                <option>30 Records Per Page</option>
                <option>40 Records Per Page</option>
                <option>50 Records Per Page</option>
                </select>
            </label>

            <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                <ul className="pagination">

                    <li className="paginate_button"><a href="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0">1</a></li>
                    <span>-</span>
                    <li className="paginate_button"><a href="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0">2</a></li>


                    <li className="paginate_button viousIcons" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0"><i className="fa fa-angle-left"></i></a></li>

                    <li className="paginate_button viousIcons disabled" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx="4" tabindex="0"><i className="fa fa-angle-right"></i></a></li>

                </ul>
            </div>
        </div>
    </div>
</div>
</div>
   )
}